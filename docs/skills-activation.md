# Cursor skills — active vs vendor

This repo keeps **few** skills under `.cursor/skills/` so the agent is not flooded. Full registries live in `vendor/`.

## Active in `.cursor/skills/` (bootstrap)

| Skill | Path | Notes |
|-------|------|--------|
| ui-design-brain | `.cursor/skills/ui-design-brain/` | Component patterns + a11y |
| emil-design-eng | `.cursor/skills/emil-design-eng/` | Design taste / polish |
| ui-craft | `.cursor/skills/ui-craft/` | Craft workflow (from [ui-craft](https://github.com/educlopez/ui-craft)) |
| awesome-minimal | `.cursor/skills/awesome-minimal` → `vendor/awesome-design-skills/skills/minimal` | Theme symlink |
| awesome-bento | `.cursor/skills/awesome-bento` → `vendor/awesome-design-skills/skills/bento` | Theme symlink |

**Cap:** at most **3–5** `awesome-*` links at any time. **Swap** themes by removing a symlink and adding another under `.cursor/skills/`.

## Vendor-only (opt-in)

| Resource | Path | To activate |
|----------|------|-------------|
| ui-ux-pro-max-skill | `vendor/ui-ux-pro-max-skill/` | `ln -sf ../../vendor/ui-ux-pro-max-skill .cursor/skills/ui-ux-pro-max` (from `.cursor/skills/`) |
| awesome-design-skills (full catalog) | `vendor/awesome-design-skills/skills/<name>/` | Symlink as `.cursor/skills/awesome-<name>` |

## Windows

Symlinks may require Developer Mode or **copy** the skill folder instead of `ln -sf`.
