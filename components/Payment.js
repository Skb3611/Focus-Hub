"use client";
import React from "react";
import Script from "next/script";
import initiate from "@/actions/paymentaction";
import { toast } from "react-toastify";
import jwt from "jsonwebtoken";
import { host } from "@/app/api/ApiRoutes";
import { useRouter } from "next/navigation";


const Payment = ({amt, category, CourseName}) => {
  const router=useRouter()
  let toastoptions = {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  };
 

  const pay = async () => {
    let token = JSON.parse(localStorage.getItem("token"));
    if (!token){
      setTimeout(() => {
        router.push("/login")
      }, 700);
      return toast.warning("Login to continue", toastoptions);
    }
    let decoded = jwt.decode(token);
   
    let res = await initiate(decoded.email,decoded.username, amt, category, CourseName);
    var options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_ID, // Enter the Key ID generated from the Dashboard
      amount: amt, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Focus Hub",
      description: "Test Transaction",
      image: "https://focus-hub-xi.vercel.app/favicon.ico",
      order_id: res.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: `${host}/api/razorpay`,
      prefill: {
        name: decoded.username,
        email:decoded.email
      },

      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
  
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
      <button
        className="lg:w-1/3 w-[80%] text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        onClick={() => pay()}
      >
        Buy Course
      </button>
    </>
  );
};

export default Payment;
