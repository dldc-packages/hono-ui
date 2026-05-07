import { Fragment } from "hono/jsx";
import { Box, Paper, Typography, utility } from "../../mod.ts";

export function PapersPageContent() {
  return (
    <Fragment>
      <Paper flexDirection="column" gap={3} padding={3}>
        <Typography textSize="2xl">
          Paper
        </Typography>
        <Box inlines={[`height: 200px`, utility.bg("neutral.700")]} />
      </Paper>

      <Paper>
        Regular card
      </Paper>

      <Paper inlines={[`grid-column: 1 / -1`]}>
        Full width card
      </Paper>
    </Fragment>
  );
}
