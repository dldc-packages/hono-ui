import { css } from "hono/css";
import { Paper, Select, utility } from "../../mod.ts";

export function SelectsPageContent() {
  const rowClassName = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;
  `;

  return (
    <Paper
      class={css`
        ${utility.flex({ gap: 4, direction: "column", padding: 3, align: "start" })};
      `}
    >
      <p
        class={css`
          ${utility.textSize("2xl")};
        `}
      >
        Select
      </p>

      <section
        class={css`
          ${utility.flex({ gap: 2, direction: "column", align: "start" })};
        `}
      >
        <p
          class={css`
            ${utility.textSize("lg")};
          `}
        >
          Select variants
        </p>
        <div class={rowClassName}>
          <Select name="variant-secondary" variant="secondary" defaultValue="secondary">
            <option value="secondary">Secondary</option>
            <option value="secondary-2">Secondary alt</option>
          </Select>
          <Select name="variant-primary" variant="primary" defaultValue="primary">
            <option value="primary">Primary</option>
            <option value="primary-2">Primary alt</option>
          </Select>
          <Select name="variant-danger" variant="danger" defaultValue="danger">
            <option value="danger">Danger</option>
            <option value="danger-2">Danger alt</option>
          </Select>
        </div>
      </section>

      <section
        class={css`
          ${utility.flex({ gap: 2, direction: "column", align: "start" })};
        `}
      >
        <p
          class={css`
            ${utility.textSize("lg")};
          `}
        >
          Size and disabled
        </p>
        <div class={rowClassName}>
          <Select name="size-default" defaultValue="medium">
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </Select>

          <Select name="size-large" size={10} variant="primary" defaultValue="tablet">
            <option value="mobile">Mobile</option>
            <option value="tablet">Tablet</option>
            <option value="desktop">Desktop</option>
          </Select>

          <Select name="disabled" variant="danger" disabled defaultValue="disabled-option">
            <option value="disabled-option">Disabled select</option>
          </Select>
        </div>
      </section>
    </Paper>
  );
}
