import { css } from "hono/css";
import type { JSX } from "hono/jsx/jsx-runtime";
import type { Merge } from "type-fest";
import { getButtonClassName, getButtonStyle } from "../styles/button.ts";
import * as utility from "../utility.ts";
import type { ButtonSharedProps } from "./Button.tsx";

export type SelectProps = Merge<
  JSX.IntrinsicElements["select"],
  ButtonSharedProps
>;

export function Select({
  children,
  disabled,
  variant = "secondary",
  size = 8,
  style: styleProp,
  class: classProp,
  ...rest
}: SelectProps): JSX.Element {
  const style = getButtonStyle(size, styleProp);
  const wrapperClassName = getButtonClassName(disabled, classProp, variant);

  const selectClassName = css`
    appearance: auto;
    ${utility.border.none};
    ${utility.bg.transparent};
    ${utility.color.inherit};
    ${utility.outline.none};
    min-height: var(--button-size);
    ${utility.w.full};
    font: inherit;
    line-height: inherit;
    cursor: pointer;

    &:disabled {
      ${utility.cursor.notAllowed};
    }
  `;

  return (
    <div class={wrapperClassName} style={style} data-group-item="true">
      <select class={selectClassName} disabled={disabled} {...rest}>
        {children}
      </select>
    </div>
  );
}
