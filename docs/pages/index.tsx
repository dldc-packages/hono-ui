import { Paper, Typography, utility } from "../../mod.ts";

export function HomePageContent() {
  return (
    <Paper inlines={[utility.flex({ gap: 2, direction: "column", padding: 3 })]}>
      <Typography>
        A small component kit for Hono apps, focused on clean primitives and composable styles.
      </Typography>
      <Typography>
        Browse the pages in the top tabs to see concrete examples for each component.
      </Typography>
    </Paper>
  );
}
