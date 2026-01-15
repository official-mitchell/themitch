// Updated: Refactored to match BlogCard styling with purple theme, hover effects, and consistent card design
"use client";

import Link from "next/link";
import { ContentMeta } from "@/lib/content";

interface CaseStudyCardProps {
  caseStudy: ContentMeta;
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const formattedDate = new Date(caseStudy.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={`/case-studies/${caseStudy.slug}`}>
      <div className="rounded-2xl border border-purple-500/20 bg-[#1b0b2a]/60 backdrop-blur-sm p-6 hover:scale-105 hover:border-purple-500/40 transition-all duration-300 h-full flex flex-col">
        <div className="flex-1">
          <p className="text-xs uppercase tracking-widest text-purple-400 mb-2">
            {formattedDate}
          </p>
          <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
            {caseStudy.title}
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed line-clamp-3 mb-4">
            {caseStudy.description}
          </p>
        </div>

        {caseStudy.tags && caseStudy.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {caseStudy.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
