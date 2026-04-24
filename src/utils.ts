import { css } from "hono/css";

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
