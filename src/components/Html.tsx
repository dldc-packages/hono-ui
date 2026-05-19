import { Style } from "hono/css";
import type { Child } from "hono/jsx";
import type { JSX } from "hono/jsx/jsx-runtime";
import { globalStyles } from "../../src/global.ts";
import { css } from "../css.ts";
import { resolveClassNames } from "../utils/resolveClassNames.ts";
import type { ClassListProp } from "../utils/types.ts";

export type HtmlProps = {
  heads?: Child;
  title: string;
  lang?: string;
  children?: Child | undefined;
  classList?: ClassListProp;
};

const htmlClassName = css({
  height: "full",
  background: "neutral-950",
  color: "white",
  colorScheme: "dark",
});

export function Html({ children, title, heads, lang = "en", classList }: HtmlProps): JSX.Element {
  return (
    <html lang={lang} class={resolveClassNames(htmlClassName, classList)}>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <Style>{globalStyles}</Style>
        {heads}
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
