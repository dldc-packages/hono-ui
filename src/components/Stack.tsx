import { css } from "hono/css";
import type { JSXNode, ReactElement } from "hono/jsx";
import type { JSX } from "hono/jsx/jsx-runtime";
import type { Merge } from "type-fest";
import { flex, type FlexConfig } from "../utility.ts";
import { type Inlines, mergeInlines } from "../utils.ts";
import { createRender } from "../utils/create-render.ts";

export type StackProps = Merge<JSX.IntrinsicElements["div"], FlexConfig & { inlines?: Inlines; render?: ReactElement }>;

export function Stack({
  direction,
  align,
  justify,
  gap,
  padding,
  class: classProp,
  inlines,
  render,
  ...rest
}: StackProps): JSXNode {
  const className = css`
    ${flex({ direction, align, justify, gap, padding })};
  `;

  return createRender("div", render, {
    class: mergeInlines(inlines, className, classProp),
    ...rest,
  });
}
