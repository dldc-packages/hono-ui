import { type CssVar, cssVar } from "./utils.ts";

export type FontKey = "sans" | "serif" | "mono";

export const font: Record<FontKey, CssVar> = {
  sans: cssVar(
    "font-sans",
    'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  ),
  serif: cssVar(
    "font-serif",
    'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
  ),
  mono: cssVar(
    "font-mono",
    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  ),
};

export type TextSizeKey = "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl";

export const textSize: Record<TextSizeKey, CssVar> = {
  xs: cssVar("text-xs", "0.75rem"),
  sm: cssVar("text-sm", "0.875rem"),
  base: cssVar("text-base", "1rem"),
  lg: cssVar("text-lg", "1.125rem"),
  xl: cssVar("text-xl", "1.25rem"),
  "2xl": cssVar("text-2xl", "1.5rem"),
  "3xl": cssVar("text-3xl", "1.875rem"),
  "4xl": cssVar("text-4xl", "2.25rem"),
  "5xl": cssVar("text-5xl", "3rem"),
  "6xl": cssVar("text-6xl", "3.75rem"),
  "7xl": cssVar("text-7xl", "4.5rem"),
  "8xl": cssVar("text-8xl", "6rem"),
  "9xl": cssVar("text-9xl", "8rem"),
};

export const lineHeight: Record<TextSizeKey, CssVar> = {
  xs: cssVar("text-xs--line-height", "calc(1 / 0.75)"),
  sm: cssVar("text-sm--line-height", "calc(1.25 / 0.875)"),
  base: cssVar("text-base--line-height", "calc(1.5 / 1)"),
  lg: cssVar("text-lg--line-height", "calc(1.75 / 1.125)"),
  xl: cssVar("text-xl--line-height", "calc(1.75 / 1.25)"),
  "2xl": cssVar("text-2xl--line-height", "calc(2 / 1.5)"),
  "3xl": cssVar("text-3xl--line-height", "calc(2.25 / 1.875)"),
  "4xl": cssVar("text-4xl--line-height", "calc(2.5 / 2.25)"),
  "5xl": cssVar("text-5xl--line-height", "1"),
  "6xl": cssVar("text-6xl--line-height", "1"),
  "7xl": cssVar("text-7xl--line-height", "1"),
  "8xl": cssVar("text-8xl--line-height", "1"),
  "9xl": cssVar("text-9xl--line-height", "1"),
};

export type FontWeightKey = "thin" | "extraLight" | "light" | "normal" | "medium" | "semibold" | "bold" | "extraBold" | "black";

export const fontWeight: Record<FontWeightKey, CssVar> = {
  thin: cssVar("font-weight-thin", "100"),
  extraLight: cssVar("font-weight-extralight", "200"),
  light: cssVar("font-weight-light", "300"),
  normal: cssVar("font-weight-normal", "400"),
  medium: cssVar("font-weight-medium", "500"),
  semibold: cssVar("font-weight-semibold", "600"),
  bold: cssVar("font-weight-bold", "700"),
  extraBold: cssVar("font-weight-extrabold", "800"),
  black: cssVar("font-weight-black", "900"),
};

export type TrackingKey = "tighter" | "tight" | "normal" | "wide" | "wider" | "widest";

export const tracking: Record<TrackingKey, CssVar> = {
  tighter: cssVar("tracking-tighter", "-0.05em"),
  tight: cssVar("tracking-tight", "-0.025em"),
  normal: cssVar("tracking-normal", "0em"),
  wide: cssVar("tracking-wide", "0.025em"),
  wider: cssVar("tracking-wider", "0.05em"),
  widest: cssVar("tracking-widest", "0.1em"),
};

export type LeadingKey = "tight" | "snug" | "normal" | "relaxed" | "loose";

export const leading: Record<LeadingKey, CssVar> = {
  tight: cssVar("leading-tight", "1.25"),
  snug: cssVar("leading-snug", "1.375"),
  normal: cssVar("leading-normal", "1.5"),
  relaxed: cssVar("leading-relaxed", "1.625"),
  loose: cssVar("leading-loose", "2"),
};

export type TextShadowKey = "2xs" | "xs" | "sm" | "md" | "lg";

export const textShadow: Record<TextShadowKey, CssVar> = {
  "2xs": cssVar("text-shadow-2xs", "0px 1px 0px rgb(0 0 0 / 0.15)"),
  xs: cssVar("text-shadow-xs", "0px 1px 1px rgb(0 0 0 / 0.2)"),
  sm: cssVar(
    "text-shadow-sm",
    "0px 1px 0px rgb(0 0 0 / 0.075), 0px 1px 1px rgb(0 0 0 / 0.075), 0px 2px 2px rgb(0 0 0 / 0.075)",
  ),
  md: cssVar(
    "text-shadow-md",
    "0px 1px 1px rgb(0 0 0 / 0.1), 0px 1px 2px rgb(0 0 0 / 0.1), 0px 2px 4px rgb(0 0 0 / 0.1)",
  ),
  lg: cssVar(
    "text-shadow-lg",
    "0px 1px 2px rgb(0 0 0 / 0.1), 0px 3px 2px rgb(0 0 0 / 0.1), 0px 4px 8px rgb(0 0 0 / 0.1)",
  ),
};

export const allTextVars: CssVar[] = [
  ...Object.values(font),
  ...Object.values(textSize),
  ...Object.values(lineHeight),
  ...Object.values(fontWeight),
  ...Object.values(tracking),
  ...Object.values(leading),
  ...Object.values(textShadow),
];
