import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllContent, getContentBySlug } from "@/lib/content";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllContent("projects").map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getContentBySlug("projects", slug);

  if (!project) {
    notFound();
  }

  const { meta, content } = project;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0a0118] via-[#1a0b2e] to-[#16051f] py-24">
      <div className="absolute inset-0">
        <div className="absolute -top-16 right-0 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 space-y-10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-purple-300/80">
            Project
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-white">
            {meta.title}
          </h1>
          <p className="text-lg text-white">{meta.description}</p>
        </div>
        {meta.image && (
          <div className="overflow-hidden rounded-2xl border border-purple-500/20">
            <img
              src={meta.image}
              alt={meta.title}
              className="h-full w-full object-cover"
            />
          </div>
        )}
        <article className="prose prose-invert max-w-none text-white
          prose-headings:text-white prose-headings:font-semibold
          prose-p:text-white prose-p:leading-relaxed
          prose-ul:text-white prose-ol:text-white
          prose-li:text-white prose-li:leading-relaxed
          prose-strong:text-white prose-strong:font-semibold
          prose-em:text-white
          prose-a:text-purple-300 prose-a:hover:text-white prose-a:underline prose-a:underline-offset-2
          prose-blockquote:text-white prose-blockquote:border-l-purple-500/50
          prose-code:text-white prose-code:bg-purple-900/30 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded">
          <MDXRemote source={content} />
        </article>
      </div>
    </section>
  );
}
