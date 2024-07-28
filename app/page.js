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
  return (
      <div className="scroll-smooth">
        <Slider />
        <Slot />
        <Courses />
        <About />
      </div>
  );
}
