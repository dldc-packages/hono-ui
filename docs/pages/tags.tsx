import { Paper, Stack, Tag, Typography } from "../../mod.ts";

export function TagsPageContent() {
  return (
    <Paper flexDirection="column" gap={4} padding={3} align="start">
      <Typography textSize="2xl">
        Tag
      </Typography>

      <Stack render={<section />} gap={2} align="start">
        <Typography textSize="lg">
          Neutral shades
        </Typography>
        <Stack direction="row" align="center" gap={2} wrap>
          <Tag color="neutral.300">neutral.300</Tag>
          <Tag color="neutral.400">neutral.400</Tag>
          <Tag color="neutral.500">neutral.500</Tag>
        </Stack>
      </Stack>

      <Stack render={<section />} gap={2} align="start">
        <Typography textSize="lg">
          Colors
        </Typography>
        <Stack direction="row" align="center" gap={2} wrap>
          <Tag color="blue.300">blue.300</Tag>
          <Tag color="amber.300">amber.300</Tag>
          <Tag color="green.300">green.300</Tag>
          <Tag color="red.400">red.400</Tag>
          <Tag color="violet.400">violet.400</Tag>
          <Tag color="pink.300">pink.300</Tag>
          <Tag color="cyan.300">cyan.300</Tag>
          <Tag color="orange.400">orange.400</Tag>
        </Stack>
      </Stack>

      <Stack render={<section />} gap={2} align="start">
        <Typography textSize="lg">
          Color scale
        </Typography>
        <Stack direction="row" align="center" gap={2} wrap>
          <Tag color="sky.100">sky.100</Tag>
          <Tag color="sky.200">sky.200</Tag>
          <Tag color="sky.300">sky.300</Tag>
          <Tag color="sky.400">sky.400</Tag>
          <Tag color="sky.500">sky.500</Tag>
          <Tag color="sky.600">sky.600</Tag>
          <Tag color="sky.700">sky.700</Tag>
          <Tag color="sky.800">sky.800</Tag>
          <Tag color="sky.900">sky.900</Tag>
        </Stack>
      </Stack>
    </Paper>
  );
}
