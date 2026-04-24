import * as cssBuilder from "@dldc/css-builder";
import { type CssVar, cssVar } from "./utils.ts";

export const spacing: CssVar = cssVar("spacing", "0.25rem");

export function x(multiplier: number): string {
  return cssBuilder.serialize(
    cssBuilder.multiply(cssBuilder.var(spacing.name), multiplier),
  );
}

export type BreakpointKey = "sm" | "md" | "lg" | "xl" | "2xl";

export const breakpoint: Record<BreakpointKey, CssVar> = {
  sm: cssVar("breakpoint-sm", "40rem"),
  md: cssVar("breakpoint-md", "48rem"),
  lg: cssVar("breakpoint-lg", "64rem"),
  xl: cssVar("breakpoint-xl", "80rem"),
  "2xl": cssVar("breakpoint-2xl", "96rem"),
};

export type ContainerKey = "3xs" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl";

export const container: Record<ContainerKey, CssVar> = {
  "3xs": cssVar("container-3xs", "16rem"),
  "2xs": cssVar("container-2xs", "18rem"),
  xs: cssVar("container-xs", "20rem"),
  sm: cssVar("container-sm", "24rem"),
  md: cssVar("container-md", "28rem"),
  lg: cssVar("container-lg", "32rem"),
  xl: cssVar("container-xl", "36rem"),
  "2xl": cssVar("container-2xl", "42rem"),
  "3xl": cssVar("container-3xl", "48rem"),
  "4xl": cssVar("container-4xl", "56rem"),
  "5xl": cssVar("container-5xl", "64rem"),
  "6xl": cssVar("container-6xl", "72rem"),
  "7xl": cssVar("container-7xl", "80rem"),
};

export const allSizesVars: CssVar[] = [
  spacing,
  ...Object.values(breakpoint),
  ...Object.values(container),
];
