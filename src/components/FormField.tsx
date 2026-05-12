import type { Child } from "hono/jsx";
import type { JSX } from "hono/jsx/jsx-runtime";
import type { Merge } from "type-fest";
import * as utility from "../utility.ts";
import type { Inlines } from "../utils.ts";
import { Label, type LabelProps } from "./Label.tsx";
import { Stack } from "./Stack.tsx";
import { Typography } from "./Typography.tsx";

export type FormFieldProps = Merge<
  JSX.IntrinsicElements["div"],
  {
    id: string;
    label: Child;
    layout?: "vertical" | "inline-input-first" | "inline-label-first";
    hint?: Child;
    error?: Child;
    hintId?: string;
    errorId?: string;
    required?: boolean;
    size?: number;
    inlines?: Inlines;
    labelProps?: Omit<LabelProps, "children" | "htmlFor" | "required" | "hint" | "size">;
  }
>;

export function FormField({
  id,
  label,
  layout = "vertical",
  hint,
  error,
  hintId,
  errorId,
  required,
  size = 8,
  inlines,
  labelProps,
  children,
  class: classProp,
  ...rest
}: FormFieldProps): JSX.Element {
  const resolvedHintId = hint ? (hintId ?? `${id}-hint`) : undefined;
  const resolvedErrorId = error ? (errorId ?? `${id}-error`) : undefined;
  const renderInputFirst = layout === "inline-input-first";

  return (
    <Stack
      direction="column"
      gap={1}
      inlines={["width: 100%", ...(inlines ?? [])]}
      class={classProp}
      {...rest}
    >
      <Stack
        direction={layout === "vertical" ? "column" : "row"}
        align={layout === "vertical" ? "start" : "center"}
        gap={layout === "vertical" ? 1 : 2}
        inlines={["width: 100%"]}
      >
        {renderInputFirst ? children : null}
        <Label htmlFor={id} required={required} hint={undefined} size={size} {...labelProps}>
          {label}
        </Label>
        {renderInputFirst ? null : children}
      </Stack>
      {hint
        ? (
          <Typography
            id={resolvedHintId}
            render={<p />}
            textSize="sm"
            textColor="neutral.400"
            inlines={["margin: 0", utility.m.l(1)]}
          >
            {hint}
          </Typography>
        )
        : null}
      {error
        ? (
          <Typography
            id={resolvedErrorId}
            render={<p />}
            textSize="sm"
            textColor="red.500"
            inlines={["margin: 0", utility.m.l(1)]}
          >
            {error}
          </Typography>
        )
        : null}
    </Stack>
  );
}
