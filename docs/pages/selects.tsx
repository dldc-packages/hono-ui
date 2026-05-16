import { Paper, Select, Stack, Typography } from "../../mod.ts";

export function SelectsPageContent() {
  return (
    <Paper flexDirection="column" gap={4} padding={3} alignItems="start">
      <Typography fontSize="2xl">
        Select
      </Typography>

      <Stack flexDirection="column" render={<section />} gap={2} alignItems="start">
        <Typography fontSize="lg">
          Select variants
        </Typography>
        <Stack flexDirection="row" alignItems="center" gap={2} flexWrap="wrap">
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
        </Stack>
      </Stack>

      <Stack flexDirection="column" render={<section />} gap={2} alignItems="start">
        <Typography fontSize="lg">
          Size and disabled
        </Typography>
        <Stack flexDirection="row" alignItems="center" gap={2} flexWrap="wrap">
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
        </Stack>
      </Stack>
    </Paper>
  );
}
