import * as m from "./mappers.ts";
import type { Datatype } from "./types.ts";

export const spacing: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.x],
};

export const distance: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.x, m.px],
  staticValues: ["auto"],
};

export const color: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.color, m.colorOpacity],
  staticValues: ["transparent", "inherit", "currentcolor"],
};

export const borderRadius: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.x],
  staticValues: {
    inherit: "inherit",
    initial: "initial",
    unset: "unset",
    full: "9999px",
    none: "0",
  },
};

export const size: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.x, m.px],
  staticValues: { full: "100%", auto: "auto", "fit-content": "fit-content", "full-dvh": "100dvh", "full-dvw": "100dvw" },
};

export const overflow: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: ["auto", "hidden", "scroll", "visible", "inherit"],
};

export const backgroundSize: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.x, m.px, m.anyString],
  staticValues: ["auto", "cover", "contain", "inherit"],
};

export const flexSize: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.x],
  staticValues: ["auto", "inherit"],
};

export const gridTemplate: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.repeat, m.anyString],
  staticValues: ["none", "auto"],
};

export const gridPosition: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.anyString],
  staticValues: ["auto"],
};

export const borderWidth: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.px],
  staticValues: { inherit: "inherit", full: "9999px", none: "0" },
};

export const borderStyle: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
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

export const textDecoration: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
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

export const cornerShape: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: { superellipse: "superellipse(1.5)", inherit: "inherit" },
};

export const border: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.x],
  staticValues: { inherit: "inherit", full: "9999px", none: "0" },
};

export const display: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
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

export const appearance: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: {
    none: "none",
    auto: "auto",
    inherit: "inherit",
    button: "button",
  },
};

export const positionArea: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: {
    none: "none",
    center: "center",
    top: "top",
    bottom: "bottom",
    left: "left",
    right: "right",
    "top left": "top left",
    "top right": "top right",
    "bottom left": "bottom left",
    "bottom right": "bottom right",
    "top span-all": "top span-all",
    "bottom span-all": "bottom span-all",
    inherit: "inherit",
    initial: "initial",
    unset: "unset",
  },
};

export const aspectRatio: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.number, m.anyString],
  staticValues: { auto: "auto", inherit: "inherit", initial: "initial", unset: "unset" },
};

export const objectFit: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: {
    fill: "fill",
    contain: "contain",
    cover: "cover",
    none: "none",
    "scale-down": "scale-down",
    inherit: "inherit",
  },
};

export const textTransform: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: {
    none: "none",
    capitalize: "capitalize",
    uppercase: "uppercase",
    lowercase: "lowercase",
    inherit: "inherit",
  },
};

export const textOverflow: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.anyString],
  staticValues: { clip: "clip", ellipsis: "ellipsis", inherit: "inherit" },
};

export const visibility: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: { visible: "visible", hidden: "hidden", collapse: "collapse", inherit: "inherit" },
};

export const userSelect: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: { auto: "auto", text: "text", none: "none", all: "all", contain: "contain", inherit: "inherit" },
};

export const wordBreak: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: { normal: "normal", "break-all": "break-all", "keep-all": "keep-all", "break-word": "break-word", inherit: "inherit" },
};

export const overflowWrap: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: { normal: "normal", "break-word": "break-word", anywhere: "anywhere", inherit: "inherit" },
};

export const effects: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.anyString],
  staticValues: { none: "none", inherit: "inherit" },
};

export const viewTransitionIdent: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.anyString],
  staticValues: { none: "none" },
};

export const alignContent: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: {
    normal: "normal",
    start: "start",
    end: "end",
    center: "center",
    "space-between": "space-between",
    "space-around": "space-around",
    "space-evenly": "space-evenly",
    stretch: "stretch",
    inherit: "inherit",
  },
};

export const alignSelf: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: {
    auto: "auto",
    normal: "normal",
    start: "start",
    end: "end",
    center: "center",
    baseline: "baseline",
    stretch: "stretch",
    inherit: "inherit",
  },
};

export const justifyItems: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: {
    normal: "normal",
    start: "start",
    end: "end",
    center: "center",
    stretch: "stretch",
    inherit: "inherit",
  },
};

export const justifySelf: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: {
    auto: "auto",
    normal: "normal",
    start: "start",
    end: "end",
    center: "center",
    stretch: "stretch",
    inherit: "inherit",
  },
};

export const placeContent: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: {
    normal: "normal",
    start: "start",
    end: "end",
    center: "center",
    "space-between": "space-between",
    "space-around": "space-around",
    "space-evenly": "space-evenly",
    stretch: "stretch",
    inherit: "inherit",
  },
};

export const placeSelf: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: {
    auto: "auto",
    normal: "normal",
    start: "start",
    end: "end",
    center: "center",
    stretch: "stretch",
    inherit: "inherit",
  },
};

export const scrollBehavior: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: { auto: "auto", smooth: "smooth", inherit: "inherit" },
};

export const overscrollBehavior: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: { auto: "auto", contain: "contain", none: "none", inherit: "inherit" },
};

export const scrollSnapType: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: {
    none: "none",
    x: "x",
    y: "y",
    both: "both",
    block: "block",
    inline: "inline",
    mandatory: "mandatory",
    proximity: "proximity",
    inherit: "inherit",
  },
};

export const scrollSnapAlign: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: { none: "none", start: "start", end: "end", center: "center", inherit: "inherit" },
};

export const scrollSnapStop: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: { normal: "normal", always: "always", inherit: "inherit" },
};

export const tableLayout: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: { auto: "auto", fixed: "fixed", inherit: "inherit" },
};

export const isolation: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: { auto: "auto", isolate: "isolate", inherit: "inherit" },
};

export const mixBlendMode: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: {
    normal: "normal",
    multiply: "multiply",
    screen: "screen",
    overlay: "overlay",
    darken: "darken",
    lighten: "lighten",
    "color-dodge": "color-dodge",
    "color-burn": "color-burn",
    hardLight: "hard-light",
    softLight: "soft-light",
    difference: "difference",
    exclusion: "exclusion",
    hue: "hue",
    saturation: "saturation",
    color: "color",
    luminosity: "luminosity",
    inherit: "inherit",
  },
};

export const backgroundPosition: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.anyString],
};

export const font: Datatype = {
  mappers: [m.fontFamily, m.raw, m.cssVarStr],
  staticValues: { inherit: "inherit", initial: "initial", unset: "unset" },
};

export const fontFamily: Datatype = {
  mappers: [m.fontFamily, m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: { inherit: "inherit", initial: "initial", unset: "unset" },
};

export const fontSize: Datatype = {
  mappers: [m.fontSize, m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: { inherit: "inherit", initial: "initial", unset: "unset" },
};

export const fontWeight: Datatype = {
  mappers: [m.fontWeight, m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: { inherit: "inherit", initial: "initial", unset: "unset", bolder: "bolder", lighter: "lighter" },
};

export const fontStyle: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: { normal: "normal", italic: "italic", oblique: "oblique", inherit: "inherit", initial: "initial", unset: "unset" },
};

export const lineHeight: Datatype = {
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
};

export const textAlign: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: { left: "left", right: "right", center: "center", justify: "justify", inherit: "inherit" },
};

export const outline: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: { none: "none", auto: "auto" },
};

export const cursor: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: { "not-allowed": "not-allowed", pointer: "pointer", default: "default", inherit: "inherit" },
};

export const position: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: { static: "static", relative: "relative", absolute: "absolute", fixed: "fixed", sticky: "sticky" },
};

export const pointerEvents: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: { auto: "auto", none: "none", inherit: "inherit" },
};

export const content: Datatype = {
  mappers: [m.anyString, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: { empty: '""' },
};

export const flexDirection: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: { row: "row", rowReverse: "row-reverse", column: "column", columnReverse: "column-reverse", inherit: "inherit" },
};

export const alignItems: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: { start: "start", end: "end", center: "center", baseline: "baseline", stretch: "stretch", inherit: "inherit" },
};

export const justifyContent: Datatype = {
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
};

export const flexWrap: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: { nowrap: "nowrap", wrap: "wrap", wrapReverse: "wrap-reverse", inherit: "inherit" },
};

export const flex: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.anyString],
  staticValues: { inherit: "inherit", initial: "initial", unset: "unset" },
};

export const order: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.number],
  staticValues: { inherit: "inherit", initial: "initial", unset: "unset" },
};

export const placeItems: Datatype = {
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
};

export const colorScheme: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: { light: "light", dark: "dark", inherit: "inherit" },
};

export const gridAutoFlow: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: {
    row: "row",
    column: "column",
    dense: "dense",
    "row dense": "row dense",
    "column dense": "column dense",
    inherit: "inherit",
  },
};

export const transition: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.anyString],
  staticValues: { inherit: "inherit", initial: "initial", unset: "unset" },
};

export const opacity: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.number],
  staticValues: { inherit: "inherit", initial: "initial", unset: "unset" },
};

export const scrollbarWidth: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: { none: "none", thin: "thin", auto: "auto", inherit: "inherit" },
};

export const resize: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: { none: "none", both: "both", horizontal: "horizontal", vertical: "vertical", inherit: "inherit" },
};

export const verticalAlign: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: { baseline: "baseline", top: "top", middle: "middle", bottom: "bottom", inherit: "inherit" },
};

export const zIndex: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.number],
  staticValues: { inherit: "inherit", initial: "initial", unset: "unset" },
};

export const transform: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.anyString],
  staticValues: { inherit: "inherit", initial: "initial", unset: "unset" },
};

export const translate: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.anyString],
  staticValues: { inherit: "inherit", initial: "initial", unset: "unset" },
};

export const boxSizing: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: { "content-box": "content-box", "border-box": "border-box", inherit: "inherit" },
};

export const borderCollapse: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.anyString],
  staticValues: { collapse: "collapse", separate: "separate", inherit: "inherit" },
};

export const listStyle: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.anyString],
  staticValues: { none: "none", disc: "disc", circle: "circle", square: "square", decimal: "decimal", inherit: "inherit" },
};

export const boxShadow: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.shadow],
  staticValues: { none: "none", inherit: "inherit" },
};

export const letterSpacing: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.x],
  staticValues: { normal: "normal", inherit: "inherit" },
};

export const clip: Datatype = {
  mappers: [m.cssVarStr, m.cssVar, m.cssExpr, m.anyString],
  staticValues: { auto: "auto", inherit: "inherit" },
};

export const whiteSpace: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: { normal: "normal", nowrap: "nowrap", pre: "pre", preLine: "pre-line", preWrap: "pre-wrap", inherit: "inherit" },
};

export const gridTemplateAreas: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.anyString],
};

export const willChange: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.anyString],
};

export const objectPosition: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.anyString],
  staticValues: { inherit: "inherit" },
};

export const webkitOverflowScrolling: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: { auto: "auto", touch: "touch", inherit: "inherit" },
};

export const backgroundImage: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.anyString],
  staticValues: { none: "none", inherit: "inherit" },
};

export const backgroundClip: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: {
    "border-box": "border-box",
    "padding-box": "padding-box",
    "content-box": "content-box",
    text: "text",
    inherit: "inherit",
  },
};

export const backgroundRepeat: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: {
    repeat: "repeat",
    "no-repeat": "no-repeat",
    "repeat-x": "repeat-x",
    "repeat-y": "repeat-y",
    round: "round",
    space: "space",
    inherit: "inherit",
  },
};

export const backgroundAttachment: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: { scroll: "scroll", fixed: "fixed", local: "local", inherit: "inherit" },
};

export const float: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: {
    none: "none",
    left: "left",
    right: "right",
    "inline-start": "inline-start",
    "inline-end": "inline-end",
    inherit: "inherit",
  },
};

export const textShadow: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.anyString],
  staticValues: { none: "none", inherit: "inherit" },
};

export const textDecorationStyle: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: { solid: "solid", double: "double", dotted: "dotted", dashed: "dashed", wavy: "wavy", inherit: "inherit" },
};

export const textWrap: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: { wrap: "wrap", nowrap: "nowrap", balance: "balance", pretty: "pretty", stable: "stable", inherit: "inherit" },
};

export const hyphens: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: { none: "none", manual: "manual", auto: "auto", inherit: "inherit" },
};

export const scrollbarColor: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.anyString],
  staticValues: { auto: "auto", inherit: "inherit" },
};

export const scrollbarGutter: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: { auto: "auto", stable: "stable", "both-edges": "both-edges", inherit: "inherit" },
};

export const containerType: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: { normal: "normal", size: "size", "inline-size": "inline-size", inherit: "inherit" },
};

export const fontStretch: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.anyString],
  staticValues: {
    "ultra-condensed": "ultra-condensed",
    "extra-condensed": "extra-condensed",
    condensed: "condensed",
    "semi-condensed": "semi-condensed",
    normal: "normal",
    "semi-expanded": "semi-expanded",
    expanded: "expanded",
    "extra-expanded": "extra-expanded",
    "ultra-expanded": "ultra-expanded",
    inherit: "inherit",
  },
};

export const writingMode: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: { "horizontal-tb": "horizontal-tb", "vertical-rl": "vertical-rl", "vertical-lr": "vertical-lr", inherit: "inherit" },
};

export const imageRendering: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: { auto: "auto", "crisp-edges": "crisp-edges", pixelated: "pixelated", inherit: "inherit" },
};

export const fieldSizing: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: { fixed: "fixed", content: "content", inherit: "inherit" },
};

export const backfaceVisibility: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: { visible: "visible", hidden: "hidden", inherit: "inherit" },
};

export const touchAction: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: {
    auto: "auto",
    none: "none",
    "pan-x": "pan-x",
    "pan-y": "pan-y",
    manipulation: "manipulation",
    "pinch-zoom": "pinch-zoom",
    inherit: "inherit",
  },
};
