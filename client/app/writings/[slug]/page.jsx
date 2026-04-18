import Link from "next/link";
import { notFound } from "next/navigation";
import MarkdownBody from "@/components/content/MarkdownBody";
import { getWritingBySlug, getWritingSlugs } from "@/lib/content";

export async function generateStaticParams() {
  const slugs = await getWritingSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const doc = await getWritingBySlug(slug);
  if (!doc) return { title: "Not found" };
  return {
    title: doc.meta.title,
    description: doc.meta.excerpt || doc.meta.title,
  };
}

export default async function WritingPage({ params }) {
  const { slug } = await params;
  const doc = await getWritingBySlug(slug);
  if (!doc) notFound();

  const { meta, content } = doc;

  return (
    <article className="min-h-screen pb-20">
      <Link
        href="/writings"
        className="text-sm font-medium text-zinc-500 transition hover:text-fuchsia-400"
      >
        ← All writings
      </Link>

      <header className="mt-6 border-b border-white/[0.08] pb-10">
        <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500">
          <span className="rounded-md bg-white/[0.06] px-2 py-0.5 font-medium text-zinc-300">
            {meta.kind}
          </span>
          <time dateTime={meta.updated}>Updated {meta.updated}</time>
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
              <span key={t} className="text-xs text-zinc-500">
                #{t}
              </span>
            ))}
          </div>
        )}
      </header>

      <div className="mt-10 max-w-3xl">
        <MarkdownBody content={content} />
      </div>
    </article>
  );
}
