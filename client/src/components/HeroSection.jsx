"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactTyped } from "react-typed";
import { assets, Expertise } from "../assets/assets";
import {
  FaProjectDiagram,
  FaEnvelope,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";
import { siteConfig } from "@/config/site";

export default function HeroSection() {
  return (
    <section className="relative">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300/90"
          >
            Available for collaboration
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="font-(family-name:--font-outfit) text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {siteConfig.name.split(" ")[0]}{" "}
            <span className="text-gradient">
              {siteConfig.name.split(" ").slice(1).join(" ")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.12 }}
            className="mt-2 font-(family-name:--font-outfit) text-lg text-zinc-400 sm:text-xl"
          >
            {siteConfig.role}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.18 }}
            className="mt-6 min-h-8 text-lg text-zinc-300 sm:text-xl"
          >
            <span className="text-zinc-500">Focus areas · </span>
            <ReactTyped
              strings={[
                "Full stack delivery",
                "APIs & system design",
                "Application security",
                "DevOps & reliability",
                "DSA & problem solving",
              ]}
              typeSpeed={42}
              backSpeed={36}
              loop
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-zinc-500"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-zinc-950 shadow-[0_0_24px_-4px_rgba(34,211,238,0.5)] transition hover:bg-cyan-400"
            >
              <FaProjectDiagram className="text-base" />
              View work
              <FaArrowRight className="text-xs opacity-80" />
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/4 px-5 py-3 text-sm font-semibold text-zinc-100 transition hover:border-cyan-500/40 hover:bg-white/[0.07]"
            >
              Learning hub
            </Link>
            <a
              href={assets.Resume}
              download="Varun_Yadav_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-3 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-500/20"
            >
              <FaDownload />
              Résumé
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-zinc-400 underline-offset-4 transition hover:text-white"
            >
              <FaEnvelope />
              Contact
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-4 rounded-4xl bg-linear-to-br from-cyan-500/20 via-violet-500/15 to-fuchsia-500/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-zinc-900/50 p-1 shadow-2xl">
            <div className="overflow-hidden rounded-[1.85rem]">
              <motion.img
                src={assets.Profile}
                alt={siteConfig.name}
                className="aspect-square w-full object-cover"
                initial={{ scale: 1.06 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
              />
            </div>
            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/10 bg-zinc-950/85 p-4 backdrop-blur-md">
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                Currently
              </p>
              <p className="mt-1 font-(family-name:--font-outfit) text-sm font-semibold text-white">
                Shipping production web & learning in public
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-20"
      >
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-(family-name:--font-outfit) text-xl font-semibold text-white sm:text-2xl">
              How I work
            </h2>
            <p className="mt-1 text-sm text-zinc-500">
              Principles that guide delivery across the stack
            </p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {Expertise.map((expertise, index) => (
            <div
              key={index}
              className="surface-card group p-6 transition hover:border-cyan-500/25 hover:shadow-[0_0_40px_-12px_rgba(34,211,238,0.2)]"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-xl text-cyan-300 transition group-hover:bg-cyan-500/15">
                <expertise.icon />
              </div>
              <h3 className="font-(family-name:--font-outfit) font-semibold text-zinc-100">
                {expertise.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                {expertise.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
