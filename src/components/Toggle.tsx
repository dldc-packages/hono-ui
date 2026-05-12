import { css } from "hono/css";
import type { CSSProperties } from "hono/jsx";
import type { JSX } from "hono/jsx/jsx-runtime";
import type { Merge } from "type-fest";
import * as tokens from "../tokens.ts";
import * as utility from "../utility.ts";
import { type Inlines, mergeInlines } from "../utils.ts";

export type ToggleSharedProps = {
  color?: tokens.ColorKey;
  error?: boolean;
  inlines?: Inlines;
  size?: number;
  style?: CSSProperties;
};

export type ToggleProps = Merge<
  Omit<JSX.IntrinsicElements["input"], "type">,
  ToggleSharedProps
>;

export function Toggle({
  checked,
  color = "blue.500",
  disabled,
  error,
  inlines,
  size = 6,
  style,
  class: classProp,
  ...rest
}: ToggleProps): JSX.Element {
  const colorVar = tokens.c(color);

  const rootClassName = css`
    --toggle-size: ${tokens.x(size)};
    --toggle-gap: calc(var(--toggle-size) * 0.125);
    --toggle-width: calc(var(--toggle-size) * 1.9);

    position: relative;
    display: inline-flex;
    width: var(--toggle-width);
    height: var(--toggle-size);
    flex: 0 0 auto;
    cursor: pointer;
    vertical-align: middle;

    & > input {
      position: absolute;
      inset: 0;
      margin: 0;
      opacity: 0;
      cursor: inherit;
      ${utility.w.full};
      ${utility.h.full};
      z-index: 1;
    }

    & > span {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 9999px;
      background: color-mix(in oklab, ${tokens.c("neutral.700")} 75%, ${tokens.c("neutral.800")});
      transition: background-color 160ms ease;
    }

    & > span::after {
      content: "";
      position: absolute;
      top: var(--toggle-gap);
      left: var(--toggle-gap);
      width: calc(var(--toggle-size) - var(--toggle-gap) * 2);
      height: calc(var(--toggle-size) - var(--toggle-gap) * 2);
      border-radius: 9999px;
      background: ${tokens.c("neutral.100")};
      transition: transform 160ms ease, background-color 160ms ease;
    }

    & > input:checked + span {
      background: ${colorVar};
    }

    & > input:checked + span::after {
      transform: translateX(calc(var(--toggle-width) - var(--toggle-size)));
      background: ${tokens.c("white")};
    }

    & > input:focus-visible + span {
      outline: 2px solid color-mix(in oklab, ${colorVar} 75%, transparent);
      outline-offset: 2px;
    }

    & > input:disabled + span {
      opacity: 0.6;
    }

    & > input:disabled {
      ${utility.cursor.notAllowed};
    }
  `;

  const errorClassName = css`
    &[data-error="true"] > input:not(:checked) + span {
      background: color-mix(in oklab, ${tokens.c("red.500")} 30%, ${tokens.c("neutral.900")});
    }

    &[data-error="true"] > input:checked + span {
      background: ${tokens.c("red.500")};
    }

    &[data-error="true"] > input:focus-visible + span {
      outline: 2px solid color-mix(in oklab, ${tokens.c("red.400")} 70%, transparent);
      outline-offset: 2px;
    }
  `;

  return (
    <span
      class={mergeInlines(inlines, rootClassName, error ? errorClassName : undefined, classProp)}
      style={style}
      data-error={error ? "true" : undefined}
      data-group-item="true"
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        aria-invalid={error ? "true" : undefined}
        {...rest}
      />
      <span aria-hidden="true" />
    </span>
  );
}
