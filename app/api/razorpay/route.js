import payment from "@/models/payment";
import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import { host } from "../ApiRoutes";
import Receipt from "@/template/Receipt";
import nodemailer from 'nodemailer';
import { render } from '@react-email/components';

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

    const updatedPayment = await payment.findOneAndUpdate(
      { oid: body.razorpay_order_id },
      { status: true },
      { new: true }
    );

    if (!updatedPayment) {
      return NextResponse.json({ success: false, message: "Payment update failed" });
    }

    const latestPayment = await payment.findOne({ email: updatedPayment.email }).sort({ createdAt: -1 });

    if (!latestPayment) {
      return NextResponse.json({ success: false, message: "No payment data available" });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS // Use the App Password here
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    const emailData = {
      orderId: latestPayment.oid,
      username: latestPayment.user,
      id: latestPayment.receipt,
      amount: latestPayment.amount,
      status: latestPayment.status,
      time: latestPayment.updatedAt,
      courseName: latestPayment.CourseName,
      courseCategory: latestPayment.category
    };

    const emailHtml = render(<Receipt receipt={emailData} />);

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
