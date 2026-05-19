import type { JSX } from "hono/jsx/jsx-runtime";
import { css, type CssObj } from "../css.ts";
import { cxClassList } from "../utils/class-list.ts";
import { createRender } from "../utils/create-render.ts";
import type { ComponentPropsMerge } from "../utils/types.ts";

export type TypographyProps = ComponentPropsMerge<
  Pick<CssObj, "fontSize" | "color" | "fontWeight">
>;

export function Typography({
  classList,
  render,
  fontSize,
  color,
  fontWeight,
  ...rest
}: TypographyProps): JSX.Element {
  const className = cxClassList(
    fontSize ? css({ fontSize: fontSize }) : null,
    color ? css({ color: color }) : null,
    fontWeight ? css({ fontWeight: fontWeight }) : null,
    classList,
  );

  return createRender("p", render, {
    class: className,
    ...rest,
  });
}
