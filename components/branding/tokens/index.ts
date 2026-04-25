/**
 * Design tokens — map Figma variables → CSS custom properties / Tailwind theme.
 * Extend as you import the design system.
 */
export const portfolioTokenKeys = [
  "color.background",
  "color.foreground",
  "radius.md",
] as const;

export type PortfolioTokenKey = (typeof portfolioTokenKeys)[number];
