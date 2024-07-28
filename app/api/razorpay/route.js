import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import { host } from "../ApiRoutes";
import  payment  from "@/models/payment";  // Keep this import at the top if it's a critical path

export async function POST(request) {
  try {
    let body = await request.formData();
    body = Object.fromEntries(body);

    // Use Promise.all for concurrent execution of asynchronous tasks
    const [p, verify] = await Promise.all([
      payment.findOne({ oid: body.razorpay_order_id }),
      (async () => {
        // Validate the payment verification
        return validatePaymentVerification(
          {
            order_id: body.razorpay_order_id,
            payment_id: body.razorpay_payment_id,
          },
          body.razorpay_signature,
          process.env.RAZORPAY_SECRET
        );
      })(),
    ]);

    if (!p) {
      return NextResponse.json({ success: false, message: "No payment found" });
    }

    if (!verify) {
      return NextResponse.json({ success: false, message: "Invalid Id's" });
    }

    const updatedPayment = await payment.findOneAndUpdate(
      { oid: body.razorpay_order_id },
      { status: true },
      { new: true }
    );

    return NextResponse.redirect(
      `${host}/courses/${p.category}/${p.CourseName}?payment=true`
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
