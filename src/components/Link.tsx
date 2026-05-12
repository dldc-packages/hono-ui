import { css } from "hono/css";
import type { PropsWithChildren } from "hono/jsx";
import type { JSX } from "hono/jsx/jsx-runtime";
import * as utility from "../utility.ts";

export function Link({ href, children }: PropsWithChildren<{ href: string }>): JSX.Element {
  const className = css`
    ${utility.color.c("blue.500")};
    text-decoration: underline;
    &:hover {
      ${utility.color.c("blue.700")};
    }
  `;

  return (
    <a href={href} class={className}>
      {children}
    </a>
  );
}
