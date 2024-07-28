import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/connection";
import payment from "@/models/payment";
import Receipt from "@/template/Receipt";
import nodemailer from 'nodemailer'
import { render } from '@react-email/components';


export  async function POST(request){
   try {
    await connectToDatabase()
    let {email}=await request.json()
    let data=await payment.find({email:email}).sort({ createdAt: -1 })
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
            to: email ,
            subject: 'Thanks for your Purchase ',
            html: emailHtml
                };
      
          // let info = await transporter.sendMail(mailOptions);
      
        return NextResponse.json({success:true,message:"Check Your mail."})
            }
   } catch (error) {
    return NextResponse.json({success:false,message:error.message})
   }

}