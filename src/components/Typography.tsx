import type { JSX } from "hono/jsx/jsx-runtime";
import type { Merge } from "type-fest";
import { type tokens, utility } from "../../mod.ts";
import { type Inlines, mergeInlines } from "../utils.ts";
import { createRender, type RenderProp } from "../utils/create-render.ts";

export type TypographyProps = Merge<
  JSX.IntrinsicElements["div"],
  {
    inlines?: Inlines;
    render?: RenderProp;
    textSize?: tokens.TextSizeKey;
    textColor?: tokens.ColorKey;
    fontWeight?: tokens.FontWeightKey;
  }
>;

export function Typography({
  class: classProp,
  inlines,
  render,
  textColor,
  textSize,
  fontWeight,
  ...rest
}: TypographyProps): JSX.Element {
  const className = mergeInlines(
    [
      ...(inlines ?? []),
      textSize ? utility.font.size(textSize) : null,
      textColor ? utility.color.c(textColor) : null,
      fontWeight ? utility.font.weight(fontWeight) : null,
    ],
    classProp,
  );

  return createRender("p", render, {
    class: className,
    ...rest,
  });
}
