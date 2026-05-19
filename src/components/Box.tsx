import type { JSX } from "hono/jsx/jsx-runtime";
import { cxClassList } from "../utils/class-list.ts";
import { createRender } from "../utils/create-render.ts";
import type { ComponentPropsBase } from "../utils/types.ts";

export type BoxProps = ComponentPropsBase;

export function Box({
  classList,
  render,
  ...rest
}: BoxProps): JSX.Element {
  return createRender("div", render, {
    class: cxClassList(classList),
    ...rest,
  });
}
