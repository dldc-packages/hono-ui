import { Input, Paper, Typography } from "../../mod.ts";

export function InputsPageContent() {
  return (
    <Paper flexDirection="column" gap={3} padding={3} align="start">
      <Typography textSize="2xl">
        Input
      </Typography>
      <Input placeholder="Default" />
      <Input size={10} placeholder="Size 10" />
      <Input value="Disabled input" disabled />
    </Paper>
  );
}
