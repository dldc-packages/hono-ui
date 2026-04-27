import type { CSSProperties } from "hono/jsx";
import type { JSX } from "hono/jsx/jsx-runtime";
import type { Merge } from "type-fest";
import { getInputClassName, getInputFieldClassName, getInputStyle } from "../styles/input.ts";

export type InputSharedProps = {
  disabled?: boolean;
  size?: number;
  style?: CSSProperties;
  class?: string;
};

export type InputProps = Merge<
  JSX.IntrinsicElements["input"],
  InputSharedProps
>;

export function Input({
  disabled,
  size = 8,
  style: styleProp,
  class: classProp,
  ...rest
}: InputProps): JSX.Element {
  const style = getInputStyle(size, styleProp);
  const wrapperClassName = getInputClassName(disabled, classProp);
  const inputClassName = getInputFieldClassName();

  return (
    <div class={wrapperClassName} style={style}>
      <input class={inputClassName} disabled={disabled} {...rest} />
    </div>
  );
}
