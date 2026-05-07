import { css } from "hono/css";
import type { CSSProperties } from "hono/jsx";
import type { JSX } from "hono/jsx/jsx-runtime";
import type { Merge } from "type-fest";
import { tokens } from "../../mod.ts";
import { type Inlines, mergeInlines } from "../utils.ts";

export type UniversalLayoutProps = Merge<JSX.IntrinsicElements["div"], {
  style?: CSSProperties;
  inlines?: Inlines;
}>;

export function UniversalLayout({ children, class: classProp, inlines, ...rest }: UniversalLayoutProps): JSX.Element {
  const wrapperClassName = css`
    min-height: 100dvh;
    display: grid;
    align-items: center;
    justify-content: stretch;
  `;

  const contentClassName = css`
    display: grid;
    --padding: ${tokens.x(8)};
    align-items: center;
    justify-content: center;
    padding: var(--padding);
    @media (max-width: 640px) {
      --padding: ${tokens.x(4)};
    }
    grid-template-columns: 1fr min(42rem, 100%) 1fr;

    & > * {
      grid-column: 2;
    }
  `;

  return (
    <div class={wrapperClassName}>
      <div class={mergeInlines(inlines, contentClassName, classProp)} {...rest}>
        {children}
      </div>
    </div>
  );
}
