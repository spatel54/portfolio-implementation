# Figma import — prompt template

Copy everything below the line into a new agent chat (prefer **figma-conversion** agent).

---

## @FIGMA_URL

(paste full URL)

## @FILE_KEY

## @NODE_ID

(use `:` not `-` in node id)

## @SCOPE

One of: `tokens-only` | `atoms-molecules` | `single-screen` | `multi-screen` | `full-template`

## @NON_GOALS

(e.g. do not change archive home, `data/`, or API routes unless explicitly listed here)

## @CAN_DO

- Call Figma MCP `get_design_context` (and `get_screenshot` if needed).
- Map to `components/branding/*` and `components/screens/*`.
- Place assets under `public/assets/*`.

## @CANNOT_DO

- Access private files without auth; invent measurements; assume fonts/breakpoints not shown in file.
- Modify iframe-only content via browser tools.
- Redesign without listing deviations from Figma.

## Required agent output order

1. **@AMBIGUITY_PASS** — numbered list of unknowns; mark **blocker** items and stop for answers.
2. **@DESIGN_READBACK** — grid, type, color roles, interactions (short, structured).
3. Then implementation (if no blockers).

Persist resolutions to `docs/figma/imports/<slug>/AMBIGUITIES.md`.

---

## @FIGMA_URL

## @FILE_KEY

## @NODE_ID

## @SCOPE

## @NON_GOALS

## @CAN_DO

## @CANNOT_DO
