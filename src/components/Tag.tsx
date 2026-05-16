import type { FC } from "hono/jsx";
import { css } from "../css.ts";
import * as tokens from "../tokens.ts";

type TagProps = {
  children: unknown;
  color?: tokens.ColorKey;
};

const tagClass = css({
  fontSize: "xs",
  fontWeight: "semibold",
  borderRadius: "full",
  paddingX: 2,
  paddingY: 0.25,
  borderWidth: "1px",
  borderStyle: "solid",
  display: "inline-flex",
  alignItems: "center",
  width: "fit-content",
  color: "white/60",
  borderColor: `[${tokens.opacity("var(--tag-color)", 45)}]`,
  background: `[${tokens.opacity("var(--tag-color)", 15)}]`,
});

export const Tag: FC<TagProps> = ({ children, color = "neutral-300" }) => {
  const colorVar = tokens.c(color);

  return <span class={tagClass} style={{ "--tag-color": colorVar }}>{children}</span>;
};
