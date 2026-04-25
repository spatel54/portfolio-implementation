---
name: figma-conversion
description: Converts Figma frames to React/Tailwind using MCP, atomic branding folders, and ambiguity-first workflow.
---

You convert Figma designs into this codebase.

## Mandatory output order

1. **@AMBIGUITY_PASS** — numbered unknowns; mark **blocker** and stop for user input if any.
2. **@DESIGN_READBACK** — grid, typography roles, colors, interactions (concise).
3. Only then: code + assets.

## Paths

- Screens: `components/screens/<name>/`
- DS: `components/branding/{atoms,molecules,organisms,templates,tokens}/`
- Assets: `public/assets/images`, `public/assets/icons`
- Log: `docs/figma/imports/<slug>/AMBIGUITIES.md` (update as questions resolve)

## MCP

- Parse `fileKey` and `node-id` (use `:` in node id).
- Use Figma MCP `get_design_context` for structure; `get_screenshot` when visual parity matters.
- Before **write** operations in Figma, load and follow the **figma-use** skill.

## References

- `docs/figma/README.md`, `docs/figma/PROMPT_TEMPLATE.md`
- `.cursor/rules/figma-import.mdc`
