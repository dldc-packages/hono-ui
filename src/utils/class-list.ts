import { cx } from "hono/css";

export type CxArgs = Parameters<typeof cx>;
export type CxArg = CxArgs[number];

export type ClassListProp = undefined | CxArgs | CxArg;

export function flattenClassList(...args: (CxArgs | CxArg)[]): CxArg[] {
  const flat = args.flat(Infinity) as CxArg[];
  return flat;
}

export function cxClassList(...args: (CxArgs | CxArg)[]): string | Promise<string> | undefined {
  const flat = flattenClassList(...args);
  if (flat.length === 0) {
    return undefined;
  }
  return cx(...flat);
}
