import { House } from "lucide-static";
import { Button, ButtonLike, ButtonLink, Icon, Paper, Typography } from "../../mod.ts";
import { Stack } from "../../src/components/Stack.tsx";

export function ButtonsPageContent() {
  return (
    <Paper flexDirection="column" gap={4} padding={3} align="start">
      <Typography textSize="2xl">
        Button
      </Typography>

      <Stack render={<section />} direction="column" align="start" gap={2}>
        <Typography textSize="lg">
          Button variants
        </Typography>
        <Stack direction="row" align="center" gap={2} wrap>
          <Button variant="secondary">
            <Icon icon={House} />
            Secondary
          </Button>
          <Button variant="primary">Primary</Button>
          <Button variant="danger">Danger</Button>
        </Stack>
      </Stack>

      <Stack render={<section />} direction="column" align="start" gap={2}>
        <Typography textSize="lg">
          Sizes and disabled
        </Typography>
        <Stack direction="row" align="center" gap={2} wrap>
          <Button>Default</Button>
          <Button size={10}>Size 10</Button>
          <Button variant="primary" disabled>Disabled primary</Button>
        </Stack>
      </Stack>

      <Stack render={<section />} direction="column" align="start" gap={2}>
        <Typography textSize="lg">
          ButtonLink variants
        </Typography>
        <Stack direction="row" align="center" gap={2} wrap>
          <ButtonLink href="/" variant="secondary">Secondary link</ButtonLink>
          <ButtonLink href="/" variant="primary">Primary link</ButtonLink>
          <ButtonLink href="/" variant="danger">Danger link</ButtonLink>
        </Stack>
      </Stack>

      <Stack render={<section />} direction="column" align="start" gap={2}>
        <Typography textSize="lg">
          ButtonLike (div) variants
        </Typography>
        <Stack direction="row" align="center" gap={2} wrap>
          <ButtonLike variant="secondary">Secondary div</ButtonLike>
          <ButtonLike variant="primary">Primary div</ButtonLike>
          <ButtonLike variant="danger">Danger div</ButtonLike>
          <ButtonLike variant="primary" disabled>Disabled div</ButtonLike>
        </Stack>
      </Stack>
    </Paper>
  );
}
