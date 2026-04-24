import { type CssVar, cssVar } from "./utils.ts";

export type RadiusKey = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";

export const radius: Record<RadiusKey, CssVar> = {
  xs: cssVar("radius-xs", "0.125rem"),
  sm: cssVar("radius-sm", "0.25rem"),
  md: cssVar("radius-md", "0.375rem"),
  lg: cssVar("radius-lg", "0.5rem"),
  xl: cssVar("radius-xl", "0.75rem"),
  "2xl": cssVar("radius-2xl", "1rem"),
  "3xl": cssVar("radius-3xl", "1.5rem"),
  "4xl": cssVar("radius-4xl", "2rem"),
};

export type ShadowKey = "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export const shadow: Record<ShadowKey, CssVar> = {
  "2xs": cssVar("shadow-2xs", "0 1px rgb(0 0 0 / 0.05)"),
  xs: cssVar("shadow-xs", "0 1px 2px 0 rgb(0 0 0 / 0.05)"),
  sm: cssVar(
    "shadow-sm",
    "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  ),
  md: cssVar(
    "shadow-md",
    "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  ),
  lg: cssVar(
    "shadow-lg",
    "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  ),
  xl: cssVar(
    "shadow-xl",
    "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  ),
  "2xl": cssVar("shadow-2xl", "0 25px 50px -12px rgb(0 0 0 / 0.25)"),
};

export type InsetShadowKey = "2xs" | "xs" | "sm";

export const insetShadow: Record<InsetShadowKey, CssVar> = {
  "2xs": cssVar("inset-shadow-2xs", "inset 0 1px rgb(0 0 0 / 0.05)"),
  xs: cssVar("inset-shadow-xs", "inset 0 1px 1px rgb(0 0 0 / 0.05)"),
  sm: cssVar("inset-shadow-sm", "inset 0 2px 4px rgb(0 0 0 / 0.05)"),
};

export type DropShadowKey = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export const dropShadow: Record<DropShadowKey, CssVar> = {
  xs: cssVar("drop-shadow-xs", "0 1px 1px rgb(0 0 0 / 0.05)"),
  sm: cssVar("drop-shadow-sm", "0 1px 2px rgb(0 0 0 / 0.15)"),
  md: cssVar("drop-shadow-md", "0 3px 3px rgb(0 0 0 / 0.12)"),
  lg: cssVar("drop-shadow-lg", "0 4px 4px rgb(0 0 0 / 0.15)"),
  xl: cssVar("drop-shadow-xl", "0 9px 7px rgb(0 0 0 / 0.1)"),
  "2xl": cssVar("drop-shadow-2xl", "0 25px 25px rgb(0 0 0 / 0.15)"),
};

export type BlurKey = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

export const blur: Record<BlurKey, CssVar> = {
  xs: cssVar("blur-xs", "4px"),
  sm: cssVar("blur-sm", "8px"),
  md: cssVar("blur-md", "12px"),
  lg: cssVar("blur-lg", "16px"),
  xl: cssVar("blur-xl", "24px"),
  "2xl": cssVar("blur-2xl", "40px"),
  "3xl": cssVar("blur-3xl", "64px"),
};

export const allDisplayVars: CssVar[] = [
  ...Object.values(radius),
  ...Object.values(shadow),
  ...Object.values(insetShadow),
  ...Object.values(dropShadow),
  ...Object.values(blur),
];
