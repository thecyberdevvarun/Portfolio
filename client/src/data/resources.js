/**
 * Learning resources — links, YouTube videos, docs, tools, and references.
 * YouTube URLs are auto-detected and rendered with thumbnails.
 */

export const learningResources = [
  // ── YouTube Videos ─────────────────────────────
  {
    id: "yt-fireship-100",
    title: "100+ Computer Science Concepts Explained",
    description:
      "Fireship explains 100+ CS concepts in a fast-paced visual format — perfect quick refresher.",
    url: "https://www.youtube.com/watch?v=XXYlFuWEuKI",
    category: "YouTube",
    tags: ["Computer Science", "Fundamentals", "Fireship"],
  },
  {
    id: "yt-nextjs-course",
    title: "Next.js 14 Full Course 2024",
    description:
      "Complete beginner to advanced Next.js tutorial covering App Router, Server Actions, and more.",
    url: "https://www.youtube.com/watch?v=wm5gMKuwSYk",
    category: "YouTube",
    tags: ["Next.js", "React", "Full Course"],
  },
  {
    id: "yt-nodejs-guide",
    title: "Node.js Ultimate Beginner's Guide",
    description:
      "Fireship's quick-fire Node.js guide covering the runtime, modules, and building APIs.",
    url: "https://www.youtube.com/watch?v=ENrzD9HAZK4",
    category: "YouTube",
    tags: ["Node.js", "Backend", "Fireship"],
  },
  {
    id: "yt-tailwind-course",
    title: "Tailwind CSS Full Course for Beginners",
    description:
      "Learn Tailwind from scratch — utility classes, responsive design, components, and dark mode.",
    url: "https://www.youtube.com/watch?v=lCxcTsOHrjo",
    category: "YouTube",
    tags: ["Tailwind", "CSS", "Frontend"],
  },
  {
    id: "yt-linux-101",
    title: "Linux Directories Explained in 100 Seconds",
    description:
      "Quick breakdown of the Linux file system hierarchy by Fireship.",
    url: "https://www.youtube.com/watch?v=42iQKuQodW4",
    category: "YouTube",
    tags: ["Linux", "DevOps", "Fireship"],
  },
  {
    id: "yt-docker-crash",
    title: "Docker in 100 Seconds",
    description:
      "Fireship explains containers, images, and Docker Compose in a quick visual overview.",
    url: "https://www.youtube.com/watch?v=Gjnup-PuquQ",
    category: "YouTube",
    tags: ["Docker", "DevOps", "Fireship"],
  },
  {
    id: "yt-networkchuck-ethical",
    title: "Ethical Hacking in 15 Hours",
    description:
      "NetworkChuck's full ethical hacking course — Kali, Nmap, Burp Suite, and more.",
    url: "https://www.youtube.com/watch?v=3FNYvj2U0HM",
    category: "YouTube",
    tags: ["Security", "Ethical Hacking", "NetworkChuck"],
  },
  {
    id: "yt-traversy-mern",
    title: "MERN Stack Crash Course",
    description:
      "Traversy Media builds a full MERN app from scratch — MongoDB, Express, React, Node.",
    url: "https://www.youtube.com/watch?v=-0exw-9YJBo",
    category: "YouTube",
    tags: ["MERN", "Full Stack", "Traversy Media"],
  },

  // ── Documentation ──────────────────────────────
  {
    id: "mdn",
    title: "MDN Web Docs",
    description:
      "Authoritative reference for HTML, CSS, JavaScript, and Web APIs.",
    url: "https://developer.mozilla.org/",
    category: "Documentation",
    tags: ["Web", "Reference"],
  },
  {
    id: "react-docs",
    title: "React Documentation",
    description:
      "Official React docs — Server Components, hooks, and patterns.",
    url: "https://react.dev/",
    category: "Documentation",
    tags: ["React", "Frontend"],
  },
  {
    id: "node-docs",
    title: "Node.js Documentation",
    description:
      "Runtime APIs, modules, and best practices for server-side JS.",
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
    id: "postgres",
    title: "PostgreSQL Documentation",
    description: "SQL, indexing, and performance for relational data.",
    url: "https://www.postgresql.org/docs/",
    category: "Documentation",
    tags: ["SQL", "Database"],
  },
  {
    id: "tailwind-docs",
    title: "Tailwind CSS Documentation",
    description:
      "Complete reference for every utility class and configuration option.",
    url: "https://tailwindcss.com/docs",
    category: "Documentation",
    tags: ["Tailwind", "CSS"],
  },

  // ── Courses ────────────────────────────────────
  {
    id: "fcc",
    title: "freeCodeCamp",
    description: "Free curriculum from responsive design to backend & data.",
    url: "https://www.freecodecamp.org/",
    category: "Courses",
    tags: ["Courses", "Beginner"],
  },

  // ── Security ───────────────────────────────────
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

  // ── CS & DSA ───────────────────────────────────
  {
    id: "leetcode",
    title: "LeetCode",
    description: "DSA practice and interview-style problem sets.",
    url: "https://leetcode.com/",
    category: "CS & DSA",
    tags: ["DSA", "Practice"],
  },

  // ── CS & Systems ───────────────────────────────
  {
    id: "system-design",
    title: "System Design Primer",
    description: "Large-scale system design concepts and interview prep.",
    url: "https://github.com/donnemartin/system-design-primer",
    category: "CS & Systems",
    tags: ["Systems", "Architecture"],
  },

  // ── Tools ──────────────────────────────────────
  {
    id: "tool-caniuse",
    title: "Can I Use",
    description:
      "Browser compatibility tables for modern web technologies and APIs.",
    url: "https://caniuse.com",
    category: "Tools",
    tags: ["Compatibility", "Browser"],
  },
  {
    id: "tool-excalidraw",
    title: "Excalidraw",
    description:
      "Virtual whiteboard for sketching diagrams, wireframes, and flowcharts.",
    url: "https://excalidraw.com",
    category: "Tools",
    tags: ["Diagram", "Whiteboard"],
  },
  {
    id: "tool-devtools",
    title: "Chrome DevTools Docs",
    description:
      "Official guide for debugging, profiling, and auditing web apps.",
    url: "https://developer.chrome.com/docs/devtools",
    category: "Tools",
    tags: ["Debugging", "Chrome"],
  },
];

export const resourceCategories = [
  "All",
  "YouTube",
  "Documentation",
  "Courses",
  "Security",
  "CS & DSA",
  "CS & Systems",
  "Tools",
];
