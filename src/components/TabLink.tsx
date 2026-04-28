import { css, cx } from "hono/css";
import type { PropsWithChildren } from "hono/jsx";
import type { JSX } from "hono/jsx/jsx-runtime";
import type { Merge } from "type-fest";
import * as utility from "../utility.ts";

export type TabLinkProps = Merge<
  Omit<JSX.IntrinsicElements["a"], "href">,
  {
    active: boolean;
    link: string;
  }
>;

export function TabLink({
  active,
  link,
  children,
  class: classProp,
  ...rest
}: PropsWithChildren<TabLinkProps>): JSX.Element {
  const baseClassName = css`
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    text-decoration: none;
    border-radius: var(--tablink-rounded, 9999px);
    ${utility.cornerShape.superellipse};
    transition: color 120ms ease-out, background-color 120ms ease-out;
    ${utility.px(3)};
    ${utility.py(1)};
    ${utility.textColor("neutral.500")};
    ${utility.textSize("xl")};

    &:hover {
      ${utility.bg("neutral.800")};
      ${utility.textColor("neutral.400")};
    }
  `;

  const activeClassName = css`
    ${utility.bg("neutral.700")};
    ${utility.textColor("white")};
    &:hover {
      ${utility.bg("neutral.600")};
      ${utility.textColor("white")};
    }
  `;

  return (
    <a
      href={link}
      aria-current={active ? "page" : undefined}
      class={cx(baseClassName, active ? activeClassName : undefined, classProp)}
      {...rest}
    >
      {children}
    </a>
  );
}
