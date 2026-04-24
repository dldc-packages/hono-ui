import { type CssVar, cssVar } from "./utils.ts";

export type EasingKey = "in" | "out" | "inOut";

export const easing: Record<EasingKey, CssVar> = {
  in: cssVar("ease-in", "cubic-bezier(0.4, 0, 1, 1)"),
  out: cssVar("ease-out", "cubic-bezier(0, 0, 0.2, 1)"),
  inOut: cssVar("ease-in-out", "cubic-bezier(0.4, 0, 0.2, 1)"),
};

export type AnimateKey = "spin" | "ping" | "pulse" | "bounce";

export const animate: Record<AnimateKey, CssVar> = {
  spin: cssVar("animate-spin", "spin 1s linear infinite"),
  ping: cssVar("animate-ping", "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite"),
  pulse: cssVar(
    "animate-pulse",
    "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
  ),
  bounce: cssVar("animate-bounce", "bounce 1s infinite"),
};

export const allAnimationVars: CssVar[] = [
  ...Object.values(easing),
  ...Object.values(animate),
];
