import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/connection";
import user from "@/models/user";
import bycrypt from "bcrypt"
import jwt  from'jsonwebtoken'


export async function POST(request) {
    try {
        await connectToDatabase()
        let { email, password } = await request.json()
        let User = await user.findOne({ email })
        if (!User) return NextResponse.json({ success: false, message: "Invalid credentials" })
        else {
            let bool = await bycrypt.compare(password, User.password)
            if (!bool)
                return NextResponse.json({ success: false, message: "Invalid credentials" })
            else{
                let token= jwt.sign({username:User.username,email:User.email},process.env.SECRET,{expiresIn:"2h"})
                return NextResponse.json({success:true,token:token,message:"Logged In successfully"},{status:200})
            }
        }
    } catch (e) {
        console.log(e)
        return NextResponse.json({ message: "Internal server error" }, { status: 500 })
    }
}