import * as d from "./datatypes.ts";
import * as m from "./mappers.ts";
import type { Datatype, PropertiesMap } from "./types.ts";

export const PROPERTIES_CONFIG: PropertiesMap = {
  padding: { toCss: "padding", datatype: d.spacing },
  paddingX: { toCss: ["padding-left", "padding-right"], datatype: d.spacing },
  paddingY: { toCss: ["padding-top", "padding-bottom"], datatype: d.spacing },
  paddingTop: { toCss: "padding-top", datatype: d.spacing },
  paddingRight: { toCss: "padding-right", datatype: d.spacing },
  paddingBottom: { toCss: "padding-bottom", datatype: d.spacing },
  paddingLeft: { toCss: "padding-left", datatype: d.spacing },
  paddingInline: { toCss: "padding-inline", datatype: d.spacing },
  paddingInlineStart: { toCss: "padding-inline-start", datatype: d.spacing },
  paddingInlineEnd: { toCss: "padding-inline-end", datatype: d.spacing },
  paddingBlock: { toCss: "padding-block", datatype: d.spacing },

  margin: { toCss: "margin", datatype: d.spacing },
  marginX: { toCss: ["margin-left", "margin-right"], datatype: d.spacing },
  marginY: { toCss: ["margin-top", "margin-bottom"], datatype: d.spacing },
  marginTop: { toCss: "margin-top", datatype: d.spacing },
  marginRight: { toCss: "margin-right", datatype: d.spacing },
  marginBottom: { toCss: "margin-bottom", datatype: d.spacing },
  marginLeft: { toCss: "margin-left", datatype: d.spacing },
  marginInlineStart: { toCss: "margin-inline-start", datatype: d.spacing },
  marginInlineEnd: { toCss: "margin-inline-end", datatype: d.spacing },

  top: { toCss: "top", datatype: d.distance },
  right: { toCss: "right", datatype: d.distance },
  bottom: { toCss: "bottom", datatype: d.distance },
  left: { toCss: "left", datatype: d.distance },
  gap: { toCss: "gap", datatype: d.spacing },
  columnGap: { toCss: "column-gap", datatype: d.spacing },
  rowGap: { toCss: "row-gap", datatype: d.spacing },

  background: { toCss: "background", datatype: d.color },
  backgroundColor: { toCss: "background-color", datatype: d.color },
  backgroundPosition: { toCss: "background-position", datatype: { mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.anyString] } },
  backgroundSize: { toCss: "background-size", datatype: d.backgroundSize },
  color: { toCss: "color", datatype: d.color },
  borderColor: { toCss: "border-color", datatype: d.color },
  accentColor: { toCss: "accent-color", datatype: d.color },

  cornerShape: { toCss: "corner-shape", datatype: d.cornerShape },

  borderRadius: { toCss: "border-radius", datatype: d.borderRadius },
  borderRadiusStart: { toCss: ["border-start-start-radius", "border-end-start-radius"], datatype: d.borderRadius },
  borderRadiusEnd: { toCss: ["border-start-end-radius", "border-end-end-radius"], datatype: d.borderRadius },
  borderRadiusTop: { toCss: ["border-top-left-radius", "border-top-right-radius"], datatype: d.borderRadius },
  borderRadiusBottom: { toCss: ["border-bottom-left-radius", "border-bottom-right-radius"], datatype: d.borderRadius },
  borderRadiusRight: { toCss: ["border-top-right-radius", "border-bottom-right-radius"], datatype: d.borderRadius },
  borderRadiusLeft: { toCss: ["border-top-left-radius", "border-bottom-left-radius"], datatype: d.borderRadius },

  border: { toCss: "border", datatype: d.border },
  borderWidth: { toCss: "border-width", datatype: d.borderWidth },
  borderTopWidth: { toCss: "border-top-width", datatype: d.borderWidth },
  borderRightWidth: { toCss: "border-right-width", datatype: d.borderWidth },
  borderBottomWidth: { toCss: "border-bottom-width", datatype: d.borderWidth },
  borderLeftWidth: { toCss: "border-left-width", datatype: d.borderWidth },
  borderStyle: { toCss: "border-style", datatype: d.borderStyle },

  font: {
    toCss: "font",
    datatype: { mappers: [m.fontFamily, m.raw, m.cssVarStr], staticValues: { inherit: "inherit", initial: "initial", unset: "unset" } },
  },
  fontFamily: {
    toCss: "font-family",
    datatype: {
      mappers: [m.fontFamily, m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
      staticValues: { inherit: "inherit", initial: "initial", unset: "unset" },
    },
  },
  fontSize: {
    toCss: "font-size",
    datatype: {
      mappers: [m.fontSize, m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
      staticValues: { inherit: "inherit", initial: "initial", unset: "unset" },
    },
  },
  fontWeight: {
    toCss: "font-weight",
    datatype: {
      mappers: [m.fontWeight, m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
      staticValues: { inherit: "inherit", initial: "initial", unset: "unset", bolder: "bolder", lighter: "lighter" },
    },
  },
  fontStyle: {
    toCss: "font-style",
    datatype: {
      mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
      staticValues: { normal: "normal", italic: "italic", oblique: "oblique", inherit: "inherit", initial: "initial", unset: "unset" },
    },
  },
  lineHeight: {
    toCss: "line-height",
    datatype: {
      mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.number],
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
      mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
      staticValues: { left: "left", right: "right", center: "center", justify: "justify", inherit: "inherit" },
    },
  },

  outline: {
    toCss: "outline",
    datatype: { mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr], staticValues: { none: "none", auto: "auto" } },
  },

  cursor: {
    toCss: "cursor",
    datatype: {
      mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
      staticValues: { "not-allowed": "not-allowed", pointer: "pointer", default: "default", inherit: "inherit" },
    },
  },

  width: { toCss: "width", datatype: d.size },
  height: { toCss: "height", datatype: d.size },
  minWidth: { toCss: "min-width", datatype: d.size },
  minHeight: { toCss: "min-height", datatype: d.size },
  maxWidth: { toCss: "max-width", datatype: d.size },
  maxHeight: { toCss: "max-height", datatype: d.size },

  display: { toCss: "display", datatype: d.display },

  position: {
    toCss: "position",
    datatype: {
      mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
      staticValues: { static: "static", relative: "relative", absolute: "absolute", fixed: "fixed", sticky: "sticky" },
    },
  },

  inset: { toCss: "inset", datatype: d.distance },
  insetBlock: { toCss: "inset-block", datatype: d.distance },
  insetBlockStart: { toCss: "inset-block-start", datatype: d.distance },
  insetBlockEnd: { toCss: "inset-block-end", datatype: d.distance },
  insetInline: { toCss: "inset-inline", datatype: d.distance },
  insetInlineStart: { toCss: "inset-inline-start", datatype: d.distance },
  insetInlineEnd: { toCss: "inset-inline-end", datatype: d.distance },

  pointerEvents: {
    toCss: "pointer-events",
    datatype: { mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr], staticValues: { auto: "auto", none: "none", inherit: "inherit" } },
  },

  content: { toCss: "content", datatype: { mappers: [m.anyString, m.cssVarStr, m.cssVar, m.cssExpr], staticValues: { empty: '""' } } },

  textDecoration: { toCss: "text-decoration", datatype: d.textDecoration },
  textTransform: { toCss: "text-transform", datatype: d.textTransform },
  textOverflow: { toCss: "text-overflow", datatype: d.textOverflow },

  overflow: { toCss: "overflow", datatype: d.overflow },
  overflowX: { toCss: "overflow-x", datatype: d.overflow },
  overflowY: { toCss: "overflow-y", datatype: d.overflow },

  flexDirection: {
    toCss: "flex-direction",
    datatype: {
      mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
      staticValues: { row: "row", rowReverse: "row-reverse", column: "column", columnReverse: "column-reverse", inherit: "inherit" },
    },
  },
  alignItems: {
    toCss: "align-items",
    datatype: {
      mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
      staticValues: { start: "start", end: "end", center: "center", baseline: "baseline", stretch: "stretch", inherit: "inherit" },
    },
  },
  alignContent: { toCss: "align-content", datatype: d.alignContent },
  alignSelf: { toCss: "align-self", datatype: d.alignSelf },
  justifyContent: {
    toCss: "justify-content",
    datatype: {
      mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
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
  justifyItems: { toCss: "justify-items", datatype: d.justifyItems },
  justifySelf: { toCss: "justify-self", datatype: d.justifySelf },
  flexWrap: {
    toCss: "flex-wrap",
    datatype: {
      mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
      staticValues: { nowrap: "nowrap", wrap: "wrap", wrapReverse: "wrap-reverse", inherit: "inherit" },
    },
  },
  flex: {
    toCss: "flex",
    datatype: {
      mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.anyString],
      staticValues: { inherit: "inherit", initial: "initial", unset: "unset" },
    },
  },

  flexGrow: { toCss: "flex-grow", datatype: d.flexSize },
  flexShrink: { toCss: "flex-shrink", datatype: d.flexSize },
  flexBasis: { toCss: "flex-basis", datatype: d.size },
  order: {
    toCss: "order",
    datatype: {
      mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.number],
      staticValues: { inherit: "inherit", initial: "initial", unset: "unset" },
    },
  },

  placeItems: {
    toCss: "place-items",
    datatype: {
      mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
      staticValues: {
        start: "start",
        end: "end",
        center: "center",
        "safe end": "safe end",
        "safe center": "safe center",
        baseline: "baseline",
        stretch: "stretch",
        inherit: "inherit",
      },
    },
  },
  placeContent: { toCss: "place-content", datatype: d.placeContent },
  placeSelf: { toCss: "place-self", datatype: d.placeSelf },

  colorScheme: {
    toCss: "color-scheme",
    datatype: { mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr], staticValues: { light: "light", dark: "dark", inherit: "inherit" } },
  },

  appearance: {
    toCss: "appearance",
    datatype: d.appearance,
  },

  gridTemplateColumns: { toCss: "grid-template-columns", datatype: d.gridTemplate },
  gridTemplateRows: { toCss: "grid-template-rows", datatype: d.gridTemplate },
  gridTemplateAreas: { toCss: "grid-template-areas", datatype: { mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.anyString] } },
  gridAutoColumns: { toCss: "grid-auto-columns", datatype: d.gridTemplate },
  gridAutoRows: { toCss: "grid-auto-rows", datatype: d.gridTemplate },
  gridAutoFlow: {
    toCss: "grid-auto-flow",
    datatype: {
      mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
      staticValues: {
        row: "row",
        column: "column",
        dense: "dense",
        "row dense": "row dense",
        "column dense": "column dense",
        inherit: "inherit",
      },
    },
  },

  gridColumn: { toCss: "grid-column", datatype: d.gridPosition },
  gridRow: { toCss: "grid-row", datatype: d.gridPosition },

  transition: {
    toCss: "transition",
    datatype: {
      mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.anyString],
      staticValues: { inherit: "inherit", initial: "initial", unset: "unset" },
    },
  },

  opacity: {
    toCss: "opacity",
    datatype: {
      mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.number],
      staticValues: { inherit: "inherit", initial: "initial", unset: "unset" },
    },
  },
  visibility: { toCss: "visibility", datatype: d.visibility },
  userSelect: { toCss: "user-select", datatype: d.userSelect },
  aspectRatio: { toCss: "aspect-ratio", datatype: d.aspectRatio },
  objectFit: { toCss: "object-fit", datatype: d.objectFit },
  objectPosition: {
    toCss: "object-position",
    datatype: { mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.anyString], staticValues: { inherit: "inherit" } },
  },
  filter: { toCss: "filter", datatype: d.effects },
  backdropFilter: { toCss: "backdrop-filter", datatype: d.effects },

  scrollbarWidth: {
    toCss: "scrollbar-width",
    datatype: {
      mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
      staticValues: { none: "none", thin: "thin", auto: "auto", inherit: "inherit" },
    },
  },
  scrollBehavior: { toCss: "scroll-behavior", datatype: d.scrollBehavior },
  overscrollBehavior: { toCss: "overscroll-behavior", datatype: d.overscrollBehavior },
  overscrollBehaviorX: { toCss: "overscroll-behavior-x", datatype: d.overscrollBehavior },
  overscrollBehaviorY: { toCss: "overscroll-behavior-y", datatype: d.overscrollBehavior },
  scrollSnapType: { toCss: "scroll-snap-type", datatype: d.scrollSnapType },
  scrollSnapAlign: { toCss: "scroll-snap-align", datatype: d.scrollSnapAlign },
  scrollSnapStop: { toCss: "scroll-snap-stop", datatype: d.scrollSnapStop },
  resize: {
    toCss: "resize",
    datatype: {
      mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
      staticValues: { none: "none", both: "both", horizontal: "horizontal", vertical: "vertical", inherit: "inherit" },
    },
  },
  caretColor: { toCss: "caret-color", datatype: d.color },
  verticalAlign: {
    toCss: "vertical-align",
    datatype: {
      mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
      staticValues: { baseline: "baseline", top: "top", middle: "middle", bottom: "bottom", inherit: "inherit" },
    },
  },
  zIndex: {
    toCss: "z-index",
    datatype: {
      mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.number],
      staticValues: { inherit: "inherit", initial: "initial", unset: "unset" },
    },
  },
  transform: {
    toCss: "transform",
    datatype: {
      mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.anyString],
      staticValues: { inherit: "inherit", initial: "initial", unset: "unset" },
    },
  },
  translate: {
    toCss: "translate",
    datatype: {
      mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.anyString],
      staticValues: { inherit: "inherit", initial: "initial", unset: "unset" },
    },
  },
  outlineWidth: { toCss: "outline-width", datatype: d.borderWidth },
  outlineColor: { toCss: "outline-color", datatype: d.color },
  outlineStyle: { toCss: "outline-style", datatype: d.borderStyle },
  outlineOffset: { toCss: "outline-offset", datatype: d.borderWidth },
  boxSizing: {
    toCss: "box-sizing",
    datatype: {
      mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
      staticValues: { "content-box": "content-box", "border-box": "border-box", inherit: "inherit" },
    },
  },
  tabSize: { toCss: "tab-size" },
  fontFeatureSettings: { toCss: "font-feature-settings" },
  fontVariationSettings: { toCss: "font-variation-settings" },
  textIndent: { toCss: "text-indent", datatype: d.distance },
  borderCollapse: {
    toCss: "border-collapse",
    datatype: {
      mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.anyString],
      staticValues: { collapse: "collapse", separate: "separate", inherit: "inherit" },
    },
  },
  listStyle: {
    toCss: "list-style",
    datatype: {
      mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.anyString],
      staticValues: { none: "none", disc: "disc", circle: "circle", square: "square", decimal: "decimal", inherit: "inherit" },
    },
  },
  boxShadow: {
    toCss: "box-shadow",
    datatype: { mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.shadow], staticValues: { none: "none", inherit: "inherit" } },
  },
  letterSpacing: {
    toCss: "letter-spacing",
    datatype: {
      mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.x],
      staticValues: { normal: "normal", inherit: "inherit" },
    },
  },
  clip: {
    toCss: "clip",
    datatype: { mappers: [m.cssVarStr, m.cssVar, m.cssExpr, m.anyString], staticValues: { auto: "auto", inherit: "inherit" } },
  },
  whiteSpace: {
    toCss: "white-space",
    datatype: {
      mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
      staticValues: { normal: "normal", nowrap: "nowrap", pre: "pre", preLine: "pre-line", preWrap: "pre-wrap", inherit: "inherit" },
    },
  },
  tableLayout: { toCss: "table-layout", datatype: d.tableLayout },
  isolation: { toCss: "isolation", datatype: d.isolation },
  mixBlendMode: { toCss: "mix-blend-mode", datatype: d.mixBlendMode },
  willChange: { toCss: "will-change", datatype: { mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.anyString] } },
  wordBreak: { toCss: "word-break", datatype: d.wordBreak },
  overflowWrap: { toCss: "overflow-wrap", datatype: d.overflowWrap },
  positionArea: { toCss: "position-area", datatype: d.positionArea },

  WebkitTextSizeAdjust: { toCss: "-webkit-text-size-adjust" },
  WebkitTapHighlightColor: { toCss: "-webkit-tap-highlight-color" },
  WebkitOverflowScrolling: {
    toCss: "-webkit-overflow-scrolling",
    datatype: { mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr], staticValues: { auto: "auto", touch: "touch", inherit: "inherit" } },
  },
  WebkitTextDecoration: { toCss: "-webkit-text-decoration", datatype: d.textDecoration },
  WebkitAppearance: { toCss: "-webkit-appearance", datatype: d.appearance },
};

export const VARIABLE_TYPE: Datatype = {
  mappers: [m.cssVarStr, m.cssVar, m.cssExpr, m.anyString],
};
