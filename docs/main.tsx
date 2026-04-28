import { Hono } from "hono";
import type { FC } from "hono/jsx";
import type { LayoutTab } from "./views/Layout.tsx";
import { Layout } from "./views/Layout.tsx";
import { NotFound } from "./views/NotFound.tsx";

const app = new Hono();

type PageModule = {
  HomePageContent?: FC;
  ButtonsPageContent?: FC;
  default?: FC;
};

type DocsPage = {
  route: string;
  name: string;
  component: FC;
};

function getRouteFromFile(fileName: string): string {
  if (fileName === "index.tsx") {
    return "/";
  }
  return `/${fileName.replace(/\.tsx$/, "")}`;
}

function getNameFromRoute(route: string): string {
  if (route === "/") {
    return "Home";
  }
  const slug = route.slice(1);
  return slug
    .split("-")
    .filter(Boolean)
    .map((part) => part.slice(0, 1).toUpperCase() + part.slice(1))
    .join(" ");
}

function toPascalCase(value: string): string {
  return value
    .split("-")
    .filter(Boolean)
    .map((part) => part.slice(0, 1).toUpperCase() + part.slice(1))
    .join("");
}

function pickComponent(module: PageModule, fileName: string): FC | null {
  if (module.default) {
    return module.default;
  }

  const stem = fileName.replace(/\.tsx$/, "");
  const suffix = "PageContent";
  const expected = stem === "index" ? "HomePageContent" : `${toPascalCase(stem)}${suffix}`;

  const value = (module as Record<string, unknown>)[expected];
  return typeof value === "function" ? (value as FC) : null;
}

const pagesDir = new URL("./pages", import.meta.url);
const pages: DocsPage[] = [];

for await (const entry of Deno.readDir(pagesDir)) {
  if (!entry.isFile || !entry.name.endsWith(".tsx") || entry.name.startsWith("_")) {
    continue;
  }

  const module = await import(`./pages/${entry.name}`) as PageModule;
  const component = pickComponent(module, entry.name);

  if (!component) {
    continue;
  }

  const route = getRouteFromFile(entry.name);
  pages.push({
    route,
    name: getNameFromRoute(route),
    component,
  });
}

pages.sort((a, b) => {
  if (a.route === "/") {
    return -1;
  }
  if (b.route === "/") {
    return 1;
  }
  return a.route.localeCompare(b.route);
});

const tabs: LayoutTab[] = pages.map((page) => ({ name: page.name, link: page.route }));

for (const page of pages) {
  app.get(page.route, (c) => {
    const Page = page.component;
    return c.html(
      <Layout activeTab={page.route} tabs={tabs}>
        <Page />
      </Layout>,
    );
  });
}

app.notFound((c) => c.html(<NotFound />, 404));

Deno.serve(app.fetch);
