// Updated: Transformed from Figma Make DarkProjects component to Next.js App Router structure
// Renamed from DarkProjects to Projects
// Updated: Made section wider with horizontal card layout (text left, image right) and mapped to public assets
// Updated: Added unique radial gradients with texture for each project card
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getAllContent } from "@/lib/content";

// Map project slugs to public asset paths
const projectImageMap: Record<string, string> = {
  dexible: "/projects-dexible-preview.jpg",
  buidlhub: "/projects-buidlhub-preview.jpg",
  coinscore: "/projects-coinscore-preview.jpg",
  cryptopets: "/projects-cryptopets.jpg",
  atlas: "/projects-atlas.jpg",
  superform: "/projects-superform.jpg",
  thorium: "/projects-thorium-preview.jpg",
};

// Map project slugs to year ranges
const projectYearMap: Record<string, string> = {
  dexible: "2020 - 2023",
  buidlhub: "2019 - 2020",
  cryptopets: "2017 - 2018",
  coinscore: "2017",
};

// Desired project order
const projectOrder = ["dexible", "buidlhub", "cryptopets", "coinscore"];

function getProjectImage(slug: string, fallbackImage?: string): string {
  return projectImageMap[slug] || fallbackImage || "";
}

function getProjectYear(slug: string): string {
  return projectYearMap[slug] || "";
}

// Gradient configurations with texture for each project card
const gradientStyles = [
  {
    // Mint green gradient with texture
    gradient:
      "radial-gradient(circle at top right, rgba(152, 251, 152, 0.18) 0%, rgba(127, 255, 212, 0.12) 35%, transparent 65%)",
    texture: `
      radial-gradient(circle at 30% 30%, rgba(152, 251, 152, 0.1) 0%, transparent 40%),
      radial-gradient(circle at 70% 70%, rgba(127, 255, 212, 0.08) 0%, transparent 40%),
      radial-gradient(circle at 50% 50%, rgba(152, 251, 152, 0.05) 0%, transparent 60%),
      repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(152, 251, 152, 0.02) 2px, rgba(152, 251, 152, 0.02) 4px)
    `,
  },
  {
    // Pine green gradient with texture
    gradient:
      "radial-gradient(circle at bottom left, rgba(34, 139, 34, 0.18) 0%, rgba(46, 125, 50, 0.14) 35%, transparent 65%)",
    texture: `
      radial-gradient(circle at 20% 80%, rgba(34, 139, 34, 0.1) 0%, transparent 40%),
      radial-gradient(circle at 80% 20%, rgba(46, 125, 50, 0.08) 0%, transparent 40%),
      radial-gradient(circle at 50% 50%, rgba(34, 139, 34, 0.05) 0%, transparent 60%),
      repeating-linear-gradient(135deg, transparent, transparent 2px, rgba(34, 139, 34, 0.02) 2px, rgba(34, 139, 34, 0.02) 4px)
    `,
  },
  {
    // Teal gradient with texture
    gradient:
      "radial-gradient(circle at top left, rgba(64, 224, 208, 0.18) 0%, rgba(32, 178, 170, 0.14) 35%, transparent 65%)",
    texture: `
      radial-gradient(circle at 40% 40%, rgba(64, 224, 208, 0.1) 0%, transparent 40%),
      radial-gradient(circle at 60% 60%, rgba(32, 178, 170, 0.08) 0%, transparent 40%),
      radial-gradient(circle at 50% 50%, rgba(64, 224, 208, 0.05) 0%, transparent 60%),
      repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(64, 224, 208, 0.02) 2px, rgba(64, 224, 208, 0.02) 4px)
    `,
  },
  {
    // Blue gradient with texture
    gradient:
      "radial-gradient(circle at bottom right, rgba(100, 149, 237, 0.18) 0%, rgba(65, 105, 225, 0.14) 35%, transparent 65%)",
    texture: `
      radial-gradient(circle at 25% 75%, rgba(100, 149, 237, 0.1) 0%, transparent 40%),
      radial-gradient(circle at 75% 25%, rgba(65, 105, 225, 0.08) 0%, transparent 40%),
      radial-gradient(circle at 50% 50%, rgba(100, 149, 237, 0.05) 0%, transparent 60%),
      repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(100, 149, 237, 0.02) 2px, rgba(100, 149, 237, 0.02) 4px)
    `,
  },
];

export function Projects() {
  const allProjects = getAllContent("projects");
  
  // Reorder projects according to desired order
  const orderedProjects = projectOrder
    .map((slug) => allProjects.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);
  
  const projects = orderedProjects.slice(0, 4);
  const showAllLink = allProjects.length > 4;

  return (
    <section
      id="projects"
      className="relative py-24 bg-gradient-to-b from-[#16051f] to-[#0a0118] overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-pink-600/20 blur-3xl" />
      </div>

      <div className="relative max-w-[980px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-12">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-purple-300/80">
              Featured Work
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">
              Projects with measurable impact
            </h2>
            <p className="mt-3 text-gray-400 max-w-2xl">
              Strategy-led product work that moves pipelines, narrative, and
              revenue forward.
            </p>
          </div>
          {showAllLink && (
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-purple-200 hover:text-white transition-colors"
            >
              View All Projects
              <ArrowUpRight className="size-4" />
            </Link>
          )}
        </div>

        {projects.length === 0 ? (
          <div className="rounded-2xl border border-purple-500/20 bg-[#1b0b2a]/60 p-10 text-center text-gray-300">
            No projects yet. Add MDX files in `content/projects` to populate
            this grid.
          </div>
        ) : (
          <div className="space-y-6">
            {projects.map((project, index) => {
              const href = `/projects/${project.slug}`;
              const imageSrc = getProjectImage(
                project.slug,
                project.image as string | undefined
              );
              const gradientConfig =
                gradientStyles[index % gradientStyles.length];

              return (
                <Link
                  key={project.slug}
                  href={href}
                  className="group relative flex flex-col md:flex-row rounded-2xl border border-purple-500/20 bg-[#1b0b2a]/80 backdrop-blur-sm overflow-hidden transition-all hover:-translate-y-1 hover:border-purple-500/40"
                >
                  {/* Unique radial gradient overlay with texture */}
                  <div
                    className="absolute inset-0 transition-opacity group-hover:opacity-110"
                    style={{
                      background: `${gradientConfig.gradient}, ${gradientConfig.texture}`,
                      mixBlendMode: "screen",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Text Content - Left Side */}
                  <div className="relative flex-1 p-8 md:p-10 flex flex-col justify-center space-y-4 md:min-w-[55%]">
                    <div className="space-y-3">
                      {getProjectYear(project.slug) && (
                        <p className="text-sm font-light" style={{ color: '#B2F5EA' }}>
                          {getProjectYear(project.slug)}
                        </p>
                      )}
                      <div className="flex items-center gap-2">
                        <h3 className="text-2xl md:text-3xl font-semibold text-white">
                          {project.title}
                        </h3>
                        <ArrowUpRight className="size-5 text-purple-300 group-hover:text-white transition-colors flex-shrink-0" />
                      </div>
                      <p className="text-base text-gray-400 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    {Array.isArray(project.tags) && project.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-purple-500/30 px-3 py-1 text-xs text-purple-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Image - Right Side */}
                  {imageSrc && (
                    <div className="relative w-full md:w-[40%] md:min-w-[300px] aspect-[4/3] md:aspect-auto md:h-auto overflow-hidden mt-4 md:mt-6 mr-4 md:mr-6">
                      <img
                        src={imageSrc}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
