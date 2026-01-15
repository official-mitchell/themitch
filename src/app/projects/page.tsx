import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getAllContent } from "@/lib/content";

export default function ProjectsPage() {
  const projects = getAllContent("projects");

  return (
    <section className="relative bg-gradient-to-b from-[#0a0118] via-[#1a0b2e] to-[#16051f] py-24">
      <div className="absolute inset-0">
        <div className="absolute -top-10 left-1/3 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 space-y-10">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-purple-300/80">
            Projects
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-white">
            Full project archive
          </h1>
          <p className="mt-3 text-lg text-gray-300">
            Detailed looks at product strategy, positioning, and execution.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-purple-500/20 bg-[#1b0b2a]/80 backdrop-blur-sm transition-transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-pink-600/10 opacity-0 transition-opacity group-hover:opacity-100" />
              {project.image && (
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="relative space-y-4 p-6">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-xl font-semibold text-white">
                    {project.title}
                  </h2>
                  <ArrowUpRight className="size-4 text-purple-300 group-hover:text-white transition-colors" />
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {project.description}
                </p>
                {Array.isArray(project.tags) && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
