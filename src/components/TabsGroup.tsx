import { css, cx } from "hono/css";
import type { CSSProperties } from "hono/jsx";
import type { JSX } from "hono/jsx/jsx-runtime";
import type { Merge } from "type-fest";
import * as tokens from "../tokens.ts";
import * as utility from "../utility.ts";

export type TabsGroupProps = Merge<JSX.IntrinsicElements["div"], {
  rounded?: number;
  padding?: number;
  gap?: number;
  style?: CSSProperties;
}>;

export function TabsGroup({
  children,
  rounded = 6,
  padding = 1.5,
  style: styleProp,
  class: classProp,
  ...rest
}: TabsGroupProps): JSX.Element {
  const className = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    border-radius: var(--tabs-group-rounded);
    ${utility.cornerSuperellipse()};
    padding: var(--tabs-group-padding);
    gap: var(--tabs-group-padding);
    border-width: 0.5px;
    border-color: ${utility.opacity(tokens.c("white"), 10)};
    ${utility.bg("neutral.900")};

    /* Keep tabs on one row while allowing horizontal scroll */
    & > * {
      flex: 0 0 auto;
    }
  `;

  const style: CSSProperties = {
    ["--tabs-group-rounded"]: tokens.x(rounded),
    ["--tabs-group-padding"]: tokens.x(padding),
    ["--tablink-rounded"]: `calc(${tokens.x(rounded)} - ${tokens.x(padding)})`,
    ...styleProp,
  };

  return (
    <div class={cx(className, classProp)} style={style} {...rest}>
      {children}
    </div>
  );
}
