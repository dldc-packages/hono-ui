import { css, cx } from "hono/css";
import type { CSSProperties } from "hono/jsx";
import * as tokens from "../tokens.ts";
import * as utility from "../utility.ts";

export function getButtonClassName(disabled?: boolean, classProp?: string | Promise<string>) {
  const baseClassName = css`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    outline: none;
    position: relative;
    ${utility.cornerSuperellipse()};
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
      pointer-events: none;
      content: "";
      position: absolute;
      inset: 0;
    }

    /* Used for visual border for input and surface variants */
    &::before {
      border-radius: inherit;
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

  return cx(baseClassName, disabled ? disabledClass : undefined, classProp);
}

export function getButtonStyle(size: number, styleProp?: CSSProperties): CSSProperties {
  return {
    ["--button-size"]: tokens.x(size),
    ...styleProp,
  };
}
