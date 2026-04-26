# Figma → code (this repo)

## Sunset Design System

**Theme name:** Sunset — warm dark, parchment tones, frosted-glass surfaces.

### Files

| Layer | File |
|-------|------|
| CSS custom properties | `app/globals.css` — `--sp-*` block at bottom |
| TypeScript tokens | `components/branding/tokens/index.ts` |
| Atomic re-exports | `components/branding/atoms/index.ts` |

### Import pattern

```ts
import { COLOR, FONT, FIGTREE, RADIUS, SURFACE, MOTION } from "@/components/branding/atoms";

// Inline style
<p style={{ ...FIGTREE.light, color: COLOR.text.primary }} />

// Surface preset
<div style={{ ...SURFACE.cardBody, borderRadius: RADIUS.window }} />

// Tailwind arbitrary (CSS var from globals.css)
<p className="text-[var(--sp-text-primary)]" />
```

### Color roles

| Token | Hex | Role |
|-------|-----|------|
| `COLOR.bg.page` | `#181716` | Page canvas, mobile |
| `COLOR.bg.surface` | `#272625` | Card body |
| `COLOR.bg.elevated` | `#302f2e` | Title bars |
| `COLOR.text.primary` | `#dac5a7` | Headings, primary text |
| `COLOR.text.secondary` | `#928573` | Descriptions, meta |
| `COLOR.text.muted` | `#827a72` | Labels, inactive icons |
| `COLOR.accent.orange` | `#df7246` | Primary CTA |
| `COLOR.accent.gold` | `#c7bd00` | Dates, location |
| `COLOR.accent.green` | `#e0ffd3` | Positive indicators |

### Fonts

| Token | Font | Use |
|-------|------|-----|
| `FIGTREE.*` | Figtree | Body, buttons, descriptions |
| `DM_MONO.*` | DM Mono | File labels, zoom %, code |
| `DOTO.*` | Doto | Clock, digital display |
| `DAI_BANNA.*` | Dai Banna SIL | Serif display headlines |
| `FONT.dotGothic` | DotGothic16 | Pixel titles, canvas labels |
| `FONT.inter` | Inter | Uppercase utility labels |

### Surface presets

`SURFACE.cardBody` · `SURFACE.luminosityOverlay` · `SURFACE.toolbarPill` ·
`SURFACE.navDock` · `SURFACE.chip` · `SURFACE.canvasChrome` ·
`SURFACE.btnPrimary` · `SURFACE.btnSecondary`

---

## URL → MCP inputs

From a URL like `https://www.figma.com/design/<FILE_KEY>/...?node-id=1-2`:

- **fileKey** = `<FILE_KEY>` (use branch key if the URL is a branch link).
- **nodeId** = convert `1-2` → `1:2` (hyphens in the query string become colons).

## Where implementation goes

| Layer | Path |
|-------|------|
| Screens | `components/screens/<screen>/` |
| Design system | `components/branding/{atoms,molecules,organisms,templates,tokens}/` |
| Static assets | `public/assets/images/`, `public/assets/icons/` |
| Routes | Prefer `app/(portfolio)/...` so the archive surface stays isolated (see plan §1.1). |

## Per-import folder

For each file or milestone, use `docs/figma/imports/<slug>/`:

- `CONTEXT.md` — link, resolved ids, scope.
- `AMBIGUITIES.md` — questions and resolutions (agent-maintained).

Copy the prompt skeleton from `PROMPT_TEMPLATE.md`.

## MCP

Load the **figma-use** skill before Figma MCP **write** operations. For read-only `get_design_context`, follow Cursor’s Figma MCP instructions in the MCP panel.
