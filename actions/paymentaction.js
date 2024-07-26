"use server";
import Razorpay from "razorpay";
import payment from "@/models/payment";
import connectToDatabase from "@/lib/connection";
import { v4 as uuidv4 } from "uuid";

export default async function initiate( user, amt, category, CourseName ) {
    console.log(user,amt,category,CourseName)
  var instance = new Razorpay({
    key_id: process.env.RAZORPAY_ID,
    key_secret: process.env.RAZORPAY_SECRET,
  });

  let res = await instance.orders.create({
    amount: 50000,
    currency: "INR",
    receipt: uuidv4(),
    notes: {
      category,
      CourseName,
    },
  });
  await connectToDatabase();
  await payment.create({
    user: user,
    amount: amt,
    receipt: res.receipt,
    notes: res.notes,
    status: false,
  });
//   console.log(res)
  return res;
}
