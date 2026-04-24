import { css } from "hono/css";
import { Html } from "../../src/components/Html.tsx";
import { Link } from "../../src/components/Link.tsx";
import { fontWeight, textColor, textSize } from "../../src/utility.ts";

export function NotFound() {
  // text-3xl font-bold text-gray-800
  const titleClass = css`
    ${textSize("3xl")};
    ${fontWeight("bold")};
    ${textColor("gray.800")};
  `;

  return (
    <Html>
      <div>
        <h1 class={titleClass}>404</h1>
        <p
          class={css`
            ${textSize("xl")};
            ${textColor("gray.600")};
          `}
        >
          Page non trouvée.
        </p>
        <Link href="/">Retour à l'accueil</Link>
      </div>
    </Html>
  );
}
