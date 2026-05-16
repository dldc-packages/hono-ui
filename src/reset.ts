import type { GlobalCssObj } from "./css.ts";

export const resetCssContent: GlobalCssObj = {
  layers: {
    "@layer base": {
      selectors: {
        "*, ::after, ::before, ::backdrop, ::file-selector-button": {
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
          borderStyle: "solid",
          borderWidth: "none",
        },
        "html, :host": {
          lineHeight: 1.5,
          WebkitTextSizeAdjust: "100%",
          tabSize: 4,
          fontFamily:
            "[var(--default-font-family, ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji')]",
          fontFeatureSettings: "var(--default-font-feature-settings, normal)",
          fontVariationSettings: "var(--default-font-variation-settings, normal)",
          WebkitTapHighlightColor: "transparent",
        },
        "hr": {
          height: 0,
          color: "inherit",
          borderTopWidth: "1px",
        },
        "abbr:where([title])": {
          WebkitTextDecoration: "underlineDotted",
          textDecoration: "underlineDotted",
        },
        "h1, h2, h3, h4, h5, h6": {
          fontSize: "inherit",
          fontWeight: "inherit",
        },
        "a": {
          color: "inherit",
          WebkitTextDecoration: "inherit",
          textDecoration: "inherit",
        },
        "b, strong": {
          fontWeight: "bolder",
        },
        "code, kbd, samp, pre": {
          fontFamily:
            "var(--default-mono-font-family, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace)",
          fontFeatureSettings: "var(--default-mono-font-feature-settings, normal)",
          fontVariationSettings: "var(--default-mono-font-variation-settings, normal)",
          fontSize: "[1em]",
        },
        "small": {
          fontSize: "[80%]",
        },
        "sub, sup": {
          fontSize: "[75%]",
          lineHeight: 0,
          position: "relative",
          verticalAlign: "baseline",
        },
        "sub": {
          bottom: "[-0.25em]",
        },
        "sup": {
          top: "[-0.5em]",
        },
        "table": {
          textIndent: 0,
          borderColor: "inherit",
          borderCollapse: "collapse",
        },
        ":-moz-focusring": {
          outline: "auto",
        },
        "progress": {
          verticalAlign: "baseline",
        },
        "summary": {
          display: "listItem",
        },
        "ol, ul, menu": {
          listStyle: "none",
        },
        "img, svg, video, canvas, audio, iframe, embed, object": {
          display: "block",
          verticalAlign: "middle",
        },
        "img, video": {
          maxWidth: "full",
          height: "auto",
        },
        "button, input, select, optgroup, textarea, ::file-selector-button": {
          font: "inherit",
          fontFeatureSettings: "inherit",
          fontVariationSettings: "inherit",
          letterSpacing: "inherit",
          color: "inherit",
          rounded: "none",
          backgroundColor: "transparent",
          opacity: 1,
        },
        ":where(select:is([multiple], [size])) optgroup": {
          fontWeight: "bolder",
        },
        ":where(select:is([multiple], [size])) optgroup option": {
          paddingInlineStart: "[20px]",
        },
        "::file-selector-button": {
          marginInlineEnd: "[4px]",
        },
        "::placeholder": {
          opacity: 1,
        },

        "textarea": {
          resize: "vertical",
        },
        "::-webkit-search-decoration": {
          WebkitAppearance: "none",
        },
        "::-webkit-date-and-time-value": {
          minHeight: "[1lh]",
          textAlign: "inherit",
        },
        "::-webkit-datetime-edit": {
          display: "inline-flex",
        },
        "::-webkit-datetime-edit-fields-wrapper": {
          padding: 0,
        },
        "::-webkit-datetime-edit, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-second-field, ::-webkit-datetime-edit-millisecond-field, ::-webkit-datetime-edit-meridiem-field":
          {
            paddingBlock: 0,
          },
        "::-webkit-calendar-picker-indicator": {
          lineHeight: 1,
        },
        ":-moz-ui-invalid": {
          boxShadow: "none",
        },
        "button, input:where([type='button'], [type='reset'], [type='submit']), ::file-selector-button": {
          appearance: "button",
        },
        "::-webkit-inner-spin-button, ::-webkit-outer-spin-button": {
          height: "auto",
        },
        "[hidden]:where(:not([hidden='until-found']))": {
          display: "[none!important]",
        },
      },
      supports: {
        "@supports (not (-webkit-appearance: -apple-pay-button)) or (contain-intrinsic-size: 1px)": {
          selectors: {
            "::placeholder": {
              color: "currentcolor",
              supports: {
                "@supports (color: color-mix(in lab, red, red))": {
                  color: "[color-mix(in oklab, currentcolor 50%, transparent)]",
                },
              },
            },
          },
        },
      },
    },
  },
};
