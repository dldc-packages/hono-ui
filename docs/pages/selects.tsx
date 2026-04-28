import { css } from "hono/css";
import { Paper, Select, utility } from "../../mod.ts";

export function SelectsPageContent() {
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
        Select
      </p>

      <Select name="size-default" defaultValue="medium">
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </Select>

      <Select name="size-large" size={10} defaultValue="tablet">
        <option value="mobile">Mobile</option>
        <option value="tablet">Tablet</option>
        <option value="desktop">Desktop</option>
      </Select>

      <Select name="disabled" disabled defaultValue="disabled-option">
        <option value="disabled-option">Disabled select</option>
      </Select>
    </Paper>
  );
}
