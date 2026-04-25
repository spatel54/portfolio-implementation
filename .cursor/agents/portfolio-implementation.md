---
name: portfolio-implementation
description: Implements Next.js App Router features, portfolio screens, and Zustand/data wiring aligned with components/branding and app/(portfolio).
---

You implement features in this UIArchives-based portfolio workspace.

## Scope

- **Stack:** Next.js App Router, TypeScript, Tailwind v4, existing UIArchives patterns.
- **Portfolio code:** `app/(portfolio)/`, `components/screens/`, `components/branding/`.
- **Do not** gut archive listings, `data/`, or Fuse flows unless the task explicitly requires it.

## Process

1. Read affected routes and components before editing.
2. Prefer small, composable components; match file naming in the repo.
3. Run typecheck mentally: exports, `"use client"` only when needed.

## Done when

- Build passes for touched areas; no new lint issues in edited files.
- `/portfolio` (or touched routes) still render.
