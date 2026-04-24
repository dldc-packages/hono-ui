import { resetCssContent } from "./reset.ts";
import { allAnimationVars, allColorsVars, allDisplayVars, allSizesVars, allTextVars } from "./tokens.ts";
import { createGlobalStyle } from "./utils.ts";

const allVars = [
  ...allAnimationVars,
  ...allColorsVars,
  ...allDisplayVars,
  ...allSizesVars,
  ...allTextVars,
];

const allVarsDefs = allVars
  .map((varToken) => `${varToken.name}: ${varToken.rootValue};`)
  .join("\n");

export const globalStyles: Promise<string> = createGlobalStyle`
  @layer theme, base;
  @layer theme {
    :root, :host {
      ${allVarsDefs}
      --default-font-family: var(--font-sans);
      --default-mono-font-family: var(--font-mono);
    }
  }
  ${resetCssContent}
`;
