// pages/api/razorpay.js

import { NextResponse } from "next/server";
import payment from "@/models/payment";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import nodemailer from 'nodemailer';
import { render } from '@react-email/components';
import Receipt from "@/template/Receipt";

export async function POST(request) {
  try {
    const body = Object.fromEntries(await request.formData());
    const paymentRecord = await payment.findOne({ oid: body.razorpay_order_id });

    if (!paymentRecord) {
      return NextResponse.json({ success: false, message: "No payment found" });
    }

    const isVerified = validatePaymentVerification(
      {
        order_id: body.razorpay_order_id,
        payment_id: body.razorpay_payment_id,
      },
      body.razorpay_signature,
      process.env.RAZORPAY_SECRET
    );

    if (!isVerified) {
      return NextResponse.json({ success: false, message: "Invalid Id's" });
    }

    const updatedPaymentPromise = payment.findOneAndUpdate(
      { oid: body.razorpay_order_id },
      { status: true },
      { new: true }
    );

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    const emailDataPromise = updatedPaymentPromise.then(updatedPayment => {
      return payment.findOne({ email: updatedPayment.email }).sort({ createdAt: -1 });
    });

    const [updatedPayment, emailData] = await Promise.all([updatedPaymentPromise, emailDataPromise]);

    if (!updatedPayment || !emailData) {
      return NextResponse.json({ success: false, message: "Payment update or email data retrieval failed" });
    }

    const emailHtml = render(<Receipt receipt={{
      orderId: emailData.oid,
      username: emailData.user,
      id: emailData.receipt,
      amount: emailData.amount,
      status: emailData.status,
      time: emailData.updatedAt,
      courseName: emailData.CourseName,
      courseCategory: emailData.category
    }} />);

    const mailOptions = {
      from: process.env.EMAIL,
      to: updatedPayment.email,
      subject: 'Thanks for your Purchase',
      html: emailHtml
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.redirect(`${host}`);
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
