import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
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

    var mailOptions = {
      from: process.env.EMAIL,
      to: body.email,
      subject: 'Confirmation of Your Session Booking',
      text: `
        Dear ${body.name},

        Thank you for booking a session with us. We are pleased to confirm your appointment as follows:

        Date: ${body.date}
        Time: ${body.time}
        Category: ${body.category}

        If you have any questions or need to make any changes to your booking, please do not hesitate to contact us.

        We look forward to seeing you soon.

        Best regards,
        Focus Hub
        https://focus-hub-xi.vercel.app/`
    };

    let info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    return NextResponse.json({ success: true });

  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false, error: error });
  }
}
