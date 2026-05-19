import * as m from "./mappers.ts";
import type { Datatype } from "./types.ts";

export const spacing: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.x],
};

export const distance: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.x, m.px],
  staticValues: { auto: "auto" },
};

export const color: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.color, m.colorOpacity],
  staticValues: { transparent: "transparent", inherit: "inherit", currentcolor: "currentcolor" },
};

export const borderRadius: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.x],
  staticValues: { inherit: "inherit", full: "9999px", none: "0" },
};

export const size: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.x, m.px],
  staticValues: { full: "100%", auto: "auto", "fit-content": "fit-content", "full-dvh": "100dvh", "full-dvw": "100dvw" },
};

export const overflow: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr],
  staticValues: { auto: "auto", hidden: "hidden", scroll: "scroll", visible: "visible", inherit: "inherit" },
};

export const backgroundSize: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.x, m.px, m.anyString],
  staticValues: { auto: "auto", cover: "cover", contain: "contain", inherit: "inherit" },
};

export const flexSize: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.x],
  staticValues: { auto: "auto", inherit: "inherit" },
};

export const gridTemplate: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.repeat, m.anyString],
  staticValues: { none: "none", auto: "auto" },
};

export const gridPosition: Datatype = {
  mappers: [m.raw, m.cssVarStr, m.cssVar, m.cssExpr, m.anyString],
  staticValues: { auto: "auto" },
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
