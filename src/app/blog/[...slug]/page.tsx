import { getContentSlugs, getContentBySlug } from "@/lib/content";
import { MDXRenderer } from "@/components/content/mdx-renderer";
import { formatDate, calculateReadingTime } from "@/lib/utils";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const slugString = slug.join("/");
  const post = getContentBySlug("blogs", slugString);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.meta.title} | Blog`,
    description: post.meta.description,
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      images: post.meta.image
        ? [{ url: post.meta.image }]
        : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const slugString = slug.join("/");
  const post = getContentBySlug("blogs", slugString);

  if (!post) {
    notFound();
  }

  const readingTime = calculateReadingTime(post.content);

  return (
    <article className="min-h-screen bg-gradient-to-b from-[#0a0118] via-[#1a0b2e] to-[#16051f] py-20">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/blog"
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
          Back to Blog
        </Link>

        {/* Cover Image */}
        {post.meta.image && (
          <div className="relative h-96 w-full overflow-hidden rounded-2xl mb-12">
            <img
              src={post.meta.image}
              alt={post.meta.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0118] via-transparent to-transparent" />
          </div>
        )}

        {/* Post Header */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {post.meta.title}
          </h1>

          {/* Meta Information */}
          <div className="flex items-center gap-4 text-gray-400 mb-8 flex-wrap">
            <time className="text-sm">
              {formatDate(post.meta.date)}
            </time>
            <span className="text-sm">•</span>
            <span className="text-sm">{readingTime} min read</span>

            {post.meta.tags && post.meta.tags.length > 0 && (
              <>
                <span className="text-sm">•</span>
                <div className="flex gap-2">
                  {post.meta.tags.map((tag) => (
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
            {post.meta.description}
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-purple-600/20 to-pink-600/20 mb-12" />

        {/* Post Content */}
        <div className="prose prose-invert max-w-none mb-16">
          <MDXRenderer content={post.content} />
        </div>

        {/* Author Bio */}
        <div className="relative mt-16 pt-12 border-t border-purple-500/20">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl blur" />
            <div className="relative bg-gradient-to-br from-[#2C1250]/50 to-[#1a0b2e]/50 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/20">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 p-0.5">
                    <img
                      src="https://images.unsplash.com/photo-1750535135593-3a8e5def331d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMGNoYXJhY3RlciUyMGF2YXRhciUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3Njg0NDk0OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Mitchell Opatowsky"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Mitchell Opatowsky
                  </h3>
                  <p className="text-purple-300 text-sm mb-3">
                    Product Manager & Founder
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Mitchell is an Austin-based innovator focused on product positioning, go-to-market strategy, and reducing execution risk. He leads teams to solve complex problems and has launched multiple companies across Web3 and SaaS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Want to discuss product strategy or collaborate?
          </p>
          <Link
            href="/contact"
            className="inline-block group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 blur-xl opacity-60 group-hover:opacity-100 transition-opacity rounded-xl" />
            <div className="relative px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-medium hover:from-purple-500 hover:to-pink-500 transition-all">
              Get in Touch
            </div>
          </Link>
        </div>
      </div>
    </article>
  );
}
