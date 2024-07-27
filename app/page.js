"use client"

import Slider from "@/components/Slider";
import About from "@/components/About";
import Slot from "@/components/Slot";
import Courses from "@/components/Courses";
import { useSearchParams } from "next/navigation";
import { host, Paymentsuccess } from "./api/ApiRoutes";
import jwt from 'jsonwebtoken'
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
export default function Home() {
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
  let a = useSearchParams()
  if(a.size>0){
    a= a.get("payment")
  
    if(a){
      let token = JSON.parse(localStorage.getItem("token"));
      let decoded = jwt.decode(token);
      let func=async () => {
        let a=await fetch(Paymentsuccess,{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({email:decoded.email})
        })
         a=await a.json()
        
         if(a.success){
          toast.success(a.message,toastoptions)
          router.push(host)
         }
      }
      func()
    }
  }

  
  return (
    <Suspense fallback={<></>}>
   <div className="scroll-smooth ">
   <Slider/>
   <Slot/>
   <Courses/>
   <About/>
   </div>
    </Suspense>
  );
}
