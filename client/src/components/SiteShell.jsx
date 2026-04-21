"use client";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function SiteShell({ children }) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-bg-deep text-zinc-100">
      <div
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-25%,rgba(34,211,238,0.14),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.04)_1px,transparent_1px)] bg-size-[72px_72px] mask-[radial-gradient(ellipse_70%_60%_at_50%_30%,#000_45%,transparent)]"
        aria-hidden
      />

      <Navbar />

      <main className="relative z-10 grow pt-24 pb-16 px-4 sm:px-6 md:px-10 lg:px-16 min-h-[calc(100vh-5rem)]">
        <div className="mx-auto w-full max-w-6xl">{children}</div>
      </main>

      <Footer />
    </div>
  );
}
