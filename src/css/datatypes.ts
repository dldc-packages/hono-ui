import { Ast, serialize } from "@dldc/css-builder";
import * as tokens from "../tokens.ts";
import type { CssVar } from "../tokens/utils.ts";
import type { DatatypeMapper } from "./types.ts";

export const x: DatatypeMapper = {
  mapper(value, next): string {
    if (typeof value === "number") {
      if (value === 0) {
        return "0";
      }
      return (tokens.x(value));
    }
    return next(value);
  },
  types: ["number"],
};

const OPACITY = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95] as const;
export type OpacityNumber = typeof OPACITY[number];
export type ColorOpacityValue = `${tokens.ColorKey}/${OpacityNumber}`;
export const colorOpacity: DatatypeMapper = {
  mapper(value, next): string {
    if (typeof value !== "string") {
      return next(value);
    }
    const [colorKey, opacityStr] = value.split("/") as [tokens.ColorKey, string];
    if (!colorKey || !opacityStr) {
      return next(value);
    }
    const opacity = parseInt(opacityStr, 10);
    if (isNaN(opacity) || !OPACITY.includes(opacity as typeof OPACITY[number])) {
      return next(value);
    }
    if (!tokens.colors[colorKey]) {
      return next(value);
    }
    return tokens.opacity(tokens.c(colorKey), opacity);
  },
  types: ["ColorOpacityValue"],
};

export type RawValue = `[${string}]`;
export const raw: DatatypeMapper = {
  mapper(value, next): string {
    if (typeof value === "string" && value.startsWith("[") && value.endsWith("]")) {
      return value.slice(1, -1);
    }
    return next(value);
  },
  types: ["RawValue"],
};

export const number: DatatypeMapper = {
  mapper(value, next): string {
    if (typeof value === "number") {
      return value.toString();
    }
    return next(value);
  },
  types: ["number"],
};

function tokenDatatype(values: Record<string, CssVar>, type: string): DatatypeMapper {
  return {
    mapper(value, next): string {
      if (values[value as keyof typeof values]) {
        return values[value as keyof typeof values].var;
      }
      return next(value);
    },
    types: [type],
  };
}

export const color: DatatypeMapper = tokenDatatype(tokens.colors, "tokens.ColorKey");
export const fontSize: DatatypeMapper = tokenDatatype(tokens.fontSize, "tokens.FontSizeKey");
export const lineHeight: DatatypeMapper = tokenDatatype(tokens.lineHeight, "tokens.LineHeightKey");
export const fontWeight: DatatypeMapper = tokenDatatype(tokens.fontWeight, "tokens.FontWeightKey");
export const fontFamily: DatatypeMapper = tokenDatatype(tokens.fontFamily, "tokens.FontFamilyKey");
export const shadow: DatatypeMapper = tokenDatatype(tokens.shadow, "tokens.ShadowKey");

export type PxValue = `${number}px`;
export const px: DatatypeMapper = {
  mapper(value, next): string {
    if (typeof value === "string" && value.endsWith("px")) {
      const num = parseFloat(value.slice(0, -2));
      if (!isNaN(num)) {
        return `${num}px`;
      }
    }
    return next(value);
  },
  types: ["PxValue"],
};

export type CssVarValue = `var(--${string})`;
export const cssVar: DatatypeMapper = {
  mapper(value, next): string {
    if (typeof value === "string" && value.startsWith("var(--") && value.endsWith(")")) {
      return value;
    }
    return next(value);
  },
  types: ["CssVarValue"],
};

export type CssExprValue = Ast.AstNode;
export const cssExpr: DatatypeMapper = {
  mapper(value, next): string {
    if (Ast.isAst(value)) {
      return serialize(value);
    }
    return next(value);
  },
  types: ["CssExprValue"],
};

export const repeat: DatatypeMapper = {
  mapper(value, next): string {
    if (typeof value === "number") {
      return `repeat(${value}, minmax(0, 1fr))`;
    }
    return next(value);
  },
  types: ["number"],
};

// deno-lint-ignore ban-types
export type AnyStringValue = string & {};
export const anyString: DatatypeMapper = {
  mapper(value, next): string {
    if (typeof value === "string") {
      return value;
    }
    return next(value);
  },
  types: ["AnyStringValue"],
};
