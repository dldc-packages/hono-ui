import type { JSX } from "hono/jsx/jsx-runtime";
import { createRender } from "../utils/create-render.ts";
import { resolveClassNames } from "../utils/resolveClassNames.ts";
import type { ComponentPropsBase } from "../utils/types.ts";

export type BoxProps = ComponentPropsBase;

export function Box({
  class: classProp,
  render,
  ...rest
}: BoxProps): JSX.Element {
  return createRender("div", render, {
    class: resolveClassNames(classProp),
    ...rest,
  });
}
