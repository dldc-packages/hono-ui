import * as tokens from "./tokens.ts";

export const p = (size: number): string => `padding: ${tokens.x(size)}`;
export const px = (size: number): string => `padding-left: ${tokens.x(size)}; padding-right: ${tokens.x(size)}`;
export const py = (size: number): string => `padding-top: ${tokens.x(size)}; padding-bottom: ${tokens.x(size)}`;
export const pt = (size: number): string => `padding-top: ${tokens.x(size)}`;
export const pr = (size: number): string => `padding-right: ${tokens.x(size)}`;
export const pb = (size: number): string => `padding-bottom: ${tokens.x(size)}`;
export const pl = (size: number): string => `padding-left: ${tokens.x(size)}`;

export const m = (size: number): string => `margin: ${tokens.x(size)}`;
export const mx = (size: number): string => `margin-left: ${tokens.x(size)}; margin-right: ${tokens.x(size)}`;
export const my = (size: number): string => `margin-top: ${tokens.x(size)}; margin-bottom: ${tokens.x(size)}`;
export const mt = (size: number): string => `margin-top: ${tokens.x(size)}`;
export const mr = (size: number): string => `margin-right: ${tokens.x(size)}`;
export const mb = (size: number): string => `margin-bottom: ${tokens.x(size)}`;
export const ml = (size: number): string => `margin-left: ${tokens.x(size)}`;

export const gap = (size: number): string => `gap: ${tokens.x(size)}`;
export const rowGap = (size: number): string => `row-gap: ${tokens.x(size)}`;
export const columnGap = (size: number): string => `column-gap: ${tokens.x(size)}`;

export const bg = (color: tokens.ColorKey): string => `background-color: ${tokens.c(color)}`;
export const textColor = (color: tokens.ColorKey): string => `color: ${tokens.c(color)}`;

export const textSize = (size: tokens.TextSizeKey): string =>
  `font-size: ${tokens.textSize[size].var}; line-height: var(--tw-leading, ${tokens.lineHeight[size].var})`;

export const fontWeight = (weight: tokens.FontWeightKey): string => `font-weight: ${tokens.fontWeight[weight].var}`;

export const opacity = (colorVar: string, value: number): string => `color-mix(in oklab, ${colorVar} ${value.toFixed()}%, transparent)`;
export const cornerShape = {
  superellipse: "corner-shape: superellipse(1.5)",
  inherits: "corner-shape: inherit",
};

export interface FlexConfig {
  direction?: "row" | "column";
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  gap?: number;
  padding?: number;
}

export const flex = ({ direction, align, justify, gap, padding }: FlexConfig = {}): string => {
  const alignItems = align === "start" ? "flex-start" : align === "end" ? "flex-end" : align;
  const justifyContent = justify
    ? {
      start: "flex-start",
      center: "center",
      end: "flex-end",
      between: "space-between",
      around: "space-around",
      evenly: "space-evenly",
    }[justify]
    : null;

  return `
    display: flex;
    ${direction ? `flex-direction: ${direction};` : ""}
    ${alignItems ? `align-items: ${alignItems};` : ""}
    ${justifyContent ? `justify-content: ${justifyContent};` : ""}
    ${gap !== undefined ? `gap: ${tokens.x(gap)};` : ""}
    ${padding !== undefined ? `padding: ${tokens.x(padding)};` : ""}
  `;
};

export const fontFamily = (font: tokens.FontKey): string => `font-family: ${tokens.font[font].var}`;
