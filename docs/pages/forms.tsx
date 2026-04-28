import { css } from "hono/css";
import { FormField, Input, Paper, Textarea, utility } from "../../mod.ts";

export function FormsPageContent() {
  return (
    <Paper
      class={css`
        ${utility.flex({ gap: 4, direction: "column", padding: 3, align: "start" })};
      `}
    >
      <h3
        class={css`
          ${utility.textSize("2xl")};
        `}
      >
        Forms
      </h3>

      <FormField
        id="name"
        label="Name"
        hint="Displayed publicly on your profile"
        required
      >
        <Input id="name" placeholder="Jane Doe" aria-describedby="name-hint" />
      </FormField>

      <FormField
        id="bio"
        label="Bio"
        hint="A short summary for your profile"
      >
        <Textarea id="bio" rows={4} placeholder="Tell us a bit about yourself..." aria-describedby="bio-hint" />
      </FormField>

      <FormField
        id="email"
        label="Email"
        error="Please provide a valid email address."
      >
        <Input id="email" type="email" value="invalid@email" error aria-describedby="email-error" />
      </FormField>
    </Paper>
  );
}
