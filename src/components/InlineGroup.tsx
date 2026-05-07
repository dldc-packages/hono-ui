import { css } from "hono/css";
import type { JSX } from "hono/jsx/jsx-runtime";
import type { Merge } from "type-fest";
import { type Inlines, mergeInlines } from "../utils.ts";

export type InlineGroupProps = Merge<
  JSX.IntrinsicElements["div"],
  {
    wrap?: boolean;
    inlines?: Inlines;
  }
>;

export function InlineGroup({
  children,
  wrap = false,
  class: classProp,
  inlines,
  ...rest
}: InlineGroupProps): JSX.Element {
  const className = css`
    display: inline-flex;
    flex-direction: row;
    align-items: stretch;
    flex-wrap: ${wrap ? "wrap" : "nowrap"};

    & > [data-group-item]:not(:first-child) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    & > [data-group-item]:not(:last-child) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  `;

  return (
    <div class={mergeInlines(inlines, className, classProp)} {...rest}>
      {children}
    </div>
  );
}
