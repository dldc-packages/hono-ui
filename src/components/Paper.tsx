import type { CSSProperties } from "hono/jsx";
import type { JSX } from "hono/jsx/jsx-runtime";
import { css, type CssObj } from "../css.ts";
import * as tokens from "../tokens.ts";
import { resolveClassNames } from "../utils/resolveClassNames.ts";
import type { ComponentPropsMerge } from "../utils/types.ts";

export type PaperProps = ComponentPropsMerge<
  Pick<CssObj, "alignItems" | "justifyContent" | "gap" | "padding"> & {
    flexDirection?: "row" | "column" | "none";
    borderRadius?: number;
  }
>;

const className = css({
  cornerShape: "superellipse",
  background: "neutral-900",
  borderWidth: "0.5px",
  borderColor: "white/10",
  borderRadius: "var(--paper-radius)",
});

export function Paper(
  { children, borderRadius = 2, style: styleProp, classList, flexDirection, alignItems, justifyContent, gap, padding, ...rest }: PaperProps,
): JSX.Element {
  const style: CSSProperties = {
    ["--paper-radius"]: tokens.x(borderRadius),
    ...styleProp,
  };

  return (
    <div
      class={resolveClassNames(
        className,
        flexDirection !== "none" ? css({ display: "flex", flexDirection, alignItems, justifyContent, gap, padding }) : undefined,
        classList,
      )}
      style={style}
      {...rest}
    >
      {children}
    </div>
  );
}
