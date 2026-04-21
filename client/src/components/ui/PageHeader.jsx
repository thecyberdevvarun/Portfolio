"use client";

import { motion } from "framer-motion";

export default function PageHeader({
  eyebrow,
  title,
  description,
  icon: Icon,
}) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="mb-12 text-center md:text-left"
    >
      {eyebrow && (
        <p className="mb-3 font-(family-name:--font-outfit) text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400/90">
          {eyebrow}
        </p>
      )}
      <div className="flex flex-col items-center gap-4 md:flex-row md:items-end md:gap-6">
        {Icon && (
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl text-cyan-300">
            <Icon />
          </div>
        )}
        <div>
          <h1 className="font-(family-name:--font-outfit) text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
              {description}
            </p>
          )}
        </div>
      </div>
    </motion.header>
  );
}
