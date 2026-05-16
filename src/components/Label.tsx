import type { Child } from "hono/jsx";
import type { JSX } from "hono/jsx/jsx-runtime";
import { css } from "../css.ts";
import { resolveClassNames } from "../utils/resolveClassNames.ts";
import type { ComponentPropsMerge } from "../utils/types.ts";

export type LabelProps = ComponentPropsMerge<
  {
    required?: boolean;
    hint?: Child;
    htmlFor?: string;
  }
>;

const baseClassName = css({
  display: "inline-flex",
  flexDirection: "column",
  alignItems: "start",
  gap: 1,
  color: "neutral-200",
  fontSize: "sm",
  fontWeight: "semibold",
});

const labelTextClassName = css({
  display: "inline-flex",
  alignItems: "center",
  gap: 1,
});

const hintClassName = css({
  color: "neutral-400",
  fontWeight: "normal",
  marginLeft: 1,
});

export function Label({
  children,
  required,
  hint,
  class: classProp,
  ...rest
}: LabelProps): JSX.Element {
  return (
    <label class={resolveClassNames(classProp, baseClassName)} {...rest}>
      <span class={labelTextClassName}>
        {children}
        {required ? <span>*</span> : null}
      </span>
      {hint ? <span class={hintClassName}>{hint}</span> : null}
    </label>
  );
}
