import type { Child } from "hono/jsx";
import type { JSX } from "hono/jsx/jsx-runtime";
import { css } from "../css.ts";
import { resolveClassNames } from "../utils/resolveClassNames.ts";
import type { ComponentPropsMerge } from "../utils/types.ts";
import { Label, type LabelProps } from "./Label.tsx";
import { Stack } from "./Stack.tsx";
import { Typography } from "./Typography.tsx";

export type FormFieldProps = ComponentPropsMerge<
  {
    id: string;
    label: Child;
    layout?: "vertical" | "inline-input-first" | "inline-label-first";
    hint?: Child;
    error?: Child;
    hintId?: string;
    errorId?: string;
    required?: boolean;
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
      flexDirection="column"
      gap={1}
      class={resolveClassNames(classProp, css({ width: "full" }))}
      {...rest}
    >
      <Stack
        flexDirection={layout === "vertical" ? "column" : "row"}
        alignItems={layout === "vertical" ? "start" : "center"}
        gap={layout === "vertical" ? 1 : 2}
        class={css({ width: "full" })}
      >
        {renderInputFirst ? children : null}
        <Label htmlFor={id} required={required} hint={undefined} {...labelProps}>
          {label}
        </Label>
        {renderInputFirst ? null : children}
      </Stack>
      {hint
        ? (
          <Typography
            id={resolvedHintId}
            render={<p />}
            fontSize="sm"
            color="neutral-400"
            class={[css({ margin: 0, marginLeft: 1 })]}
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
            fontSize="sm"
            color="red-500"
            class={[css({ margin: 0, marginLeft: 1 })]}
          >
            {error}
          </Typography>
        )
        : null}
    </Stack>
  );
}
