import { css, cx } from "hono/css";
import type { CSSProperties } from "hono/jsx";
import * as tokens from "../tokens.ts";
import * as utility from "../utility.ts";

export function getInputClassName(disabled?: boolean, classProp?: string | Promise<string>, error?: boolean, readOnly?: boolean) {
  const baseClassName = css`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    ${utility.outline.none};
    position: relative;
    ${utility.border.shape.superellipse};
    background-color: ${tokens.opacity(tokens.c("black"), 20)};
    border-radius: calc(var(--input-size) / 4);
    min-height: var(--input-size);
    --input-padding: calc(max(round(down, -0.74 + 0.36 * (var(--input-size) / 0.25rem), 0.25)) * 0.25rem);
    --input-content-size: calc(var(--input-size) - var(--input-padding) * 2);
    color: ${tokens.c("neutral.200")};
    min-width: calc(var(--input-size) * 5);

    &:hover {
      background-color: ${tokens.opacity(tokens.c("black"), 5)};
      color: ${tokens.c("neutral.100")};
    }

    &:focus-within {
      background-color: ${tokens.opacity(tokens.c("black"), 5)};
      color: ${tokens.c("neutral.100")};
    }

    /* Used for focus and highlight border */
    &::after {
      border-radius: inherit;
      ${utility.border.shape.inherits};
      pointer-events: none;
      content: "";
      position: absolute;
      inset: 0;
    }

    &:focus-within::after {
      border-width: 1px;
      border-color: ${tokens.opacity(tokens.c("neutral.300"), 40)};
    }

    /* Used for visual border */
    &::before {
      display: block;
      border-radius: inherit;
      ${utility.border.shape.inherits};
      pointer-events: none;
      content: "";
      position: absolute;
      inset: 0;
      border-width: 1px;
      border-color: ${tokens.opacity(tokens.c("black"), 30)};
    }
  `;

  const disabledClass = css`
    color: ${tokens.opacity(tokens.c("neutral.200"), 15)};
    background-color: ${tokens.opacity(tokens.c("black"), 22)};
    ${utility.cursor.notAllowed};

    &:hover,
    &:focus-within {
      color: ${tokens.opacity(tokens.c("neutral.200"), 15)};
      background-color: ${tokens.opacity(tokens.c("black"), 22)};
    }

    &::before {
      border-color: ${tokens.opacity(tokens.c("black"), 20)};
    }

    &::after {
      border-width: 0;
    }
  `;

  const errorClass = css`
    background-color: ${tokens.opacity(tokens.c("red.950"), 30)};

    &:hover,
    &:focus-within {
      background-color: ${tokens.opacity(tokens.c("red.950"), 20)};
    }

    &::before {
      border-color: ${tokens.opacity(tokens.c("red.500"), 60)};
    }

    &:focus-within::after {
      border-color: ${tokens.opacity(tokens.c("red.300"), 70)};
    }
  `;

  const readOnlyClass = css`
    background-color: ${tokens.opacity(tokens.c("black"), 18)};

    &:hover,
    &:focus-within {
      background-color: ${tokens.opacity(tokens.c("black"), 18)};
      color: ${tokens.c("neutral.200")};
    }

    &:focus-within::after {
      border-color: ${tokens.opacity(tokens.c("neutral.300"), 20)};
    }
  `;

  return cx(
    baseClassName,
    disabled ? disabledClass : undefined,
    !disabled && !error && readOnly ? readOnlyClass : undefined,
    !disabled && error ? errorClass : undefined,
    classProp,
  );
}

export function getInputFieldClassName() {
  return css`
    ${utility.w.full};
    min-height: var(--input-size);
    ${utility.border.none};
    ${utility.bg.transparent};
    ${utility.color.inherit};
    ${utility.outline.none};
    line-height: var(--input-content-size);
    font-size: calc(var(--input-content-size) * 0.8);
    padding-left: calc(var(--input-padding) * 1.5);
    padding-right: calc(var(--input-padding) * 1.5);

    &::placeholder {
      ${utility.color.raw(tokens.opacity(tokens.c("white"), 30))};
    }

    &:disabled {
      ${utility.cursor.notAllowed};
      caret-color: transparent;
    }

    &:disabled::placeholder {
      ${utility.color.raw(tokens.opacity(tokens.c("white"), 15))};
    }

    &:read-only {
      cursor: default;
      caret-color: transparent;
    }
  `;
}

export function getInputStyle(size: number, styleProp?: CSSProperties): CSSProperties {
  return {
    ["--input-size"]: tokens.x(size),
    ...styleProp,
  };
}
