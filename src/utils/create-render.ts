import { cloneElement, createElement, isValidElement } from "hono/jsx";
import type { JSX } from "hono/jsx/jsx-runtime";
import { HtmlEscapedString } from "hono/utils/html";
import { mergeProps } from "./merge-props.ts";

export type RenderProp = JSX.Element | keyof JSX.IntrinsicElements | undefined;

/**
 * From: https://github.com/ariakit/ariakit/blob/a31b051bf4bdcce793351cf9209c9311785d6856/site/src/examples/_lib/react-utils/create-render.ts
 *
 * Creates a React element from a component and a flexible prop value, merging
 * default props and supporting an element, a props object, or plain children.
 * @example
 * const element = createRender(Component, { children: "Hi" });
 * const element = createRender(Component, <Component />);
 * const element = createRender(Component, <Component />, { children: "Hi" });
 */
export function createRender(
  // deno-lint-ignore ban-types
  Component: string | Function,
  props?: RenderProp,
  defaultProps?: Record<string, any>,
): JSX.Element {
  const defaultPropsChildren = normalizeChildren(defaultProps?.children);

  if (typeof props === "string") {
    return createElement(props, defaultProps ?? null, ...defaultPropsChildren) as any;
  }
  if (isValidElement(props)) {
    const element = props;
    if (defaultProps) {
      const children = element.children.length === 0 ? defaultPropsChildren : element.children;
      const mergedProps = mergeProps(defaultProps, element.props);
      return cloneElement(element, mergedProps, ...children) as any;
    }
    return element as any;
  }
  return createElement(Component, defaultProps ?? null, ...defaultPropsChildren) as any;
}

function normalizeChildren(value: unknown): (string | number | HtmlEscapedString)[] {
  if (value === null || value === undefined) {
    return [];
  }
  if (Array.isArray(value)) {
    return value.flatMap(normalizeChildren);
  }
  return [value as string | number | HtmlEscapedString];
}
