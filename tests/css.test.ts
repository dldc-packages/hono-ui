import { expect } from "@std/expect";

import { css } from "../mod.ts";

function file(...lines: string[]) {
  return lines.join("\n");
}

Deno.test("css.raw serializes common object syntax", async (t) => {
  await t.step("plain properties", () => {
    const result = css.raw({
      display: "flex",
      flexDirection: "row",
    });

    expect(result).toBe(
      file(`display: flex;`, `flex-direction: row;`),
    );
  });

  await t.step("variables, custom properties, and selectors", () => {
    const result = css.raw({
      vars: {
        "--space": "1rem",
      },
      custom: {
        "scroll-behavior": "smooth",
      },
      selectors: {
        "&:hover": {
          opacity: 0.5,
        },
      },
    });

    expect(result).toBe(
      file(
        "--space: 1rem;",
        "scroll-behavior: smooth;",
        "&:hover {",
        "  opacity: 0.5;",
        "}",
      ),
    );
  });

  await t.step("custom property values are serialized as-is", () => {
    const result = css.raw({
      padding: 4,
    });

    expect(result).toBe(file("padding: calc(var(--spacing)*4);"));
  });

  await t.step("media and supports at-rules", () => {
    const result = css.raw({
      media: {
        "@media (min-width: 640px)": {
          display: "grid",
        },
      },
      supports: {
        "@supports (display: grid)": {
          position: "relative",
        },
      },
    });

    expect(result).toBe(
      file(
        "@media (min-width: 640px) {",
        "  display: grid;",
        "}",
        "@supports (display: grid) {",
        "  position: relative;",
        "}",
      ),
    );
  });
});
