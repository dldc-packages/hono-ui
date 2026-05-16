import type { JSX } from "hono/jsx/jsx-runtime";
import { getButtonClassName, getButtonStyle } from "../styles/button.ts";
import { resolveClassNames } from "../utils/resolveClassNames.ts";
import type { ComponentPropsMerge } from "../utils/types.ts";
import type { ButtonSharedProps } from "./Button.tsx";

export type ButtonLinkProps = ComponentPropsMerge<
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
  const className = getButtonClassName(disabled, variant);

  return (
    <a
      href={disabled ? "#" : href}
      class={resolveClassNames(classProp, className)}
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
