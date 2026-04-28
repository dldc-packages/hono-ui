import type { JSX } from "hono/jsx/jsx-runtime";
import type { Merge } from "type-fest";
import { getButtonClassName, getButtonStyle } from "../styles/button.ts";
import type { ButtonSharedProps } from "./Button.tsx";

export type ButtonLinkProps = Merge<
  Omit<JSX.IntrinsicElements["a"], "href">,
  ButtonSharedProps & {
    href: string;
  }
>;

export function ButtonLink({
  href,
  children,
  disabled,
  variant = "secondary",
  size = 8,
  style: styleProp,
  class: classProp,
  ...rest
}: ButtonLinkProps): JSX.Element {
  const style = getButtonStyle(size, styleProp);
  const className = getButtonClassName(disabled, classProp, variant);

  return (
    <a
      href={disabled ? "#" : href}
      class={className}
      onclick={disabled ? (e: Event) => e.preventDefault() : undefined}
      aria-disabled={disabled ? "true" : undefined}
      style={style}
      data-group-item="true"
      {...rest}
    >
      {children}
    </a>
  );
}
