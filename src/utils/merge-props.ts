import { cx } from "hono/css";

/**
 * Merges two props objects with special handling for class, style
 */
export function mergeProps(base: Record<string, any>, overrides: Record<string, any>) {
  const props = { ...base };

  for (const key in overrides) {
    if (!Object.hasOwn(overrides, key)) continue;

    if (key === "className") {
      const prop = "className";
      props[prop] = base[prop] ? cx(base[prop], overrides[prop]) : overrides[prop];
      continue;
    }

    if (key === "style") {
      const prop = "style";
      props[prop] = base[prop] ? { ...base[prop], ...overrides[prop] } : overrides[prop];
      continue;
    }
    const overrideValue = overrides[key];
    props[key] = overrideValue;
  }

  return props;
}
