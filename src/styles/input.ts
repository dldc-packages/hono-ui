import { css, cx } from "hono/css";
import type { CSSProperties } from "hono/jsx";
import * as tokens from "../tokens.ts";
import * as utility from "../utility.ts";

export function getInputClassName(disabled?: boolean, classProp?: string) {
  const baseClassName = css`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    outline: none;
    position: relative;
    ${utility.cornerShape.superellipse};
    background-color: ${utility.opacity(tokens.c("black"), 20)};
    border-radius: calc(var(--input-size) / 4);
    min-height: var(--input-size);
    --input-padding: calc(max(round(down, -0.74 + 0.36 * (var(--input-size) / 0.25rem), 0.25)) * 0.25rem);
    --input-content-size: calc(var(--input-size) - var(--input-padding) * 2);
    color: ${tokens.c("neutral.200")};
    min-width: calc(var(--input-size) * 5);

    &:hover {
      background-color: ${utility.opacity(tokens.c("black"), 5)};
      color: ${tokens.c("neutral.100")};
    }

    &:focus-within {
      background-color: ${utility.opacity(tokens.c("black"), 5)};
      color: ${tokens.c("neutral.100")};
    }

    /* Used for focus and highlight border */
    &::after {
      border-radius: inherit;
      ${utility.cornerShape.inherits};
      pointer-events: none;
      content: "";
      position: absolute;
      inset: 0;
    }

    &:focus-within::after {
      border-width: 1px;
      border-color: ${utility.opacity(tokens.c("neutral.300"), 40)};
    }

    /* Used for visual border */
    &::before {
      display: block;
      border-radius: inherit;
      ${utility.cornerShape.inherits};
      pointer-events: none;
      content: "";
      position: absolute;
      inset: 0;
      border-width: 1px;
      border-color: ${utility.opacity(tokens.c("black"), 30)};
    }
  `;

  const disabledClass = css`
    color: ${utility.opacity(tokens.c("neutral.200"), 15)};
    background-color: ${utility.opacity(tokens.c("black"), 22)};
    cursor: not-allowed;

    &:hover,
    &:focus-within {
      color: ${utility.opacity(tokens.c("neutral.200"), 15)};
      background-color: ${utility.opacity(tokens.c("black"), 22)};
    }

    &::before {
      border-color: ${utility.opacity(tokens.c("black"), 20)};
    }

    &::after {
      border-width: 0;
    }
  `;

  return cx(baseClassName, disabled ? disabledClass : undefined, classProp);
}

export function getInputFieldClassName() {
  return css`
    width: 100%;
    min-height: var(--input-size);
    border: none;
    background: transparent;
    color: inherit;
    outline: none;
    line-height: var(--input-content-size);
    font-size: calc(var(--input-content-size) * 0.8);
    padding-left: calc(var(--input-padding) * 1.5);
    padding-right: calc(var(--input-padding) * 1.5);

    &::placeholder {
      color: ${utility.opacity(tokens.c("white"), 30)};
    }

    &:disabled {
      cursor: not-allowed;
      caret-color: transparent;
    }

    &:disabled::placeholder {
      color: ${utility.opacity(tokens.c("white"), 15)};
    }
  `;
}

export function getInputStyle(size: number, styleProp?: CSSProperties): CSSProperties {
  return {
    ["--input-size"]: tokens.x(size),
    ...styleProp,
  };
}
