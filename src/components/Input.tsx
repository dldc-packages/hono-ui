import type { CSSProperties } from "hono/jsx";
import type { JSX } from "hono/jsx/jsx-runtime";
import type { Merge } from "type-fest";
import { getInputClassName, getInputFieldClassName, getInputStyle } from "../styles/input.ts";

export type InputSharedProps = {
  disabled?: boolean;
  error?: boolean;
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
  readOnly,
  error,
  size = 8,
  style: styleProp,
  class: classProp,
  ...rest
}: InputProps): JSX.Element {
  const style = getInputStyle(size, styleProp);
  const wrapperClassName = getInputClassName(disabled, classProp, error, readOnly);
  const inputClassName = getInputFieldClassName();

  return (
    <div class={wrapperClassName} style={style} data-group-item="true">
      <input
        class={inputClassName}
        disabled={disabled}
        readOnly={readOnly}
        aria-invalid={error ? "true" : undefined}
        {...rest}
      />
    </div>
  );
}
