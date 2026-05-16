import type { JSX } from "hono/jsx/jsx-runtime";
import { css } from "../css.ts";
import { resolveClassNames } from "../utils/resolveClassNames.ts";
import type { ComponentPropsMerge } from "../utils/types.ts";

export type InlineGroupProps = ComponentPropsMerge<
  { wrap?: boolean }
>;

const baseClassName = css({
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "stretch",
  selectors: {
    "& > [data-group-item]:not(:first-child)": {
      roundedStart: "none",
    },
    "& > [data-group-item]:not(:last-child)": {
      roundedEnd: "none",
    },
  },
});

const wrapClassName = css({
  flexWrap: "wrap",
});

export function InlineGroup({
  children,
  wrap = false,
  class: classProp,
  ...rest
}: InlineGroupProps): JSX.Element {
  return (
    <div class={resolveClassNames(classProp, baseClassName, wrap ? wrapClassName : undefined)} {...rest}>
      {children}
    </div>
  );
}
