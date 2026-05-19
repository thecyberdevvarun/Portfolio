"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaSearch,
  FaExternalLinkAlt,
  FaBookOpen,
  FaPlay,
} from "react-icons/fa";
import PageHeader from "@/components/ui/PageHeader";
import { learningResources, resourceCategories } from "@/data/resources";

function LinkCard({ resource }) {
  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group surface-card flex flex-col p-5 transition hover:border-cyan-500/25"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-cyan-400/80">
            {resource.category}
          </p>
          <h3 className="mt-1 font-(family-name:--font-outfit) text-lg font-semibold text-white group-hover:text-cyan-200">
            {resource.title}
          </h3>
        </div>
        <FaExternalLinkAlt className="mt-1 shrink-0 text-zinc-600 transition group-hover:text-cyan-400" />
      </div>
      <p className="mt-3 text-sm leading-relaxed text-zinc-500">
        {resource.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {resource.tags.map((t) => (
          <span
            key={t}
            className="rounded-md bg-white/4 px-2 py-0.5 text-xs text-zinc-400"
          >
            {t}
          </span>
        ))}
      </div>
    </a>
  );
}

export default function Resources() {
  const learning = learningResources;

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

  return (
    <div className="min-h-screen pb-8">
      <PageHeader
        eyebrow="Knowledge base"
        title="Resources"
        description="Curated links, documentation, tools, and references that helped me grow as a developer."
        icon={FaBookOpen}
      />

      <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {resourceCategories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                cat === c
                  ? "bg-cyan-500/20 text-cyan-200 ring-1 ring-cyan-500/30"
                  : "bg-white/4 text-zinc-500 hover:text-zinc-300"
              }`}
            >
              {c}
            </button>
          ))}
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

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid gap-4 sm:grid-cols-2"
      >
        {filteredLearning.map((r) => (
          <LinkCard key={r.id} resource={r} />
        ))}
        {filteredLearning.length === 0 && (
          <p className="col-span-full py-12 text-center text-zinc-500">
            No resources match your filters.
          </p>
        )}
      </motion.div>
    </div>
  );
}
