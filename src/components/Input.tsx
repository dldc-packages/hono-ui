import type { CSSProperties } from "hono/jsx";
import type { JSX } from "hono/jsx/jsx-runtime";
import { getInputClassName, getInputFieldClassName, getInputStyle } from "../styles/input.ts";
import { cxClassList } from "../utils/class-list.ts";
import type { ComponentPropsMerge } from "../utils/types.ts";

export type InputSharedProps = {
  disabled?: boolean;
  error?: boolean;
  size?: number;
  name?: string;
  style?: CSSProperties;
  readOnly?: boolean;
  spellCheck?: boolean;
  autocomplete?: string | undefined;
  placeholder?: string;
  value?: string;
  type?: "text" | "password" | "email" | "number" | "search" | "tel" | "url";
  children?: never;
  render?: never;
  required?: boolean;
};

export type InputProps = ComponentPropsMerge<
  InputSharedProps
>;

export function Input({
  disabled,
  readOnly,
  error,
  size = 8,
  style: styleProp,
  classList,
  render: _render,
  children: _children,
  ...rest
}: InputProps): JSX.Element {
  const style = getInputStyle(size, styleProp);
  const wrapperClassName = getInputClassName(disabled, error, readOnly);
  const inputClassName = getInputFieldClassName();

  return (
    <div class={cxClassList(wrapperClassName, classList)} style={style} data-group-item="true">
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
