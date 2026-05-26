import type { CSSProperties } from "hono/jsx";
import type { JSX } from "hono/jsx/jsx-runtime";
import { getInputClassName, getInputFieldClassName, getInputStyle } from "../styles/input.ts";
import { cxClassList } from "../utils/class-list.ts";
import type { ComponentPropsMerge } from "../utils/types.ts";

export type InputSharedProps = {
  // Custom props
  error?: boolean;
  children?: never;
  render?: never;
  style?: CSSProperties;

  // Native input props
  autocomplete?: string | undefined;
  autofocus?: boolean | undefined;
  checked?: boolean;
  disabled?: boolean;
  form?: string | undefined;
  name?: string;
  placeholder?: string;
  readonly?: boolean | undefined;
  required?: boolean;
  size?: number;
  spellCheck?: boolean;
  type?: "text" | "password" | "email" | "number" | "search" | "tel" | "url";
  value?: string;
};

export type InputProps = ComponentPropsMerge<
  InputSharedProps
>;

export function Input({
  disabled,
  readonly,
  error,
  size = 8,
  style: styleProp,
  classList,
  render: _render,
  children: _children,
  ...rest
}: InputProps): JSX.Element {
  const style = getInputStyle(size, styleProp);
  const wrapperClassName = getInputClassName(disabled, error, readonly);
  const inputClassName = getInputFieldClassName();

  return (
    <div class={cxClassList(wrapperClassName, classList)} style={style} data-group-item="true">
      <input
        class={inputClassName}
        disabled={disabled}
        readOnly={readonly}
        aria-invalid={error ? "true" : undefined}
        {...rest}
      />
    </div>
  );
}
