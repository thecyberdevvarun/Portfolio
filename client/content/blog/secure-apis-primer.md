---
title: "Designing Safer REST APIs — A Primer"
date: "2025-11-18"
readTime: "8 min read"
tags:
  - Backend
  - Security
excerpt: "Idempotency, auth boundaries, and common pitfalls when exposing HTTP APIs."
---

# Designing safer REST APIs

When you expose HTTP APIs to browsers or partner systems, a few properties make them **predictable** and easier to secure.

## Idempotency

Use **idempotent** verbs and patterns where it matters: `GET` and `PUT` should not surprise callers with hidden side effects. For `POST`, consider idempotency keys for payments and provisioning flows.

## Auth boundaries

Authenticate at the edge of your domain: validate tokens once, attach a stable **user or service identity** to the request context, and authorize every handler against that context—not ad hoc checks scattered through handlers.

## Input validation

Treat all input as hostile. Validate **shape and bounds** at the boundary (schema validation), then enforce business rules inside the domain layer.

## Errors

Return **consistent error shapes** (code, message, optional `details`) without leaking stack traces or internal identifiers in production.

---

You are editing a Markdown file in the repo. Commit to publish; add `draft: true` in frontmatter to hide from lists while iterating.
