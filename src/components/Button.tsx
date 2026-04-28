import type { CSSProperties } from "hono/jsx";
import type { JSX } from "hono/jsx/jsx-runtime";
import type { Merge } from "type-fest";
import type { ButtonVariant } from "../styles/button.ts";
import { getButtonClassName, getButtonStyle } from "../styles/button.ts";

export type ButtonSharedProps = {
  disabled?: boolean;
  variant?: ButtonVariant;
  size?: number;
  style?: CSSProperties;
};

export type ButtonProps = Merge<
  JSX.IntrinsicElements["button"],
  ButtonSharedProps & {
    type?: "button" | "submit" | "reset";
  }
>;

export function Button({
  type = "button",
  children,
  disabled,
  variant = "secondary",
  size = 8,
  style: styleProp,
  class: classProp,
  ...rest
}: ButtonProps): JSX.Element {
  const style = getButtonStyle(size, styleProp);
  const className = getButtonClassName(disabled, classProp, variant);

  return (
    <button type={type} class={className} disabled={disabled} style={style} data-group-item="true" {...rest}>
      {children}
    </button>
  );
}
