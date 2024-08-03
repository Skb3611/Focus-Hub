import { NextResponse } from "next/server";
import response from "@/models/response";
import connectToDatabase from "@/lib/connection";
import { render } from '@react-email/components';
import Response from "@/template/Response";
import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    await connectToDatabase()
    let body = await request.json()
    console.log(body)
    await response.create(body)
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
    const emailHtml = render(<Response userName={body.name} doubt={body.message}/>);
    var mailOptions = {
      from: process.env.EMAIL,
      to: body.email,
      subject: 'Thanks for your Response ',
      html: emailHtml
          };

    let info = await transporter.sendMail(mailOptions);

    console.log('Email sent: ' + info.response);
    return NextResponse.json({ success: true })
  }
  catch (error) {
    console.log(error)
    return NextResponse.json({ success: false,error:error.message })
  }
}
