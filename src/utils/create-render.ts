import { cloneElement, createElement, isValidElement, type ReactElement, type ReactNode } from "hono/jsx";
import { mergeProps } from "./merge-props.ts";

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
  props?: Record<string, any> | ReactNode,
  defaultProps?: Record<string, any>,
): ReactElement {
  if (props == null || (typeof props === "object" && "then" in props)) {
    return createElement(Component, defaultProps as any) as ReactElement;
  }
  if (isValidElement(props)) {
    const element = props;
    if (defaultProps) {
      const mergedProps = mergeProps(defaultProps, element.props);
      return cloneElement(element, mergedProps) as ReactElement;
    }
    return element as ReactElement;
  }
  if (typeof props !== "object" || isIterable(props)) {
    return createElement(Component, defaultProps as any, props as any) as ReactElement;
  }
  const mergedProps = defaultProps ? mergeProps(defaultProps, props) : props;
  return createElement(Component, mergedProps) as ReactElement;
}

function isIterable(obj: any): obj is Iterable<any> {
  if (obj == null) return false;
  return typeof obj[Symbol.iterator] === "function";
}
