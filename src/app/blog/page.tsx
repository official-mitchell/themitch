import Link from "next/link";
import { getAllContent } from "@/lib/content";
import { formatDate } from "@/lib/utils";

export const metadata = {
  title: "Blog | Mitchell Opatowsky",
  description: "Insights on product management, go-to-market strategy, and startup growth.",
};

export default function BlogPage() {
  const allBlogs = getAllContent("blogs");

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0a0118] via-[#1a0b2e] to-[#16051f] py-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Writing</span>
          </h1>
          <p className="text-xl text-gray-400">
            Insights on product strategy, go-to-market, and startup execution.
          </p>
        </div>

        {/* Blog Posts List */}
        {allBlogs.length > 0 ? (
          <div className="space-y-8">
            {allBlogs.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <article className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative bg-gradient-to-br from-[#2C1250]/50 to-[#1a0b2e]/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-purple-500/20 group-hover:border-purple-400/50 transition-colors">
                    {/* Cover Image */}
                    {post.image && (
                      <div className="relative h-96 w-full overflow-hidden bg-gradient-to-b from-purple-600/20 to-pink-600/20">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a0b2e]/80" />
                      </div>
                    )}

                    <div className="p-8">
                      {/* Date and Tags */}
                      <div className="flex items-center gap-4 mb-4 flex-wrap">
                        <time className="text-sm text-purple-400">
                          {formatDate(post.date)}
                        </time>
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex gap-2">
                            {post.tags.slice(0, 3).map((tag) => (
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
                        {post.title}
                      </h2>

                      {/* Description */}
                      <p className="text-gray-400 leading-relaxed mb-4">
                        {post.description}
                      </p>

                      {/* Read More Link */}
                      <div className="inline-flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                        <span className="text-sm font-medium">Read More</span>
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
            <p className="text-gray-400 text-lg">No blog posts yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}
