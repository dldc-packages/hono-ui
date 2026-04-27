import { css } from "hono/css";
import { Link, Paper, utility } from "../../mod.ts";
import { fontWeight, textColor, textSize } from "../../src/utility.ts";
import { Layout } from "./Layout.tsx";

export function NotFound() {
  // text-3xl font-bold text-gray-800
  const titleClass = css`
    ${textSize("3xl")};
    ${fontWeight("bold")};
    ${textColor("white")};
  `;

  return (
    <Layout>
      <Paper
        class={css`
          ${utility.flex({ gap: 2, padding: 3, direction: "column" })};
        `}
      >
        <h1 class={titleClass}>404</h1>
        <p
          class={css`
            ${textSize("xl")};
            ${textColor("gray.200")};
          `}
        >
          Page non trouvée.
        </p>
        <Link href="/">Retour à l'accueil</Link>
      </Paper>
    </Layout>
  );
}
