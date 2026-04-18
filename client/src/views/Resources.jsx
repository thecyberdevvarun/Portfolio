"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  FaSearch,
  FaExternalLinkAlt,
  FaBookOpen,
  FaPenFancy,
  FaLayerGroup,
  FaArrowRight,
} from "react-icons/fa";
import PageHeader from "@/components/ui/PageHeader";
import { learningResources, resourceCategories } from "@/data/resources";

const tabs = [
  { id: "learn", label: "Learning links", icon: FaLayerGroup },
  { id: "blog", label: "Blog posts", icon: FaBookOpen },
  { id: "writing", label: "Writings & notes", icon: FaPenFancy },
];

export default function Resources({ blogPosts = [], writings = [] }) {
  const learning = learningResources;

  const [tab, setTab] = useState("learn");
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All");

  const filteredLearning = useMemo(() => {
    return learning.filter((r) => {
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        r.title.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.tags.some((t) => t.toLowerCase().includes(q));
      const matchesCat = cat === "All" || r.category === cat;
      return matchesQuery && matchesCat;
    });
  }, [learning, query, cat]);

  const filteredPosts = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return blogPosts;
    return blogPosts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        (p.excerpt || "").toLowerCase().includes(q) ||
        (p.tags || []).some((t) => t.toLowerCase().includes(q))
    );
  }, [blogPosts, query]);

  const filteredWritings = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return writings;
    return writings.filter(
      (w) =>
        w.title.toLowerCase().includes(q) ||
        (w.excerpt || "").toLowerCase().includes(q) ||
        (w.tags || []).some((t) => t.toLowerCase().includes(q))
    );
  }, [writings, query]);

  return (
    <div className="min-h-screen pb-8">
      <PageHeader
        eyebrow="Knowledge base"
        title="Resources & writing"
        description="Curated links plus Markdown-powered blog and writings. Data is read from disk at build time; JSON APIs are available for future tools or a CMS."
        icon={FaBookOpen}
      />

      <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {tabs.map((t) => {
            const Icon = t.icon;
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-white/10 text-white ring-1 ring-cyan-500/40"
                    : "bg-white/[0.03] text-zinc-400 hover:bg-white/[0.06] hover:text-zinc-200"
                }`}
              >
                <Icon className="text-xs opacity-80" />
                {t.label}
              </button>
            );
          })}
        </div>

        <div className="relative w-full max-w-md lg:max-w-xs">
          <FaSearch className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search titles, tags…"
            className="w-full rounded-xl border border-white/10 bg-zinc-900/60 py-2.5 pl-10 pr-4 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-cyan-500/40 focus:outline-none focus:ring-1 focus:ring-cyan-500/30"
          />
        </div>
      </div>

      {tab === "learn" && (
        <div className="mb-6 flex flex-wrap gap-2">
          {resourceCategories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                cat === c
                  ? "bg-cyan-500/20 text-cyan-200 ring-1 ring-cyan-500/30"
                  : "bg-white/[0.04] text-zinc-500 hover:text-zinc-300"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      )}

      <AnimatePresence mode="wait">
        {tab === "learn" && (
          <motion.div
            key="learn"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {filteredLearning.map((r) => (
              <a
                key={r.id}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group surface-card flex flex-col p-5 transition hover:border-cyan-500/25"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-cyan-400/80">
                      {r.category}
                    </p>
                    <h3 className="mt-1 font-[family-name:var(--font-outfit)] text-lg font-semibold text-white group-hover:text-cyan-200">
                      {r.title}
                    </h3>
                  </div>
                  <FaExternalLinkAlt className="mt-1 shrink-0 text-zinc-600 transition group-hover:text-cyan-400" />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                  {r.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {r.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-white/[0.04] px-2 py-0.5 text-xs text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
            {filteredLearning.length === 0 && (
              <p className="col-span-full py-12 text-center text-zinc-500">
                No resources match your filters.
              </p>
            )}
          </motion.div>
        )}

        {tab === "blog" && (
          <motion.div
            key="blog"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="space-y-4"
          >
            <div className="flex justify-end">
              <Link
                href="/blog"
                className="text-sm font-medium text-cyan-400 hover:text-cyan-300"
              >
                Open blog index →
              </Link>
            </div>
            {filteredPosts.map((p) => (
              <article
                key={p.slug}
                className="surface-card p-6 transition hover:border-violet-500/25"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500">
                      <time dateTime={p.publishedAt}>{p.publishedAt}</time>
                      {p.readTime && (
                        <>
                          <span>·</span>
                          <span>{p.readTime}</span>
                        </>
                      )}
                    </div>
                    <h3 className="mt-2 font-[family-name:var(--font-outfit)] text-xl font-semibold text-white">
                      {p.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-500">
                      {p.excerpt}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {(p.tags || []).map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-violet-500/10 px-2 py-0.5 text-xs text-violet-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-cyan-500/40 hover:text-white"
                  >
                    Read
                    <FaArrowRight className="text-xs" />
                  </Link>
                </div>
              </article>
            ))}
            {filteredPosts.length === 0 && (
              <p className="py-12 text-center text-zinc-500">No posts match.</p>
            )}
          </motion.div>
        )}

        {tab === "writing" && (
          <motion.div
            key="writing"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
          >
            <div className="mb-4 flex justify-end">
              <Link
                href="/writings"
                className="text-sm font-medium text-fuchsia-400 hover:text-fuchsia-300"
              >
                Open writings index →
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
            {filteredWritings.map((w) => (
              <article
                key={w.slug}
                className="surface-card flex flex-col p-6 transition hover:border-fuchsia-500/20"
              >
                <div className="flex items-center justify-between gap-2 text-xs text-zinc-500">
                  <span className="rounded-md bg-white/[0.06] px-2 py-0.5 font-medium text-zinc-300">
                    {w.kind}
                  </span>
                  <time dateTime={w.updatedAt}>Updated {w.updatedAt}</time>
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-outfit)] text-lg font-semibold text-white">
                  {w.title}
                </h3>
                <p className="mt-2 flex-grow text-sm leading-relaxed text-zinc-500">
                  {w.excerpt}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {(w.tags || []).map((t) => (
                    <span key={t} className="text-xs text-zinc-500">
                      #{t}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/writings/${w.slug}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300"
                >
                  Open piece
                  <FaArrowRight className="text-xs" />
                </Link>
              </article>
            ))}
            {filteredWritings.length === 0 && (
              <p className="col-span-full py-12 text-center text-zinc-500">
                No writings match.
              </p>
            )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-16 rounded-2xl border border-dashed border-white/10 bg-zinc-900/30 p-6 text-center">
        <p className="text-sm text-zinc-500">
          Author by adding <code className="text-cyan-300/90">.md</code> files
          under <code className="text-cyan-300/90">content/blog</code> or{" "}
          <code className="text-cyan-300/90">content/writings</code>. Use{" "}
          <code className="text-cyan-300/90">draft: true</code> in frontmatter to
          hide from lists. JSON:{" "}
          <code className="rounded bg-white/5 px-1.5 py-0.5">
            GET /api/content/blog
          </code>{" "}
          ·{" "}
          <code className="rounded bg-white/5 px-1.5 py-0.5">
            GET /api/content/writings
          </code>
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-block text-sm font-medium text-cyan-400 hover:text-cyan-300"
        >
          Want a web-based editor + database next? Reach out →
        </Link>
      </div>
    </div>
  );
}
