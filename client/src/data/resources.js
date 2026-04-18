/**
 * Learning resources & publishing metadata.
 * Swap this module for API calls later, e.g. fetch('/api/resources').
 */

export const learningResources = [
  {
    id: "mdn",
    title: "MDN Web Docs",
    description: "Authoritative reference for HTML, CSS, JavaScript, and Web APIs.",
    url: "https://developer.mozilla.org/",
    category: "Documentation",
    tags: ["Web", "Reference"],
  },
  {
    id: "react-docs",
    title: "React Documentation",
    description: "Official React docs — Server Components, hooks, and patterns.",
    url: "https://react.dev/",
    category: "Documentation",
    tags: ["React", "Frontend"],
  },
  {
    id: "node-docs",
    title: "Node.js Documentation",
    description: "Runtime APIs, modules, and best practices for server-side JS.",
    url: "https://nodejs.org/docs/latest/api/",
    category: "Documentation",
    tags: ["Node", "Backend"],
  },
  {
    id: "next-docs",
    title: "Next.js Documentation",
    description: "App Router, data fetching, and deployment guides.",
    url: "https://nextjs.org/docs",
    category: "Documentation",
    tags: ["Next.js", "Full Stack"],
  },
  {
    id: "owasp",
    title: "OWASP",
    description: "Web security standards, cheat sheets, and Top 10 awareness.",
    url: "https://owasp.org/",
    category: "Security",
    tags: ["Security", "Web"],
  },
  {
    id: "tryhackme",
    title: "TryHackMe",
    description: "Guided cybersecurity labs — great for structured practice.",
    url: "https://tryhackme.com/",
    category: "Security",
    tags: ["Security", "Labs"],
  },
  {
    id: "fcc",
    title: "freeCodeCamp",
    description: "Free curriculum from responsive design to backend & data.",
    url: "https://www.freecodecamp.org/",
    category: "Courses",
    tags: ["Courses", "Beginner"],
  },
  {
    id: "system-design",
    title: "System Design Primer",
    description: "Large-scale system design concepts and interview prep.",
    url: "https://github.com/donnemartin/system-design-primer",
    category: "CS & Systems",
    tags: ["Systems", "Architecture"],
  },
  {
    id: "leetcode",
    title: "LeetCode",
    description: "DSA practice and interview-style problem sets.",
    url: "https://leetcode.com/",
    category: "CS & DSA",
    tags: ["DSA", "Practice"],
  },
  {
    id: "postgres",
    title: "PostgreSQL Documentation",
    description: "SQL, indexing, and performance for relational data.",
    url: "https://www.postgresql.org/docs/",
    category: "Documentation",
    tags: ["SQL", "Database"],
  },
];

export const blogPosts = [
  {
    id: "bp-1",
    slug: "secure-apis-primer",
    title: "Designing Safer REST APIs — A Primer",
    excerpt:
      "Idempotency, auth boundaries, and common pitfalls when exposing HTTP APIs.",
    publishedAt: "2025-11-18",
    readTime: "8 min read",
    tags: ["Backend", "Security"],
    href: "#",
    note: "Replace href with your Medium, Dev.to, or blog URL.",
  },
  {
    id: "bp-2",
    slug: "react-server-patterns",
    title: "Patterns I Reach For in the App Router",
    excerpt:
      "How I structure client boundaries, loading states, and data colocation in Next.js.",
    publishedAt: "2025-10-02",
    readTime: "6 min read",
    tags: ["React", "Next.js"],
    href: "#",
    note: "Replace href when published.",
  },
  {
    id: "bp-3",
    slug: "mes-to-modern-web",
    title: "From Legacy MES to Modern Web Apps",
    excerpt:
      "Lessons from shipping industrial software with React, Node, and strict uptime needs.",
    publishedAt: "2025-08-14",
    readTime: "10 min read",
    tags: ["Industry", "Full Stack"],
    href: "#",
    note: "Replace href with your article link.",
  },
];

export const writings = [
  {
    id: "w-1",
    title: "Threat modeling for small teams",
    excerpt:
      "A lightweight checklist before shipping features that touch auth, uploads, or PII — STRIDE-lite without the ceremony.",
    kind: "Notes",
    updatedAt: "2025-12-01",
    tags: ["Security", "Process"],
    href: "#",
  },
  {
    id: "w-2",
    title: "Readable error handling in Express",
    excerpt:
      "Centralized error middleware, consistent response shapes, and logging hooks that make on-call less painful.",
    kind: "Write-up",
    updatedAt: "2025-11-20",
    tags: ["Node.js", "Backend"],
    href: "#",
  },
  {
    id: "w-3",
    title: "CSS that survives design churn",
    excerpt:
      "Tokens, composition over one-off values, and when to reach for Tailwind vs component primitives.",
    kind: "Notes",
    updatedAt: "2025-10-05",
    tags: ["CSS", "Frontend"],
    href: "#",
  },
];

export const resourceCategories = [
  "All",
  "Documentation",
  "Courses",
  "Security",
  "CS & DSA",
  "CS & Systems",
];
