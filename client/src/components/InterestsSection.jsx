"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaCloud,
  FaShieldAlt,
  FaDatabase,
  FaRobot,
  FaBrain,
} from "react-icons/fa";

const Interests = [
  {
    icon: <FaDatabase />,
    title: "Data Structures & Algorithms",
    description:
      "Efficient problem solving and complexity-aware implementations.",
    ring: "ring-violet-500/30",
    iconBg: "bg-violet-500/15 text-violet-300",
  },
  {
    icon: <FaCode />,
    title: "Full Stack Development",
    description:
      "End-to-end features with clear contracts between UI, API, and data.",
    ring: "ring-cyan-500/30",
    iconBg: "bg-cyan-500/15 text-cyan-300",
  },
  {
    icon: <FaCloud />,
    title: "DevOps & Cloud",
    description:
      "CI/CD, observability, and shipping with confidence.",
    ring: "ring-emerald-500/30",
    iconBg: "bg-emerald-500/15 text-emerald-300",
  },
  {
    icon: <FaShieldAlt />,
    title: "Application Security",
    description:
      "Threat modeling, OWASP-aware reviews, and responsible disclosure.",
    ring: "ring-rose-500/30",
    iconBg: "bg-rose-500/15 text-rose-300",
  },
  {
    icon: <FaRobot />,
    title: "Emerging Tech",
    description:
      "Staying current with platforms, tooling, and where the web is headed.",
    ring: "ring-indigo-500/30",
    iconBg: "bg-indigo-500/15 text-indigo-300",
  },
  {
    icon: <FaBrain />,
    title: "Continuous Learning",
    description:
      "Docs, labs, and writing things down so knowledge compounds.",
    ring: "ring-fuchsia-500/30",
    iconBg: "bg-fuchsia-500/15 text-fuchsia-300",
  },
];

export default function InterestsSection() {
  return (
    <section className="mt-24 border-t border-white/6 pt-20">
      <div className="mb-10 text-center md:text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400/80">
          Interests
        </p>
        <h2 className="mt-2 font-(family-name:--font-outfit) text-2xl font-bold text-white sm:text-3xl">
          What I gravitate toward
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Interests.map((interest, index) => (
          <motion.div
            key={interest.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -3 }}
            className={`surface-card p-6 ring-1 ${interest.ring} transition hover:border-cyan-500/20`}
          >
            <div
              className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${interest.iconBg}`}
            >
              {React.cloneElement(interest.icon, { className: "text-xl" })}
            </div>
            <h3 className="mt-4 font-(family-name:--font-outfit) text-lg font-semibold text-zinc-100">
              {interest.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-500">
              {interest.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
