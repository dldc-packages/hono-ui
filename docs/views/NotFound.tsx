import { Link, Paper, Typography } from "../../mod.ts";
import { css } from "../../src/css.ts";
import { Layout } from "./Layout.tsx";

export function NotFound() {
  return (
    <Layout>
      <Paper
        class={css({ display: "flex", flexDirection: "column", gap: 2, padding: 2 })}
      >
        <Typography fontSize="3xl" fontWeight="bold" color="white">404</Typography>
        <Typography fontSize="xl" color="gray-200">
          Page non trouvée
        </Typography>
        <Link href="/">Retour à l'accueil</Link>
      </Paper>
    </Layout>
  );
}
