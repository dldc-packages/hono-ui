import { css } from "hono/css";
import { Button, ButtonLink, InlineGroup, Input, Paper, Select, utility } from "../../mod.ts";

const pageClassName = css`
  ${utility.flex({ gap: 4, direction: "column", padding: 3, align: "start" })};
`;

const sectionClassName = css`
  ${utility.flex({ gap: 2, direction: "column", align: "start" })};
`;

const subtitleClassName = css`
  ${utility.textSize("lg")};
`;

export function InlineGroupsPageContent() {
  return (
    <Paper class={pageClassName}>
      <p
        class={css`
          ${utility.textSize("2xl")};
        `}
      >
        Inline Group
      </p>

      <section class={sectionClassName}>
        <p class={subtitleClassName}>Action cluster</p>
        <InlineGroup>
          <Button>Secondary</Button>
          <Button>Primary</Button>
          <Button>Danger</Button>
        </InlineGroup>
      </section>

      <section class={sectionClassName}>
        <p class={subtitleClassName}>Navigation mix with links</p>
        <InlineGroup>
          <ButtonLink href="/" variant="primary">Overview</ButtonLink>
          <ButtonLink href="/buttons" variant="primary">Components</ButtonLink>
          <ButtonLink href="/inputs" variant="primary">Examples</ButtonLink>
        </InlineGroup>
      </section>

      <section class={sectionClassName}>
        <p class={subtitleClassName}>Input and action</p>
        <InlineGroup>
          <Select defaultValue="all">
            <option value="all">All</option>
            <option value="docs">Docs</option>
            <option value="code">Code</option>
          </Select>
          <Input placeholder="Search..." />
          <Button variant="primary">Go</Button>
        </InlineGroup>
      </section>

      <section class={sectionClassName}>
        <p class={subtitleClassName}>Variant select group</p>
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
      </section>

      <section class={sectionClassName}>
        <p class={subtitleClassName}>Same group with larger size</p>
        <InlineGroup>
          <Button size={10}>Prev</Button>
          <Select size={10} defaultValue="10">
            <option value="10">10 per page</option>
            <option value="25">25 per page</option>
            <option value="50">50 per page</option>
          </Select>
          <Button size={10}>Next</Button>
        </InlineGroup>
      </section>

      <section class={sectionClassName}>
        <p class={subtitleClassName}>Wrapping group</p>
        <InlineGroup wrap>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
          <Button>Four</Button>
          <Button>Five</Button>
          <Button>Six</Button>
        </InlineGroup>
      </section>
    </Paper>
  );
}
