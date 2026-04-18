/**
 * Hardcoded initial engagement for posts.
 * Client-side components will merge this with localStorage.
 */

export const initialEngagementBySlug = {
  "secure-apis-primer": {
    reactions: { like: 12, fire: 5, insightful: 3 },
    comments: [
      {
        id: "c1",
        name: "A reader",
        message: "The idempotency section is a great reminder. Thanks!",
        createdAt: "2026-04-10T12:00:00.000Z",
      },
    ],
  },
  "react-server-patterns": {
    reactions: { like: 9, fire: 4, insightful: 6 },
    comments: [],
  },
  "mes-to-modern-web": {
    reactions: { like: 6, fire: 2, insightful: 4 },
    comments: [],
  },
};

