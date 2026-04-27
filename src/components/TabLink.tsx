import { css, cx } from "hono/css";
import type { PropsWithChildren } from "hono/jsx";
import type { JSX } from "hono/jsx/jsx-runtime";
import type { Merge } from "type-fest";
import { bg, cornerSuperellipse, px, py, textColor, textSize } from "../utility.ts";

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
    ${cornerSuperellipse()};
    transition: color 120ms ease-out, background-color 120ms ease-out;
    ${px(3)};
    ${py(1)};
    ${textColor("neutral.500")};
    ${textSize("xl")};

    &:hover {
      ${bg("neutral.800")};
      ${textColor("neutral.400")};
    }
  `;

  const activeClassName = css`
    ${bg("neutral.700")};
    ${textColor("white")};
    &:hover {
      ${bg("neutral.600")};
      ${textColor("white")};
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
