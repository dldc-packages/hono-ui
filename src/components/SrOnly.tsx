import type { JSX } from "hono/jsx/jsx-runtime";
import { srOnly } from "../utility.ts";
import { createRender } from "../utils/create-render.ts";
import { resolveClassNames } from "../utils/resolveClassNames.ts";
import type { ComponentPropsBase } from "../utils/types.ts";

export type SrOnlyProps = ComponentPropsBase;

export function SrOnly({
  class: classProp,
  render,
  ...rest
}: SrOnlyProps): JSX.Element {
  return createRender("div", render, {
    class: resolveClassNames(classProp, srOnly),
    ...rest,
  });
}
