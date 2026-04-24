import { Hono } from "hono";
import { Home } from "./views/Home.tsx";
import { NotFound } from "./views/NotFound.tsx";

const app = new Hono();

app.get("/", (c) => c.html(<Home />));

app.notFound((c) => c.html(<NotFound />, 404));

Deno.serve(app.fetch);
