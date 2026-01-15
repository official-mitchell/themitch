import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["cdn.prod.website-files.com", "images.unsplash.com"],
  },
};

export default nextConfig;
