import { cx } from "hono/css";
import type { ClassValue, CxArgs } from "./types.ts";

export function resolveClassNames(classValue: ClassValue, ...args: CxArgs): string | Promise<string> | undefined {
  const arr = [
    ...(Array.isArray(classValue) ? classValue : [classValue]),
    ...args,
  ];
  if (arr.length === 0) {
    return undefined;
  }
  return cx(...arr);
}
