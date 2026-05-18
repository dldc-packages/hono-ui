export interface CssVar {
  toString(): string;
  var: string;
  name: string;
  rootValue?: string;
}

export function cssVar(name: string, rootValue?: string): CssVar {
  const fullName = `--${name}`;
  const cssVarValue = `var(${fullName})`;
  return {
    name: fullName,
    rootValue,
    var: cssVarValue,
    toString() {
      return cssVarValue;
    },
  };
}

export function isCssVar(value: unknown): value is CssVar {
  return typeof value === "object" && value !== null && "var" in value && typeof (value as CssVar).var === "string" && "name" in value &&
    typeof (value as CssVar).name === "string" && (value as CssVar).name.startsWith("--") && "toString" in value &&
    typeof (value as CssVar).toString === "function";
}
