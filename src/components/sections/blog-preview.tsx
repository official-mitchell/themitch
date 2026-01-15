"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BlogCard } from "@/components/content/blog-card";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.6, staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

interface BlogPreviewProps {
  blogs: Array<{
    slug: string;
    title: string;
    description: string;
    date: string;
    tags?: string[];
    image?: string;
  }>;
  totalBlogs: number;
}

export function BlogPreview({ blogs, totalBlogs }: BlogPreviewProps) {
  if (blogs.length === 0) return null;

  return (
    <section
      id="blog-preview"
      className="relative py-24 bg-gradient-to-b from-[#0a0118] to-[#16051f] overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 h-80 w-80 rounded-full bg-pink-600/20 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <div className="text-center space-y-4">
            <motion.p
              className="text-sm uppercase tracking-widest text-purple-400"
              variants={itemVariants}
            >
              Latest Insights
            </motion.p>
            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-white"
              variants={itemVariants}
            >
              From the{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Blog
              </span>
            </motion.h2>
          </div>

          {/* Blog Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {blogs.map((blog) => (
              <motion.div key={blog.slug} variants={itemVariants}>
                <BlogCard blog={blog} />
              </motion.div>
            ))}
          </motion.div>

          {/* View All Link */}
          {totalBlogs > blogs.length && (
            <motion.div className="text-center" variants={itemVariants}>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-medium"
              >
                View All Posts
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
