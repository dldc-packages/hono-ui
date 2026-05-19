import type { JSX } from "hono/jsx/jsx-runtime";
import { css } from "../css.ts";
import { cxClassList } from "../utils/class-list.ts";
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
      borderRadiusStart: "none",
    },
    "& > [data-group-item]:not(:last-child)": {
      borderRadiusEnd: "none",
    },
  },
});

const wrapClassName = css({
  flexWrap: "wrap",
});

export function InlineGroup({
  children,
  wrap = false,
  classList,
  ...rest
}: InlineGroupProps): JSX.Element {
  return (
    <div class={cxClassList(baseClassName, wrap ? wrapClassName : undefined, classList)} {...rest}>
      {children}
    </div>
  );
}
