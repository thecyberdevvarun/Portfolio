"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaLock,
  FaCopy,
  FaFileExport,
  FaTrash,
  FaPenNib,
} from "react-icons/fa";
import PageHeader from "@/components/ui/PageHeader";
import MarkdownBody from "@/components/content/MarkdownBody";
import { useAuth } from "@/context/AuthContext";

function slugify(input) {
  return String(input || "")
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function adminDraftsKey() {
  return "portfolio:admin:drafts:v1";
}

function safeParseJSON(v) {
  try {
    return JSON.parse(v);
  } catch {
    return null;
  }
}

function toFrontmatter({
  title,
  date,
  readTime,
  tags,
  excerpt,
  draft,
  kind,
  updated,
  type,
}) {
  const lines = ["---"];
  lines.push(`title: "${String(title || "").replaceAll('"', '\\"')}"`);
  if (type === "blog") {
    lines.push(`date: "${date || new Date().toISOString().slice(0, 10)}"`);
    if (readTime) lines.push(`readTime: "${readTime}"`);
  } else {
    lines.push(`updated: "${updated || new Date().toISOString().slice(0, 10)}"`);
    if (kind) lines.push(`kind: "${kind}"`);
  }
  if (Array.isArray(tags) && tags.length > 0) {
    lines.push("tags:");
    tags
      .map((t) => String(t).trim())
      .filter(Boolean)
      .forEach((t) => lines.push(`  - ${t}`));
  }
  if (excerpt) lines.push(`excerpt: "${String(excerpt).replaceAll('"', '\\"')}"`);
  if (draft) lines.push("draft: true");
  lines.push("---");
  return lines.join("\n");
}

export default function Admin() {
  const { role, hydrated } = useAuth();

  const [mode, setMode] = useState("blog"); // blog | writings
  const [title, setTitle] = useState("My new post");
  const [slug, setSlug] = useState("my-new-post");
  const [slugEdited, setSlugEdited] = useState(false);
  const [excerpt, setExcerpt] = useState("Short summary shown in lists.");
  const [tagsText, setTagsText] = useState("Next.js, Security");
  const [readTime, setReadTime] = useState("5 min read");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [kind, setKind] = useState("Notes");
  const [updated, setUpdated] = useState(new Date().toISOString().slice(0, 10));
  const [draft, setDraft] = useState(true);
  const [body, setBody] = useState(
    "# Title\n\nWrite in Markdown.\n\n- Add code blocks\n- Add headings\n\n```js\nconsole.log('hello')\n```\n"
  );

  const [drafts, setDrafts] = useState(() => {
    if (typeof window === "undefined") return [];
    const raw = window.localStorage.getItem(adminDraftsKey());
    const parsed = safeParseJSON(raw);
    return Array.isArray(parsed) ? parsed : [];
  });
  const [toast, setToast] = useState(null);

  const autoSlug = useMemo(() => slugify(title) || "untitled", [title]);

  const tags = useMemo(() => {
    return tagsText
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);
  }, [tagsText]);

  const markdownFile = useMemo(() => {
    const fm = toFrontmatter({
      title,
      date,
      readTime,
      tags,
      excerpt,
      draft,
      kind,
      updated,
      type: mode,
    });
    return `${fm}\n\n${body.trim()}\n`;
  }, [title, date, readTime, tags, excerpt, draft, kind, updated, body, mode]);

  const targetPath = useMemo(() => {
    return mode === "blog"
      ? `content/blog/${slug}.md`
      : `content/writings/${slug}.md`;
  }, [mode, slug]);

  const saveDraft = () => {
    const item = {
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      mode,
      title,
      slug,
      excerpt,
      tagsText,
      readTime,
      date,
      kind,
      updated,
      draft,
      body,
      savedAt: new Date().toISOString(),
    };
    setDrafts((prev) => {
      const next = [item, ...prev].slice(0, 30);
      window.localStorage.setItem(adminDraftsKey(), JSON.stringify(next));
      return next;
    });
    setToast("Draft saved to your browser.");
    setTimeout(() => setToast(null), 2500);
  };

  const loadDraft = (id) => {
    const d = drafts.find((x) => x.id === id);
    if (!d) return;
    setMode(d.mode);
    setTitle(d.title);
    setExcerpt(d.excerpt);
    setTagsText(d.tagsText);
    setReadTime(d.readTime);
    setDate(d.date);
    setKind(d.kind);
    setUpdated(d.updated);
    setDraft(d.draft);
    setBody(d.body);
    setSlug(d.slug);
    setSlugEdited(true);
    setToast("Draft loaded.");
    setTimeout(() => setToast(null), 2000);
  };

  const deleteDraft = (id) => {
    setDrafts((prev) => {
      const next = prev.filter((x) => x.id !== id);
      window.localStorage.setItem(adminDraftsKey(), JSON.stringify(next));
      return next;
    });
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(markdownFile);
    setToast("Copied Markdown to clipboard.");
    setTimeout(() => setToast(null), 2000);
  };

  if (!hydrated) {
    return (
      <div className="min-h-screen pb-12">
        <PageHeader
          eyebrow="Admin"
          title="Checking access..."
          description="Loading your session."
          icon={FaLock}
        />
      </div>
    );
  }

  if (role !== "admin") {
    return (
      <div className="min-h-screen pb-12">
        <PageHeader
          eyebrow="Restricted"
          title="Admin only"
          description="You are signed in as viewer. Only admin can create or manage blog and write-up drafts."
          icon={FaLock}
        />
        <div className="mx-auto max-w-2xl surface-card p-6">
          <p className="text-sm text-zinc-400">
            Please sign in with admin credentials to access the editor.
          </p>
          <div className="mt-4">
            <Link
              href="/login?next=/admin"
              className="inline-flex rounded-xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-400"
            >
              Login as admin
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-12">
      <PageHeader
        eyebrow="Admin"
        title="Write & export"
        description="Frontend-only authoring. Write Markdown, preview it, then export a file you can paste into your repo. Later, replace this with a real backend + editor."
        icon={FaLock}
      />

      <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {[
            { id: "blog", label: "Blog post" },
            { id: "writings", label: "Writing / note" },
          ].map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setMode(t.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium ring-1 transition ${
                mode === t.id
                  ? "bg-white/10 text-white ring-cyan-500/40"
                  : "bg-white/[0.03] text-zinc-400 ring-white/10 hover:bg-white/[0.06]"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={saveDraft}
            className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-zinc-200 transition hover:border-cyan-500/30 hover:text-white"
          >
            Save draft
          </button>
          <button
            type="button"
            onClick={copyToClipboard}
            className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-400"
          >
            <FaCopy />
            Copy Markdown
          </button>
        </div>
      </div>

      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200"
        >
          {toast}
        </motion.div>
      )}

      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="surface-card p-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            <FaPenNib className="text-cyan-300" />
            Editor
          </div>

          <div className="mt-6 grid gap-4">
            <div>
              <label className="mb-1.5 block text-xs font-medium text-zinc-400">
                Title
              </label>
              <input
                value={title}
                onChange={(e) => {
                  const nextTitle = e.target.value;
                  setTitle(nextTitle);
                  if (!slugEdited) setSlug(slugify(nextTitle) || "untitled");
                }}
                className="w-full rounded-xl border border-white/10 bg-zinc-900/50 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-cyan-500/40 focus:outline-none focus:ring-1 focus:ring-cyan-500/30"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-zinc-400">
                  Slug (auto)
                </label>
                <input
                  value={slug}
                  onChange={(e) => {
                    setSlugEdited(true);
                    setSlug(slugify(e.target.value));
                  }}
                  className="w-full rounded-xl border border-white/10 bg-zinc-900/50 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-cyan-500/40 focus:outline-none focus:ring-1 focus:ring-cyan-500/30"
                />
                <p className="mt-1 text-xs text-zinc-600">
                  Suggested: <span className="text-zinc-400">{autoSlug}</span>
                  {!slugEdited && (
                    <>
                      {" "}
                      ·{" "}
                      <button
                        type="button"
                        onClick={() => setSlug(autoSlug)}
                        className="text-cyan-400 hover:text-cyan-300"
                      >
                        use suggested
                      </button>
                    </>
                  )}
                </p>
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-zinc-400">
                  Tags (comma-separated)
                </label>
                <input
                  value={tagsText}
                  onChange={(e) => setTagsText(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-zinc-900/50 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-cyan-500/40 focus:outline-none focus:ring-1 focus:ring-cyan-500/30"
                />
              </div>
            </div>

            {mode === "blog" ? (
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-zinc-400">
                    Date
                  </label>
                  <input
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-zinc-900/50 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-cyan-500/40 focus:outline-none focus:ring-1 focus:ring-cyan-500/30"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-zinc-400">
                    Read time
                  </label>
                  <input
                    value={readTime}
                    onChange={(e) => setReadTime(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-zinc-900/50 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-cyan-500/40 focus:outline-none focus:ring-1 focus:ring-cyan-500/30"
                  />
                </div>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-zinc-400">
                    Updated
                  </label>
                  <input
                    value={updated}
                    onChange={(e) => setUpdated(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-zinc-900/50 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-cyan-500/40 focus:outline-none focus:ring-1 focus:ring-cyan-500/30"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-zinc-400">
                    Kind
                  </label>
                  <input
                    value={kind}
                    onChange={(e) => setKind(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-zinc-900/50 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-cyan-500/40 focus:outline-none focus:ring-1 focus:ring-cyan-500/30"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="mb-1.5 block text-xs font-medium text-zinc-400">
                Excerpt
              </label>
              <textarea
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                rows={2}
                className="w-full resize-y rounded-xl border border-white/10 bg-zinc-900/50 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-cyan-500/40 focus:outline-none focus:ring-1 focus:ring-cyan-500/30"
              />
            </div>

            <label className="flex items-center gap-2 text-sm text-zinc-400">
              <input
                type="checkbox"
                checked={draft}
                onChange={(e) => setDraft(e.target.checked)}
              />
              Draft (hidden from lists when you add it to the repo)
            </label>

            <div>
              <label className="mb-1.5 block text-xs font-medium text-zinc-400">
                Markdown body
              </label>
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                rows={14}
                className="w-full resize-y rounded-xl border border-white/10 bg-zinc-900/50 px-4 py-3 font-mono text-xs text-zinc-100 placeholder:text-zinc-600 focus:border-cyan-500/40 focus:outline-none focus:ring-1 focus:ring-cyan-500/30"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="surface-card p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Export
                </p>
                <p className="mt-1 text-sm text-zinc-400">
                  Paste into{" "}
                  <code className="rounded bg-white/5 px-1.5 py-0.5">
                    {targetPath}
                  </code>
                </p>
              </div>
              <FaFileExport className="text-zinc-600" />
            </div>
            <pre className="mt-5 max-h-[18rem] overflow-auto rounded-xl border border-white/10 bg-zinc-950/60 p-4 text-xs text-zinc-300">
              {markdownFile}
            </pre>
          </div>

          <div className="surface-card p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Preview
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-outfit)] text-xl font-semibold text-white">
              {title}
            </h2>
            <p className="mt-2 text-sm text-zinc-500">{excerpt}</p>
            <div className="mt-6">
              <MarkdownBody content={body} />
            </div>
          </div>

          <div className="surface-card p-6">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Local drafts
              </p>
              <Link
                href="/blog"
                className="text-sm font-medium text-cyan-400 hover:text-cyan-300"
              >
                Blog →
              </Link>
            </div>
            <div className="mt-4 space-y-2">
              {drafts.map((d) => (
                <div
                  key={d.id}
                  className="flex items-center justify-between gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3"
                >
                  <button
                    type="button"
                    onClick={() => loadDraft(d.id)}
                    className="min-w-0 flex-1 text-left"
                  >
                    <p className="truncate text-sm font-semibold text-zinc-200">
                      {d.title}
                    </p>
                    <p className="truncate text-xs text-zinc-600">
                      {d.mode} · {d.slug}
                    </p>
                  </button>
                  <button
                    type="button"
                    onClick={() => deleteDraft(d.id)}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-500 hover:text-zinc-200"
                    aria-label="Delete draft"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
              {drafts.length === 0 && (
                <p className="text-sm text-zinc-600">
                  No drafts saved yet. Save one from the editor.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

