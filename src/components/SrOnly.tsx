import type { JSX } from "hono/jsx/jsx-runtime";
import { css } from "../css.ts";
import { createRender } from "../utils/create-render.ts";
import { resolveClassNames } from "../utils/resolveClassNames.ts";
import type { ComponentPropsBase } from "../utils/types.ts";

export const srOnlyClass: Promise<string> = css({
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: 0,
  margin: "[-1px]",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: "none",
});

export type SrOnlyProps = ComponentPropsBase;

export function SrOnly({
  classList,
  render,
  ...rest
}: SrOnlyProps): JSX.Element {
  return createRender("div", render, {
    class: resolveClassNames(srOnlyClass, classList),
    ...rest,
  });
}
