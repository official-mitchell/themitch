import { getContentSlugs, getContentBySlug } from "@/lib/content";
import { MDXRenderer } from "@/components/content/mdx-renderer";
import { formatDate, calculateReadingTime } from "@/lib/utils";
import Link from "next/link";
import { notFound } from "next/navigation";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getContentBySlug("case-studies", slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${caseStudy.meta.title} | Case Study`,
    description: caseStudy.meta.description,
    openGraph: {
      title: caseStudy.meta.title,
      description: caseStudy.meta.description,
      images: caseStudy.meta.image
        ? [{ url: caseStudy.meta.image }]
        : [],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getContentBySlug("case-studies", slug);

  if (!caseStudy) {
    notFound();
  }

  const readingTime = calculateReadingTime(caseStudy.content);

  return (
    <article className="min-h-screen bg-gradient-to-b from-[#0a0118] via-[#1a0b2e] to-[#16051f] py-20">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/case-studies"
          className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors mb-12"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Case Studies
        </Link>

        {/* Cover Image */}
        {caseStudy.meta.image && (
          <div className="relative h-96 w-full overflow-hidden rounded-2xl mb-12">
            <img
              src={caseStudy.meta.image}
              alt={caseStudy.meta.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0118] via-transparent to-transparent" />
          </div>
        )}

        {/* Case Study Header */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {String(caseStudy.meta.title)}
          </h1>

          {/* Meta Information */}
          <div className="flex items-center gap-4 text-gray-400 mb-8 flex-wrap">
            <time className="text-sm">
              {formatDate(caseStudy.meta.date)}
            </time>
            <span className="text-sm">•</span>
            <span className="text-sm">{readingTime} min read</span>

            {caseStudy.meta.tags && caseStudy.meta.tags.length > 0 && (
              <>
                <span className="text-sm">•</span>
                <div className="flex gap-2">
                  {caseStudy.meta.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Description */}
          <p className="text-lg text-gray-300 leading-relaxed">
            {caseStudy.meta.description}
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-purple-600/20 to-pink-600/20 mb-12" />

        {/* Case Study Content */}
        <div className="prose prose-invert max-w-none mb-16">
          <MDXRenderer content={caseStudy.content} />
        </div>

        {/* Key Metrics - If available */}
        {caseStudy.meta.results && Array.isArray(caseStudy.meta.results) && caseStudy.meta.results.length > 0 && (
          <div className="relative mt-16 pt-12 border-t border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-8">Key Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudy.meta.results.map((result, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-lg blur" />
                  <div className="relative bg-gradient-to-br from-[#2C1250]/50 to-[#1a0b2e]/50 backdrop-blur-xl rounded-lg p-6 border border-purple-500/20">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {result}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Interested in working together on your product or strategy?
          </p>
          <Link
            href="/contact"
            className="inline-block group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 blur-xl opacity-60 group-hover:opacity-100 transition-opacity rounded-xl" />
            <div className="relative px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-medium hover:from-purple-500 hover:to-pink-500 transition-all">
              Let's Talk
            </div>
          </Link>
        </div>
      </div>
    </article>
  );
}
