import { css } from "hono/css";
import type { Child } from "hono/jsx";
import type { JSX } from "hono/jsx/jsx-runtime";
import type { Merge } from "type-fest";
import * as utility from "../utility.ts";
import { type Inlines, mergeInlines } from "../utils.ts";

export type LabelProps = Merge<
  JSX.IntrinsicElements["label"],
  {
    required?: boolean;
    hint?: Child;
    inlines?: Inlines;
  }
>;

export function Label({
  children,
  required,
  hint,
  class: classProp,
  inlines,
  ...rest
}: LabelProps): JSX.Element {
  const className = css`
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    ${utility.gap.row(1)};
    ${utility.color.c("neutral.200")};
    ${utility.font.size("sm")};
    font-weight: 600;
  `;

  const labelTextClassName = css`
    display: inline-flex;
    align-items: center;
    ${utility.gap.column(1)};
  `;

  const hintClassName = css`
    ${utility.color.c("neutral.400")};
    font-weight: 400;
    ${utility.m.l(1)};
  `;

  return (
    <label class={mergeInlines(inlines, className, classProp)} {...rest}>
      <span class={labelTextClassName}>
        {children}
        {required ? <span>*</span> : null}
      </span>
      {hint ? <span class={hintClassName}>{hint}</span> : null}
    </label>
  );
}
