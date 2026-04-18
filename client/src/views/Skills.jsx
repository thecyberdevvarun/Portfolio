"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaLayerGroup } from "react-icons/fa";
import { skills } from "../assets/assets";
import PageHeader from "@/components/ui/PageHeader";

const skillCategories = [
  "All",
  "Frontend",
  "Backend",
  "Programming",
  "Tools",
  "Database",
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pb-12"
    >
      <PageHeader
        eyebrow="Toolkit"
        title="Skills & tools"
        description={
          "Technologies I've leaned on in production — always evolving."
        }
        icon={FaLayerGroup}
      />

      <div className="mb-10 flex flex-wrap justify-center gap-2 md:justify-start">
        {skillCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              activeCategory === category
                ? "bg-cyan-500/20 text-cyan-100 ring-1 ring-cyan-500/40"
                : "bg-white/[0.04] text-zinc-400 hover:bg-white/[0.07]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.02 }}
            whileHover={{ y: -3 }}
            className="surface-card p-5 text-center transition hover:border-cyan-500/25"
          >
            <div
              className={`mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl text-white shadow-inner ${skill.color}`}
            >
              <skill.icon />
            </div>
            <h3 className="text-sm font-semibold text-zinc-100">
              {skill.name}
            </h3>
            <p className="mt-1 text-[10px] uppercase tracking-wider text-zinc-600">
              {skill.category}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
