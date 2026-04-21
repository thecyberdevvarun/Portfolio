"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaLink, FaGithub, FaBuilding, FaUser } from "react-icons/fa";
import { projects } from "../assets/assets";
import PageHeader from "@/components/ui/PageHeader";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeOrigin, setActiveOrigin] = useState("Personal");

  const projectOrigins = ["Personal", "Company"];
  const projectCategories = ["All", "Frontend", "Backend", "Full Stack"];

  const filteredProjects = projects.filter(
    (project) =>
      (activeCategory === "All" || project.category === activeCategory) &&
      ((activeOrigin === "Personal" && !project.company) ||
        (activeOrigin === "Company" && project.company))
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pb-12"
    >
      <PageHeader
        eyebrow="Work"
        title="Projects"
        description="Production apps, experiments, and client deliveries — filter by origin and stack."
        icon={FaCode}
      />

      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center md:justify-start">
        <div className="flex flex-wrap justify-center gap-2 rounded-2xl border border-white/10 bg-zinc-900/40 p-1.5 sm:justify-start">
          {projectOrigins.map((origin) => (
            <button
              key={origin}
              type="button"
              onClick={() => setActiveOrigin(origin)}
              className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition ${
                activeOrigin === origin
                  ? "bg-emerald-500/20 text-emerald-200 ring-1 ring-emerald-500/40"
                  : "text-zinc-400 hover:bg-white/4"
              }`}
            >
              {origin === "Personal" ? <FaUser /> : <FaBuilding />}
              {origin}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-2 rounded-2xl border border-white/10 bg-zinc-900/40 p-1.5 sm:justify-start">
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-xl px-3 py-2 text-sm font-medium transition ${
                activeCategory === category
                  ? "bg-cyan-500/20 text-cyan-100 ring-1 ring-cyan-500/35"
                  : "text-zinc-400 hover:bg-white/4"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <p className="mb-8 text-center text-sm text-zinc-500 md:text-left">
        Showing{" "}
        <span className="font-semibold text-zinc-300">{filteredProjects.length}</span>{" "}
        projects
      </p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.04 }}
            whileHover={{ y: -4 }}
            className="surface-card flex flex-col overflow-hidden transition hover:border-cyan-500/20"
          >
            <div className="flex items-center justify-between border-b border-white/6 bg-white/2 px-4 py-3">
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                {project.company ? (
                  <>
                    <FaBuilding className="text-cyan-400/80" />
                    <span>{project.company}</span>
                  </>
                ) : (
                  <>
                    <FaUser className="text-emerald-400/80" />
                    <span>Personal</span>
                  </>
                )}
              </div>
              <div
                className={`text-xl ${
                  project.category === "Frontend"
                    ? "text-orange-400"
                    : project.category === "Backend"
                      ? "text-emerald-400"
                      : project.category === "Full Stack"
                        ? "text-violet-400"
                        : "text-cyan-400"
                }`}
              >
                <project.icon />
              </div>
            </div>
            <div className="flex grow flex-col p-4">
              <h3 className="font-(family-name:--font-outfit) text-lg font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-2 grow text-sm leading-relaxed text-zinc-500">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 8).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 8 && (
                  <span className="text-[11px] text-zinc-600">
                    +{project.technologies.length - 8}
                  </span>
                )}
              </div>
              <div className="mt-4 flex justify-between border-t border-white/6 pt-3">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
                >
                  <FaGithub />
                  Code
                </a>
                {project.liveLink !== "#" && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-emerald-400/90 transition hover:text-emerald-300"
                  >
                    <FaLink />
                    Live
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <p className="py-20 text-center text-zinc-500">
          No projects match the selected filters.
        </p>
      )}
    </motion.div>
  );
}
