---
title: "Patterns I Reach For in the App Router"
date: "2025-10-02"
readTime: "6 min read"
tags:
  - React
  - Next.js
excerpt: "How I structure client boundaries, loading states, and data colocation in Next.js."
---

# App Router patterns

## Colocate data with the route

Fetch in **Server Components** close to where the data is rendered. Pass serializable props into Client Components only when you need interactivity.

## Client boundaries

Mark files with `"use client"` only where you need hooks, subscriptions, or browser APIs. Smaller islands mean less JavaScript shipped to the client.

## Loading and errors

Use `loading.js` and `error.js` to keep navigation feeling fast and failures understandable.
