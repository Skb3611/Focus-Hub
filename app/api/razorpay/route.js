import payment from "@/models/payment";
import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import { host } from "../ApiRoutes";
import Receipt from "@/template/Receipt";
import nodemailer from 'nodemailer'
import { render } from '@react-email/components';

export async function POST(request) {
  try {
    let body = await request.formData();
    body = Object.fromEntries(body);  

    let p = await payment.findOne({ oid: body.razorpay_order_id });
    console.log(p)
    if (!p)
      return NextResponse.json({ success: false, message: "No payment found" });

    let verify = validatePaymentVerification(
      {
        order_id: body.razorpay_order_id,
        payment_id: body.razorpay_payment_id,
      },
      body.razorpay_signature,
      process.env.RAZORPAY_SECRET
    );
    if (!verify)
      return NextResponse.json({ success: false, message: "Invalid Id's" });
    const updatedpayment = await payment.findOneAndUpdate(
      { oid: body.razorpay_order_id },      
      { status: true }
    );
    let data=await payment.find({email:updatedpayment.email}).sort({ createdAt: -1 })
    data=data[0]
   
    if(!data)return NextResponse({success:false})
        else{
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: process.env.EMAIL,
              pass: process.env.PASS // Use the App Password here
            },
            tls: {
              rejectUnauthorized: false
            }
          });
          let a={
            orderId:data.oid,
            username:data.user,
            id:data.receipt,
            amount:data.amount,
            status:data.status,
            time:data.updatedAt,
            courseName:data.CourseName,
            courseCategory:data.category
          }
      
          const emailHtml = render(<Receipt receipt={a}/>);
  
          var mailOptions = {
            from: process.env.EMAIL,
            to: updatedpayment.email ,
            subject: 'Thanks for your Purchase ',
            html: emailHtml
                };
      
          let info = await transporter.sendMail(mailOptions);
              }
    return NextResponse.redirect(`${host}`);
  } catch (error) {
    console.log(error)
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
