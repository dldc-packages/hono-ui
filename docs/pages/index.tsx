import { Paper, Typography } from "../../mod.ts";
import { css } from "../../src/css.ts";

export function HomePageContent() {
  return (
    <Paper classList={css({ display: "flex", flexDirection: "column", gap: 2, padding: 3 })}>
      <Typography>
        A small component kit for Hono apps, focused on clean primitives and composable styles.
      </Typography>
      <Typography>
        Browse the pages in the top tabs to see concrete examples for each component.
      </Typography>
    </Paper>
  );
}
