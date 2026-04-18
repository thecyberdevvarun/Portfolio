---
title: "Readable error handling in Express"
updated: "2025-11-20"
kind: "Write-up"
tags:
  - Node.js
  - Backend
excerpt: "Centralized error middleware, consistent response shapes, and logging hooks that make on-call less painful."
---

# Express errors that scale

Use a single **error middleware** at the end of the chain. Throw or call `next(err)` with typed errors (`OperationalError` vs programmer bugs).

Return JSON like:

```json
{ "error": { "code": "NOT_FOUND", "message": "User not found" } }
```

Log the full detail server-side; never leak stack traces to clients in production.
