import Link from "next/link";
import { notFound } from "next/navigation";
import MarkdownBody from "@/components/content/MarkdownBody";
import PostEngagement from "@/components/blog/PostEngagement";
import { getBlogPostBySlug, getBlogSlugs } from "@/lib/content";

export async function generateStaticParams() {
  const slugs = await getBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return { title: "Not found" };
  return {
    title: post.meta.title,
    description: post.meta.excerpt || post.meta.title,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  const { meta, content } = post;

  return (
    <article className="min-h-screen pb-20">
      <Link
        href="/blog"
        className="text-sm font-medium text-zinc-500 transition hover:text-cyan-400"
      >
        ← All posts
      </Link>

      <header className="mt-6 border-b border-white/[0.08] pb-10">
        <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500">
          <time dateTime={meta.date}>{meta.date}</time>
          {meta.readTime && (
            <>
              <span>·</span>
              <span>{meta.readTime}</span>
            </>
          )}
        </div>
        <h1 className="mt-4 font-[family-name:var(--font-outfit)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {meta.title}
        </h1>
        {meta.excerpt && (
          <p className="mt-4 text-lg text-zinc-400">{meta.excerpt}</p>
        )}
        {(meta.tags || []).length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {(meta.tags || []).map((t) => (
              <span
                key={t}
                className="rounded-md bg-violet-500/10 px-2.5 py-1 text-xs font-medium text-violet-300"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </header>

      <div className="prose-invert mt-10 max-w-3xl">
        <MarkdownBody content={content} />
      </div>

      <PostEngagement key={slug} slug={slug} />
    </article>
  );
}
