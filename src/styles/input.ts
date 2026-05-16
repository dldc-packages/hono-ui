import * as c from "@dldc/css-builder";
import { cx } from "hono/css";
import type { CSSProperties } from "hono/jsx";
import { css } from "../css.ts";
import * as tokens from "../tokens.ts";

const baseClassName = css({
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "center",
  outline: "none",
  position: "relative",
  cornerShape: "superellipse",
  background: "black/20",
  rounded: c.divide(c.var("--input-size"), 4),
  minHeight: "var(--input-size)",
  vars: {
    "--input-padding": c.multiply(
      c.round(
        "down",
        c.add(
          -0.74,
          c.multiply(0.36, c.divide(c.var("--input-size"), "0.25rem")),
        ),
        0.25,
      ),
      c.value("0.25rem"),
    ),
    "--input-content-size": c.subtract(c.var("--input-size"), c.multiply(c.var("--input-padding"), 2)),
  },
  color: "neutral-200",
  minWidth: c.multiply(c.var("--input-size"), 5),

  selectors: {
    "&:hover": {
      background: "black/5",
      color: "neutral-100",
    },
    "&:focus-within": {
      background: "black/5",
      color: "neutral-100",
    },
    "&::after": {
      rounded: "inherit",
      cornerShape: "inherit",
      pointerEvents: "none",
      content: "empty",
      position: "absolute",
      inset: 0,
    },
    "&:focus-within::after": {
      borderWidth: "1px",
      borderColor: "neutral-300/40",
    },
    "&::before": {
      display: "block",
      rounded: "inherit",
      cornerShape: "inherit",
      pointerEvents: "none",
      content: "empty",
      position: "absolute",
      inset: 0,
      borderWidth: "1px",
      borderColor: "black/30",
    },
  },
});

const disabledClass = css({
  color: "neutral-200/15",
  background: "black/20",
  cursor: "not-allowed",
  selectors: {
    "&:hover, &:focus-within": {
      color: "neutral-200/15",
      background: "black/20",
    },
    "&::before": {
      borderColor: "black/20",
    },
    "&::after": {
      borderWidth: "none",
    },
  },
});

const errorClass = css({
  background: "red-950/30",
  selectors: {
    "&:hover, &:focus-within": {
      background: "red-950/20",
    },
    "&::before": {
      borderColor: "red-500/60",
    },
    "&:focus-within::after": {
      borderColor: "red-300/70",
    },
  },
});

const readOnlyClass = css({
  background: "black/20",
  selectors: {
    "&:hover, &:focus-within": {
      background: "black/20",
      color: "neutral-200",
    },
    "&:focus-within::after": {
      borderColor: "neutral-300/20",
    },
  },
});

const inputFiledClassName = css({
  width: "full",
  minHeight: "var(--input-size)",
  border: "none",
  background: "transparent",
  color: "inherit",
  outline: "none",
  lineHeight: "var(--input-content-size)",
  fontSize: c.multiply(c.var("--input-content-size"), 0.8),
  paddingLeft: c.multiply(c.var("--input-padding"), 1.5),
  paddingRight: c.multiply(c.var("--input-padding"), 1.5),

  selectors: {
    "&::placeholder": {
      color: "white/30",
    },

    "&:disabled": {
      cursor: "not-allowed",
      caretColor: "transparent",
    },

    "&:disabled::placeholder": {
      color: "white/15",
    },

    "&:read-only": {
      cursor: "default",
      caretColor: "transparent",
    },
  },
});

export function getInputClassName(disabled?: boolean, error?: boolean, readOnly?: boolean) {
  return cx(
    baseClassName,
    disabled ? disabledClass : undefined,
    !disabled && !error && readOnly ? readOnlyClass : undefined,
    !disabled && error ? errorClass : undefined,
  );
}

export function getInputFieldClassName() {
  return inputFiledClassName;
}

export function getInputStyle(size: number, styleProp?: CSSProperties): CSSProperties {
  return {
    ["--input-size"]: tokens.x(size),
    ...styleProp,
  };
}
