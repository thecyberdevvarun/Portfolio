"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaLayerGroup, FaBookReader, FaCodeBranch } from "react-icons/fa";

const cards = [
  {
    title: "Project lab",
    desc: "Full stack builds, experiments, and client work — filter by stack or origin.",
    href: "/projects",
    icon: FaLayerGroup,
    accent: "from-cyan-500/20 to-transparent",
  },
  {
    title: "Resource hub",
    desc: "Docs, courses, security references, blog posts, and technical notes.",
    href: "/resources",
    icon: FaBookReader,
    accent: "from-violet-500/20 to-transparent",
  },
  {
    title: "Stack map",
    desc: "Languages, frameworks, and tools I use to ship — continuously updated.",
    href: "/skills",
    icon: FaCodeBranch,
    accent: "from-fuchsia-500/15 to-transparent",
  },
];

export default function HomeHighlights() {
  return (
    <section className="mt-24">
      <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400/80">
            Explore
          </p>
          <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-white">
            Navigate the portfolio
          </h2>
        </div>
        <Link
          href="/about"
          className="text-sm font-medium text-zinc-500 transition hover:text-cyan-300"
        >
          About me →
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {cards.map((c, i) => (
          <motion.div
            key={c.href}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <Link
              href={c.href}
              className="group relative block overflow-hidden rounded-2xl border border-white/[0.07] bg-zinc-900/40 p-6 transition hover:border-cyan-500/25"
            >
              <div
                className={`pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${c.accent} blur-2xl`}
              />
              <c.icon className="relative text-2xl text-cyan-300/90" />
              <h3 className="relative mt-4 font-[family-name:var(--font-outfit)] text-lg font-semibold text-white">
                {c.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-zinc-500">
                {c.desc}
              </p>
              <span className="relative mt-4 inline-flex items-center text-sm font-medium text-cyan-400/90 opacity-0 transition group-hover:opacity-100">
                Open
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
