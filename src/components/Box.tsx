import type { JSX } from "hono/jsx/jsx-runtime";
import type { Merge } from "type-fest";
import { type Inlines, mergeInlines } from "../utils.ts";
import { createRender, type RenderProp } from "../utils/create-render.ts";

export type BoxProps = Merge<JSX.IntrinsicElements["div"], {
  inlines?: Inlines;
  render?: RenderProp;
}>;

export function Box({
  class: classProp,
  inlines,
  render,
  ...rest
}: BoxProps): JSX.Element {
  return createRender("div", render, {
    class: mergeInlines(inlines, classProp),
    ...rest,
  });
}
