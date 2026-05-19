import * as c from "@dldc/css-builder";
import { cx } from "hono/css";
import type { CSSProperties } from "hono/jsx";
import { css } from "../css.ts";
import * as tokens from "../tokens.ts";

export type ButtonVariant = "secondary" | "primary" | "danger" | "ghost";

const baseClassName = css({
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "center",
  outline: "none",
  position: "relative",
  cursor: "pointer",
  cornerShape: "superellipse",
  background: "var(--button-bg)",
  borderRadius: c.divide(c.var("--button-size"), 4),
  minHeight: "var(--button-size)",
  vars: {
    "--button-padding": c.multiply(
      c.round(
        "down",
        c.add(
          -0.74,
          c.multiply(0.36, c.divide(c.var("--button-size"), "0.25rem")),
        ),
        0.25,
      ),
      c.value("0.25rem"),
    ),
    "--button-content-size": c.subtract(c.var("--button-size"), c.multiply(c.var("--button-padding"), 2)),
  },
  lineHeight: "var(--button-content-size)",
  fontSize: c.multiply(c.var("--button-content-size"), 0.8),
  paddingLeft: c.multiply(c.var("--button-padding"), 1.5),
  paddingRight: c.multiply(c.var("--button-padding"), 1.5),
  color: "var(--button-fg)",
  gap: "var(--button-padding)",

  selectors: {
    "&::after": {
      // Used for focus and highlight border
      borderRadius: "inherit",
      content: "empty",
      cornerShape: "inherit",
      pointerEvents: "none",
      position: "absolute",
      inset: 0,
    },
    "&::before": {
      // Used for visual border for input and surface variants
      borderRadius: "inherit",
      cornerShape: "inherit",
      pointerEvents: "none",
      content: "empty",
      position: "absolute",
      inset: 0,
      borderWidth: c.var("--button-border-width", "0.5px"),
      borderStyle: "solid",
      borderColor: "var(--button-border)",
    },
  },
});

const variantClasses: Record<ButtonVariant, string | Promise<string>> = {
  secondary: css({
    vars: {
      "--button-bg": tokens.opacity(tokens.c("white"), 5),
      "--button-fg": tokens.c("neutral-200"),
      "--button-bg-hover": tokens.opacity(tokens.c("white"), 10),
      "--button-fg-hover": tokens.c("neutral-100"),
      "--button-border": tokens.opacity(tokens.c("white"), 10),
    },
  }),
  primary: css({
    vars: {
      "--button-bg": tokens.c("blue-700"),
      "--button-fg": tokens.c("white"),
      "--button-bg-hover": tokens.c("blue-600"),
      "--button-fg-hover": tokens.c("white"),
      "--button-border": tokens.opacity(tokens.c("blue-400"), 40),
    },
  }),
  danger: css({
    vars: {
      "--button-bg": tokens.c("red-700"),
      "--button-fg": tokens.c("white"),
      "--button-bg-hover": tokens.c("red-600"),
      "--button-fg-hover": tokens.c("white"),
      "--button-border": tokens.opacity(tokens.c("red-400"), 40),
    },
  }),
  ghost: css({
    vars: {
      "--button-bg": "transparent",
      "--button-fg": tokens.c("neutral-200"),
      "--button-bg-hover": tokens.opacity(tokens.c("white"), 8),
      "--button-fg-hover": tokens.c("neutral-100"),
      "--button-border": "transparent",
      "--button-border-width": "0",
    },
  }),
};

const interactiveClass = css({
  selectors: {
    "&:hover": {
      background: "var(--button-bg-hover)",
      color: "var(--button-fg-hover)",
    },
  },
});

const disabledClass = css({
  opacity: 0.5,
  cursor: "not-allowed",
});

export function getButtonClassName(
  disabled?: boolean,
  variant: ButtonVariant = "secondary",
  interactive = true,
) {
  const variantClass = variantClasses[variant];
  return cx(baseClassName, interactive ? interactiveClass : undefined, variantClass, disabled ? disabledClass : undefined);
}

export function getButtonStyle(size: number, styleProp?: CSSProperties): CSSProperties {
  return {
    ["--button-size"]: tokens.x(size),
    ...styleProp,
  };
}
