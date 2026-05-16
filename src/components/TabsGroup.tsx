import type { CSSProperties } from "hono/jsx";
import type { JSX } from "hono/jsx/jsx-runtime";
import { css } from "../css.ts";
import * as tokens from "../tokens.ts";
import { resolveClassNames } from "../utils/resolveClassNames.ts";
import type { ComponentPropsMerge } from "../utils/types.ts";

export type TabsGroupProps = ComponentPropsMerge<{
  rounded?: number;
  padding?: number;
  gap?: number;
}>;

const className = css({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  width: "full",
  overflowX: "auto",
  overflowY: "hidden",
  WebkitOverflowScrolling: "touch",
  scrollbarWidth: "none",
  rounded: "var(--tabs-group-rounded)",
  cornerShape: "superellipse",
  padding: "var(--tabs-group-padding)",
  gap: "var(--tabs-group-padding)",
  borderWidth: "0.5px",
  borderColor: "white/10",
  background: "neutral-900",
  selectors: {
    /* Keep tabs on one row while allowing horizontal scroll */
    "&::-webkit-scrollbar": {
      display: "none",
    },

    /* Ensure child tabs don't shrink and wrap to multiple rows when container is too narrow */
    "& > *": {
      flex: "0 0 auto",
    },
  },
});

export function TabsGroup({
  children,
  rounded = 6,
  padding = 1.5,
  style: styleProp,
  class: classProp,
  ...rest
}: TabsGroupProps): JSX.Element {
  const style: CSSProperties = {
    ["--tabs-group-rounded"]: tokens.x(rounded),
    ["--tabs-group-padding"]: tokens.x(padding),
    ["--tablink-rounded"]: `calc(${tokens.x(rounded)} - ${tokens.x(padding)})`,
    ...styleProp,
  };

  return (
    <div class={resolveClassNames(classProp, className)} style={style} {...rest}>
      {children}
    </div>
  );
}
