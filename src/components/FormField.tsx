import { css, cx } from "hono/css";
import type { Child } from "hono/jsx";
import type { JSX } from "hono/jsx/jsx-runtime";
import type { Merge } from "type-fest";
import * as utility from "../utility.ts";
import { Label, type LabelProps } from "./Label.tsx";

export type FormFieldProps = Merge<
  JSX.IntrinsicElements["div"],
  {
    id: string;
    label: Child;
    hint?: Child;
    error?: Child;
    hintId?: string;
    errorId?: string;
    required?: boolean;
    size?: number;
    labelProps?: Omit<LabelProps, "children" | "htmlFor" | "required" | "hint" | "size">;
  }
>;

export function FormField({
  id,
  label,
  hint,
  error,
  hintId,
  errorId,
  required,
  size = 8,
  labelProps,
  children,
  class: classProp,
  ...rest
}: FormFieldProps): JSX.Element {
  const className = css`
    ${utility.flex({ direction: "column", gap: 1 })};
    width: 100%;
  `;

  const errorClassName = css`
    margin: 0;
    ${utility.textSize("sm")};
    ${utility.textColor("red.500")};
    ${utility.ml(1)};
  `;

  const hintClassName = css`
    margin: 0;
    ${utility.textSize("sm")};
    ${utility.textColor("neutral.400")};
    ${utility.ml(1)};
  `;

  const resolvedHintId = hint ? (hintId ?? `${id}-hint`) : undefined;
  const resolvedErrorId = error ? (errorId ?? `${id}-error`) : undefined;

  return (
    <div class={cx(className, classProp)} {...rest}>
      <Label htmlFor={id} required={required} hint={undefined} size={size} {...labelProps}>
        {label}
      </Label>
      {children}
      {hint ? <p id={resolvedHintId} class={hintClassName}>{hint}</p> : null}
      {error ? <p id={resolvedErrorId} class={errorClassName}>{error}</p> : null}
    </div>
  );
}
