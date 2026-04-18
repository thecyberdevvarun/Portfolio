"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/styles/navbar.css";
import { siteConfig } from "@/config/site";
import { useAuth } from "@/context/AuthContext";

const baseNavItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Resources", path: "/resources" },
  { name: "Blog", path: "/blog" },
  { name: "Writings", path: "/writings" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { role, isAuthenticated, username, logout, hydrated } = useAuth();

  const navItems =
    role === "admin"
      ? [...baseNavItems, { name: "Admin", path: "/admin" }]
      : baseNavItems;

  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 280, damping: 32 },
    },
    exit: { opacity: 0, x: "100%", transition: { duration: 0.2 } },
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-8">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl border border-white/[0.08] bg-zinc-950/75 px-4 py-3 shadow-[0_0_40px_-12px_rgba(34,211,238,0.15)] backdrop-blur-xl md:px-6">
        <Link href="/" className="group flex flex-col leading-tight">
          <span className="font-[family-name:var(--font-outfit)] text-lg font-bold tracking-tight text-white transition-colors group-hover:text-cyan-200">
            {siteConfig.name}
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500">
            {siteConfig.handle}
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "text-white"
                    : "text-zinc-400 hover:text-zinc-100"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-white/[0.08] ring-1 ring-white/10"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 32,
                    }}
                  />
                )}
                {item.name}
              </Link>
            );
          })}
          <div className="ml-2 flex items-center gap-2">
            {hydrated && isAuthenticated ? (
              <>
                <span className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-zinc-400">
                  {role}: {username}
                </span>
                <button
                  type="button"
                  onClick={logout}
                  className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-zinc-300 transition hover:border-cyan-500/30 hover:text-white"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 text-xs font-medium text-cyan-200 transition hover:bg-cyan-500/20"
              >
                Login
              </Link>
            )}
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 md:hidden"
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          <div className={`hamburger ${isOpen ? "active" : ""}`}>
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-y-0 right-0 z-40 w-[min(100%,20rem)] border-l border-white/10 bg-zinc-950/95 p-6 pt-24 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const active = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-xl px-4 py-3 text-base font-medium ${
                      active
                        ? "bg-white/10 text-cyan-200"
                        : "text-zinc-300 hover:bg-white/5"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="mt-3 border-t border-white/10 pt-3">
                {hydrated && isAuthenticated ? (
                  <div className="space-y-2">
                    <p className="px-4 text-xs text-zinc-500">
                      Signed in as {role}: {username}
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        logout();
                        setIsOpen(false);
                      }}
                      className="w-full rounded-xl px-4 py-3 text-left text-base font-medium text-zinc-300 hover:bg-white/5"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <Link
                    href="/login"
                    onClick={() => setIsOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-cyan-200 hover:bg-cyan-500/10"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}