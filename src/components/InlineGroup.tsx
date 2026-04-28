import { css, cx } from "hono/css";
import type { JSX } from "hono/jsx/jsx-runtime";
import type { Merge } from "type-fest";

export type InlineGroupProps = Merge<
  JSX.IntrinsicElements["div"],
  {
    wrap?: boolean;
  }
>;

export function InlineGroup({
  children,
  wrap = false,
  class: classProp,
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
    <div class={cx(className, classProp)} {...rest}>
      {children}
    </div>
  );
}
