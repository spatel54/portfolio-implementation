# Cursor project agents

Invoke the agent that matches the phase of work (keeps context focused).

| Agent | When to use | Key docs |
|-------|-------------|----------|
| **portfolio-implementation** | Building portfolio features and screens | `app/(portfolio)/`, `components/screens/`, `components/branding/` |
| **figma-conversion** | Figma link → code | `docs/figma/*`, `.cursor/rules/figma-import.mdc` |
| **debugging** | Errors, failed builds, repro | — |
| **deployment** | Vercel, env, CI | `docs/deployment/vercel.md` |
| **ui-audit** | Visual consistency, DS drift | `components/branding/` |
| **accessibility** | a11y / WCAG | — |
| **responsiveness** | Layout across breakpoints | — |

**Plan defaults:** see repo bootstrap plan (recommended defaults: lean skills, `/portfolio` entry, vendor ui-ux-pro-max opt-in).

**ACE:** for multi-step work, see `docs/context-engineering/advanced-context-engineering/ace-fca.md` and `.cursor/rules/context-engineering.mdc`.
