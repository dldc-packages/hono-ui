import type { JSX } from "hono/jsx/jsx-runtime";
import type { Merge } from "type-fest";
import { getButtonClassName, getButtonStyle } from "../styles/button.ts";
import type { ButtonSharedProps } from "./Button.tsx";

export type ButtonLikeProps = Merge<
  JSX.IntrinsicElements["div"],
  ButtonSharedProps
>;

export function ButtonLike({
  children,
  disabled,
  variant = "secondary",
  size = 8,
  style: styleProp,
  class: classProp,
  ...rest
}: ButtonLikeProps): JSX.Element {
  const style = getButtonStyle(size, styleProp);
  const className = getButtonClassName(disabled, classProp, variant, false);

  return (
    <div
      class={className}
      style={style}
      aria-disabled={disabled ? "true" : undefined}
      data-group-item="true"
      {...rest}
    >
      {children}
    </div>
  );
}
