import * as c from "@dldc/css-builder";
import type { PropsWithChildren } from "hono/jsx";
import type { JSX } from "hono/jsx/jsx-runtime";
import { css } from "../css.ts";
import { resolveClassNames } from "../utils/resolveClassNames.ts";
import type { ComponentPropsMerge } from "../utils/types.ts";

export type TabLinkProps = ComponentPropsMerge<
  { active: boolean; link: string }
>;

const baseClassName = css({
  display: "inline-flex",
  flex: "0 0 auto",
  alignItems: "center",
  textDecoration: "none",
  rounded: c.var("--tablink-rounded", "9999px"),
  cornerShape: "superellipse",
  transition: "color 120ms ease-out, background-color 120ms ease-out",
  paddingX: 3,
  paddingY: 1,
  color: "neutral-500",
  fontSize: "xl",
  selectors: {
    "&:hover": {
      background: "neutral-800",
      color: "neutral-400",
    },
  },
});

const activeClassName = css({
  background: "neutral-700",
  color: "white",
  selectors: {
    "&:hover": {
      background: "neutral-600",
      color: "white",
    },
  },
});

export function TabLink({
  active,
  link,
  children,
  class: classProp,
  ...rest
}: PropsWithChildren<TabLinkProps>): JSX.Element {
  return (
    <a
      href={link}
      aria-current={active ? "page" : undefined}
      class={resolveClassNames(classProp, baseClassName, active ? activeClassName : undefined)}
      {...rest}
    >
      {children}
    </a>
  );
}
