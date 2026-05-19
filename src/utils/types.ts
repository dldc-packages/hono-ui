import type { cx } from "hono/css";
import type { Child, CSSProperties } from "hono/jsx";
import type { JSX } from "hono/jsx/jsx-runtime";
import type { Merge } from "type-fest";

export type RenderProp = JSX.Element | keyof JSX.IntrinsicElements | undefined;

export type CxArgs = Parameters<typeof cx>;

export type ClassListProp = undefined | CxArgs;

export interface ComponentPropsBase {
  id?: string;
  classList?: ClassListProp;
  style?: CSSProperties;
  children?: Child | undefined;
  render?: RenderProp;
  dangerouslySetInnerHTML?: { __html: string };
}

export type ComponentPropsMerge<Props> = Merge<ComponentPropsBase, Props>;
