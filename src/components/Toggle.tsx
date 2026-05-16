import * as c from "@dldc/css-builder";
import type { JSX } from "hono/jsx/jsx-runtime";
import { css } from "../css.ts";
import * as tokens from "../tokens.ts";
import { resolveClassNames } from "../utils/resolveClassNames.ts";
import type { ComponentPropsMerge } from "../utils/types.ts";

export type ToggleSharedProps = {
  name?: string;
  color?: tokens.ColorKey;
  error?: boolean;
  size?: number;
  checked?: boolean;
  disabled?: boolean;
};

export type ToggleProps = ComponentPropsMerge<
  ToggleSharedProps
>;

const rootClassName = css({
  vars: {
    "--toggle-gap": c.multiply(
      c.var("--toggle-size"),
      0.125,
    ),
    "--toggle-width": c.multiply(
      c.var("--toggle-size"),
      1.9,
    ),
  },
  position: "relative",
  display: "inline-flex",
  width: "var(--toggle-width)",
  height: "var(--toggle-size)",
  flex: "0 0 auto",
  cursor: "pointer",
  verticalAlign: "middle",

  selectors: {
    "& > input": {
      position: "absolute",
      inset: 0,
      margin: 0,
      opacity: 0,
      cursor: "inherit",
      width: "full",
      height: "full",
      zIndex: 1,
    },

    "& > span": {
      position: "relative",
      display: "block",
      width: "full",
      height: "full",
      borderRadius: "full",
      background: "neutral-700",
      transition: "background-color 160ms ease",
    },

    "& > span::after": {
      content: "empty",
      position: "absolute",
      top: "var(--toggle-gap)",
      left: "var(--toggle-gap)",
      width: c.subtract(c.var("--toggle-size"), c.multiply(c.var("--toggle-gap"), 2)),
      height: c.subtract(c.var("--toggle-size"), c.multiply(c.var("--toggle-gap"), 2)),
      borderRadius: "full",
      background: "neutral-100",
      transition: "transform 160ms ease, background-color 160ms ease",
    },

    "& > input:checked + span": {
      background: "var(--toggle-color)",
    },

    "& > input:checked + span::after": {
      transform: "translateX(calc(var(--toggle-width) - var(--toggle-size)))",
      background: "white",
    },

    "& > input:focus-visible + span": {
      outlineOffset: "2px",
      outlineStyle: "solid",
      outlineWidth: "2px",
      outlineColor: `[${tokens.opacity("var(--toggle-color)", 75)}]`,
    },

    "& > input:disabled + span": {
      opacity: 0.6,
    },

    "& > input:disabled": {
      cursor: "not-allowed",
    },
  },
});

const errorClassName = css({
  selectors: {
    "&[data-error='true'] > input:not(:checked) + span": {
      background: `[${tokens.opacity(tokens.c("red-500"), 30)}]`,
    },

    "&[data-error='true'] > input:checked + span": {
      background: "red-500",
    },

    "&[data-error='true'] > input:focus-visible + span": {
      outlineStyle: "solid",
      outlineWidth: "2px",
      outlineColor: `[${tokens.opacity(tokens.c("red-400"), 70)}]`,
      outlineOffset: "2px",
    },
  },
});

export function Toggle({
  checked,
  color = "blue-500",
  disabled,
  error,
  size = 6,
  style,
  class: classProp,
  ...rest
}: ToggleProps): JSX.Element {
  return (
    <span
      class={resolveClassNames(
        classProp,
        css({
          vars: {
            "--toggle-size": tokens.x(size),
            "--toggle-color": tokens.c(color),
          },
        }),
        rootClassName,
        error ? errorClassName : undefined,
      )}
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
