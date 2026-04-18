"use client";

import { createContext, useContext, useMemo, useState } from "react";

const AUTH_STORAGE_KEY = "portfolio:auth:v1";

const DEMO_USERS = {
  admin: {
    username: "admin",
    password: "admin123",
    role: "admin",
  },
};

const AuthContext = createContext(null);

function safeParseJSON(value) {
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [session, setSession] = useState(() => ({
    isAuthenticated: false,
    role: "viewer",
    username: "viewer",
    ...(typeof window !== "undefined"
      ? safeParseJSON(window.localStorage.getItem(AUTH_STORAGE_KEY))
      : null),
    hydrated: true,
  }));

  const login = ({ username, password, role }) => {
    if (role === "admin") {
      const admin = DEMO_USERS.admin;
      if (username !== admin.username || password !== admin.password) {
        return { ok: false, message: "Invalid admin credentials." };
      }
      const next = {
        isAuthenticated: true,
        role: "admin",
        username: admin.username,
        hydrated: true,
      };
      setSession(next);
      window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(next));
      return { ok: true };
    }

    const viewerName = String(username || "viewer").trim() || "viewer";
    const next = {
      isAuthenticated: true,
      role: "viewer",
      username: viewerName,
      hydrated: true,
    };
    setSession(next);
    window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(next));
    return { ok: true };
  };

  const logout = () => {
    const next = {
      isAuthenticated: false,
      role: "viewer",
      username: "viewer",
      hydrated: true,
    };
    setSession(next);
    window.localStorage.removeItem(AUTH_STORAGE_KEY);
  };

  const value = useMemo(
    () => ({
      ...session,
      login,
      logout,
    }),
    [session]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return ctx;
}

