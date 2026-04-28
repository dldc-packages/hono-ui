import { css } from "hono/css";
import type { JSX } from "hono/jsx/jsx-runtime";
import type { Merge } from "type-fest";
import { getButtonClassName, getButtonStyle } from "../styles/button.ts";
import type { ButtonSharedProps } from "./Button.tsx";

export type SelectProps = Merge<
  JSX.IntrinsicElements["select"],
  ButtonSharedProps
>;

export function Select({
  children,
  disabled,
  size = 8,
  style: styleProp,
  class: classProp,
  ...rest
}: SelectProps): JSX.Element {
  const style = getButtonStyle(size, styleProp);
  const wrapperClassName = getButtonClassName(disabled, classProp);

  const selectClassName = css`
    appearance: auto;
    border: none;
    background: transparent;
    color: inherit;
    outline: none;
    min-height: var(--button-size);
    width: 100%;
    font: inherit;
    line-height: inherit;
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
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
