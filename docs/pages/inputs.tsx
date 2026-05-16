import { Input, Paper, Stack, Typography } from "../../mod.ts";

export function InputsPageContent() {
  return (
    <Paper flexDirection="column" gap={3} padding={3} alignItems="start">
      <Typography fontSize="2xl">
        Input
      </Typography>
      <Stack flexDirection="column" gap={2}>
        <Input placeholder="Default" />
        <Input size={10} placeholder="Size 10" />
        <Input value="Disabled input" disabled />
      </Stack>
    </Paper>
  );
}
