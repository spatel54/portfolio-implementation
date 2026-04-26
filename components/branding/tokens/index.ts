/**
 * Sunset Design System — Token Definitions
 * ─────────────────────────────────────────
 * Theme: warm dark, parchment tones, frosted glass surfaces.
 * CSS counterpart: app/globals.css (--sp-* custom properties)
 *
 * Usage pattern
 *   import { color, font, radius, blur, motion, border, shadow } from "@/components/branding/tokens";
 *
 *   // Inline styles
 *   style={{ ...font.figtree, color: color.text.primary }}
 *
 *   // Tailwind arbitrary — use CSS vars from globals.css
 *   className="text-[var(--sp-text-primary)]"
 */

import type { CSSProperties } from "react";

// ─── Color Palette ─────────────────────────────────────────────────────────────

export const color = {
  bg: {
    /** Darkest layer — page canvas, mobile full-screen */
    page:     "#181716",
    /** Card body, inner panels */
    surface:  "#272625",
    /** Title bars, canvas chrome, elevated overlays */
    elevated: "#302f2e",
    /** Luminosity frosted-glass base */
    overlay:  "#312f2b",
    /** Secondary button ("Say Hi") */
    btnSec:   "#302e2a",
  },

  glass: {
    /** Vertical toolbar pill */
    toolbar: "rgba(128,128,128,0.15)",
    /** Nav dock */
    nav:     "rgba(255,255,255,0.10)",
    /** File-label chip */
    chip:    "rgba(255,255,255,0.04)",
    /** Work-card tags */
    tag:     "rgba(23,23,23,0.20)",
    /** Theme selector pill */
    btnSec:  "rgba(60,60,60,0.30)",
  },

  text: {
    /** Warm sand — headings, primary body */
    primary:   "#dac5a7",
    /** Dimmer sand — descriptions, meta */
    secondary: "#928573",
    /** Muted — labels, inactive icons */
    muted:     "#827a72",
    /** Translucent — long-form body copy */
    dim:       "rgba(218,197,167,0.55)",
    /** Nav dividers, separators */
    sep:       "rgba(218,197,167,0.30)",
    white:     "#ffffff",
    /** Inactive tool-icon color */
    iconOff:   "#545454",
  },

  accent: {
    /** Primary CTA, clock second hand */
    orange: "#df7246",
    /** Date labels, location badge */
    gold:   "#c7bd00",
    /** Battery / positive indicator */
    green:  "#e0ffd3",
  },

  border: {
    /** Card borders — warm translucent */
    warm:   "rgba(218,197,167,0.15)",
    /** Toolbar / button borders — bright white */
    bright: "rgba(255,255,255,0.40)",
    /** Section dividers — dim white */
    dim:    "rgba(255,255,255,0.06)",
    /** File-label chip border */
    chip:   "rgba(218,197,167,0.18)",
    /** Mobile header border */
    mobile: "rgba(255,255,255,0.08)",
    /** Work-card tag border */
    tag:    "#282828",
  },
} as const;

// ─── Typography — Font-family shorthand objects ─────────────────────────────────
// Drop these directly into `style={font.figtree}` or spread `{...font.figtree}`.

export const font = {
  /** Primary UI — Figtree: body, buttons, labels, descriptions */
  figtree:      { fontFamily: "'Figtree', sans-serif" } as CSSProperties,

  /** Pixel display — DotGothic16: titles, code labels */
  dotGothic:    { fontFamily: "'DotGothic16', monospace" } as CSSProperties,

  /** Digital clock — Doto */
  doto:         { fontFamily: "'Doto', monospace" } as CSSProperties,
  dotoBold:     { fontFamily: "'Doto', monospace", fontWeight: 700 } as CSSProperties,

  /** Monospace utility — DM Mono: file names, zoom %, code */
  dmMono:       { fontFamily: "'DM Mono', monospace" } as CSSProperties,
  dmMonoLight:  { fontFamily: "'DM Mono', monospace", fontWeight: 300 } as CSSProperties,

  /** Serif display — Dai Banna SIL */
  daiBanna:          { fontFamily: "'Dai Banna SIL', serif", fontWeight: 400 } as CSSProperties,
  daiBannaBold:      { fontFamily: "'Dai Banna SIL', serif", fontWeight: 700 } as CSSProperties,
  daiBannaLightItal: {
    fontFamily: "'Dai Banna SIL', serif",
    fontWeight: 300,
    fontStyle: "italic",
  } as CSSProperties,

  /** Utility — Inter: badge text, uppercase labels */
  inter:        { fontFamily: "'Inter', sans-serif" } as CSSProperties,
} as const;

// ─── Font Weight Aliases ────────────────────────────────────────────────────────

export const weight = {
  ultraLight: 100,
  extraLight: 200,
  light:      300,
  regular:    400,
  medium:     500,
  semibold:   600,
  bold:       700,
  extrabold:  800,
  black:      900,
} as const;

// ─── Border Radius ──────────────────────────────────────────────────────────────

export const radius = {
  tag:     "4px",   /** Work-card taxonomy tags */
  sm:      "12px",  /** Small inline chips */
  chrome:  "14px",  /** Canvas battery / chrome elements */
  md:      "18px",  /** Buttons, badge containers */
  card:    "24px",  /** Stacked work cards */
  nav:     "28px",  /** Navigation dock */
  window:  "32px",  /** Bento window cards */
  toolbar: "34px",  /** Vertical toolbar pill */
  hero:    "40px",  /** Hero card, largest containers */
  full:    "9999px",
} as const;

// ─── Backdrop Blur ──────────────────────────────────────────────────────────────

export const blur = {
  sm: "blur(15px)",  /** Inner panels, card bodies */
  md: "blur(25px)",  /** Buttons, small chips     */
  lg: "blur(50px)",  /** Major glass surfaces     */
  xl: "blur(52px)",  /** Nav dock                 */
} as const;

/** Raw pixel values when needed for CSS-in-JS `backdropFilter` strings */
export const blurPx = {
  sm: 15,
  md: 25,
  lg: 50,
  xl: 52,
} as const;

// ─── Motion ─────────────────────────────────────────────────────────────────────

export const motion = {
  duration: {
    fast:   "150ms",
    base:   "200ms",
    medium: "300ms",
  },
  easing: {
    standard: "cubic-bezier(0.4, 0, 0.2, 1)",
    out:      "cubic-bezier(0, 0, 0.2, 1)",
    in:       "cubic-bezier(0.4, 0, 1, 1)",
  },
  /** Pre-built transition strings */
  transition: {
    colors:  "color 200ms cubic-bezier(0.4,0,0.2,1), background-color 200ms cubic-bezier(0.4,0,0.2,1)",
    opacity: "opacity 200ms cubic-bezier(0.4,0,0.2,1)",
    transform: "transform 200ms cubic-bezier(0.4,0,0.2,1)",
    all:     "color 200ms cubic-bezier(0.4,0,0.2,1), background-color 200ms cubic-bezier(0.4,0,0.2,1), opacity 200ms cubic-bezier(0.4,0,0.2,1)",
  },
} as const;

// ─── Shadows ─────────────────────────────────────────────────────────────────────

export const shadow = {
  /** Nav dock inset highlight */
  nav: "inset 0 -1px 1px rgba(255,255,255,0.10), inset 0 1px 1px rgba(255,255,255,0.25)",
  /** Primary CTA hover glow */
  glowOrange: "0 0 24px 4px rgba(223,114,70,0.45)",
  /** Active toolbar button inset */
  toolActive: "inset 0 0 0 1px rgba(94,94,94,0.18)",
} as const;

// ─── Background Patterns ──────────────────────────────────────────────────────────

export const pattern = {
  /** Dot grid used on page/canvas backgrounds */
  dotGrid: {
    backgroundImage: "radial-gradient(circle, rgba(218,197,167,0.07) 1px, transparent 1px)",
    backgroundSize: "36px 36px",
  } as CSSProperties,
} as const;

// ─── Surface Presets — frequently-used multi-property combos ──────────────────────
// Spread into style props: style={{ ...surface.glassCard }}

export const surface = {
  /** Standard bento window card body */
  cardBody: {
    background: color.bg.surface,
    backdropFilter: `blur(${blurPx.sm}px)`,
    border: `1px solid ${color.border.warm}`,
  } as CSSProperties,

  /** Luminosity frosted-glass overlay (absolute, aria-hidden) */
  luminosityOverlay: {
    background: color.bg.overlay,
    backdropFilter: `blur(${blurPx.lg}px)`,
    mixBlendMode: "luminosity" as const,
  } as CSSProperties,

  /** Glass toolbar pill */
  toolbarPill: {
    border: `1.4px solid ${color.border.bright}`,
    backdropFilter: `blur(${blurPx.lg}px)`,
    background: color.glass.toolbar,
  } as CSSProperties,

  /** Nav dock */
  navDock: {
    backdropFilter: `blur(${blurPx.xl}px)`,
    background: color.glass.nav,
  } as CSSProperties,

  /** File-label chip */
  chip: {
    background: color.glass.chip,
    border: `0.5px solid ${color.border.chip}`,
  } as CSSProperties,

  /** Canvas chrome title bar */
  canvasChrome: {
    backdropFilter: `blur(${blurPx.md}px)`,
    background: color.bg.elevated,
    border: `0.5px solid ${color.border.bright}`,
  } as CSSProperties,

  /** Primary CTA button */
  btnPrimary: {
    background: color.accent.orange,
    border: `0.5px solid ${color.border.bright}`,
    backdropFilter: `blur(${blurPx.md}px)`,
  } as CSSProperties,

  /** Secondary button */
  btnSecondary: {
    background: color.bg.btnSec,
    border: `0.5px solid ${color.border.bright}`,
    backdropFilter: `blur(${blurPx.md}px)`,
  } as CSSProperties,
} as const;

// ─── Legacy key list (backward compat) ───────────────────────────────────────────

export const portfolioTokenKeys = [
  "color.bg.page",
  "color.bg.surface",
  "color.bg.elevated",
  "color.text.primary",
  "color.text.secondary",
  "color.text.muted",
  "color.accent.orange",
  "color.accent.gold",
  "color.accent.green",
  "color.border.warm",
  "color.border.bright",
  "font.figtree",
  "font.dotGothic",
  "font.doto",
  "font.dmMono",
  "font.daiBanna",
  "radius.tag",
  "radius.md",
  "radius.window",
  "blur.sm",
  "blur.lg",
  "motion.duration.base",
  "surface.cardBody",
  "surface.btnPrimary",
] as const;

export type PortfolioTokenKey = (typeof portfolioTokenKeys)[number];
