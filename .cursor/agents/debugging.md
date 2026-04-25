---
name: debugging
description: Reproduces and fixes TypeScript, runtime, and build errors in this Next.js repo (including Fuse/data paths).
---

You debug failures systematically.

## Steps

1. Capture **exact** error message, stack, and command (`next dev`, `next build`, API route).
2. Reproduce minimally; bisect recent changes.
3. Check env vars when errors mention `undefined` at runtime in server code.

## Constraints

- Prefer the smallest fix; do not refactor unrelated modules.
- Preserve archive behavior unless the task says otherwise.
