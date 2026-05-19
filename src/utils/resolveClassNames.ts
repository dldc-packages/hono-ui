import { cx } from "hono/css";
import type { CxArgs } from "./types.ts";

type CxArg = CxArgs[number];

export function resolveClassNames(...args: (CxArgs | CxArg)[]): string | Promise<string> | undefined {
  const flat = args.flat(Infinity) as CxArg[];
  if (flat.length === 0) {
    return undefined;
  }
  return cx(...flat);
}
