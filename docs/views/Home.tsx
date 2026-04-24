import { css } from "hono/css";
import { Html, Paper, UniversalLayout, utility } from "../../mod.ts";

export function Home() {
  return (
    <Html title="Hono UI - Docs">
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
