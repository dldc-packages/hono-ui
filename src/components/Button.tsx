import type { CSSProperties } from "hono/jsx";
import type { JSX } from "hono/jsx/jsx-runtime";
import type { Merge } from "type-fest";
import { getButtonClassName, getButtonStyle } from "../styles/button.ts";

export type ButtonSharedProps = {
  disabled?: boolean;
  size?: number;
  style?: CSSProperties;
  class?: string;
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
  size = 8,
  style: styleProp,
  class: classProp,
  ...rest
}: ButtonProps): JSX.Element {
  const style = getButtonStyle(size, styleProp);
  const className = getButtonClassName(disabled, classProp);

  return (
    <button type={type} class={className} disabled={disabled} style={style} {...rest}>
      {children}
    </button>
  );
}
