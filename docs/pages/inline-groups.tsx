import { Button, ButtonLike, ButtonLink, InlineGroup, Input, Paper, Select, Stack, Typography } from "../../mod.ts";

export function InlineGroupsPageContent() {
  return (
    <Paper flexDirection="column" gap={4} padding={3} alignItems="start">
      <Typography fontSize="2xl">
        Inline Group
      </Typography>

      <Stack render={<section />} flexDirection="column" alignItems="start" gap={2}>
        <Typography fontSize="lg">Action cluster</Typography>
        <InlineGroup>
          <ButtonLike variant="secondary">Secondary</ButtonLike>
          <ButtonLike variant="primary">Primary</ButtonLike>
          <ButtonLike variant="danger">Danger</ButtonLike>
        </InlineGroup>
      </Stack>

      <Stack render={<section />} flexDirection="column" alignItems="start" gap={2}>
        <Typography fontSize="lg">Navigation mix with links</Typography>
        <InlineGroup>
          <ButtonLink href="/" variant="primary">Overview</ButtonLink>
          <ButtonLink href="/buttons" variant="primary">Components</ButtonLink>
          <ButtonLink href="/inputs" variant="primary">Examples</ButtonLink>
        </InlineGroup>
      </Stack>

      <Stack render={<section />} flexDirection="column" alignItems="start" gap={2}>
        <Typography fontSize="lg">Input and action</Typography>
        <InlineGroup>
          <Select defaultValue="all">
            <option value="all">All</option>
            <option value="docs">Docs</option>
            <option value="code">Code</option>
          </Select>
          <Input placeholder="Search..." />
          <Button variant="primary">Go</Button>
        </InlineGroup>
      </Stack>

      <Stack render={<section />} flexDirection="column" alignItems="start" gap={2}>
        <Typography fontSize="lg">Variant select group</Typography>
        <InlineGroup>
          <Select defaultValue="draft">
            <option value="draft">Draft</option>
            <option value="pending">Pending</option>
          </Select>
          <Select defaultValue="active">
            <option value="active">Active</option>
            <option value="published">Published</option>
          </Select>
          <Select defaultValue="archived">
            <option value="archived">Archived</option>
            <option value="deleted">Deleted</option>
          </Select>
        </InlineGroup>
      </Stack>

      <Stack render={<section />} flexDirection="column" alignItems="start" gap={2}>
        <Typography fontSize="lg">Same group with larger size</Typography>
        <InlineGroup>
          <ButtonLike size={10}>Prev</ButtonLike>
          <Select size={10} defaultValue="10">
            <option value="10">10 per page</option>
            <option value="25">25 per page</option>
            <option value="50">50 per page</option>
          </Select>
          <ButtonLike size={10}>Next</ButtonLike>
        </InlineGroup>
      </Stack>

      <Stack render={<section />} flexDirection="column" alignItems="start" gap={2}>
        <Typography fontSize="lg">Wrapping group</Typography>
        <InlineGroup wrap>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
          <Button>Four</Button>
          <Button>Five</Button>
          <Button>Six</Button>
        </InlineGroup>
      </Stack>
    </Paper>
  );
}
