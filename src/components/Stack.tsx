import { css } from "hono/css";
import type { JSX } from "hono/jsx/jsx-runtime";
import type { Merge } from "type-fest";
import { flex, type FlexConfig } from "../utility.ts";
import { type Inlines, mergeInlines } from "../utils.ts";
import { createRender } from "../utils/create-render.ts";

export type StackProps = Merge<JSX.IntrinsicElements["div"], FlexConfig & { inlines?: Inlines; render?: JSX.Element }>;

export function Stack({
  direction,
  align,
  justify,
  gap,
  padding,
  wrap,
  class: classProp,
  inlines,
  render,
  ...rest
}: StackProps): JSX.Element {
  const className = css`
    ${flex({ direction, align, justify, gap, padding, wrap })};
  `;

  return createRender("div", render, {
    class: mergeInlines(inlines, className, classProp),
    ...rest,
  });
}
