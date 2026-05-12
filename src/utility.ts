import * as tokens from "./tokens.ts";

export const p = {
  all: (size: number): string => `padding: ${tokens.x(size)}`,
  x: (size: number): string => `padding-left: ${tokens.x(size)}; padding-right: ${tokens.x(size)}`,
  y: (size: number): string => `padding-top: ${tokens.x(size)}; padding-bottom: ${tokens.x(size)}`,
  t: (size: number): string => `padding-top: ${tokens.x(size)}`,
  r: (size: number): string => `padding-right: ${tokens.x(size)}`,
  b: (size: number): string => `padding-bottom: ${tokens.x(size)}`,
  l: (size: number): string => `padding-left: ${tokens.x(size)}`,
};

export const m = {
  all: (size: number): string => `margin: ${tokens.x(size)}`,
  x: (size: number): string => `margin-left: ${tokens.x(size)}; margin-right: ${tokens.x(size)}`,
  y: (size: number): string => `margin-top: ${tokens.x(size)}; margin-bottom: ${tokens.x(size)}`,
  t: (size: number): string => `margin-top: ${tokens.x(size)}`,
  r: (size: number): string => `margin-right: ${tokens.x(size)}`,
  b: (size: number): string => `margin-bottom: ${tokens.x(size)}`,
  l: (size: number): string => `margin-left: ${tokens.x(size)}`,
};

export const gap = {
  all: (size: number): string => `gap: ${tokens.x(size)}`,
  column: (size: number): string => `column-gap: ${tokens.x(size)}`,
  row: (size: number): string => `row-gap: ${tokens.x(size)}`,
};

export const border = {
  radius: (size: number): string => `border-radius: ${tokens.x(size)}`,
  shape: {
    superellipse: "corner-shape: superellipse(1.5)",
    inherits: "corner-shape: inherit",
  },
  width: (size: number): string => `border-width: ${tokens.x(size)}`,
  color: (color: tokens.ColorKey): string => `border-color: ${tokens.c(color)}`,
  none: "border: none",
  raw: (value: string): string => `border: ${value}`,
};

export const bg = {
  c: (color: tokens.ColorKey): string => `background-color: ${tokens.c(color)}`,
  transparent: "background: transparent",
  raw: (value: string): string => `background: ${value}`,
};

export const color = {
  c: (color: tokens.ColorKey): string => `color: ${tokens.c(color)}`,
  inherit: "color: inherit",
  raw: (value: string): string => `color: ${value}`,
};

export const font = {
  weight: (weight: tokens.FontWeightKey): string => `font-weight: ${tokens.fontWeight[weight].var}`,
  family: (font: tokens.FontKey): string => `font-family: ${tokens.font[font].var}`,
  size: (size: tokens.TextSizeKey): string =>
    `font-size: ${tokens.textSize[size].var}; line-height: var(--tw-leading, ${tokens.lineHeight[size].var})`,
};

export const outline = { none: "outline: none" };

export const cursor = { notAllowed: "cursor: not-allowed" };

export const w = {
  x: (size: number): string => `width: ${tokens.x(size)}`,
  full: "width: 100%",
};

export const h = {
  x: (size: number): string => `height: ${tokens.x(size)}`,
  full: "height: 100%",
};

export interface FlexConfig {
  direction?: "row" | "column";
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  gap?: number;
  padding?: number;
  wrap?: boolean;
}

export const flex = {
  grow: (value: number): string => `flex-grow: ${value}`,
  shrink: (value: number): string => `flex-shrink: ${value}`,
  alignItems: {
    start: "align-items: flex-start",
    center: "align-items: center",
    end: "align-items: flex-end",
    stretch: "align-items: stretch",
  },
  justifyContent: {
    start: "justify-content: flex-start",
    center: "justify-content: center",
    end: "justify-content: flex-end",
    between: "justify-content: space-between",
    around: "justify-content: space-around",
    evenly: "justify-content: space-evenly",
  },
  wrap: "flex-wrap: wrap",
  config: ({ direction, align, justify, gap, padding, wrap }: FlexConfig = {}): string => {
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
    ${wrap ? "flex-wrap: wrap;" : ""}
  `;
  },
};

export const flexGrow = (value: number): string => `flex-grow: ${value}`;
export const flexShrink = (value: number): string => `flex-shrink: ${value}`;

export const srOnly: string = `
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

export const fontFamily = (font: tokens.FontKey): string => `font-family: ${tokens.font[font].var}`;
