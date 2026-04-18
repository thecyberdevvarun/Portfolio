---
title: "CSS that survives design churn"
updated: "2025-10-05"
kind: "Notes"
tags:
  - CSS
  - Frontend
excerpt: "Tokens, composition over one-off values, and when to reach for Tailwind vs component primitives."
---

# Surviving design churn

Prefer **tokens** (spacing, radii, type scales) over magic numbers. Compose utility classes or component primitives instead of one-off inline styles.

When marketing wants a “small tweak,” you change a token once—not forty-seven files.
