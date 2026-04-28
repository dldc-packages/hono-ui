import { css } from "hono/css";
import type { JSX } from "hono/jsx/jsx-runtime";
import type { Merge } from "type-fest";
import { getInputClassName, getInputStyle } from "../styles/input.ts";
import type { InputSharedProps } from "./Input.tsx";

export type TextareaProps = Merge<
  JSX.IntrinsicElements["textarea"],
  InputSharedProps
>;

export function Textarea({
  disabled,
  error,
  size = 8,
  rows = 4,
  style: styleProp,
  class: classProp,
  ...rest
}: TextareaProps): JSX.Element {
  const style = getInputStyle(size, styleProp);
  const wrapperClassName = getInputClassName(disabled, classProp, error);

  const textareaClassName = css`
    width: 100%;
    border: none;
    background: transparent;
    color: inherit;
    outline: none;
    line-height: calc(var(--input-content-size) * 0.8 * 1.4);
    font-size: calc(var(--input-content-size) * 0.8);
    padding-top: calc(var(--input-padding) * 1.1);
    padding-bottom: calc(var(--input-padding) * 1.1);
    padding-left: calc(var(--input-padding) * 1.5);
    padding-right: calc(var(--input-padding) * 1.5);
    resize: vertical;

    &::placeholder {
      color: color-mix(in oklab, var(--color-white) 30%, transparent);
    }

    &:disabled {
      cursor: not-allowed;
      caret-color: transparent;
    }

    &:disabled::placeholder {
      color: color-mix(in oklab, var(--color-white) 15%, transparent);
    }
  `;

  return (
    <div class={wrapperClassName} style={style} data-group-item="true">
      <textarea
        class={textareaClassName}
        disabled={disabled}
        aria-invalid={error ? "true" : undefined}
        rows={rows}
        {...rest}
      />
    </div>
  );
}
