"use client";

import Link from "next/link";

interface BlogCardProps {
  blog: {
    slug: string;
    title: string;
    description: string;
    date: string;
    tags?: string[];
    image?: string;
  };
}

export function BlogCard({ blog }: BlogCardProps) {
  const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={`/blog/${blog.slug}`} className="group block h-full">
      <div className="rounded-2xl border border-purple-500/20 bg-[#1b0b2a]/60 backdrop-blur-sm overflow-hidden hover:scale-105 hover:border-purple-500/40 transition-all duration-300 h-full flex flex-col">
        {/* Cover Image */}
        {blog.image && (
          <div className="relative h-48 w-full overflow-hidden bg-gradient-to-b from-purple-600/20 to-pink-600/20">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1b0b2a]/80" />
          </div>
        )}

        <div className="p-6 flex flex-col flex-1">
          <div className="flex-1">
            <p className="text-xs uppercase tracking-widest text-purple-400 mb-2">
              {formattedDate}
            </p>
            <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2 group-hover:text-purple-200 transition-colors">
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
      </div>
    </Link>
  );
}
