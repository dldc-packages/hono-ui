import { utility } from "@dldc/hono-ui";
import { css } from "hono/css";
import type { FC } from "hono/jsx";
import * as tokens from "../tokens.ts";

type TagProps = {
  children: unknown;
  color?: tokens.ColorKey;
};

export const Tag: FC<TagProps> = ({ children, color = "neutral.300" }) => {
  const colorVar = tokens.c(color);

  const tagClass = css`
    ${utility.font.size("xs")};
    ${utility.font.weight("semibold")};
    border-radius: 999px;
    padding: 0.2rem 0.55rem;
    border: 1px solid;
    display: inline-flex;
    align-items: center;
    width: fit-content;
    color: color-mix(in oklch, ${colorVar} 65%, white);
    border-color: color-mix(in oklch, ${colorVar} 45%, transparent);
    background: color-mix(in oklab, ${colorVar} 15%, transparent);
  `;

  return <span class={tagClass}>{children}</span>;
};
