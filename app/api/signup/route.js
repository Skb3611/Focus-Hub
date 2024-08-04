import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/connection";
import user from "@/models/user";
import bycrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(request) {
  try {
    await connectToDatabase();
    const { username, email, password } = await request.json();

    let User = await user.findOne({ email });
    if (User)
      return NextResponse.json({
        success: false,
        message: "User already exists",
      });
    else {
      let saltRounds = 10;
      let hashPass = await bycrypt.hash(password, saltRounds);
      let User = {
        username: username,
        email: email,
        password: hashPass,
      };
      await user.create(User);
      let token = jwt.sign({ username, email }, process.env.SECRET);
      return NextResponse.json(
        { success: true, token: token, message: "Account created" },
        { status: 200 }
      );
    }
  } catch (e) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
