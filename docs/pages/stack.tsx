import { Box, htmlx, Paper, Stack, Typography, utility } from "../../mod.ts";

export function StackPageContent() {
  console.log(<htmlx.ul />);

  return (
    <Paper flexDirection="column" gap={4} padding={3} align="start">
      <Typography textSize="2xl">
        Stack
      </Typography>

      <Stack render={<section />} gap={2} align="start">
        <Typography textSize="lg">Vertical spacing</Typography>
        <Stack gap={2}>
          <Box inlines={[utility.p(2), utility.bg("neutral.700"), utility.textColor("neutral.200")]}>Project overview</Box>
          <Box inlines={[utility.p(2), utility.bg("neutral.700"), utility.textColor("neutral.200")]}>Recent activity</Box>
          <Box inlines={[utility.p(2), utility.bg("neutral.700"), utility.textColor("neutral.200")]}>Team updates</Box>
        </Stack>
      </Stack>

      <Stack render={<section />} gap={2} align="start">
        <Typography textSize="lg">Horizontal layout</Typography>
        <Stack direction="row" gap={2} wrap>
          <Box inlines={[utility.p(2), utility.bg("neutral.700"), utility.textColor("neutral.200")]}>Draft</Box>
          <Box inlines={[utility.p(2), utility.bg("neutral.700"), utility.textColor("neutral.200")]}>Review</Box>
          <Box inlines={[utility.p(2), utility.bg("neutral.700"), utility.textColor("neutral.200")]}>Ready</Box>
          <Box inlines={[utility.p(2), utility.bg("neutral.700"), utility.textColor("neutral.200")]}>Published</Box>
        </Stack>
      </Stack>

      <Stack render={<section />} gap={2} align="start">
        <Typography textSize="lg">Alignment and justification</Typography>
        <Stack align="center" justify="center" gap={2} padding={4} inlines={[utility.bg("neutral.800")]}>
          <Box inlines={[utility.p(2), utility.bg("neutral.700"), utility.textColor("neutral.200")]}>Centered one</Box>
          <Box inlines={[utility.p(2), utility.bg("neutral.700"), utility.textColor("neutral.200")]}>Centered two</Box>
        </Stack>
      </Stack>

      <Stack render={<section />} gap={2} align="start" direction="column">
        <Typography textSize="lg">Custom render element</Typography>
        <Stack render={<ul />} gap={1}>
          <li>Uses semantic list markup</li>
          <li>Keeps Stack spacing props</li>
          <li>Useful for menus and timelines</li>
        </Stack>
      </Stack>

      <Typography textSize="lg">Custom render element</Typography>
      <Stack render={<htmlx.ul />} gap={2} align="start" direction="column">
        <Stack render={<ul />} gap={1}>
          <li>Uses semantic list markup</li>
          <li>Keeps Stack spacing props</li>
          <li>Useful for menus and timelines</li>
        </Stack>
      </Stack>

      <Typography textSize="lg">Stack rendered as form</Typography>
      <Stack render={<htmlx.form method="post" action="/login" />} gap={2} align="start">
        <Box inlines={[utility.p(2), utility.bg("neutral.700"), utility.textColor("neutral.200")]}>First name</Box>
        <Box inlines={[utility.p(2), utility.bg("neutral.700"), utility.textColor("neutral.200")]}>Last name</Box>
        <Box inlines={[utility.p(2), utility.bg("neutral.700"), utility.textColor("neutral.200")]}>Email</Box>
      </Stack>
    </Paper>
  );
}
