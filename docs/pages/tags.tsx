import { css } from "hono/css";
import { Paper, Tag, utility } from "../../mod.ts";

export function TagsPageContent() {
  const rowClass = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;
  `;

  return (
    <Paper inlines={[utility.flex({ gap: 4, direction: "column", padding: 3, align: "start" })]}>
      <p
        class={css`
          ${utility.textSize("2xl")};
        `}
      >
        Tag
      </p>

      <section inlines={[utility.flex({ gap: 2, direction: "column", align: "start" })]}>
        <p
          class={css`
            ${utility.textSize("lg")};
          `}
        >
          Neutral shades
        </p>
        <div class={rowClass}>
          <Tag color="neutral.300">neutral.300</Tag>
          <Tag color="neutral.400">neutral.400</Tag>
          <Tag color="neutral.500">neutral.500</Tag>
        </div>
      </section>

      <section inlines={[utility.flex({ gap: 2, direction: "column", align: "start" })]}>
        <p
          class={css`
            ${utility.textSize("lg")};
          `}
        >
          Colors
        </p>
        <div class={rowClass}>
          <Tag color="blue.300">blue.300</Tag>
          <Tag color="amber.300">amber.300</Tag>
          <Tag color="green.300">green.300</Tag>
          <Tag color="red.400">red.400</Tag>
          <Tag color="violet.400">violet.400</Tag>
          <Tag color="pink.300">pink.300</Tag>
          <Tag color="cyan.300">cyan.300</Tag>
          <Tag color="orange.400">orange.400</Tag>
        </div>
      </section>

      <section inlines={[utility.flex({ gap: 2, direction: "column", align: "start" })]}>
        <p
          class={css`
            ${utility.textSize("lg")};
          `}
        >
          Color scale
        </p>
        <div class={rowClass}>
          <Tag color="sky.100">sky.100</Tag>
          <Tag color="sky.200">sky.200</Tag>
          <Tag color="sky.300">sky.300</Tag>
          <Tag color="sky.400">sky.400</Tag>
          <Tag color="sky.500">sky.500</Tag>
          <Tag color="sky.600">sky.600</Tag>
          <Tag color="sky.700">sky.700</Tag>
          <Tag color="sky.800">sky.800</Tag>
          <Tag color="sky.900">sky.900</Tag>
        </div>
      </section>
    </Paper>
  );
}
