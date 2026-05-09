import Experience from "@/components/sections/Experience";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import { Contact } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-background selection:bg-electric-blue/30 selection:text-electric-blue">
      <Hero />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
}
