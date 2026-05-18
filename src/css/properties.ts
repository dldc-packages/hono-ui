import * as d from "./datatypes.ts";
import type { Datatype, PropertiesMap } from "./types.ts";

const spacing: Datatype = {
  mappers: [d.raw, d.cssVarStr, d.cssVar, d.cssExpr, d.x],
};

const distance: Datatype = {
  mappers: [d.raw, d.cssVarStr, d.cssVar, d.cssExpr, d.x, d.px],
  staticValues: { auto: "auto" },
};

const color: Datatype = {
  mappers: [d.raw, d.cssVarStr, d.cssVar, d.cssExpr, d.color, d.colorOpacity],
  staticValues: { transparent: "transparent", inherit: "inherit", currentcolor: "currentcolor" },
};

const borderRadius: Datatype = {
  mappers: [d.raw, d.cssVarStr, d.cssVar, d.cssExpr, d.x],
  staticValues: { inherit: "inherit", full: "9999px", none: "0" },
};

const size: Datatype = {
  mappers: [d.raw, d.cssVarStr, d.cssVar, d.cssExpr, d.x, d.px],
  staticValues: { full: "100%", auto: "auto", "fit-content": "fit-content", "full-dvh": "100dvh", "full-dvw": "100dvw" },
};

const overflow: Datatype = {
  mappers: [d.raw, d.cssVarStr, d.cssVar, d.cssExpr],
  staticValues: { auto: "auto", hidden: "hidden", scroll: "scroll", visible: "visible", inherit: "inherit" },
};

const flexSize: Datatype = {
  mappers: [d.raw, d.cssVarStr, d.cssVar, d.cssExpr, d.x],
  staticValues: { auto: "auto", inherit: "inherit" },
};

const gridTemplate: Datatype = {
  mappers: [d.raw, d.cssVarStr, d.cssVar, d.cssExpr, d.repeat, d.anyString],
  staticValues: { none: "none", auto: "auto" },
};

const gridPosition: Datatype = {
  mappers: [d.raw, d.cssVarStr, d.cssVar, d.cssExpr, d.anyString],
  staticValues: { auto: "auto" },
};

const borderWidth: Datatype = {
  mappers: [d.raw, d.cssVarStr, d.cssVar, d.cssExpr, d.px],
  staticValues: { inherit: "inherit", full: "9999px", none: "0" },
};

const borderStyle: Datatype = {
  mappers: [d.raw, d.cssVarStr, d.cssVar, d.cssExpr],
  staticValues: {
    none: "none",
    hidden: "hidden",
    dotted: "dotted",
    dashed: "dashed",
    solid: "solid",
    double: "double",
    groove: "groove",
    ridge: "ridge",
    inset: "inset",
    outset: "outset",
    inherit: "inherit",
  },
};

const textDecoration: Datatype = {
  mappers: [d.raw, d.cssVarStr, d.cssVar, d.cssExpr],
  staticValues: {
    none: "none",
    underline: "underline",
    overline: "overline",
    lineThrough: "line-through",
    blink: "blink",
    inherit: "inherit",
    underlineDotted: "underline dotted",
    underlineDashed: "underline dashed",
    underlineWavy: "underline wavy",
  },
};

const cornerShape: Datatype = {
  mappers: [d.raw, d.cssVarStr, d.cssVar, d.cssExpr],
  staticValues: { superellipse: "superellipse(1.5)", inherit: "inherit" },
};

const border: Datatype = {
  mappers: [d.raw, d.cssVarStr, d.cssVar, d.cssExpr, d.x],
  staticValues: { inherit: "inherit", full: "9999px", none: "0" },
};

const display: Datatype = {
  mappers: [d.raw, d.cssVarStr, d.cssVar, d.cssExpr],
  staticValues: {
    block: "block",
    flex: "flex",
    "inline-flex": "inline-flex",
    grid: "grid",
    none: "none",
    listItem: "list-item",
    inline: "inline",
    inlineBlock: "inline-block",
    inlineGrid: "inline-grid",
  },
};

const appearance = {
  mappers: [d.raw, d.cssVarStr, d.cssVar, d.cssExpr],
  staticValues: {
    none: "none",
    auto: "auto",
    inherit: "inherit",
    button: "button",
  },
};

export const PROPERTIES_CONFIG: PropertiesMap = {
  padding: { toCss: "padding", datatype: spacing },
  paddingX: { toCss: ["padding-left", "padding-right"], datatype: spacing },
  paddingY: { toCss: ["padding-top", "padding-bottom"], datatype: spacing },
  paddingTop: { toCss: "padding-top", datatype: spacing },
  paddingRight: { toCss: "padding-right", datatype: spacing },
  paddingBottom: { toCss: "padding-bottom", datatype: spacing },
  paddingLeft: { toCss: "padding-left", datatype: spacing },
  paddingInline: { toCss: "padding-inline", datatype: spacing },
  paddingInlineStart: { toCss: "padding-inline-start", datatype: spacing },
  paddingInlineEnd: { toCss: "padding-inline-end", datatype: spacing },
  paddingBlock: { toCss: "padding-block", datatype: spacing },

  margin: { toCss: "margin", datatype: spacing },
  marginX: { toCss: ["margin-left", "margin-right"], datatype: spacing },
  marginY: { toCss: ["margin-top", "margin-bottom"], datatype: spacing },
  marginTop: { toCss: "margin-top", datatype: spacing },
  marginRight: { toCss: "margin-right", datatype: spacing },
  marginBottom: { toCss: "margin-bottom", datatype: spacing },
  marginLeft: { toCss: "margin-left", datatype: spacing },
  marginInlineStart: { toCss: "margin-inline-start", datatype: spacing },
  marginInlineEnd: { toCss: "margin-inline-end", datatype: spacing },

  top: { toCss: "top", datatype: distance },
  right: { toCss: "right", datatype: distance },
  bottom: { toCss: "bottom", datatype: distance },
  left: { toCss: "left", datatype: distance },
  gap: { toCss: "gap", datatype: spacing },
  columnGap: { toCss: "column-gap", datatype: spacing },
  rowGap: { toCss: "row-gap", datatype: spacing },

  background: { toCss: "background", datatype: color },
  backgroundColor: { toCss: "background-color", datatype: color },
  color: { toCss: "color", datatype: color },
  borderColor: { toCss: "border-color", datatype: color },

  cornerShape: { toCss: "corner-shape", datatype: cornerShape },

  borderRadius: { toCss: "border-radius", datatype: borderRadius },
  borderRadiusStart: { toCss: ["border-start-start-radius", "border-end-start-radius"], datatype: borderRadius },
  borderRadiusEnd: { toCss: ["border-start-end-radius", "border-end-end-radius"], datatype: borderRadius },
  borderRadiusTop: { toCss: ["border-top-left-radius", "border-top-right-radius"], datatype: borderRadius },
  borderRadiusBottom: { toCss: ["border-bottom-left-radius", "border-bottom-right-radius"], datatype: borderRadius },
  borderRadiusRight: { toCss: ["border-top-right-radius", "border-bottom-right-radius"], datatype: borderRadius },
  borderRadiusLeft: { toCss: ["border-top-left-radius", "border-bottom-left-radius"], datatype: borderRadius },

  border: { toCss: "border", datatype: border },
  borderWidth: { toCss: "border-width", datatype: borderWidth },
  borderTopWidth: { toCss: "border-top-width", datatype: borderWidth },
  borderRightWidth: { toCss: "border-right-width", datatype: borderWidth },
  borderBottomWidth: { toCss: "border-bottom-width", datatype: borderWidth },
  borderLeftWidth: { toCss: "border-left-width", datatype: borderWidth },
  borderStyle: { toCss: "border-style", datatype: borderStyle },

  font: {
    toCss: "font",
    datatype: { mappers: [d.fontFamily, d.raw, d.cssVarStr], staticValues: { inherit: "inherit", initial: "initial", unset: "unset" } },
  },
  fontFamily: {
    toCss: "font-family",
    datatype: {
      mappers: [d.fontFamily, d.raw, d.cssVarStr, d.cssVar, d.cssExpr],
      staticValues: { inherit: "inherit", initial: "initial", unset: "unset" },
    },
  },
  fontSize: {
    toCss: "font-size",
    datatype: {
      mappers: [d.fontSize, d.raw, d.cssVarStr, d.cssVar, d.cssExpr],
      staticValues: { inherit: "inherit", initial: "initial", unset: "unset" },
    },
  },
  fontWeight: {
    toCss: "font-weight",
    datatype: {
      mappers: [d.fontWeight, d.raw, d.cssVarStr, d.cssVar, d.cssExpr],
      staticValues: { inherit: "inherit", initial: "initial", unset: "unset", bolder: "bolder", lighter: "lighter" },
    },
  },
  lineHeight: {
    toCss: "line-height",
    datatype: {
      mappers: [d.raw, d.cssVarStr, d.cssVar, d.cssExpr, d.number],
      staticValues: {
        inherit: "inherit",
        normal: "normal",
        none: "none",
        shorter: "1.25",
        short: "1.375",
        tall: "1.625",
        taller: "2",
      },
    },
  },
  textAlign: {
    toCss: "text-align",
    datatype: {
      mappers: [d.raw, d.cssVarStr, d.cssVar, d.cssExpr],
      staticValues: { left: "left", right: "right", center: "center", justify: "justify", inherit: "inherit" },
    },
  },

  outline: {
    toCss: "outline",
    datatype: { mappers: [d.raw, d.cssVarStr, d.cssVar, d.cssExpr], staticValues: { none: "none", auto: "auto" } },
  },

  cursor: {
    toCss: "cursor",
    datatype: {
      mappers: [d.raw, d.cssVarStr, d.cssVar, d.cssExpr],
      staticValues: { "not-allowed": "not-allowed", pointer: "pointer", default: "default", inherit: "inherit" },
    },
  },

  width: { toCss: "width", datatype: size },
  height: { toCss: "height", datatype: size },
  minWidth: { toCss: "min-width", datatype: size },
  minHeight: { toCss: "min-height", datatype: size },
  maxWidth: { toCss: "max-width", datatype: size },
  maxHeight: { toCss: "max-height", datatype: size },

  display: { toCss: "display", datatype: display },

  position: {
    toCss: "position",
    datatype: {
      mappers: [d.raw, d.cssVarStr, d.cssVar, d.cssExpr],
      staticValues: { static: "static", relative: "relative", absolute: "absolute", fixed: "fixed", sticky: "sticky" },
    },
  },

  inset: { toCss: "inset", datatype: distance },

  pointerEvents: {
    toCss: "pointer-events",
    datatype: { mappers: [d.raw, d.cssVarStr, d.cssVar, d.cssExpr], staticValues: { auto: "auto", none: "none", inherit: "inherit" } },
  },

  content: { toCss: "content", datatype: { mappers: [d.anyString, d.cssVarStr, d.cssVar, d.cssExpr], staticValues: { empty: '""' } } },

  textDecoration: { toCss: "text-decoration", datatype: textDecoration },

  overflow: { toCss: "overflow", datatype: overflow },
  overflowX: { toCss: "overflow-x", datatype: overflow },
  overflowY: { toCss: "overflow-y", datatype: overflow },

  flexDirection: {
    toCss: "flex-direction",
    datatype: {
      mappers: [d.raw, d.cssVarStr, d.cssVar, d.cssExpr],
      staticValues: { row: "row", rowReverse: "row-reverse", column: "column", columnReverse: "column-reverse", inherit: "inherit" },
    },
  },
  alignItems: {
    toCss: "align-items",
    datatype: {
      mappers: [d.raw, d.cssVarStr, d.cssVar, d.cssExpr],
      staticValues: { start: "start", end: "end", center: "center", baseline: "baseline", stretch: "stretch", inherit: "inherit" },
    },
  },
  justifyContent: {
    toCss: "justify-content",
    datatype: {
      mappers: [d.raw, d.cssVarStr, d.cssVar, d.cssExpr],
      staticValues: {
        inherit: "inherit",
        "flex-start": "flex-start",
        "flex-end": "flex-end",
        "safe flex-end": "safe flex-end",
        center: "center",
        "safe center": "safe center",
        "space-between": "space-between",
        "space-around": "space-around",
        "space-evenly": "space-evenly",
        stretch: "stretch",
        baseline: "baseline",
        normal: "normal",
      },
    },
  },
  flexWrap: {
    toCss: "flex-wrap",
    datatype: {
      mappers: [d.raw, d.cssVarStr, d.cssVar, d.cssExpr],
      staticValues: { nowrap: "nowrap", wrap: "wrap", wrapReverse: "wrap-reverse", inherit: "inherit" },
    },
  },
  flex: {
    toCss: "flex",
    datatype: {
      mappers: [d.raw, d.cssVarStr, d.cssVar, d.cssExpr, d.anyString],
      staticValues: { inherit: "inherit", initial: "initial", unset: "unset" },
    },
  },

  flexGrow: { toCss: "flex-grow", datatype: flexSize },
  flexShrink: { toCss: "flex-shrink", datatype: flexSize },

  colorScheme: {
    toCss: "color-scheme",
    datatype: { mappers: [d.raw, d.cssVarStr, d.cssVar, d.cssExpr], staticValues: { light: "light", dark: "dark", inherit: "inherit" } },
  },

  appearance: {
    toCss: "appearance",
    datatype: appearance,
  },

  gridTemplateColumns: { toCss: "grid-template-columns", datatype: gridTemplate },
  gridTemplateRows: { toCss: "grid-template-rows", datatype: gridTemplate },

  gridColumn: { toCss: "grid-column", datatype: gridPosition },
  gridRow: { toCss: "grid-row", datatype: gridPosition },

  transition: {
    toCss: "transition",
    datatype: {
      mappers: [d.raw, d.cssVarStr, d.cssVar, d.cssExpr, d.anyString],
      staticValues: { inherit: "inherit", initial: "initial", unset: "unset" },
    },
  },

  opacity: {
    toCss: "opacity",
    datatype: {
      mappers: [d.raw, d.cssVarStr, d.cssVar, d.cssExpr, d.number],
      staticValues: { inherit: "inherit", initial: "initial", unset: "unset" },
    },
  },

  scrollbarWidth: {
    toCss: "scrollbar-width",
    datatype: {
      mappers: [d.raw, d.cssVarStr, d.cssVar, d.cssExpr],
      staticValues: { none: "none", thin: "thin", auto: "auto", inherit: "inherit" },
    },
  },
  resize: {
    toCss: "resize",
    datatype: {
      mappers: [d.raw, d.cssVarStr, d.cssVar, d.cssExpr],
      staticValues: { none: "none", both: "both", horizontal: "horizontal", vertical: "vertical", inherit: "inherit" },
    },
  },
  caretColor: { toCss: "caret-color", datatype: color },
  verticalAlign: {
    toCss: "vertical-align",
    datatype: {
      mappers: [d.raw, d.cssVarStr, d.cssVar, d.cssExpr],
      staticValues: { baseline: "baseline", top: "top", middle: "middle", bottom: "bottom", inherit: "inherit" },
    },
  },
  zIndex: {
    toCss: "z-index",
    datatype: {
      mappers: [d.raw, d.cssVarStr, d.cssVar, d.cssExpr, d.number],
      staticValues: { inherit: "inherit", initial: "initial", unset: "unset" },
    },
  },
  transform: {
    toCss: "transform",
    datatype: {
      mappers: [d.raw, d.cssVarStr, d.cssVar, d.cssExpr, d.anyString],
      staticValues: { inherit: "inherit", initial: "initial", unset: "unset" },
    },
  },
  translate: {
    toCss: "translate",
    datatype: {
      mappers: [d.raw, d.cssVarStr, d.cssVar, d.cssExpr, d.anyString],
      staticValues: { inherit: "inherit", initial: "initial", unset: "unset" },
    },
  },
  outlineWidth: { toCss: "outline-width", datatype: borderWidth },
  outlineColor: { toCss: "outline-color", datatype: color },
  outlineStyle: { toCss: "outline-style", datatype: borderStyle },
  outlineOffset: { toCss: "outline-offset", datatype: borderWidth },
  boxSizing: {
    toCss: "box-sizing",
    datatype: {
      mappers: [d.raw, d.cssVarStr, d.cssVar, d.cssExpr],
      staticValues: { "content-box": "content-box", "border-box": "border-box", inherit: "inherit" },
    },
  },
  tabSize: { toCss: "tab-size" },
  fontFeatureSettings: { toCss: "font-feature-settings" },
  fontVariationSettings: { toCss: "font-variation-settings" },
  textIndent: { toCss: "text-indent", datatype: distance },
  borderCollapse: {
    toCss: "border-collapse",
    datatype: {
      mappers: [d.raw, d.cssVarStr, d.cssVar, d.cssExpr, d.anyString],
      staticValues: { collapse: "collapse", separate: "separate", inherit: "inherit" },
    },
  },
  listStyle: {
    toCss: "list-style",
    datatype: {
      mappers: [d.raw, d.cssVarStr, d.cssVar, d.cssExpr, d.anyString],
      staticValues: { none: "none", disc: "disc", circle: "circle", square: "square", decimal: "decimal", inherit: "inherit" },
    },
  },
  boxShadow: {
    toCss: "box-shadow",
    datatype: { mappers: [d.raw, d.cssVarStr, d.cssVar, d.cssExpr, d.shadow], staticValues: { none: "none", inherit: "inherit" } },
  },
  letterSpacing: {
    toCss: "letter-spacing",
    datatype: {
      mappers: [d.raw, d.cssVarStr, d.cssVar, d.cssExpr, d.x],
      staticValues: { normal: "normal", inherit: "inherit" },
    },
  },
  clip: {
    toCss: "clip",
    datatype: { mappers: [d.cssVarStr, d.cssVar, d.cssExpr, d.anyString], staticValues: { auto: "auto", inherit: "inherit" } },
  },
  whiteSpace: {
    toCss: "white-space",
    datatype: {
      mappers: [d.raw, d.cssVarStr, d.cssVar, d.cssExpr],
      staticValues: { normal: "normal", nowrap: "nowrap", pre: "pre", preLine: "pre-line", preWrap: "pre-wrap", inherit: "inherit" },
    },
  },

  WebkitTextSizeAdjust: { toCss: "-webkit-text-size-adjust" },
  WebkitTapHighlightColor: { toCss: "-webkit-tap-highlight-color" },
  WebkitOverflowScrolling: {
    toCss: "-webkit-overflow-scrolling",
    datatype: { mappers: [d.raw, d.cssVarStr, d.cssVar, d.cssExpr], staticValues: { auto: "auto", touch: "touch", inherit: "inherit" } },
  },
  WebkitTextDecoration: { toCss: "-webkit-text-decoration", datatype: textDecoration },
  WebkitAppearance: { toCss: "-webkit-appearance", datatype: appearance },
};

export const VARIABLE_TYPE: Datatype = {
  mappers: [d.cssVarStr, d.cssVar, d.cssExpr, d.anyString],
};
