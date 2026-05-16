import { Style } from "hono/css";
import type { Child, PropsWithChildren } from "hono/jsx";
import type { JSX } from "hono/jsx/jsx-runtime";
import { globalStyles } from "../../src/global.ts";
import { css } from "../css.ts";

export type HtmlProps = PropsWithChildren<{
  heads?: Child;
  title: string;
  lang?: string;
}>;

const htmlClassName = css({
  height: "full",
  background: "neutral-950",
  color: "white",
  colorScheme: "dark",
});

export function Html({ children, title, heads, lang = "en" }: HtmlProps): JSX.Element {
  return (
    <html lang={lang} class={htmlClassName}>
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
