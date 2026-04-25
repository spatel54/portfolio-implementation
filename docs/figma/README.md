# Figma → code (this repo)

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
