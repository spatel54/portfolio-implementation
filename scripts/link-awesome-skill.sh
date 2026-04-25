#!/usr/bin/env bash
set -euo pipefail
THEME="${1:-}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
VENDOR="$ROOT/vendor/awesome-design-skills/skills"
TARGET_DIR="$ROOT/.cursor/skills"

if [[ -z "$THEME" ]]; then
  echo "Usage: $0 <theme-name>" >&2
  echo "Example: $0 glass" >&2
  echo "Themes live under: $VENDOR" >&2
  exit 1
fi

if [[ ! -d "$VENDOR/$THEME" ]]; then
  echo "Unknown theme: $THEME (no directory $VENDOR/$THEME)" >&2
  exit 1
fi

mkdir -p "$TARGET_DIR"
ln -sf "../../vendor/awesome-design-skills/skills/$THEME" "$TARGET_DIR/awesome-$THEME"
echo "Linked .cursor/skills/awesome-$THEME -> vendor/awesome-design-skills/skills/$THEME"
echo "Reminder: keep total awesome-* links at 5 or fewer (bootstrap target 1–2)."
