import type { JSXNode, ReactElement } from "hono/jsx";
import type { JSX } from "hono/jsx/jsx-runtime";
import type { Merge } from "type-fest";
import { type Inlines, mergeInlines } from "../utils.ts";
import { createRender } from "../utils/create-render.ts";

export type BoxProps = Merge<JSX.IntrinsicElements["div"], { inlines?: Inlines; render?: ReactElement }>;

export function Box({
  class: classProp,
  inlines,
  render,
  ...rest
}: BoxProps): JSXNode {
  return createRender("div", render, {
    class: mergeInlines(inlines, classProp),
    ...rest,
  });
}
