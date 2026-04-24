import { css } from "hono/css";
import { Fragment } from "hono/jsx";
import { Html, Paper, UniversalLayout, utility } from "../../mod.ts";

export function Home() {
  return (
    <Html
      title="Hono UI - Docs"
      heads={
        <Fragment>
          <link
            rel="icon"
            href={`data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">📜</text></svg>`}
          />
        </Fragment>
      }
    >
      <UniversalLayout
        header="Hono UI Doc"
        class={css`
          ${utility.rowGap(4)};
        `}
      >
        <h1>Title</h1>
        <Paper
          class={css`
            ${utility.flex({ gap: 3, direction: "column" })};
            ${utility.p(3)};
          `}
        >
          <p>Hey</p>
          <div
            class={css`
              height: 200px;
              ${utility.bg("neutral.700")};
            `}
          />
        </Paper>
        <Paper>
          Hello
        </Paper>

        <Paper
          class={css`
            grid-column: 1 / -1;
          `}
        >
          Hello
        </Paper>
      </UniversalLayout>
    </Html>
  );
}
