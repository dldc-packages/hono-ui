import type { JSX } from "hono/jsx/jsx-runtime";
import { css } from "../css.ts";
import { getButtonClassName, getButtonStyle } from "../styles/button.ts";
import { resolveClassNames } from "../utils/resolveClassNames.ts";
import type { ComponentPropsMerge } from "../utils/types.ts";
import type { ButtonSharedProps } from "./Button.tsx";

export type SelectProps = ComponentPropsMerge<
  ButtonSharedProps & {
    name?: string;
    defaultValue?: string;
  }
>;

const selectClassName = css({
  appearance: "auto",
  border: "none",
  background: "transparent",
  color: "inherit",
  outline: "none",
  minHeight: "var(--button-size)",
  width: "full",
  font: "inherit",
  lineHeight: "inherit",
  cursor: "pointer",
  selectors: {
    "&:disabled": {
      cursor: "not-allowed",
    },
  },
});

export function Select({
  children,
  disabled,
  variant = "secondary",
  size = 8,
  style: styleProp,
  classList,
  ...rest
}: SelectProps): JSX.Element {
  const style = getButtonStyle(size, styleProp);
  const wrapperClassName = getButtonClassName(disabled, variant);

  return (
    <div class={resolveClassNames(wrapperClassName, classList)} style={style} data-group-item="true">
      <select class={selectClassName} disabled={disabled} {...rest}>
        {children}
      </select>
    </div>
  );
}
