import { FormField, Paper, Toggle, Typography } from "../../mod.ts";

export function TogglePageContent() {
  return (
    <Paper flexDirection="column" gap={4} padding={3} align="start">
      <Typography textSize="2xl">
        Toggle
      </Typography>

      <FormField
        id="marketing-updates"
        label="Marketing updates"
        hint="Get occasional product announcements"
        layout="inline-input-first"
      >
        <Toggle id="marketing-updates" name="marketing-updates" aria-describedby="marketing-updates-hint" />
      </FormField>

      <FormField
        id="feature-preview"
        label="Feature preview"
        hint="Enable early-access functionality"
        layout="inline-input-first"
      >
        <Toggle id="feature-preview" name="feature-preview" checked aria-describedby="feature-preview-hint" />
      </FormField>

      <FormField
        id="critical-alerts"
        label="Critical alerts"
        error="This setting must stay enabled for your plan."
        layout="inline-input-first"
      >
        <Toggle id="critical-alerts" name="critical-alerts" checked error aria-describedby="critical-alerts-error" />
      </FormField>

      <FormField
        id="readonly-example"
        label="Disabled toggle"
        hint="Unavailable for archived projects"
        layout="inline-input-first"
      >
        <Toggle id="readonly-example" name="readonly-example" disabled aria-describedby="readonly-example-hint" />
      </FormField>
    </Paper>
  );
}
