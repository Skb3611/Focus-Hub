import payment from "@/models/payment";
import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import { host } from "../ApiRoutes";

export async function POST(request) {
  try {
    let body = await request.formData();
    body = Object.fromEntries(body);

 
    const updatedpayment = await payment.findOneAndUpdate(
      { oid: body.razorpay_order_id },
      { status: true }
    );
    return NextResponse.redirect(
      `${host}/courses/${updatedpayment.category}/${updatedpayment.CourseName}?payment=true`
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
