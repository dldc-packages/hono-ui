import { css } from "hono/css";
import { Input, Paper, utility } from "../../mod.ts";

export function InputsPageContent() {
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
        Input
      </p>
      <Input placeholder="Default" />
      <Input size={10} placeholder="Size 10" />
      <Input value="Disabled input" disabled />
    </Paper>
  );
}
