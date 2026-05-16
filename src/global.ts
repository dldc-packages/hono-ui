import { type CssObj_Vars, globalCss } from "./css.ts";
import { resetCssContent } from "./reset.ts";
import { allAnimationVars, allColorsVars, allDisplayVars, allSizesVars, allTextVars } from "./tokens.ts";

const allVars = [
  ...allAnimationVars,
  ...allColorsVars,
  ...allDisplayVars,
  ...allSizesVars,
  ...allTextVars,
];

export const globalStyles: Promise<string> = globalCss(
  {
    layers: {
      "@layer theme, base": null,
      "@layer theme": {
        selectors: {
          ":root, :host": {
            vars: {
              ...Object.fromEntries(allVars.map((varToken) => [varToken.name, varToken.rootValue])) as CssObj_Vars,
              "--default-font-family": "var(--font-sans)",
              "--default-mono-font-family": "var(--font-mono)",
            },
          },
        },
      },
    },
  },
  resetCssContent,
);
