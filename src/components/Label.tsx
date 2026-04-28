import { css, cx } from "hono/css";
import type { Child } from "hono/jsx";
import type { JSX } from "hono/jsx/jsx-runtime";
import type { Merge } from "type-fest";
import * as utility from "../utility.ts";

export type LabelProps = Merge<
  JSX.IntrinsicElements["label"],
  {
    required?: boolean;
    hint?: Child;
  }
>;

export function Label({
  children,
  required,
  hint,
  class: classProp,
  ...rest
}: LabelProps): JSX.Element {
  const className = css`
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    ${utility.rowGap(1)};
    ${utility.textColor("neutral.200")};
    ${utility.textSize("sm")};
    font-weight: 600;
  `;

  const labelTextClassName = css`
    display: inline-flex;
    align-items: center;
    ${utility.columnGap(1)};
  `;

  const hintClassName = css`
    ${utility.textColor("neutral.400")};
    font-weight: 400;
    ${utility.ml(1)};
  `;

  return (
    <label class={cx(className, classProp)} {...rest}>
      <span class={labelTextClassName}>
        {children}
        {required ? <span>*</span> : null}
      </span>
      {hint ? <span class={hintClassName}>{hint}</span> : null}
    </label>
  );
}
