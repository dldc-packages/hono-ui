import { css, cx } from "hono/css";
import type { CSSProperties } from "hono/jsx";
import * as tokens from "../tokens.ts";
import * as utility from "../utility.ts";

export type ButtonVariant = "secondary" | "primary" | "danger";

export function getButtonClassName(
  disabled?: boolean,
  classProp?: string | Promise<string>,
  variant: ButtonVariant = "secondary",
  interactive = true,
) {
  const baseClassName = css`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    outline: none;
    position: relative;
    ${utility.cornerShape.superellipse};
    background-color: var(--button-bg);
    border-radius: calc(var(--button-size) / 4);
    min-height: var(--button-size);
    --button-padding: calc(max(round(down, -0.74 + 0.36 * (var(--button-size) / 0.25rem), 0.25)) * 0.25rem);
    --button-content-size: calc(var(--button-size) - var(--button-padding) * 2);
    line-height: var(--button-content-size);
    font-size: calc(var(--button-content-size) * 0.8);
    padding-left: calc(var(--button-padding) * 1.5);
    padding-right: calc(var(--button-padding) * 1.5);
    color: var(--button-fg);
    gap: var(--button-padding);

    /* Used for focus and highlight border */
    &::after {
      border-radius: inherit;
      ${utility.cornerShape.inherits};
      pointer-events: none;
      content: "";
      position: absolute;
      inset: 0;
    }

    /* Used for visual border for input and surface variants */
    &::before {
      border-radius: inherit;
      ${utility.cornerShape.inherits};
      pointer-events: none;
      content: "";
      position: absolute;
      inset: 0;
      border-width: 0.5px;
      border-color: var(--button-border);
    }
  `;

  const variantClasses: Record<ButtonVariant, string | Promise<string>> = {
    secondary: css`
      --button-bg: ${utility.opacity(tokens.c("white"), 5)};
      --button-fg: ${tokens.c("neutral.200")};
      --button-bg-hover: ${utility.opacity(tokens.c("white"), 10)};
      --button-fg-hover: ${tokens.c("neutral.100")};
      --button-border: ${utility.opacity(tokens.c("white"), 10)};
    `,
    primary: css`
      --button-bg: ${tokens.c("blue.700")};
      --button-fg: ${tokens.c("white")};
      --button-bg-hover: ${tokens.c("blue.600")};
      --button-fg-hover: ${tokens.c("white")};
      --button-border: ${utility.opacity(tokens.c("blue.400"), 40)};
    `,
    danger: css`
      --button-bg: ${tokens.c("red.700")};
      --button-fg: ${tokens.c("white")};
      --button-bg-hover: ${tokens.c("red.600")};
      --button-fg-hover: ${tokens.c("white")};
      --button-border: ${utility.opacity(tokens.c("red.400"), 40)};
    `,
  };

  const interactiveClass = css`
    &:hover {
      background-color: var(--button-bg-hover);
      color: var(--button-fg-hover);
    }
  `;

  const disabledClass = css`
    opacity: 0.5;
    cursor: not-allowed;
  `;

  const variantClass = variantClasses[variant];

  return cx(baseClassName, interactive ? interactiveClass : undefined, variantClass, disabled ? disabledClass : undefined, classProp);
}

export function getButtonStyle(size: number, styleProp?: CSSProperties): CSSProperties {
  return {
    ["--button-size"]: tokens.x(size),
    ...styleProp,
  };
}
