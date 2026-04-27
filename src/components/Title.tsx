import { css, cx } from "hono/css";
import type { PropsWithChildren } from "hono/jsx";
import type { JSX } from "hono/jsx/jsx-runtime";
import type { Merge } from "type-fest";
import { textColor, textSize } from "../utility.ts";

export type TitleProps = Merge<
  JSX.IntrinsicElements["h1"],
  {
    href?: string;
    heref?: string;
    linkProps?: Omit<JSX.IntrinsicElements["a"], "href">;
  }
>;

export function Title({
  href,
  heref,
  linkProps,
  children,
  class: classProp,
  ...rest
}: PropsWithChildren<TitleProps>): JSX.Element {
  const link = href ?? heref;

  const titleClassName = css`
    ${textSize("4xl")};
    font-weight: 700;
    ${textColor("neutral.100")};
    margin: 0;
  `;

  const linkClassName = css`
    ${textColor("neutral.100")};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  `;

  return (
    <h1 class={cx(titleClassName, classProp)} {...rest}>
      {link
        ? (
          <a href={link} class={linkClassName} {...linkProps}>
            {children}
          </a>
        )
        : children}
    </h1>
  );
}
