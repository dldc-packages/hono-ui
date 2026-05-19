import type { JSX } from "hono/jsx/jsx-runtime";
import { getButtonClassName, getButtonStyle } from "../styles/button.ts";
import { cxClassList } from "../utils/class-list.ts";
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
  classList,
  ...rest
}: ButtonLinkProps): JSX.Element {
  const style = getButtonStyle(size, styleProp);
  const className = getButtonClassName(disabled, variant);

  return (
    <a
      href={disabled ? "#" : href}
      class={cxClassList(className, classList)}
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
