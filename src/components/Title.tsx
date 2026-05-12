import { css } from "hono/css";
import type { PropsWithChildren } from "hono/jsx";
import type { JSX } from "hono/jsx/jsx-runtime";
import type { Merge } from "type-fest";
import { utility } from "../../mod.ts";
import { type Inlines, mergeInlines } from "../utils.ts";

export type TitleProps = Merge<
  JSX.IntrinsicElements["h1"],
  {
    href?: string;
    linkProps?: Omit<JSX.IntrinsicElements["a"], "href">;
    inlines?: Inlines;
  }
>;

export function Title({
  href,
  linkProps,
  children,
  class: classProp,
  inlines,
  ...rest
}: PropsWithChildren<TitleProps>): JSX.Element {
  const titleClassName = css`
    ${utility.font.size("4xl")};
    ${utility.color.c("neutral.100")};
    ${utility.font.weight("bold")};
    ${utility.m.all(0)};
  `;

  const linkClassName = css`
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  `;

  return (
    <h1 class={mergeInlines(inlines, titleClassName, classProp)} {...rest}>
      {href
        ? (
          <a href={href} class={linkClassName} {...linkProps}>
            {children}
          </a>
        )
        : children}
    </h1>
  );
}
