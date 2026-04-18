---
title: "Threat modeling for small teams"
updated: "2025-12-01"
kind: "Notes"
tags:
  - Security
  - Process
excerpt: "A lightweight checklist before shipping features that touch auth, uploads, or PII — STRIDE-lite without the ceremony."
---

# Threat modeling without the ceremony

Before you ship anything that touches **auth**, **uploads**, or **PII**, spend thirty minutes on:

1. **Assets** — what data or workflows are we protecting?
2. **Adversaries** — script kiddies, malicious insiders, or automated bots?
3. **Entry points** — login, APIs, webhooks, admin panels.

Write one paragraph per feature with “what could go wrong?” and file issues for anything credible. That is enough STRIDE for many small teams.
