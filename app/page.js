
import Slider from "@/components/Slider";
import About from "@/components/About";
import Slot from "@/components/Slot";
import Courses from "@/components/Courses";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
      <div className="scroll-smooth">
        <Slider />
        <Slot />
        <Courses />
        <About />
        <Gallery/>
      </div>
  );
}
