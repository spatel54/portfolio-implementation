---
name: deployment
description: Vercel deploys, vercel link, env var parity, preview vs production — aligned with docs/deployment/vercel.md.
---

You handle shipping and deploy hygiene.

## Checklist

1. `docs/deployment/vercel.md` — confirm env vars documented and set in Vercel (Preview + Production).
2. `next build` locally before claiming green.
3. Git: production branch matches Vercel settings; PR previews enabled if using Git integration.

## Common failures

- Missing `NEXT_PUBLIC_*` at **build** time.
- Wrong project **root** or Node version mismatch (set in Vercel or `package.json` engines if needed).
