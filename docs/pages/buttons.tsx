import { House } from "lucide-static";
import { Button, ButtonLike, ButtonLink, Icon, Paper, Typography } from "../../mod.ts";
import { Stack } from "../../src/components/Stack.tsx";

export function ButtonsPageContent() {
  return (
    <Paper flexDirection="column" gap={4} padding={3} alignItems="start">
      <Typography fontSize="2xl">
        Button
      </Typography>

      <Stack render={<section />} flexDirection="column" alignItems="start" gap={2}>
        <Typography fontSize="lg">
          Button variants
        </Typography>
        <Stack flexDirection="row" alignItems="center" gap={2} flexWrap="wrap">
          <Button variant="secondary">
            <Icon icon={House} />
            Secondary
          </Button>
          <Button variant="primary">Primary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="ghost">Ghost</Button>
        </Stack>
      </Stack>

      <Stack render={<section />} flexDirection="column" alignItems="start" gap={2}>
        <Typography fontSize="lg">
          Sizes and disabled
        </Typography>
        <Stack flexDirection="row" alignItems="center" gap={2} flexWrap="wrap">
          <Button>Default</Button>
          <Button size={10}>Size 10</Button>
          <Button variant="primary" disabled>Disabled primary</Button>
          <Button variant="ghost" disabled>Disabled ghost</Button>
        </Stack>
      </Stack>

      <Stack render={<section />} flexDirection="column" alignItems="start" gap={2}>
        <Typography fontSize="lg">
          ButtonLink variants
        </Typography>
        <Stack flexDirection="row" alignItems="center" gap={2} flexWrap="wrap">
          <ButtonLink href="/" variant="secondary">Secondary link</ButtonLink>
          <ButtonLink href="/" variant="primary">Primary link</ButtonLink>
          <ButtonLink href="/" variant="danger">Danger link</ButtonLink>
          <ButtonLink href="/" variant="ghost">Ghost link</ButtonLink>
        </Stack>
      </Stack>

      <Stack render={<section />} flexDirection="column" alignItems="start" gap={2}>
        <Typography fontSize="lg">
          ButtonLike (div) variants
        </Typography>
        <Stack flexDirection="row" alignItems="center" gap={2} flexWrap="wrap">
          <ButtonLike variant="secondary">Secondary div</ButtonLike>
          <ButtonLike variant="primary">Primary div</ButtonLike>
          <ButtonLike variant="danger">Danger div</ButtonLike>
          <ButtonLike variant="ghost">Ghost div</ButtonLike>
          <ButtonLike variant="primary" disabled>Disabled div</ButtonLike>
        </Stack>
      </Stack>
    </Paper>
  );
}
