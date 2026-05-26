import { css as honoCss } from "hono/css";
import { PROPERTIES_CONFIG, VARIABLE_TYPE } from "./css/properties.ts";
import type { CssObjProperties, CssVarType } from "./css/types.gen.ts";
import type { Datatype } from "./css/types.ts";

export type CssObj_Vars = { [key: `--${string}`]: CssVarType };
export type CssObj_Supports = { [key: `@supports ${string}`]: CssObj_1 };
export type CssObjCustom = { [key: string]: string | number | undefined };
export type CssObj_1 = CssObjProperties & {
  vars?: CssObj_Vars;
  supports?: CssObj_Supports;
  custom?: CssObjCustom;
  [key: `vars_${string}`]: CssObj_Vars;
  [key: `supports_${string}`]: CssObj_Supports;
  [key: `custom_${string}`]: CssObjCustom;
};
export type CssObj_2 = CssObj_1 & { selectors?: Record<string, CssObj_1>; [key: `selectors_${string}`]: Record<string, CssObj_1> };
export type CssObj_Media = { [key: `@media ${string}`]: CssObj_2 };
export type CssObj = CssObj_2 & { media?: CssObj_Media; [key: `media_${string}`]: CssObj_Media };

export type GlobalCssObj_Selectors = Record<string, CssObj>;
export type GlobalCssObj_1 = { selectors?: GlobalCssObj_Selectors; [key: `selector_${string}`]: GlobalCssObj_Selectors };
export type GloablCssObj_Supports = { [key: `@supports ${string}`]: GlobalCssObj_1 };
export type GloablCssObj_2 = GlobalCssObj & { supports?: GloablCssObj_Supports; [key: `supports_${string}`]: GloablCssObj_Supports };
export type GlobelCssObj_Layers = { [key: `@layer ${string}`]: GloablCssObj_2 | null };
export type GlobalCssObj = GlobalCssObj_1 & { layers?: GlobelCssObj_Layers; [key: `layers_${string}`]: GlobelCssObj_Layers };

export type { CssObjProperties };

function cssFn(...objs: CssObj[]): Promise<string> {
  return honoCssNoTemplate(cssRaw(...objs));
}

function cssRaw(...objs: CssObj[]): string {
  return cssObjToString(mergeCss(...objs));
}

function cssDebug(...objs: CssObj[]): Promise<string> {
  const str = cssRaw(...objs);
  console.log(str);
  return honoCssNoTemplate(str);
}

function globalCssFn(...objs: GlobalCssObj[]): Promise<string> {
  return honoCssNoTemplate(globalCssRaw(...objs));
}

function globalCssRaw(...objs: GlobalCssObj[]): string {
  return `:-hono-global {\n${indent(globalCssObjToString(mergeGlobalCss(...objs)))}\n}`;
}

function globalCssDebug(...objs: GlobalCssObj[]): Promise<string> {
  const str = globalCssRaw(...objs);
  console.log(str);
  return honoCssNoTemplate(str);
}

export interface Css {
  (...objs: CssObj[]): Promise<string>;
  raw: (...objs: CssObj[]) => string;
  debug: (...objs: CssObj[]) => Promise<string>;
}

export interface GlobalCss {
  (...objs: GlobalCssObj[]): Promise<string>;
  raw: (...objs: GlobalCssObj[]) => string;
  debug: (...objs: GlobalCssObj[]) => Promise<string>;
}

export const css: Css = Object.assign(cssFn, { raw: cssRaw, debug: cssDebug });
export const globalCss: GlobalCss = Object.assign(globalCssFn, { raw: globalCssRaw, debug: globalCssDebug });

export function mergeGlobalCss(...cssObjects: GlobalCssObj[]): GlobalCssObj {
  if (cssObjects.length === 0) {
    return {};
  }
  if (cssObjects.length === 1) {
    return cssObjects[0];
  }
  const result: GlobalCssObj = {};
  cssObjects.forEach((obj) => {
    Object.entries(obj).forEach(([key, value]) => {
      const uniqKey = key + "_" + randomId();
      (result as any)[uniqKey] = value;
    });
  });
  return result;
}

export function mergeCss(...cssObjects: CssObj[]): CssObj {
  if (cssObjects.length === 0) {
    return {};
  }
  if (cssObjects.length === 1) {
    return cssObjects[0];
  }
  const result: CssObj = {};
  cssObjects.forEach((obj) => {
    Object.entries(obj).forEach(([key, value]) => {
      if (
        key === "vars" || key.startsWith("vars_") || key === "media" || key.startsWith("media_") || key === "supports" ||
        key.startsWith("supports_") || key === "selectors" || key.startsWith("selectors_") ||
        key === "custom" || key.startsWith("custom_")
      ) {
        const uniqKey = key + "_" + randomId();
        (result as any)[uniqKey] = value;
        return;
      }
      (result as any)[key] = value;
    });
  });
  return result;
}

function globalCssObjToString(obj: GlobalCssObj): string {
  const cssStrings: string[] = [];
  Object.entries(obj).forEach(([key, value]) => {
    if (key === "layers" || key.startsWith("layers_")) {
      Object.entries(value).forEach(([layerAtRule, layerContent]) => {
        if (layerContent === null) {
          cssStrings.push(`${layerAtRule};`);
          return;
        }
        cssStrings.push(`${layerAtRule} {\n${indent(globalCssObjToString(layerContent))}\n}`);
      });
      return;
    }
    if (key === "selectors" || key.startsWith("selector_")) {
      Object.entries(value as Record<string, GlobalCssObj_1>).forEach(([selector, styles]) => {
        cssStrings.push(`${selector} {\n${indent(cssObjToString(styles))}\n}`);
      });
      return;
    }
    if (key === "supports" || key.startsWith("supports_")) {
      Object.entries(value as Record<string, GlobalCssObj_1>).forEach(([atRule, styles]) => {
        cssStrings.push(`${atRule} {\n${indent(globalCssObjToString(styles))}\n}`);
      });
      return;
    }
    throw new Error(`Unsupported key in global CSS object: ${key}`);
  });

  const { layers, selectors } = obj;

  if (layers) {
    Object.entries(layers).forEach(([layerAtRule, layerContent]) => {
      if (layerContent === null) {
        cssStrings.push(`${layerAtRule};`);
        return;
      }
      cssStrings.push(`${layerAtRule} {\n${indent(globalCssObjToString(layerContent))}\n}`);
    });
  }
  if (selectors) {
    Object.entries(selectors).forEach(([selector, styles]) => {
      cssStrings.push(`${selector} {\n${indent(cssRaw(styles))}\n}`);
    });
  }
  return cssStrings.join("\n");
}

function honoCssNoTemplate(content: string): Promise<string> {
  const strings = Object.freeze(
    Object.assign([content], {
      raw: [content],
    }),
  ) as TemplateStringsArray;
  return honoCss(strings);
}

function cssObjToString(obj: CssObj): string {
  const cssStrings: string[] = [];
  // const { media, supports, vars, ...properties } = obj
  Object.entries(obj).forEach(([keyStr, value]) => {
    if (value === undefined) {
      return;
    }
    const key = keyStr as keyof CssObj;
    if (key === "vars" || key.startsWith("vars_")) {
      Object.entries(value as Record<string, CssVarType>).forEach(([varName, varValue]) => {
        cssStrings.push(`${varName}: ${applyDatatype(VARIABLE_TYPE, varValue, { property: varName })};`);
      });
      return;
    }
    if (
      key === "media" || key === "supports" || key === "selectors" ||
      key.startsWith("selector_") || key.startsWith("media_") || key.startsWith("selectors_")
    ) {
      Object.entries(value as Record<string, CssObj>).forEach(([atRuleOrSelector, styles]) => {
        const innerCss = indent(cssRaw(styles));
        cssStrings.push(`${atRuleOrSelector} {\n${innerCss}\n}`);
      });
      return;
    }
    if (key === "custom" || key.startsWith("custom_")) {
      // Add property as is, without any processing
      Object.entries(value as Record<string, string | number>).forEach(([customKey, customValue]) => {
        if (customValue === undefined) {
          return;
        }
        cssStrings.push(`${customKey}: ${customValue};`);
      });
      return;
    }

    const propConfig = PROPERTIES_CONFIG[key];
    if (!propConfig) {
      throw new Error(`Unsupported CSS property: ${key}`);
    }
    const appliedValue = applyDatatype(propConfig.datatype, value, { property: key });
    if (typeof propConfig.toCss === "string" || Array.isArray(propConfig.toCss)) {
      const props = Array.isArray(propConfig.toCss) ? propConfig.toCss : [propConfig.toCss];
      props.forEach((prop) => {
        cssStrings.push(`${prop}: ${appliedValue};`);
      });
    } else {
      cssStrings.push(propConfig.toCss(appliedValue));
    }
  });
  return cssStrings.join("\n");
}

function applyDatatype(datatype: Datatype | undefined, value: unknown, infos: { property: string }): string {
  if (!datatype) {
    return String(value);
  }
  if (datatype.staticValues && typeof value === "string") {
    if (Array.isArray(datatype.staticValues) && datatype.staticValues.includes(value)) {
      return value;
    }
    if (!Array.isArray(datatype.staticValues) && datatype.staticValues[value] !== undefined) {
      return datatype.staticValues[value];
    }
  }
  const callNext = (index: number, value: unknown): string => {
    if (index >= datatype.mappers.length) {
      throw new Error(`Value "${value}" did not match any mapper for this datatype. (property: ${infos.property})`);
    }
    return datatype.mappers[index].mapper(value, (nextValue) => callNext(index + 1, nextValue));
  };
  return callNext(0, value);
}

function indent(content: string): string {
  return content.split("\n").map((line) => `  ${line}`).join("\n");
}

function randomId(size: number = 10): string {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const charsLength = chars.length;
  const randomValues = new Uint32Array(size);
  crypto.getRandomValues(randomValues);

  let result = "";
  for (let i = 0; i < size; i++) {
    result += chars[randomValues[i] % charsLength];
  }
  return result;
}
