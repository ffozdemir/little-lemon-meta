import About from "@/components/layout/About";
import Hero from "@/components/layout/Hero";
import Highlights from "@/components/layout/Highlights";
import Testimonials from "@/components/layout/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <Testimonials />
      <About/>
    </>
  );
}
