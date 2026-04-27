import { css, cx } from "hono/css";
import type { JSX } from "hono/jsx/jsx-runtime";
import type { Merge } from "type-fest";
import { flex, type FlexConfig } from "../utility.ts";

export type StackProps = Merge<JSX.IntrinsicElements["div"], FlexConfig>;

export function Stack({
  direction,
  align,
  justify,
  gap,
  padding,
  class: classProp,
  ...rest
}: StackProps): JSX.Element {
  const className = css`
    ${flex({ direction, align, justify, gap, padding })};
  `;

  return <div class={cx(className, classProp)} {...rest} />;
}
