import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

const CONTENT_ROOT = path.join(process.cwd(), "content");

async function readMarkdownFiles(subdir) {
  const dir = path.join(CONTENT_ROOT, subdir);
  let names = [];
  try {
    names = await fs.readdir(dir);
  } catch {
    return [];
  }
  return names.filter((f) => f.toLowerCase().endsWith(".md"));
}

function isDraft(data) {
  return data.draft === true;
}

/**
 * @returns {Promise<Array<{ id: string, slug: string, title: string, excerpt: string, publishedAt: string, readTime: string, tags: string[] }>>}
 */
export async function getAllBlogPostsMeta() {
  const files = await readMarkdownFiles("blog");
  const posts = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.md$/i, "");
      const raw = await fs.readFile(
        path.join(CONTENT_ROOT, "blog", file),
        "utf8"
      );
      const { data } = matter(raw);
      if (isDraft(data)) return null;
      return {
        id: slug,
        slug,
        title: data.title || slug,
        excerpt: data.excerpt || "",
        publishedAt: data.date || "",
        readTime: data.readTime || "",
        tags: Array.isArray(data.tags) ? data.tags : [],
      };
    })
  );
  return posts
    .filter(Boolean)
    .sort((a, b) => String(b.publishedAt).localeCompare(String(a.publishedAt)));
}

/**
 * @returns {Promise<Array<{ id: string, slug: string, title: string, excerpt: string, kind: string, updatedAt: string, tags: string[] }>>}
 */
export async function getAllWritingsMeta() {
  const files = await readMarkdownFiles("writings");
  const items = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.md$/i, "");
      const raw = await fs.readFile(
        path.join(CONTENT_ROOT, "writings", file),
        "utf8"
      );
      const { data } = matter(raw);
      if (isDraft(data)) return null;
      const updatedAt = data.updated || data.date || "";
      return {
        id: slug,
        slug,
        title: data.title || slug,
        excerpt: data.excerpt || "",
        kind: data.kind || "Notes",
        updatedAt,
        tags: Array.isArray(data.tags) ? data.tags : [],
      };
    })
  );
  return items
    .filter(Boolean)
    .sort((a, b) => String(b.updatedAt).localeCompare(String(a.updatedAt)));
}

export async function getBlogSlugs() {
  const meta = await getAllBlogPostsMeta();
  return meta.map((p) => p.slug);
}

export async function getWritingSlugs() {
  const meta = await getAllWritingsMeta();
  return meta.map((p) => p.slug);
}

/**
 * @returns {Promise<{ meta: object, content: string } | null>}
 */
export async function getBlogPostBySlug(slug) {
  const file = path.join(CONTENT_ROOT, "blog", `${slug}.md`);
  let raw;
  try {
    raw = await fs.readFile(file, "utf8");
  } catch {
    return null;
  }
  const { data, content } = matter(raw);
  if (isDraft(data)) return null;
  const meta = {
    title: data.title || slug,
    excerpt: data.excerpt || "",
    date: data.date || "",
    readTime: data.readTime || "",
    tags: Array.isArray(data.tags) ? data.tags : [],
  };
  return { meta, content };
}

export async function getWritingBySlug(slug) {
  const file = path.join(CONTENT_ROOT, "writings", `${slug}.md`);
  let raw;
  try {
    raw = await fs.readFile(file, "utf8");
  } catch {
    return null;
  }
  const { data, content } = matter(raw);
  if (isDraft(data)) return null;
  const meta = {
    title: data.title || slug,
    excerpt: data.excerpt || "",
    kind: data.kind || "Notes",
    updated: data.updated || data.date || "",
    tags: Array.isArray(data.tags) ? data.tags : [],
  };
  return { meta, content };
}
