import { css } from "hono/css";
import { type FC, Fragment } from "hono/jsx";
import { Html, TabsGroup, Title, UniversalLayout, utility } from "../../mod.ts";
import { TabLink } from "../../src/components/TabLink.tsx";

export type LayoutTab = {
  name: string;
  link: string;
};

type LayoutProps = {
  title?: string;
  children: unknown;
  activeTab?: string;
  tabs?: LayoutTab[];
};

export const Layout: FC<LayoutProps> = ({ title, children, activeTab, tabs = [] }) => {
  return (
    <Html
      title={title ? `${title} - Hono UI` : "Hono UI - Docs"}
      heads={
        <Fragment>
          <link
            rel="icon"
            href={`data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">📜</text></svg>`}
          />
        </Fragment>
      }
    >
      <UniversalLayout
        class={css`
          ${utility.rowGap(4)};
        `}
      >
        <Title>
          Hono UI
        </Title>
        {tabs.length > 0
          ? (
            <TabsGroup>
              {tabs.map((tab) => (
                <TabLink
                  key={tab.link}
                  link={tab.link}
                  active={activeTab === tab.link}
                >
                  {tab.name}
                </TabLink>
              ))}
            </TabsGroup>
          )
          : null}
        {children}
      </UniversalLayout>
    </Html>
  );
};
