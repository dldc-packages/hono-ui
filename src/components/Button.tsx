import type { JSX } from "hono/jsx/jsx-runtime";
import type { ButtonVariant } from "../styles/button.ts";
import { getButtonClassName, getButtonStyle } from "../styles/button.ts";
import { cxClassList } from "../utils/class-list.ts";
import type { ComponentPropsMerge } from "../utils/types.ts";

export type ButtonSharedProps = {
  disabled?: boolean;
  variant?: ButtonVariant;
  size?: number;
};

export type ButtonProps = ComponentPropsMerge<
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
  classList,
  ...rest
}: ButtonProps): JSX.Element {
  const style = getButtonStyle(size, styleProp);
  const baseClassName = getButtonClassName(disabled, variant, !disabled);

  return (
    <button
      type={type}
      class={cxClassList(baseClassName, classList)}
      disabled={disabled}
      style={style}
      data-group-item="true"
      {...rest}
    >
      {children}
    </button>
  );
}
