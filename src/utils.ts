import { css, cx } from "hono/css";

export function createGlobalStyle(
  template: TemplateStringsArray,
  ...values: string[]
): Promise<string> {
  return css`
    :-hono-global {
      ${String.raw(template, ...values).split("\n").join("")};
    }
  `;
}

export type CxArgs = Parameters<typeof cx>;

export type Inlines = (null | undefined | false | string)[];

export function mergeInlines(inlines: Inlines | undefined, ...args: CxArgs): string | Promise<string> {
  const filteredInlines = inlines?.filter((inline): inline is string => Boolean(inline)) ?? [];
  if (filteredInlines.length === 0) {
    return cx(...args);
  }

  return cx(
    css`
      ${filteredInlines.join(";\n")};
    `,
    ...args,
  );
}
