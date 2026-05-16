import type { JSX } from "hono/jsx/jsx-runtime";
import { getButtonClassName, getButtonStyle } from "../styles/button.ts";
import { resolveClassNames } from "../utils/resolveClassNames.ts";
import type { ComponentPropsMerge } from "../utils/types.ts";
import type { ButtonSharedProps } from "./Button.tsx";

export type ButtonLikeProps = ComponentPropsMerge<
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
  const className = getButtonClassName(disabled, variant, false);

  return (
    <div
      class={resolveClassNames(classProp, className)}
      style={style}
      aria-disabled={disabled ? "true" : undefined}
      data-group-item="true"
      {...rest}
    >
      {children}
    </div>
  );
}
