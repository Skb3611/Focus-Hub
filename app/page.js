"use client";

import Slider from "@/components/Slider";
import About from "@/components/About";
import Slot from "@/components/Slot";
import Courses from "@/components/Courses";
import { useSearchParams } from "next/navigation";
import { host, Paymentsuccess } from "./api/ApiRoutes";
import jwt from 'jsonwebtoken';
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Suspense, useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  useEffect(() => {
    const handlePaymentSuccess = async () => {
      const payment = searchParams.get("payment");
      if (payment) {
        const token = JSON.parse(localStorage.getItem("token"));
        const decoded = jwt.decode(token);
        const response = await fetch(Paymentsuccess, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: decoded.email }),
        });
        const result = await response.json();
        
        if (result.success) {
          toast.success(result.message, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          router.push(host);
        }
      }
    };

    handlePaymentSuccess();
  }, [searchParams, router]);

  return (
    <Suspense fallback={<div>... </div>}>
      <div className="scroll-smooth">
        <Slider />
        <Slot />
        <Courses />
        <About />
      </div>
    </Suspense>
  );
}
