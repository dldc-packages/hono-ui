import { css } from "hono/css";
import { Box, Paper, Stack, utility } from "../../mod.ts";

export function StackPageContent() {
  const pageClassName = css`
    ${utility.flex({ gap: 4, direction: "column", padding: 3, align: "start" })};
  `;

  const sectionClassName = css`
    ${utility.flex({ gap: 2, direction: "column", align: "start" })};
  `;

  const subtitleClassName = css`
    ${utility.textSize("lg")};
  `;

  const sampleTileClassName = css`
    ${utility.p(2)};
    ${utility.bg("neutral.700")};
    ${utility.textColor("neutral.200")};
  `;

  const showcaseClassName = css`
    width: 100%;
    min-height: 200px;
    ${utility.p(3)};
    ${utility.bg("neutral.800")};
  `;

  return (
    <Paper class={pageClassName}>
      <p
        class={css`
          ${utility.textSize("2xl")};
        `}
      >
        Stack
      </p>

      <section class={sectionClassName}>
        <p class={subtitleClassName}>Vertical spacing</p>
        <Stack gap={2}>
          <Box class={sampleTileClassName}>Project overview</Box>
          <Box class={sampleTileClassName}>Recent activity</Box>
          <Box class={sampleTileClassName}>Team updates</Box>
        </Stack>
      </section>

      <section class={sectionClassName}>
        <p class={subtitleClassName}>Horizontal layout</p>
        <Stack direction="row" gap={2} wrap>
          <Box class={sampleTileClassName}>Draft</Box>
          <Box class={sampleTileClassName}>Review</Box>
          <Box class={sampleTileClassName}>Ready</Box>
          <Box class={sampleTileClassName}>Published</Box>
        </Stack>
      </section>

      <section class={sectionClassName}>
        <p class={subtitleClassName}>Alignment and justification</p>
        <Stack class={showcaseClassName} align="center" justify="center" gap={2}>
          <Box class={sampleTileClassName}>Centered one</Box>
          <Box class={sampleTileClassName}>Centered two</Box>
        </Stack>
      </section>

      <section class={sectionClassName}>
        <p class={subtitleClassName}>Custom render element</p>
        <Stack render={<ul />} gap={1}>
          <li>Uses semantic list markup</li>
          <li>Keeps Stack spacing props</li>
          <li>Useful for menus and timelines</li>
        </Stack>
      </section>
    </Paper>
  );
}
