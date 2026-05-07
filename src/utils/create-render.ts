import { cloneElement, createElement, isValidElement } from "hono/jsx";
import type { JSX } from "hono/jsx/jsx-runtime";
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
  if (props == null) {
    console.log("null");
    return createElementWithChildren(Component, defaultProps as any) as any;
  }
  if (typeof props === "string") {
    return createElementWithChildren(props, defaultProps as any) as any;
  }
  if (isValidElement(props)) {
    console.log("isValidElement");
    const element = props;
    if (defaultProps) {
      const mergedProps = mergeProps(defaultProps, element.props);
      return cloneElement(element, mergedProps) as any;
    }
    return element as any;
  }
  if (typeof props !== "object" || isIterable(props)) {
    return createElementWithChildren(Component, defaultProps as any) as any;
  }
  const mergedProps = defaultProps ? mergeProps(defaultProps, props) : props;
  return createElementWithChildren(Component, mergedProps) as any;
}

function isIterable(obj: any): obj is Iterable<any> {
  if (obj == null) return false;
  return typeof obj[Symbol.iterator] === "function";
}

// deno-lint-ignore ban-types
function createElementWithChildren(Component: string | Function, props: Record<string, any>): JSX.Element {
  const { children, ...rest } = props;
  return createElement(Component, rest as any, ...(Array.isArray(children) ? children : [children])) as any;
}
