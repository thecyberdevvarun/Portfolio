"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaHeart, FaFire, FaLightbulb, FaRegCommentDots } from "react-icons/fa";
import { initialEngagementBySlug } from "@/data/engagement";

function storageKey(slug) {
  return `portfolio:engagement:${slug}`;
}

function safeParseJSON(v) {
  try {
    return JSON.parse(v);
  } catch {
    return null;
  }
}

function buildInitial(slug) {
  const base = initialEngagementBySlug[slug] || {
    reactions: { like: 0, fire: 0, insightful: 0 },
    comments: [],
  };
  return {
    reactions: { ...base.reactions },
    comments: Array.isArray(base.comments) ? [...base.comments] : [],
    myReactions: { like: false, fire: false, insightful: false },
  };
}

export default function PostEngagement({ slug }) {
  const initial = useMemo(() => buildInitial(slug), [slug]);
  const [state, setState] = useState(() => {
    if (typeof window === "undefined") return initial;
    const raw = window.localStorage.getItem(storageKey(slug));
    const parsed = safeParseJSON(raw);
    if (!parsed) return initial;
    return {
      reactions: { ...initial.reactions, ...(parsed.reactions || {}) },
      comments: Array.isArray(parsed.comments) ? parsed.comments : initial.comments,
      myReactions: { ...initial.myReactions, ...(parsed.myReactions || {}) },
    };
  });
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(storageKey(slug), JSON.stringify(state));
  }, [slug, state]);

  const toggleReaction = (key) => {
    setState((prev) => {
      const wasOn = !!prev.myReactions[key];
      return {
        ...prev,
        reactions: {
          ...prev.reactions,
          [key]: Math.max(0, (prev.reactions[key] || 0) + (wasOn ? -1 : 1)),
        },
        myReactions: { ...prev.myReactions, [key]: !wasOn },
      };
    });
  };

  const submitComment = (e) => {
    e.preventDefault();
    const n = name.trim();
    const m = message.trim();
    if (!n || !m) return;

    const newComment = {
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      name: n,
      message: m,
      createdAt: new Date().toISOString(),
    };

    setState((prev) => ({ ...prev, comments: [newComment, ...prev.comments] }));
    setMessage("");
  };

  const chips = [
    {
      key: "like",
      label: "Like",
      icon: FaHeart,
      on: state.myReactions.like,
      count: state.reactions.like || 0,
      onClass: "bg-rose-500/15 text-rose-200 ring-rose-500/30",
    },
    {
      key: "fire",
      label: "Fire",
      icon: FaFire,
      on: state.myReactions.fire,
      count: state.reactions.fire || 0,
      onClass: "bg-orange-500/15 text-orange-200 ring-orange-500/30",
    },
    {
      key: "insightful",
      label: "Insightful",
      icon: FaLightbulb,
      on: state.myReactions.insightful,
      count: state.reactions.insightful || 0,
      onClass: "bg-cyan-500/15 text-cyan-200 ring-cyan-500/30",
    },
  ];

  return (
    <section className="mt-14 max-w-3xl">
      <div className="surface-card p-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Engagement
            </p>
            <p className="mt-1 text-sm text-zinc-400">
              Frontend-only for now. Later you can wire this to your backend.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {chips.map((c) => {
              const Icon = c.icon;
              return (
                <button
                  key={c.key}
                  type="button"
                  onClick={() => toggleReaction(c.key)}
                  className={`inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-medium ring-1 transition ${
                    c.on
                      ? c.onClass
                      : "bg-white/[0.03] text-zinc-400 ring-white/10 hover:bg-white/[0.06]"
                  }`}
                >
                  <Icon className="text-xs" />
                  {c.label}
                  <span className="rounded-full bg-white/5 px-2 py-0.5 text-xs text-zinc-300">
                    {c.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 border-t border-white/[0.06] pt-6">
          <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-white">
            <FaRegCommentDots className="text-cyan-300" />
            Comments
            <span className="text-xs font-medium text-zinc-500">
              ({state.comments.length})
            </span>
          </div>

          <form onSubmit={submitComment} className="grid gap-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full rounded-xl border border-white/10 bg-zinc-900/50 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-cyan-500/40 focus:outline-none focus:ring-1 focus:ring-cyan-500/30"
              />
              <button
                type="submit"
                className="rounded-xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-400"
              >
                Post comment
              </button>
            </div>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write a comment…"
              rows={4}
              className="w-full resize-y rounded-xl border border-white/10 bg-zinc-900/50 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-cyan-500/40 focus:outline-none focus:ring-1 focus:ring-cyan-500/30"
            />
            <p className="text-xs text-zinc-600">
              Stored in your browser for now. Backend integration later.
            </p>
          </form>

          <div className="mt-8 space-y-3">
            {state.comments.map((c) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-zinc-200">
                    {c.name}
                  </p>
                  <time
                    className="text-xs text-zinc-600"
                    dateTime={c.createdAt}
                  >
                    {new Date(c.createdAt).toLocaleString()}
                  </time>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {c.message}
                </p>
              </motion.div>
            ))}
            {state.comments.length === 0 && (
              <p className="text-sm text-zinc-600">No comments yet.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

