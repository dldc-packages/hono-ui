import type { JSX } from "hono/jsx/jsx-runtime";
import { css, type CssObj } from "../css.ts";
import { createRender } from "../utils/create-render.ts";
import { resolveClassNames } from "../utils/resolveClassNames.ts";
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
  const className = resolveClassNames(
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
