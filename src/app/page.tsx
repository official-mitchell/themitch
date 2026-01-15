import { Hero } from "@/components/sections/hero";
import { Highlights } from "@/components/sections/highlights";
import { SkillsMap } from "@/components/sections/skills-map";
import { Projects } from "@/components/sections/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <SkillsMap />
      <Projects />
    </>
  );
}
