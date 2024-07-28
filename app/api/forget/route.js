import connectToDatabase from "@/lib/connection";
import { NextResponse } from "next/server";
import user from "@/models/user";
import nodemailer from 'nodemailer'
import Forget from "@/template/Forget";
import { render } from "@react-email/components";
import jwt from "jsonwebtoken";
import { host } from "../ApiRoutes";
export async function POST(request){
    try {
        await connectToDatabase()
        let email = await request.json()
        // email=email.slice(1,(email.length-1))
      
        let User= await user.findOne(email)
        if(!User)return NextResponse.json({success:false,message:"No credentials found"})
          let token=jwt.sign({id:User._id},process.env.SECRET,{expiresIn: "5m" })
        
          let link=`${host}/forget/${token}`
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
              const emailHtml = render(<Forget userName={User.username} resetLink={link}/>);
              var mailOptions = {
                from: process.env.EMAIL,
                to: email.email,
                subject: 'Reset Your Password ',
                html: emailHtml
                    };
          
              let info = await transporter.sendMail(mailOptions);
    return NextResponse.json({success:true,token,id:(User._id)})
    } catch (error) {
        
        return NextResponse.json({success:false,message:error.message})
    }
}