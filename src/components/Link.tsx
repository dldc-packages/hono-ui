import { css } from "hono/css";
import type { PropsWithChildren } from "hono/jsx";
import type { JSX } from "hono/jsx/jsx-runtime";
import { textColor } from "../utility.ts";

export function Link({ href, children }: PropsWithChildren<{ href: string }>): JSX.Element {
  const className = css`
    ${textColor("blue.500")};
    text-decoration: underline;
    &:hover {
      ${textColor("blue.700")};
    }
  `;

  return (
    <a href={href} class={className}>
      {children}
    </a>
  );
}
