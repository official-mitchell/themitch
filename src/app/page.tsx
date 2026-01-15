import { Hero } from "@/components/sections/hero";
import { Highlights } from "@/components/sections/highlights";
import { SkillsMap } from "@/components/sections/skills-map";
import { Projects } from "@/components/sections/projects";
import { CaseStudiesPreview } from "@/components/sections/case-studies-preview";
import { BlogPreview } from "@/components/sections/blog-preview";
import { Testimonials } from "@/components/sections/testimonials";
import { getLatestBlogs, getAllContent } from "@/lib/content";

export default function Home() {
  const latestBlogs = getLatestBlogs(3);
  const totalBlogs = getAllContent("blogs").length;
  const allCaseStudies = getAllContent("case-studies");
  const totalCaseStudies = allCaseStudies.length;

  return (
    <>
      <Hero />
      <Highlights />
      <SkillsMap />
      <Projects />
      <CaseStudiesPreview caseStudies={allCaseStudies} totalCaseStudies={totalCaseStudies} />
      <BlogPreview blogs={latestBlogs} totalBlogs={totalBlogs} />
      <Testimonials />
    </>
  );
}
