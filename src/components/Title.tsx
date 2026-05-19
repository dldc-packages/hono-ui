import type { PropsWithChildren } from "hono/jsx";
import type { JSX } from "hono/jsx/jsx-runtime";
import { css } from "../css.ts";
import { resolveClassNames } from "../utils/resolveClassNames.ts";
import type { ComponentPropsMerge } from "../utils/types.ts";

export type TitleProps = ComponentPropsMerge<
  { href?: string }
>;

const titleClassName = css({
  fontSize: "4xl",
  color: "neutral-100",
  fontWeight: "bold",
  margin: 0,
});

const linkClassName = css({
  color: "inherit",
  textDecoration: "none",

  selectors: {
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

export function Title({
  href,
  children,
  classList,
  ...rest
}: PropsWithChildren<TitleProps>): JSX.Element {
  return (
    <h1 class={resolveClassNames(titleClassName, classList)} {...rest}>
      {href ? <a href={href} class={linkClassName}>{children}</a> : children}
    </h1>
  );
}
