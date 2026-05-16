import type { PropsWithChildren } from "hono/jsx";
import type { JSX } from "hono/jsx/jsx-runtime";
import { css } from "../css.ts";

const className = css({
  color: "blue-500",
  textDecoration: "underline",
  selectors: {
    "&:hover": {
      color: "blue-700",
    },
  },
});

export function Link({ href, children }: PropsWithChildren<{ href: string }>): JSX.Element {
  return (
    <a href={href} class={className}>
      {children}
    </a>
  );
}
