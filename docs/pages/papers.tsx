import { Fragment } from "hono/jsx";
import { Box, Paper, Typography } from "../../mod.ts";
import { css } from "../../src/css.ts";

export function PapersPageContent() {
  return (
    <Fragment>
      <Paper flexDirection="column" gap={3} padding={3}>
        <Typography fontSize="2xl">
          Paper
        </Typography>
        <Box classList={css({ height: "200px", background: "neutral-700" })} />
      </Paper>

      <Paper>
        Regular card
      </Paper>

      <Paper classList={css({ gridColumn: "1 / -1" })}>
        Full width card
      </Paper>
    </Fragment>
  );
}
