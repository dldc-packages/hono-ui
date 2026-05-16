import type { JSX } from "hono/jsx/jsx-runtime";
import { css, type CssObj } from "../css.ts";
import { createRender } from "../utils/create-render.ts";
import { resolveClassNames } from "../utils/resolveClassNames.ts";
import type { ComponentPropsMerge } from "../utils/types.ts";

export type StackProps = ComponentPropsMerge<
  Pick<CssObj, "alignItems" | "flexDirection" | "justifyContent" | "gap" | "padding" | "flexWrap">
>;

export function Stack({
  flexDirection,
  alignItems,
  justifyContent,
  gap,
  padding,
  flexWrap,
  class: classProp,
  render,
  ...rest
}: StackProps): JSX.Element {
  const className = css({
    display: "flex",
    flexDirection,
    alignItems,
    justifyContent,
    gap,
    padding,
    flexWrap,
  });

  return createRender("div", render, {
    class: resolveClassNames(classProp, className),
    ...rest,
  });
}
