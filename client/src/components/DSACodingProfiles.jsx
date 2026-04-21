"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { assets } from "../assets/assets";

const codingProfiles = [
  {
    platform: "LeetCode",
    username: "its_varunyadav01",
    profileLink: "https://leetcode.com/its_varunyadav01/",
    logo: assets.LeetCode,
    accent: "border-amber-500/20 bg-amber-500/5",
  },
  {
    platform: "GeeksforGeeks",
    username: "vyadav01",
    profileLink: "https://www.geeksforgeeks.org/user/vyadav01/",
    logo: assets.Gfg,
    accent: "border-emerald-500/20 bg-emerald-500/5",
  },
  {
    platform: "CodingNinjas",
    username: "Varun_yadav",
    profileLink: "https://www.naukri.com/code360/profile/Varun_yadav",
    logo: assets.CodingNinjas,
    accent: "border-orange-500/20 bg-orange-500/5",
  },
];

export default function DSACodingProfiles() {
  return (
    <section className="mt-24 border-t border-white/6 pt-20">
      <div className="mb-10 text-center md:text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400/80">
          Practice
        </p>
        <h2 className="mt-2 font-(family-name:--font-outfit) text-2xl font-bold text-white sm:text-3xl">
          DSA & coding profiles
        </h2>
        <p className="mt-2 text-zinc-500">
          Where I sharpen problem-solving and contest-style thinking.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {codingProfiles.map((profile) => (
          <motion.div
            key={profile.platform}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -2 }}
            className={`flex items-center justify-between gap-4 rounded-2xl border p-5 ${profile.accent}`}
          >
            <div className="flex min-w-0 items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element -- external brand assets */}
              <img
                src={profile.logo}
                alt=""
                className="h-12 w-12 shrink-0 rounded-xl object-contain"
              />
              <div className="min-w-0">
                <h3 className="truncate font-semibold text-zinc-100">
                  {profile.platform}
                </h3>
                <p className="truncate text-sm text-zinc-500">
                  @{profile.username}
                </p>
              </div>
            </div>
            <a
              href={profile.profileLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 text-zinc-400 transition hover:border-cyan-500/40 hover:text-cyan-300"
              aria-label={`Open ${profile.platform}`}
            >
              <FaExternalLinkAlt />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
