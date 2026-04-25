# Vercel deployment

## Project

- **Framework:** Next.js (auto-detected from `package.json`).
- **Git:** Link this repo’s **`origin`** remote in the Vercel dashboard for Preview + Production builds.
- **Upstream:** `upstream` points at [Malay146/UIArchives](https://github.com/Malay146/UIArchives) for pulling fixes; Vercel should use **your** fork / repo as `origin`.

## First-time setup

1. `npm i -g vercel` (or use `npx vercel`).
2. From repo root: `vercel login` → `vercel link` (create or link project).
3. In the dashboard: **Import Git Repository** → select this repo → set **Production Branch** (e.g. `main`).
4. Add **Environment Variables** for Preview and Production (mirror anything you use locally from `.env.local`).

## Environment variables to audit

Search the codebase for `process.env` and `NEXT_PUBLIC_*`. Common UIArchives / Next needs may include:

- `NEXT_PUBLIC_SITE_URL` — canonical site URL (see `app/layout.tsx`).
- Any keys referenced by `app/api/*`, auth, email, or analytics.

Document each key here when you add it to Vercel (never commit secret values).

## Submodules

If you add git submodules later, enable **Include submodules** in the Vercel Git integration if builds need them. This bootstrap vendors ACE as a **normal cloned folder** under `docs/context-engineering/advanced-context-engineering/` to avoid submodule friction.

## Smoke checks after deploy

- `/` — archive home.
- `/portfolio` — portfolio scaffold.

## Incidents

Use the **deployment** Cursor agent (`.cursor/agents/deployment.md`) for build failures, env mismatches, and rollback steps.
