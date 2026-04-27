import { css } from "hono/css";
import { Fragment } from "hono/jsx";
import { Paper, utility } from "../../mod.ts";

export function PapersPageContent() {
  return (
    <Fragment>
      <Paper
        class={css`
          ${utility.flex({ gap: 3, direction: "column" })};
          ${utility.p(3)};
        `}
      >
        <p
          class={css`
            ${utility.textSize("2xl")};
          `}
        >
          Paper
        </p>
        <div
          class={css`
            height: 200px;
            ${utility.bg("neutral.700")};
          `}
        />
      </Paper>

      <Paper>
        Regular card
      </Paper>

      <Paper
        class={css`
          grid-column: 1 / -1;
        `}
      >
        Full width card
      </Paper>
    </Fragment>
  );
}
