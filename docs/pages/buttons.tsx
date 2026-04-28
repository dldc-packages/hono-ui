import { css } from "hono/css";
import { Button, ButtonLike, ButtonLink, Paper, utility } from "../../mod.ts";

export function ButtonsPageContent() {
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
        Button
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
          Button variants
        </p>
        <div class={rowClassName}>
          <Button variant="secondary">Secondary</Button>
          <Button variant="primary">Primary</Button>
          <Button variant="danger">Danger</Button>
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
          Sizes and disabled
        </p>
        <div class={rowClassName}>
          <Button>Default</Button>
          <Button size={10}>Size 10</Button>
          <Button variant="primary" disabled>Disabled primary</Button>
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
          ButtonLink variants
        </p>
        <div class={rowClassName}>
          <ButtonLink href="/" variant="secondary">Secondary link</ButtonLink>
          <ButtonLink href="/" variant="primary">Primary link</ButtonLink>
          <ButtonLink href="/" variant="danger">Danger link</ButtonLink>
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
          ButtonLike (div) variants
        </p>
        <div class={rowClassName}>
          <ButtonLike variant="secondary">Secondary div</ButtonLike>
          <ButtonLike variant="primary">Primary div</ButtonLike>
          <ButtonLike variant="danger">Danger div</ButtonLike>
          <ButtonLike variant="primary" disabled>Disabled div</ButtonLike>
        </div>
      </section>
    </Paper>
  );
}
