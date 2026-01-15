import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export type ContentType = "blogs" | "case-studies" | "projects";

export interface ContentMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags?: string[];
  image?: string;
  [key: string]: unknown;
}

export interface ContentItem {
  meta: ContentMeta;
  content: string;
}

export function getContentSlugs(type: ContentType): string[] {
  const dir = path.join(contentDirectory, type);
  return getAllMdxFiles(dir).map((file) =>
    file.replace(dir + "/", "").replace(/\.mdx?$/, "")
  );
}

export function getContentBySlug(
  type: ContentType,
  slug: string
): ContentItem | null {
  const dir = path.join(contentDirectory, type);
  const fullPath = findMdxFile(dir, slug);

  if (!fullPath) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    meta: { slug, ...data } as ContentMeta,
    content,
  };
}

export function getAllContent(type: ContentType): ContentMeta[] {
  const slugs = getContentSlugs(type);
  return slugs
    .map((slug) => getContentBySlug(type, slug)?.meta)
    .filter((meta): meta is ContentMeta => meta !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getFeaturedCaseStudies(): ContentMeta[] {
  const allCaseStudies = getAllContent("case-studies");
  return allCaseStudies
    .filter((item): item is ContentMeta & { featured?: boolean } =>
      (item as any).featured === true
    )
    .slice(0, 3);
}

export function getLatestBlogs(limit: number = 3): ContentMeta[] {
  const allBlogs = getAllContent("blogs");
  return allBlogs.slice(0, limit);
}

function getAllMdxFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getAllMdxFiles(fullPath));
    } else if (entry.name.endsWith(".mdx") || entry.name.endsWith(".md")) {
      files.push(fullPath);
    }
  }

  return files;
}

function findMdxFile(dir: string, slug: string): string | null {
  const possiblePaths = [
    path.join(dir, `${slug}.mdx`),
    path.join(dir, `${slug}.md`),
    path.join(dir, slug, "index.mdx"),
    path.join(dir, slug, "index.md"),
  ];

  // Handle nested slugs like "2024/my-post"
  const parts = slug.split("/");
  if (parts.length > 1) {
    const nested = path.join(dir, ...parts.slice(0, -1), `${parts.at(-1)}.mdx`);
    possiblePaths.unshift(nested);
  }

  return possiblePaths.find((p) => fs.existsSync(p)) || null;
}
