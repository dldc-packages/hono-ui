import type { JSX } from "hono/jsx/jsx-runtime";
import { css, type CssObj } from "../css.ts";
import { cxClassList } from "../utils/class-list.ts";
import { createRender } from "../utils/create-render.ts";
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
  classList,
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
    class: cxClassList(className, classList),
    ...rest,
  });
}
