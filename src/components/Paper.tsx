import { css } from "hono/css";
import type { CSSProperties } from "hono/jsx";
import type { JSX } from "hono/jsx/jsx-runtime";
import type { Merge } from "type-fest";
import * as tokens from "../tokens.ts";
import * as utility from "../utility.ts";
import { type Inlines, mergeInlines } from "../utils.ts";

export type PaperProps = Merge<JSX.IntrinsicElements["div"], {
  rounded?: number;
  style?: CSSProperties;
  inlines?: Inlines;

  // Flex
  flexDirection?: "none" | "row" | "column";
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  gap?: number;
  padding?: number;
}>;

export function Paper(
  { children, rounded = 2, style: styleProp, class: classProp, inlines, flexDirection, align, justify, gap, padding, ...rest }: PaperProps,
): JSX.Element {
  const className = css`
    ${utility.cornerShape.superellipse};
    ${utility.bg("neutral.900")};
    border-width: 0.5px;
    border-color: ${utility.opacity(tokens.c("white"), 10)};
    border-radius: var(--paper-radius);
    ${flexDirection !== "none" ? utility.flex({ direction: flexDirection, align, justify, gap, padding }) : ""};
  `;

  const style: CSSProperties = {
    ["--paper-radius"]: tokens.x(rounded),
    ...styleProp,
  };

  return (
    <div class={mergeInlines(inlines, className, classProp)} style={style} {...rest}>
      {children}
    </div>
  );
}
