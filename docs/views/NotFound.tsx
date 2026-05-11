import { Link, Paper, Typography, utility } from "../../mod.ts";
import { Layout } from "./Layout.tsx";

export function NotFound() {
  return (
    <Layout>
      <Paper inlines={[utility.flex({ gap: 2, padding: 3, direction: "column" })]}>
        <Typography textSize="3xl" fontWeight="bold" textColor="white">404</Typography>
        <Typography textSize="xl" textColor="gray.200">
          Page non trouvée
        </Typography>
        <Link href="/">Retour à l'accueil</Link>
      </Paper>
    </Layout>
  );
}
