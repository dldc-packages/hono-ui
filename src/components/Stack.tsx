import { css } from "hono/css";
import type { JSX } from "hono/jsx/jsx-runtime";
import type { Merge } from "type-fest";
import { flex, type FlexConfig } from "../utility.ts";
import { type Inlines, mergeInlines } from "../utils.ts";

export type StackProps = Merge<JSX.IntrinsicElements["div"], FlexConfig & { inlines?: Inlines }>;

export function Stack({
  direction,
  align,
  justify,
  gap,
  padding,
  class: classProp,
  inlines,
  ...rest
}: StackProps): JSX.Element {
  const className = css`
    ${flex({ direction, align, justify, gap, padding })};
  `;

  return <div class={mergeInlines(inlines, className, classProp)} {...rest} />;
}
