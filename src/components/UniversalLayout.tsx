import type { JSX } from "hono/jsx/jsx-runtime";
import { css } from "../css.ts";
import * as tokens from "../tokens.ts";
import { resolveClassNames } from "../utils/resolveClassNames.ts";
import type { ComponentPropsBase } from "../utils/types.ts";

export type UniversalLayoutProps = ComponentPropsBase;

const wrapperClassName = css({
  minHeight: "full-dvh",
  display: "grid",
  alignItems: "center",
  justifyContent: "stretch",
});

const contentClassName = css({
  display: "grid",
  alignItems: "center",
  justifyContent: "center",
  padding: "var(--padding)",
  gridTemplateColumns: "1fr min(42rem, 100%) 1fr",
  vars: {
    "--padding": tokens.x(8),
  },
  media: {
    "@media (max-width: 640px)": {
      vars: {
        "--padding": tokens.x(4),
      },
    },
  },
  selectors: {
    "& > *": {
      gridColumn: "2",
    },
  },
});

export function UniversalLayout({ children, classList, ...rest }: UniversalLayoutProps): JSX.Element {
  return (
    <div class={wrapperClassName}>
      <div class={resolveClassNames(contentClassName, classList)} {...rest}>
        {children}
      </div>
    </div>
  );
}
