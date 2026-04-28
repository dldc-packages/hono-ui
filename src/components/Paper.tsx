import { css, cx } from "hono/css";
import type { CSSProperties } from "hono/jsx";
import type { JSX } from "hono/jsx/jsx-runtime";
import type { Merge } from "type-fest";
import * as tokens from "../tokens.ts";
import * as utility from "../utility.ts";

export type PaperProps = Merge<JSX.IntrinsicElements["div"], {
  rounded?: number;
  style?: CSSProperties;
}>;

export function Paper({ children, rounded = 2, style: styleProp, class: classProp, ...rest }: PaperProps): JSX.Element {
  const className = css`
    ${utility.cornerShape.superellipse};
    border-width: 0.5px;
    border-color: ${utility.opacity(tokens.c("white"), 10)};
    ${utility.bg("neutral.900")};
    border-radius: var(--paper-radius);
  `;

  const style: CSSProperties = {
    ["--paper-radius"]: tokens.x(rounded),
    ...styleProp,
  };

  return (
    <div class={cx(className, classProp)} style={style} {...rest}>
      {children}
    </div>
  );
}
