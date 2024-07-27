import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import enquiry from '@/models/enquiry';
import connectToDatabase from '@/lib/connection';
import Enquiry from '@/template/Enquiry'
import { render } from '@react-email/components';
export async function POST(request) {
  try {
    await connectToDatabase()
    let body = await request.json();
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
const EmailHtml= render(<Enquiry body={body} />)
    var mailOptions = {
      from: process.env.EMAIL,
      to: body.email,
      subject: 'Confirmation of Your Session Booking',
      html: EmailHtml
    }

    let info = await transporter.sendMail(mailOptions);

    console.log('Email sent: ' + info.response);
    await enquiry.create(body)
    return NextResponse.json({ success: true });

  } catch (error) {
 
    return NextResponse.json({ success: false, error: error });
  }
}
