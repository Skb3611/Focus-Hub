import connectToDatabase from "@/lib/connection";
import user from "@/models/user";
import { mongoose } from "mongoose";
import { NextResponse } from "next/server";
import bycrypt from "bcrypt"
import jwt from 'jsonwebtoken'
export async function POST(request) {
    try {

        await connectToDatabase()
        let { token, password } = await request.json()
        let res= jwt.verify(token,process.env.SECRET)
        if(res){
            
            let id = new mongoose.Types.ObjectId(res.id)
           
            let User = await user.findById(id)
            if (!User) return NextResponse.json({ success: false, error: "Invalid Details" })
            let saltRounds = 10;
            let newPass = await bycrypt.hash(password, saltRounds)
            let NewUser = await user.updateOne({ _id: id }, { $set: { password: newPass } })
            return NextResponse.json({success:true,message:"Password Updated"})
        }
    } catch (error) {
        
        return NextResponse.json({ success: false, message: error.message })
    }
}