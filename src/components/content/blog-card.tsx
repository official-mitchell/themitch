"use client";

import Link from "next/link";

interface BlogCardProps {
  blog: {
    slug: string;
    title: string;
    description: string;
    date: string;
    tags?: string[];
  };
}

export function BlogCard({ blog }: BlogCardProps) {
  const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={`/blog/${blog.slug}`}>
      <div className="rounded-2xl border border-purple-500/20 bg-[#1b0b2a]/60 backdrop-blur-sm p-6 hover:scale-105 hover:border-purple-500/40 transition-all duration-300 h-full flex flex-col">
        <div className="flex-1">
          <p className="text-xs uppercase tracking-widest text-purple-400 mb-2">
            {formattedDate}
          </p>
          <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
            {blog.title}
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed line-clamp-3 mb-4">
            {blog.description}
          </p>
        </div>

        {blog.tags && blog.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {blog.tags.slice(0, 3).map((tag) => (
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
