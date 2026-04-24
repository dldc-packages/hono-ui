import { tokens, utility } from "@dldc/hono-ui";
import { css, cx } from "hono/css";
import type { CSSProperties } from "hono/jsx";
import type { JSX } from "hono/jsx/jsx-runtime";
import type { Merge } from "type-fest";

export type ButtonProps = Merge<JSX.IntrinsicElements["button"], {
  type?: "button" | "submit" | "reset";
  href?: string;
  disabled?: boolean;
  size?: number;
  style?: CSSProperties;
}>;

export function Button({
  type = "button",
  children,
  href,
  disabled,
  size = 8,
  style: styleProp,
  class: classProp,
  ...rest
}: ButtonProps): JSX.Element {
  const baseClassName = css`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    outline: none;
    position: relative;
    corner-shape: superellipse(1.5);
    background-color: ${utility.opacity(tokens.c("white"), 5)};
    border-radius: calc(var(--button-size) / 4);
    min-height: var(--button-size);
    --button-padding: calc(max(round(down, -0.74 + 0.36 * (var(--button-size) / 0.25rem), 0.25)) * 0.25rem);
    --button-content-size: calc(var(--button-size) - var(--button-padding) * 2);
    line-height: var(--button-content-size);
    font-size: calc(var(--button-content-size) * 0.8);
    padding-left: calc(var(--button-padding) * 1.5);
    padding-right: calc(var(--button-padding) * 1.5);
    color: ${tokens.c("neutral.200")};
    gap: var(--button-padding);

    &:hover {
      background-color: ${utility.opacity(tokens.c("white"), 10)};
      color: ${tokens.c("neutral.100")};
    }

    /* Used for focus and highlight border */
    &::after {
      border-radius: inherit;
      corner-shape: inherit;
      pointer-events: none;
      content: "";
      position: absolute;
      inset: 0;
    }

    /* Used for visual border for input and surface variants */
    &::before {
      border-radius: inherit;
      corner-shape: inherit;
      pointer-events: none;
      content: "";
      position: absolute;
      inset: 0;
      border-width: 0.5px;
      border-color: ${utility.opacity(tokens.c("white"), 10)};
    }
  `;

  const disabledClass = css`
    opacity: 0.5;
    cursor: not-allowed;
  `;

  const style: CSSProperties = {
    ["--button-size"]: tokens.x(size),
    ...styleProp,
  };

  const className = cx(baseClassName, disabled ? disabledClass : undefined, classProp);

  if (href) {
    return (
      <a
        href={disabled ? "#" : href}
        class={className}
        onclick={disabled ? (e: Event) => e.preventDefault() : undefined}
        style={style}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} class={className} disabled={disabled} style={style} {...rest}>
      {children}
    </button>
  );
}
