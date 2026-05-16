import * as c from "@dldc/css-builder";
import type { CSSProperties } from "hono/jsx";
import type { JSX } from "hono/jsx/jsx-runtime";
import { css } from "../css.ts";
import * as tokens from "../tokens.ts";
import { resolveClassNames } from "../utils/resolveClassNames.ts";
import type { ComponentPropsMerge } from "../utils/types.ts";

export type IconProps = ComponentPropsMerge<
  {
    /**
     * Raw SVG markup.
     *
     * This value is rendered with dangerouslySetInnerHTML, so it must come
     * from a trusted and sanitized source.
     */
    icon: string;
    size?: number;
    color?: string;
  }
>;

const className = css({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: c.var("--icon-size", c.var("--button-content-size", tokens.x(5))),
  height: c.var("--icon-size", c.var("--button-content-size", tokens.x(5))),
  color: c.var("--icon-color", "inherit"),
  lineHeight: "none",
  selectors: {
    "& > svg": {
      width: "full",
      height: "full",
      display: "block",
      color: c.var("--icon-color", "currentColor"),
    },
  },
});

export function Icon({
  icon,
  size,
  style: styleProp,
  class: classProp,
  color,
  ...rest
}: IconProps): JSX.Element {
  const style: CSSProperties = {
    ...(size !== undefined ? { ["--icon-size"]: tokens.x(size) } : {}),
    ...(color !== undefined ? { ["--icon-color"]: color } : {}),
    ...styleProp,
  };

  return (
    <span
      class={resolveClassNames(classProp, className)}
      style={style}
      dangerouslySetInnerHTML={{ __html: icon }}
      aria-hidden="true"
      {...rest}
    />
  );
}
