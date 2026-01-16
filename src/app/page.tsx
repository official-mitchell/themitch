import { Hero } from "@/components/sections/hero";
import { Highlights } from "@/components/sections/highlights";
import { SkillsMap } from "@/components/sections/skills-map";
import { Projects } from "@/components/sections/projects";
import { CaseStudiesPreview } from "@/components/sections/case-studies-preview";
import { BlogPreview } from "@/components/sections/blog-preview";
import { Testimonials } from "@/components/sections/testimonials";
import { getLatestBlogs, getAllContent } from "@/lib/content";

export default async function Home() {
  let latestBlogs: ReturnType<typeof getLatestBlogs> = [];
  let totalBlogs = 0;
  let allCaseStudies: ReturnType<typeof getAllContent> = [];
  let totalCaseStudies = 0;

  // Temporarily disabled for debugging
  // try {
  //   latestBlogs = getLatestBlogs(3);
  //   const blogs = getAllContent("blogs");
  //   totalBlogs = blogs.length;
  //   allCaseStudies = getAllContent("case-studies");
  //   totalCaseStudies = allCaseStudies.length;
  // } catch (error) {
  //   console.error("Error loading content:", error);
  // }

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
