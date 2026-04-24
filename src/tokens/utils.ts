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
