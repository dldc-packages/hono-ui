import { css } from "hono/css";
import type { PropsWithChildren } from "hono/jsx";
import type { JSX } from "hono/jsx/jsx-runtime";
import type { Merge } from "type-fest";
import * as utility from "../utility.ts";
import { type Inlines, mergeInlines } from "../utils.ts";

export type TabLinkProps = Merge<
  Omit<JSX.IntrinsicElements["a"], "href">,
  {
    active: boolean;
    link: string;
    inlines?: Inlines;
  }
>;

export function TabLink({
  active,
  link,
  children,
  class: classProp,
  inlines,
  ...rest
}: PropsWithChildren<TabLinkProps>): JSX.Element {
  const baseClassName = css`
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    text-decoration: none;
    border-radius: var(--tablink-rounded, 9999px);
    ${utility.border.shape.superellipse};
    transition: color 120ms ease-out, background-color 120ms ease-out;
    ${utility.p.x(3)};
    ${utility.p.y(1)};
    ${utility.color.c("neutral.500")};
    ${utility.font.size("xl")};

    &:hover {
      ${utility.bg.c("neutral.800")};
      ${utility.color.c("neutral.400")};
    }
  `;

  const activeClassName = css`
    ${utility.bg.c("neutral.700")};
    ${utility.color.c("white")};
    &:hover {
      ${utility.bg.c("neutral.600")};
      ${utility.color.c("white")};
    }
  `;

  return (
    <a
      href={link}
      aria-current={active ? "page" : undefined}
      class={mergeInlines(inlines, baseClassName, active ? activeClassName : undefined, classProp)}
      {...rest}
    >
      {children}
    </a>
  );
}
