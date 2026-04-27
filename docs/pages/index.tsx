import { css } from "hono/css";
import { Paper, utility } from "../../mod.ts";

export function HomePageContent() {
  return (
    <Paper
      class={css`
        ${utility.flex({ gap: 2, direction: "column", padding: 3 })};
      `}
    >
      <p>
        A small component kit for Hono apps, focused on clean primitives and composable styles.
      </p>
      <p>
        Browse the pages in the top tabs to see concrete examples for each component.
      </p>
    </Paper>
  );
}
