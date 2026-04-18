import Link from "next/link";
import { getAllBlogPostsMeta } from "@/lib/content";

export const metadata = {
  title: "Blog",
  description: "Articles on full stack development, Next.js, and shipping software.",
};

export default async function BlogIndexPage() {
  const posts = await getAllBlogPostsMeta();

  return (
    <div className="min-h-screen pb-16">
      <header className="mb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400/80">
          Blog
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-outfit)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Writing
        </h1>
        <p className="mt-3 max-w-2xl text-zinc-500">
          Longer articles live as Markdown in{" "}
          <code className="rounded bg-white/5 px-1.5 py-0.5 text-sm text-cyan-300/90">
            content/blog
          </code>
          . Commit to publish.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/admin"
            className="rounded-xl border border-white/15 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-zinc-200 transition hover:border-cyan-500/40 hover:text-white"
          >
            Admin editor (frontend-only)
          </Link>
        </div>
      </header>

      <ul className="space-y-4">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/blog/${p.slug}`}
              className="surface-card block p-6 transition hover:border-violet-500/25"
            >
              <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500">
                <time dateTime={p.publishedAt}>{p.publishedAt}</time>
                {p.readTime && (
                  <>
                    <span>·</span>
                    <span>{p.readTime}</span>
                  </>
                )}
              </div>
              <h2 className="mt-2 font-[family-name:var(--font-outfit)] text-xl font-semibold text-white">
                {p.title}
              </h2>
              <p className="mt-2 text-sm text-zinc-500">{p.excerpt}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-violet-500/10 px-2 py-0.5 text-xs text-violet-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {posts.length === 0 && (
        <p className="text-zinc-500">
          No posts yet. Add a <code className="text-cyan-300">.md</code> file under{" "}
          <code className="text-cyan-300">content/blog</code>.
        </p>
      )}
    </div>
  );
}
