import { Box, htmlx, Paper, Stack, Typography } from "../../mod.ts";
import { css } from "../../src/css.ts";

export function StackPageContent() {
  console.log(<htmlx.ul />);

  return (
    <Paper flexDirection="column" gap={4} padding={3} alignItems="start">
      <Typography fontSize="2xl">
        Stack
      </Typography>

      <Stack render={<section />} gap={2} alignItems="start">
        <Typography fontSize="lg">Vertical spacing</Typography>
        <Stack gap={2}>
          {/* <Box inlines={[utility.p.all(2), utility.bg.c("neutral-700"), utility.color.c("neutral-200")]}>Project overview</Box> */}
          <Box classList={css({ padding: 2, background: "neutral-700", color: "neutral-200" })}>Project overview</Box>
          <Box classList={css({ padding: 2, background: "neutral-700", color: "neutral-200" })}>Recent activity</Box>
          <Box classList={css({ padding: 2, background: "neutral-700", color: "neutral-200" })}>Team updates</Box>
        </Stack>
      </Stack>

      <Stack render={<section />} gap={2} alignItems="start">
        <Typography fontSize="lg">Horizontal layout</Typography>
        <Stack flexDirection="row" gap={2} flexWrap="wrap">
          <Box classList={css({ padding: 2, background: "neutral-700", color: "neutral-200" })}>Draft</Box>
          <Box classList={css({ padding: 2, background: "neutral-700", color: "neutral-200" })}>Review</Box>
          <Box classList={css({ padding: 2, background: "neutral-700", color: "neutral-200" })}>Ready</Box>
          <Box classList={css({ padding: 2, background: "neutral-700", color: "neutral-200" })}>Published</Box>
        </Stack>
      </Stack>

      <Stack render={<section />} gap={2} alignItems="start">
        <Typography fontSize="lg">Alignment and justification</Typography>
        <Stack alignItems="center" justifyContent="center" gap={2} padding={4} classList={css({ background: "neutral-800" })}>
          <Box classList={css({ padding: 2, background: "neutral-700", color: "neutral-200" })}>Centered one</Box>
          <Box classList={css({ padding: 2, background: "neutral-700", color: "neutral-200" })}>Centered two</Box>
        </Stack>
      </Stack>

      <Stack render={<section />} gap={2} alignItems="start" flexDirection="column">
        <Typography fontSize="lg">Custom render element</Typography>
        <Stack render={<ul />} gap={1}>
          <li>Uses semantic list markup</li>
          <li>Keeps Stack spacing props</li>
          <li>Useful for menus and timelines</li>
        </Stack>
      </Stack>

      <Typography fontSize="lg">Custom render element</Typography>
      <Stack render={<htmlx.ul />} gap={2} alignItems="start" flexDirection="column">
        <Stack render={<ul />} gap={1}>
          <li>Uses semantic list markup</li>
          <li>Keeps Stack spacing props</li>
          <li>Useful for menus and timelines</li>
        </Stack>
      </Stack>

      <Typography fontSize="lg">Stack rendered as form</Typography>
      <Stack render={<htmlx.form method="post" action="/login" />} gap={2} alignItems="start">
        <Box classList={css({ padding: 2, background: "neutral-700", color: "neutral-200" })}>First name</Box>
        <Box classList={css({ padding: 2, background: "neutral-700", color: "neutral-200" })}>Last name</Box>
        <Box classList={css({ padding: 2, background: "neutral-700", color: "neutral-200" })}>Email</Box>
      </Stack>
    </Paper>
  );
}
