import type { JSX } from "hono/jsx/jsx-runtime";
import type { Merge } from "type-fest";
import { type tokens, utility } from "../../mod.ts";
import { type Inlines, mergeInlines } from "../utils.ts";
import { createRender } from "../utils/create-render.ts";

export type TypographyProps = Merge<
  JSX.IntrinsicElements["div"],
  {
    inlines?: Inlines;
    render?: JSX.Element;
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
      textSize ? utility.textSize(textSize) : null,
      textColor ? utility.textColor(textColor) : null,
      fontWeight ? utility.fontWeight(fontWeight) : null,
    ],
    classProp,
  );

  return createRender("p", render, {
    class: className,
    ...rest,
  });
}
