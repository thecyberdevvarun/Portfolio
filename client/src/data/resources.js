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

/** Blog posts and writings live as Markdown under `content/blog` and `content/writings`. */

export const resourceCategories = [
  "All",
  "Documentation",
  "Courses",
  "Security",
  "CS & DSA",
  "CS & Systems",
];
