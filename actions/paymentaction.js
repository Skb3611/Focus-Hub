"use server";
import Razorpay from "razorpay";
import payment from "@/models/payment";
import connectToDatabase from "@/lib/connection";
import { v4 as uuidv4 } from "uuid";

export default async function initiate(email, user, amt, category, CourseName ) {

  var instance = new Razorpay({
    key_id: process.env.RAZORPAY_ID,
    key_secret: process.env.RAZORPAY_SECRET,
  });

  let res = await instance.orders.create({
    amount: Number.parseInt(amt)*100,
    currency: "INR",
    receipt: uuidv4(),
  });
  await connectToDatabase();
  await payment.create({
    oid:res.id,
    user: user,
    email:email,
    amount: amt,
    receipt: res.receipt,
    CourseName:CourseName,
    category:category,
    status: false,
  });

  return res;
}
