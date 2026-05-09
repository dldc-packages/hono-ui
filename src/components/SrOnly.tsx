import type { JSX } from "hono/jsx/jsx-runtime";
import type { Merge } from "type-fest";
import { srOnly } from "../utility.ts";
import { type Inlines, mergeInlines } from "../utils.ts";
import { createRender, type RenderProp } from "../utils/create-render.ts";

export type SrOnlyProps = Merge<
  JSX.IntrinsicElements["div"],
  {
    inlines?: Inlines;
    render?: RenderProp;
  }
>;

export function SrOnly({
  class: classProp,
  inlines,
  render,
  ...rest
}: SrOnlyProps): JSX.Element {
  return createRender("div", render, {
    class: mergeInlines(inlines, srOnly, classProp),
    ...rest,
  });
}
