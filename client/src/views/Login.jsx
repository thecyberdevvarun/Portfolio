"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaUserShield, FaUser } from "react-icons/fa";
import PageHeader from "@/components/ui/PageHeader";
import { useAuth } from "@/context/AuthContext";

export default function Login() {
  const router = useRouter();
  const { login, isAuthenticated, role, hydrated } = useAuth();

  const [selectedRole, setSelectedRole] = useState("viewer");
  const [username, setUsername] = useState("viewer");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const next =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("next") || "/"
      : "/";

  useEffect(() => {
    if (!hydrated) return;
    if (!isAuthenticated) return;
    if (next === "/admin" && role !== "admin") return;
    router.replace(next);
  }, [hydrated, isAuthenticated, role, router, next]);

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");
    const result = login({ username, password, role: selectedRole });
    if (!result.ok) {
      setError(result.message || "Login failed.");
      return;
    }
    if (next === "/admin" && selectedRole !== "admin") {
      router.replace("/");
      return;
    }
    router.replace(next);
  };

  return (
    <div className="min-h-screen pb-10">
      <PageHeader
        eyebrow="Access"
        title="Login"
        description="Role-based access controller with two roles only: admin and viewer."
        icon={FaUserShield}
      />

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-xl surface-card p-6 sm:p-8"
      >
        <div className="mb-5 grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => {
              setSelectedRole("viewer");
              setUsername("viewer");
              setPassword("");
            }}
            className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
              selectedRole === "viewer"
                ? "bg-white/10 text-white ring-1 ring-cyan-500/30"
                : "text-zinc-400 hover:bg-white/5"
            }`}
          >
            Viewer
          </button>
          <button
            type="button"
            onClick={() => {
              setSelectedRole("admin");
              setUsername("admin");
              setPassword("");
            }}
            className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
              selectedRole === "admin"
                ? "bg-white/10 text-white ring-1 ring-cyan-500/30"
                : "text-zinc-400 hover:bg-white/5"
            }`}
          >
            Admin
          </button>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="mb-1.5 block text-xs font-medium text-zinc-400">
              Username
            </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-zinc-900/50 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-cyan-500/40 focus:outline-none focus:ring-1 focus:ring-cyan-500/30"
            />
          </div>

          {selectedRole === "admin" && (
            <div>
              <label className="mb-1.5 block text-xs font-medium text-zinc-400">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-zinc-900/50 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-cyan-500/40 focus:outline-none focus:ring-1 focus:ring-cyan-500/30"
              />
            </div>
          )}

          {error && (
            <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-300">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-400"
          >
            {selectedRole === "admin" ? <FaUserShield /> : <FaUser />}
            Continue as {selectedRole}
          </button>
        </form>

        <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.03] p-3 text-xs text-zinc-500">
          <p>
            Demo admin credentials: <span className="text-zinc-300">admin / admin123</span>
          </p>
          <p className="mt-1">
            Viewer can sign in with any username (no password).
          </p>
        </div>
      </motion.div>
    </div>
  );
}

