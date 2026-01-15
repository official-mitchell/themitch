import { Hero } from "@/components/sections/hero";
import { Highlights } from "@/components/sections/highlights";
import { SkillsMap } from "@/components/sections/skills-map";
import { Projects } from "@/components/sections/projects";
import { BlogPreview } from "@/components/sections/blog-preview";
import { getLatestBlogs, getAllContent } from "@/lib/content";

export default function Home() {
  const latestBlogs = getLatestBlogs(3);
  const totalBlogs = getAllContent("blogs").length;

  return (
    <>
      <Hero />
      <Highlights />
      <SkillsMap />
      <Projects />
      <BlogPreview blogs={latestBlogs} totalBlogs={totalBlogs} />
    </>
  );
}
