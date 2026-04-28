import { css, cx } from "hono/css";
import type { CSSProperties } from "hono/jsx";
import type { JSX } from "hono/jsx/jsx-runtime";
import type { Merge } from "type-fest";
import * as tokens from "../tokens.ts";

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
  }
>;

export function Icon({
  icon,
  size,
  style: styleProp,
  class: classProp,
  ...rest
}: IconProps): JSX.Element {
  const className = css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size, var(--button-content-size, ${tokens.x(5)}));
    height: var(--icon-size, var(--button-content-size, ${tokens.x(5)}));
    line-height: 0;
    color: inherit;

    & > svg {
      width: 100%;
      height: 100%;
      display: block;
      color: currentColor;
    }
  `;

  const style: CSSProperties = {
    ...(size !== undefined ? { ["--icon-size"]: tokens.x(size) } : {}),
    ...styleProp,
  };

  return (
    <span
      class={cx(className, classProp)}
      style={style}
      dangerouslySetInnerHTML={{ __html: icon }}
      aria-hidden="true"
      {...rest}
    />
  );
}
