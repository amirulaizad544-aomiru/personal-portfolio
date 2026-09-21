import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      {/* <About /> */}
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </>
  );
}
