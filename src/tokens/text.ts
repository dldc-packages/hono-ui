import { type CssVar, cssVar } from "../utils/css-var.ts";

export type FontFamilyKey = "sans" | "serif" | "mono";

export const fontFamily: Record<FontFamilyKey, CssVar> = {
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

export type FontSizeKey = "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl";

export const fontSize: Record<FontSizeKey, CssVar> = {
  xs: cssVar("font-size-xs", "0.75rem"),
  sm: cssVar("font-size-sm", "0.875rem"),
  base: cssVar("font-size-base", "1rem"),
  lg: cssVar("font-size-lg", "1.125rem"),
  xl: cssVar("font-size-xl", "1.25rem"),
  "2xl": cssVar("font-size-2xl", "1.5rem"),
  "3xl": cssVar("font-size-3xl", "1.875rem"),
  "4xl": cssVar("font-size-4xl", "2.25rem"),
  "5xl": cssVar("font-size-5xl", "3rem"),
  "6xl": cssVar("font-size-6xl", "3.75rem"),
  "7xl": cssVar("font-size-7xl", "4.5rem"),
  "8xl": cssVar("font-size-8xl", "6rem"),
  "9xl": cssVar("font-size-9xl", "8rem"),
};

export const lineHeight: Record<FontSizeKey, CssVar> = {
  xs: cssVar("font-size-xs--line-height", "calc(1 / 0.75)"),
  sm: cssVar("font-size-sm--line-height", "calc(1.25 / 0.875)"),
  base: cssVar("font-size-base--line-height", "calc(1.5 / 1)"),
  lg: cssVar("font-size-lg--line-height", "calc(1.75 / 1.125)"),
  xl: cssVar("font-size-xl--line-height", "calc(1.75 / 1.25)"),
  "2xl": cssVar("font-size-2xl--line-height", "calc(2 / 1.5)"),
  "3xl": cssVar("font-size-3xl--line-height", "calc(2.25 / 1.875)"),
  "4xl": cssVar("font-size-4xl--line-height", "calc(2.5 / 2.25)"),
  "5xl": cssVar("font-size-5xl--line-height", "1"),
  "6xl": cssVar("font-size-6xl--line-height", "1"),
  "7xl": cssVar("font-size-7xl--line-height", "1"),
  "8xl": cssVar("font-size-8xl--line-height", "1"),
  "9xl": cssVar("font-size-9xl--line-height", "1"),
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
  ...Object.values(fontFamily),
  ...Object.values(fontSize),
  ...Object.values(lineHeight),
  ...Object.values(fontWeight),
  ...Object.values(tracking),
  ...Object.values(leading),
  ...Object.values(textShadow),
];
