import { css, Style } from "hono/css";
import type { Child, PropsWithChildren } from "hono/jsx";
import type { JSX } from "hono/jsx/jsx-runtime";
import { globalStyles } from "../../src/global.ts";
import * as tokens from "../../src/tokens.ts";

export type HtmlProps = PropsWithChildren<{
  heads?: Child;
}>;

export function Html({ children, heads }: HtmlProps): JSX.Element {
  const htmlClassName = css`
    height: 100%;
    background: ${tokens.c("neutral.950")};
    color: ${tokens.c("white")};
    color-scheme: dark;
  `;

  return (
    <html lang="fr" class={htmlClassName}>
      <head>
        <meta charset="UTF-8" />
        <link
          rel="icon"
          href={`data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">📜</text></svg>`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hono UI - Docs</title>
        <Style>{globalStyles}</Style>
        {heads}
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
