import { FormField, Paper, Stack, Textarea, Typography } from "../../mod.ts";

export function TextareaPageContent() {
  return (
    <Paper flexDirection="column" gap={4} padding={3} alignItems="start">
      <Typography fontSize="2xl">
        Textarea
      </Typography>

      <Stack flexDirection="column" render={<section />} gap={2} alignItems="start">
        <Typography fontSize="lg">
          Basic
        </Typography>
        <Textarea
          id="textarea-basic"
          placeholder="Write a short note..."
          rows={4}
        />
      </Stack>

      <Stack flexDirection="column" render={<section />} gap={2} alignItems="start">
        <Typography fontSize="lg">
          Size and rows
        </Typography>
        <Stack flexDirection="column" gap={2} alignItems="start" style={{ width: "100%" }}>
          <Textarea
            id="textarea-size-default"
            placeholder="Default size"
            rows={3}
          />
          <Textarea
            id="textarea-size-large"
            size={10}
            placeholder="Large textarea"
            rows={6}
          />
        </Stack>
      </Stack>

      <Stack flexDirection="column" render={<section />} gap={2} alignItems="start">
        <Typography fontSize="lg">
          States
        </Typography>

        <FormField id="textarea-disabled" label="Disabled" hint="This field is read-only in archived projects">
          <Textarea
            id="textarea-disabled"
            value="This content cannot be edited"
            disabled
            rows={3}
            aria-describedby="textarea-disabled-hint"
          />
        </FormField>

        <FormField id="textarea-error" label="Description" error="Please enter at least 20 characters">
          <Textarea
            id="textarea-error"
            error
            rows={4}
            value="Too short"
            aria-describedby="textarea-error-error"
          />
        </FormField>
      </Stack>
    </Paper>
  );
}
