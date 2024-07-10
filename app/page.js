import Image from "next/image";
import Slider from "@/components/Slider";
import About from "@/components/About";
import Slot from "@/components/Slot";

export default function Home() {
  return (
   <div className="scroll-smooth ">
   <Slider/>
   <About/>
   <Slot/>
   </div>
  );
}
