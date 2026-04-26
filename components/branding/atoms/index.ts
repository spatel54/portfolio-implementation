/**
 * Sunset Design System — Atomic Primitives
 * ──────────────────────────────────────────
 * Re-exports design tokens as ready-to-use React style objects and
 * typed constants. Import from here in any screen or component.
 *
 * All values originate in tokens/index.ts — do not add raw hex/font
 * strings here. Extend tokens first, then re-export.
 *
 * Usage
 *   import { FIGTREE, COLOR, SURFACE } from "@/components/branding/atoms";
 *
 *   <p style={{ ...FIGTREE.light, color: COLOR.text.primary }} />
 *   <div style={{ ...SURFACE.cardBody, borderRadius: RADIUS.window }} />
 */

export {
  color  as COLOR,
  font   as FONT,
  weight as WEIGHT,
  radius as RADIUS,
  blur   as BLUR,
  motion as MOTION,
  shadow as SHADOW,
  surface as SURFACE,
  pattern as PATTERN,
} from "../tokens";

/**
 * Convenience font-weight variants matching the most common patterns
 * in the portfolio screens. Extend as needed.
 */
import { font } from "../tokens";
import type { CSSProperties } from "react";

export const FIGTREE = {
  light:   { ...font.figtree, fontWeight: 300 } as CSSProperties,
  regular: { ...font.figtree, fontWeight: 400 } as CSSProperties,
  medium:  { ...font.figtree, fontWeight: 500 } as CSSProperties,
  bold:    { ...font.figtree, fontWeight: 700 } as CSSProperties,
} as const;

export const DM_MONO = {
  light:   { ...font.dmMono, fontWeight: 300 } as CSSProperties,
  regular: { ...font.dmMono, fontWeight: 400 } as CSSProperties,
  medium:  { ...font.dmMono, fontWeight: 500 } as CSSProperties,
} as const;

export const DAI_BANNA = {
  light:      { ...font.daiBanna, fontWeight: 300 } as CSSProperties,
  regular:    { ...font.daiBanna } as CSSProperties,
  bold:       { ...font.daiBannaBold } as CSSProperties,
  lightItal:  { ...font.daiBannaLightItal } as CSSProperties,
} as const;

export const DOTO = {
  regular: { ...font.doto, fontWeight: 400 } as CSSProperties,
  bold:    { ...font.dotoBold } as CSSProperties,
} as const;
