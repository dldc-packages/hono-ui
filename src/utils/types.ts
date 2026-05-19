import type { Child, CSSProperties } from "hono/jsx";
import type { JSX } from "hono/jsx/jsx-runtime";
import type { Merge } from "type-fest";
import type { ClassListProp } from "./class-list.ts";

export type RenderProp = JSX.Element | keyof JSX.IntrinsicElements | undefined;

export interface ComponentPropsBase {
  id?: string;
  classList?: ClassListProp;
  style?: CSSProperties;
  children?: Child | undefined;
  render?: RenderProp;
  dangerouslySetInnerHTML?: { __html: string };
  popovertarget?: string;
  inert?: boolean | undefined;
  popover?: boolean | "auto" | "manual" | undefined;
  tabindex?: number | undefined;
}

export type ComponentPropsMerge<Props> = Merge<ComponentPropsBase, Props>;
