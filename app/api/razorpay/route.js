import payment from "@/models/payment";
import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import { host } from "../ApiRoutes";

export async function POST(request) {
  try {
    let body = await request.formData();
    body = Object.fromEntries(body);

    let p = await payment.findOne({ oid: body.razorpay_order_id });
    if (!p)
      return NextResponse.json({ success: false, message: "No payment found" });

    let verify = validatePaymentVerification(
      {
        order_id: body.razorpay_order_id,
        payment_id: body.razorpay_payment_id,
      },
      body.razorpay_signature,
      process.env.RAZORPAY_SECRET
    );
    if (!verify)
      return NextResponse.json({ success: false, message: "Invalid Id's" });
    const updatedpayment = await payment.findOneAndUpdate(
      { oid: body.razorpay_order_id },
      { status: true }
    );
    return NextResponse.redirect(`${host}?payment=true`);
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Internal server error",
    });
  }
}
