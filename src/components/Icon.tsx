import { css } from "hono/css";
import type { CSSProperties } from "hono/jsx";
import type { JSX } from "hono/jsx/jsx-runtime";
import type { Merge } from "type-fest";
import * as tokens from "../tokens.ts";
import * as utility from "../utility.ts";
import { type Inlines, mergeInlines } from "../utils.ts";

export type IconProps = Merge<
  Omit<JSX.IntrinsicElements["span"], "dangerouslySetInnerHTML" | "children">,
  {
    /**
     * Raw SVG markup.
     *
     * This value is rendered with dangerouslySetInnerHTML, so it must come
     * from a trusted and sanitized source.
     */
    icon: string;
    size?: number;
    style?: CSSProperties;
    inlines?: Inlines;
    color?: string;
  }
>;

export function Icon({
  icon,
  size,
  style: styleProp,
  class: classProp,
  inlines,
  color,
  ...rest
}: IconProps): JSX.Element {
  const className = css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size, var(--button-content-size, ${tokens.x(5)}));
    height: var(--icon-size, var(--button-content-size, ${tokens.x(5)}));
    color: var(--icon-color, inherit);
    line-height: 0;

    & > svg {
      ${utility.w.full};
      ${utility.h.full};
      display: block;
      color: var(--icon-color, currentColor);
    }
  `;

  const style: CSSProperties = {
    ...(size !== undefined ? { ["--icon-size"]: tokens.x(size) } : {}),
    ...(color !== undefined ? { ["--icon-color"]: color } : {}),
    ...styleProp,
  };

  return (
    <span
      class={mergeInlines(inlines, className, classProp)}
      style={style}
      dangerouslySetInnerHTML={{ __html: icon }}
      aria-hidden="true"
      {...rest}
    />
  );
}
