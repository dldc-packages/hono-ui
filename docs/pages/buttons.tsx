import { css } from "hono/css";
import { Button, Paper, utility } from "../../mod.ts";

export function ButtonsPageContent() {
  return (
    <Paper
      class={css`
        ${utility.flex({ gap: 3, direction: "column", padding: 3, align: "start" })};
      `}
    >
      <p
        class={css`
          ${utility.textSize("2xl")};
        `}
      >
        Button
      </p>
      <Button>Default</Button>
      <Button size={10}>Size 10</Button>
    </Paper>
  );
}
