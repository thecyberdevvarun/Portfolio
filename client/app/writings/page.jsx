import Link from "next/link";
import { getAllWritingsMeta } from "@/lib/content";

export const metadata = {
  title: "Writings",
  description: "Shorter notes, write-ups, and technical scratchpad entries.",
};

export default async function WritingsIndexPage() {
  const items = await getAllWritingsMeta();

  return (
    <div className="min-h-screen pb-16">
      <header className="mb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-400/80">
          Writings
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-outfit)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Notes & write-ups
        </h1>
        <p className="mt-3 max-w-2xl text-zinc-500">
          Shorter pieces in{" "}
          <code className="rounded bg-white/5 px-1.5 py-0.5 text-sm text-fuchsia-300/90">
            content/writings
          </code>
          . Same workflow as the blog — edit Markdown, commit, deploy.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {items.map((w) => (
          <Link
            key={w.slug}
            href={`/writings/${w.slug}`}
            className="surface-card flex flex-col p-6 transition hover:border-fuchsia-500/25"
          >
            <div className="flex items-center justify-between gap-2 text-xs text-zinc-500">
              <span className="rounded-md bg-white/[0.06] px-2 py-0.5 font-medium text-zinc-300">
                {w.kind}
              </span>
              <time dateTime={w.updatedAt}>Updated {w.updatedAt}</time>
            </div>
            <h2 className="mt-4 font-[family-name:var(--font-outfit)] text-lg font-semibold text-white">
              {w.title}
            </h2>
            <p className="mt-2 flex-grow text-sm text-zinc-500">{w.excerpt}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {w.tags.map((t) => (
                <span key={t} className="text-xs text-zinc-600">
                  #{t}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      {items.length === 0 && (
        <p className="text-zinc-500">
          No writings yet. Add Markdown under{" "}
          <code className="text-fuchsia-300">content/writings</code>.
        </p>
      )}
    </div>
  );
}
