import Link from "next/link";
import { getAllContent } from "@/lib/content";
import { formatDate } from "@/lib/utils";

export const metadata = {
  title: "Case Studies | Mitchell Opatowsky",
  description: "Real-world examples of product strategy, go-to-market execution, and business growth.",
};

export default function CaseStudiesPage() {
  const allCaseStudies = getAllContent("case-studies");

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0a0118] via-[#1a0b2e] to-[#16051f] py-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Back to Home */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-12"
        >
          <svg
            className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
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
          <span className="text-sm font-medium">Back to Home</span>
        </Link>

        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Case Studies</span>
          </h1>
          <p className="text-xl text-gray-400">
            Deep dives into product strategy, execution, and measurable results from my work with innovative companies.
          </p>
        </div>

        {/* Case Studies List */}
        {allCaseStudies.length > 0 ? (
          <div className="space-y-8">
            {allCaseStudies.map((caseStudy) => (
              <Link
                key={caseStudy.slug}
                href={`/case-studies/${caseStudy.slug}`}
                className="group block"
              >
                <article className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative bg-gradient-to-br from-[#2C1250]/50 to-[#1a0b2e]/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-purple-500/20 group-hover:border-purple-400/50 transition-colors">
                    {/* Cover Image */}
                    {caseStudy.image && (
                      <div className="relative h-64 w-full overflow-hidden bg-gradient-to-b from-purple-600/20 to-pink-600/20">
                        <img
                          src={caseStudy.image}
                          alt={caseStudy.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a0b2e]/80" />
                      </div>
                    )}

                    <div className="p-8">
                      {/* Date and Tags */}
                      <div className="flex items-center gap-4 mb-4 flex-wrap">
                        <time className="text-sm text-purple-400">
                          {formatDate(caseStudy.date)}
                        </time>
                        {caseStudy.tags && caseStudy.tags.length > 0 && (
                          <div className="flex gap-2">
                            {caseStudy.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Title */}
                      <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">
                        {caseStudy.title}
                      </h2>

                      {/* Description */}
                      <p className="text-gray-400 leading-relaxed mb-4">
                        {caseStudy.description}
                      </p>

                      {/* Read More Link */}
                      <div className="inline-flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                        <span className="text-sm font-medium">Read Case Study</span>
                        <svg
                          className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No case studies yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}
