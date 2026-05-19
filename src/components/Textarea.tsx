import * as c from "@dldc/css-builder";
import type { JSX } from "hono/jsx/jsx-runtime";
import { css } from "../css.ts";
import { getInputClassName, getInputStyle } from "../styles/input.ts";
import { cxClassList } from "../utils/class-list.ts";
import type { ComponentPropsMerge } from "../utils/types.ts";
import type { InputSharedProps } from "./Input.tsx";

export type TextareaProps = ComponentPropsMerge<
  InputSharedProps & {
    rows?: number;
  }
>;

const textareaClassName = css({
  minWidth: c.multiply(
    c.var("--input-size"),
    5,
  ),
  border: "none",
  background: "transparent",
  color: "inherit",
  outline: "none",
  lineHeight: c.multiply(
    c.var("--input-content-size"),
    0.8,
    1.4,
  ),
  fontSize: c.multiply(
    c.var("--input-content-size"),
    0.8,
  ),
  paddingTop: c.multiply(
    c.var("--input-padding"),
    1.1,
  ),
  paddingBottom: c.multiply(
    c.var("--input-padding"),
    1.1,
  ),
  paddingLeft: c.multiply(
    c.var("--input-padding"),
    1.5,
  ),
  paddingRight: c.multiply(
    c.var("--input-padding"),
    1.5,
  ),
  resize: "both",
  selectors: {
    "&::placeholder": {
      color: "white/30",
    },

    "&:disabled": {
      cursor: "not-allowed",
      caretColor: "transparent",
    },

    "&:disabled::placeholder": {
      color: "white/15",
    },
  },
});

export function Textarea({
  disabled,
  error,
  size = 8,
  rows = 4,
  style: styleProp,
  classList,
  ...rest
}: TextareaProps): JSX.Element {
  const style = getInputStyle(size, styleProp);
  const wrapperClassName = getInputClassName(disabled, error);

  return (
    <div class={cxClassList(wrapperClassName, classList)} style={style} data-group-item="true">
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
