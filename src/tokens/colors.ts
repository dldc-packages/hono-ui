import { type CssVar, cssVar } from "./utils.ts";

export type ColorKey =
  | "black"
  | "white"
  | "neutral.50"
  | "neutral.100"
  | "neutral.200"
  | "neutral.300"
  | "neutral.400"
  | "neutral.500"
  | "neutral.600"
  | "neutral.700"
  | "neutral.725"
  | "neutral.750"
  | "neutral.775"
  | "neutral.800"
  | "neutral.825"
  | "neutral.850"
  | "neutral.875"
  | "neutral.900"
  | "neutral.925"
  | "neutral.950"
  | "slate.50"
  | "slate.100"
  | "slate.200"
  | "slate.300"
  | "slate.400"
  | "slate.500"
  | "slate.600"
  | "slate.700"
  | "slate.800"
  | "slate.900"
  | "slate.950"
  | "gray.50"
  | "gray.100"
  | "gray.200"
  | "gray.300"
  | "gray.400"
  | "gray.500"
  | "gray.600"
  | "gray.700"
  | "gray.800"
  | "gray.900"
  | "gray.950"
  | "zinc.50"
  | "zinc.100"
  | "zinc.200"
  | "zinc.300"
  | "zinc.400"
  | "zinc.500"
  | "zinc.600"
  | "zinc.700"
  | "zinc.800"
  | "zinc.900"
  | "zinc.950"
  | "stone.50"
  | "stone.100"
  | "stone.200"
  | "stone.300"
  | "stone.400"
  | "stone.500"
  | "stone.600"
  | "stone.700"
  | "stone.800"
  | "stone.900"
  | "stone.950"
  | "red.50"
  | "red.100"
  | "red.200"
  | "red.300"
  | "red.400"
  | "red.500"
  | "red.600"
  | "red.700"
  | "red.800"
  | "red.900"
  | "red.950"
  | "orange.50"
  | "orange.100"
  | "orange.200"
  | "orange.300"
  | "orange.400"
  | "orange.500"
  | "orange.600"
  | "orange.700"
  | "orange.800"
  | "orange.900"
  | "orange.950"
  | "amber.50"
  | "amber.100"
  | "amber.200"
  | "amber.300"
  | "amber.400"
  | "amber.500"
  | "amber.600"
  | "amber.700"
  | "amber.800"
  | "amber.900"
  | "amber.950"
  | "yellow.50"
  | "yellow.100"
  | "yellow.200"
  | "yellow.300"
  | "yellow.400"
  | "yellow.500"
  | "yellow.600"
  | "yellow.700"
  | "yellow.800"
  | "yellow.900"
  | "yellow.950"
  | "lime.50"
  | "lime.100"
  | "lime.200"
  | "lime.300"
  | "lime.400"
  | "lime.500"
  | "lime.600"
  | "lime.700"
  | "lime.800"
  | "lime.900"
  | "lime.950"
  | "green.50"
  | "green.100"
  | "green.200"
  | "green.300"
  | "green.400"
  | "green.500"
  | "green.600"
  | "green.700"
  | "green.800"
  | "green.900"
  | "green.950"
  | "emerald.50"
  | "emerald.100"
  | "emerald.200"
  | "emerald.300"
  | "emerald.400"
  | "emerald.500"
  | "emerald.600"
  | "emerald.700"
  | "emerald.800"
  | "emerald.900"
  | "emerald.950"
  | "teal.50"
  | "teal.100"
  | "teal.200"
  | "teal.300"
  | "teal.400"
  | "teal.500"
  | "teal.600"
  | "teal.700"
  | "teal.800"
  | "teal.900"
  | "teal.950"
  | "cyan.50"
  | "cyan.100"
  | "cyan.200"
  | "cyan.300"
  | "cyan.400"
  | "cyan.500"
  | "cyan.600"
  | "cyan.700"
  | "cyan.800"
  | "cyan.900"
  | "cyan.950"
  | "sky.50"
  | "sky.100"
  | "sky.200"
  | "sky.300"
  | "sky.400"
  | "sky.500"
  | "sky.600"
  | "sky.700"
  | "sky.800"
  | "sky.900"
  | "sky.950"
  | "blue.50"
  | "blue.100"
  | "blue.200"
  | "blue.300"
  | "blue.400"
  | "blue.500"
  | "blue.600"
  | "blue.700"
  | "blue.800"
  | "blue.900"
  | "blue.950"
  | "indigo.50"
  | "indigo.100"
  | "indigo.200"
  | "indigo.300"
  | "indigo.400"
  | "indigo.500"
  | "indigo.600"
  | "indigo.700"
  | "indigo.800"
  | "indigo.900"
  | "indigo.950"
  | "violet.50"
  | "violet.100"
  | "violet.200"
  | "violet.300"
  | "violet.400"
  | "violet.500"
  | "violet.600"
  | "violet.700"
  | "violet.800"
  | "violet.900"
  | "violet.950"
  | "purple.50"
  | "purple.100"
  | "purple.200"
  | "purple.300"
  | "purple.400"
  | "purple.500"
  | "purple.600"
  | "purple.700"
  | "purple.800"
  | "purple.900"
  | "purple.950"
  | "fuchsia.50"
  | "fuchsia.100"
  | "fuchsia.200"
  | "fuchsia.300"
  | "fuchsia.400"
  | "fuchsia.500"
  | "fuchsia.600"
  | "fuchsia.700"
  | "fuchsia.800"
  | "fuchsia.900"
  | "fuchsia.950"
  | "pink.50"
  | "pink.100"
  | "pink.200"
  | "pink.300"
  | "pink.400"
  | "pink.500"
  | "pink.600"
  | "pink.700"
  | "pink.800"
  | "pink.900"
  | "pink.950"
  | "rose.50"
  | "rose.100"
  | "rose.200"
  | "rose.300"
  | "rose.400"
  | "rose.500"
  | "rose.600"
  | "rose.700"
  | "rose.800"
  | "rose.900"
  | "rose.950"
  | "mauve.50"
  | "mauve.100"
  | "mauve.200"
  | "mauve.300"
  | "mauve.400"
  | "mauve.500"
  | "mauve.600"
  | "mauve.700"
  | "mauve.800"
  | "mauve.900"
  | "mauve.950"
  | "olive.50"
  | "olive.100"
  | "olive.200"
  | "olive.300"
  | "olive.400"
  | "olive.500"
  | "olive.600"
  | "olive.700"
  | "olive.800"
  | "olive.900"
  | "olive.950"
  | "mist.50"
  | "mist.100"
  | "mist.200"
  | "mist.300"
  | "mist.400"
  | "mist.500"
  | "mist.600"
  | "mist.700"
  | "mist.800"
  | "mist.900"
  | "mist.950"
  | "taupe.50"
  | "taupe.100"
  | "taupe.200"
  | "taupe.300"
  | "taupe.400"
  | "taupe.500"
  | "taupe.600"
  | "taupe.700"
  | "taupe.800"
  | "taupe.900"
  | "taupe.950";

export const colors: Record<ColorKey, CssVar> = {
  black: cssVar("color-black", "#000"),
  white: cssVar("color-white", "#fff"),

  "neutral.100": cssVar("color-neutral-100", "oklch(97% 0 0)"),
  "neutral.200": cssVar("color-neutral-200", "oklch(92.2% 0 0)"),
  "neutral.300": cssVar("color-neutral-300", "oklch(87% 0 0)"),
  "neutral.400": cssVar("color-neutral-400", "oklch(70.8% 0 0)"),
  "neutral.50": cssVar("color-neutral-50", "oklch(98.5% 0 0)"),
  "neutral.500": cssVar("color-neutral-500", "oklch(55.6% 0 0)"),
  "neutral.600": cssVar("color-neutral-600", "oklch(43.9% 0 0)"),
  "neutral.700": cssVar("color-neutral-700", "oklch(37.1% 0 0)"),
  "neutral.725": cssVar("color-neutral-725", "oklch(0.3485 0 0)"),
  "neutral.750": cssVar("color-neutral-750", "oklch(0.3211 0 0)"),
  "neutral.775": cssVar("color-neutral-775", "oklch(0.2972 0 0)"),
  "neutral.800": cssVar("color-neutral-800", "oklch(26.9% 0 0)"),
  "neutral.825": cssVar("color-neutral-825", "oklch(0.252 0 0)"),
  "neutral.850": cssVar("color-neutral-850", "oklch(0.2393 0 0)"),
  "neutral.875": cssVar("color-neutral-875", "oklch(0.2221 0 0)"),
  "neutral.900": cssVar("color-neutral-900", "oklch(20.5% 0 0)"),
  "neutral.925": cssVar("color-neutral-925", "oklch(0.173 0 0)"),
  "neutral.950": cssVar("color-neutral-950", "oklch(14.5% 0 0)"),

  "slate.50": cssVar("color-slate-50", "oklch(98.4% 0.003 247.858)"),
  "slate.100": cssVar("color-slate-100", "oklch(96.8% 0.007 247.896)"),
  "slate.200": cssVar("color-slate-200", "oklch(92.9% 0.013 255.508)"),
  "slate.300": cssVar("color-slate-300", "oklch(86.9% 0.022 252.894)"),
  "slate.400": cssVar("color-slate-400", "oklch(70.4% 0.04 256.788)"),
  "slate.500": cssVar("color-slate-500", "oklch(55.4% 0.046 257.417)"),
  "slate.600": cssVar("color-slate-600", "oklch(44.6% 0.043 257.281)"),
  "slate.700": cssVar("color-slate-700", "oklch(37.2% 0.044 257.287)"),
  "slate.800": cssVar("color-slate-800", "oklch(27.9% 0.041 260.031)"),
  "slate.900": cssVar("color-slate-900", "oklch(20.8% 0.042 265.755)"),
  "slate.950": cssVar("color-slate-950", "oklch(12.9% 0.042 264.695)"),

  "gray.50": cssVar("color-gray-50", "oklch(98.5% 0.002 247.839)"),
  "gray.100": cssVar("color-gray-100", "oklch(96.7% 0.003 264.542)"),
  "gray.200": cssVar("color-gray-200", "oklch(92.8% 0.006 264.531)"),
  "gray.300": cssVar("color-gray-300", "oklch(87.2% 0.01 258.338)"),
  "gray.400": cssVar("color-gray-400", "oklch(70.7% 0.022 261.325)"),
  "gray.500": cssVar("color-gray-500", "oklch(55.1% 0.027 264.364)"),
  "gray.600": cssVar("color-gray-600", "oklch(44.6% 0.03 256.802)"),
  "gray.700": cssVar("color-gray-700", "oklch(37.3% 0.034 259.733)"),
  "gray.800": cssVar("color-gray-800", "oklch(27.8% 0.033 256.848)"),
  "gray.900": cssVar("color-gray-900", "oklch(21% 0.034 264.665)"),
  "gray.950": cssVar("color-gray-950", "oklch(13% 0.028 261.692)"),

  "zinc.50": cssVar("color-zinc-50", "oklch(98.5% 0 0)"),
  "zinc.100": cssVar("color-zinc-100", "oklch(96.7% 0.001 286.375)"),
  "zinc.200": cssVar("color-zinc-200", "oklch(92% 0.004 286.32)"),
  "zinc.300": cssVar("color-zinc-300", "oklch(87.1% 0.006 286.286)"),
  "zinc.400": cssVar("color-zinc-400", "oklch(70.5% 0.015 286.067)"),
  "zinc.500": cssVar("color-zinc-500", "oklch(55.2% 0.016 285.938)"),
  "zinc.600": cssVar("color-zinc-600", "oklch(44.2% 0.017 285.786)"),
  "zinc.700": cssVar("color-zinc-700", "oklch(37% 0.013 285.805)"),
  "zinc.800": cssVar("color-zinc-800", "oklch(27.4% 0.006 286.033)"),
  "zinc.900": cssVar("color-zinc-900", "oklch(21% 0.006 285.885)"),
  "zinc.950": cssVar("color-zinc-950", "oklch(14.1% 0.005 285.823)"),

  "stone.50": cssVar("color-stone-50", "oklch(98.5% 0.001 106.423)"),
  "stone.100": cssVar("color-stone-100", "oklch(97% 0.001 106.424)"),
  "stone.200": cssVar("color-stone-200", "oklch(92.3% 0.003 48.717)"),
  "stone.300": cssVar("color-stone-300", "oklch(86.9% 0.005 56.366)"),
  "stone.400": cssVar("color-stone-400", "oklch(70.9% 0.01 56.259)"),
  "stone.500": cssVar("color-stone-500", "oklch(55.3% 0.013 58.071)"),
  "stone.600": cssVar("color-stone-600", "oklch(44.4% 0.011 73.639)"),
  "stone.700": cssVar("color-stone-700", "oklch(37.4% 0.01 67.558)"),
  "stone.800": cssVar("color-stone-800", "oklch(26.8% 0.007 34.298)"),
  "stone.900": cssVar("color-stone-900", "oklch(21.6% 0.006 56.043)"),
  "stone.950": cssVar("color-stone-950", "oklch(14.7% 0.004 49.25)"),

  "red.50": cssVar("color-red-50", "oklch(97.1% 0.013 17.38)"),
  "red.100": cssVar("color-red-100", "oklch(93.6% 0.032 17.717)"),
  "red.200": cssVar("color-red-200", "oklch(88.5% 0.062 18.334)"),
  "red.300": cssVar("color-red-300", "oklch(80.8% 0.114 19.571)"),
  "red.400": cssVar("color-red-400", "oklch(70.4% 0.191 22.216)"),
  "red.500": cssVar("color-red-500", "oklch(63.7% 0.237 25.331)"),
  "red.600": cssVar("color-red-600", "oklch(57.7% 0.245 27.325)"),
  "red.700": cssVar("color-red-700", "oklch(50.5% 0.213 27.518)"),
  "red.800": cssVar("color-red-800", "oklch(44.4% 0.177 26.899)"),
  "red.900": cssVar("color-red-900", "oklch(39.6% 0.141 25.723)"),
  "red.950": cssVar("color-red-950", "oklch(25.8% 0.092 26.042)"),

  "orange.50": cssVar("color-orange-50", "oklch(98% 0.016 73.684)"),
  "orange.100": cssVar("color-orange-100", "oklch(95.4% 0.038 75.164)"),
  "orange.200": cssVar("color-orange-200", "oklch(90.1% 0.076 70.697)"),
  "orange.300": cssVar("color-orange-300", "oklch(83.7% 0.128 66.29)"),
  "orange.400": cssVar("color-orange-400", "oklch(75% 0.183 55.934)"),
  "orange.500": cssVar("color-orange-500", "oklch(70.5% 0.213 47.604)"),
  "orange.600": cssVar("color-orange-600", "oklch(64.6% 0.222 41.116)"),
  "orange.700": cssVar("color-orange-700", "oklch(55.3% 0.195 38.402)"),
  "orange.800": cssVar("color-orange-800", "oklch(47% 0.157 37.304)"),
  "orange.900": cssVar("color-orange-900", "oklch(40.8% 0.123 38.172)"),
  "orange.950": cssVar("color-orange-950", "oklch(26.6% 0.079 36.259)"),

  "amber.50": cssVar("color-amber-50", "oklch(98.7% 0.022 95.277)"),
  "amber.100": cssVar("color-amber-100", "oklch(96.2% 0.059 95.617)"),
  "amber.200": cssVar("color-amber-200", "oklch(92.4% 0.12 95.746)"),
  "amber.300": cssVar("color-amber-300", "oklch(87.9% 0.169 91.605)"),
  "amber.400": cssVar("color-amber-400", "oklch(82.8% 0.189 84.429)"),
  "amber.500": cssVar("color-amber-500", "oklch(76.9% 0.188 70.08)"),
  "amber.600": cssVar("color-amber-600", "oklch(66.6% 0.179 58.318)"),
  "amber.700": cssVar("color-amber-700", "oklch(55.5% 0.163 48.998)"),
  "amber.800": cssVar("color-amber-800", "oklch(47.3% 0.137 46.201)"),
  "amber.900": cssVar("color-amber-900", "oklch(41.4% 0.112 45.904)"),
  "amber.950": cssVar("color-amber-950", "oklch(27.9% 0.077 45.635)"),

  "yellow.50": cssVar("color-yellow-50", "oklch(98.7% 0.026 102.212)"),
  "yellow.100": cssVar("color-yellow-100", "oklch(97.3% 0.071 103.193)"),
  "yellow.200": cssVar("color-yellow-200", "oklch(94.5% 0.129 101.54)"),
  "yellow.300": cssVar("color-yellow-300", "oklch(90.5% 0.182 98.111)"),
  "yellow.400": cssVar("color-yellow-400", "oklch(85.2% 0.199 91.936)"),
  "yellow.500": cssVar("color-yellow-500", "oklch(79.5% 0.184 86.047)"),
  "yellow.600": cssVar("color-yellow-600", "oklch(68.1% 0.162 75.834)"),
  "yellow.700": cssVar("color-yellow-700", "oklch(55.4% 0.135 66.442)"),
  "yellow.800": cssVar("color-yellow-800", "oklch(47.6% 0.114 61.907)"),
  "yellow.900": cssVar("color-yellow-900", "oklch(42.1% 0.095 57.708)"),
  "yellow.950": cssVar("color-yellow-950", "oklch(28.6% 0.066 53.813)"),

  "lime.50": cssVar("color-lime-50", "oklch(98.6% 0.031 120.757)"),
  "lime.100": cssVar("color-lime-100", "oklch(96.7% 0.067 122.328)"),
  "lime.200": cssVar("color-lime-200", "oklch(93.8% 0.127 124.321)"),
  "lime.300": cssVar("color-lime-300", "oklch(89.7% 0.196 126.665)"),
  "lime.400": cssVar("color-lime-400", "oklch(84.1% 0.238 128.85)"),
  "lime.500": cssVar("color-lime-500", "oklch(76.8% 0.233 130.85)"),
  "lime.600": cssVar("color-lime-600", "oklch(64.8% 0.2 131.684)"),
  "lime.700": cssVar("color-lime-700", "oklch(53.2% 0.157 131.589)"),
  "lime.800": cssVar("color-lime-800", "oklch(45.3% 0.124 130.933)"),
  "lime.900": cssVar("color-lime-900", "oklch(40.5% 0.101 131.063)"),
  "lime.950": cssVar("color-lime-950", "oklch(27.4% 0.072 132.109)"),

  "green.50": cssVar("color-green-50", "oklch(98.2% 0.018 155.826)"),
  "green.100": cssVar("color-green-100", "oklch(96.2% 0.044 156.743)"),
  "green.200": cssVar("color-green-200", "oklch(92.5% 0.084 155.995)"),
  "green.300": cssVar("color-green-300", "oklch(87.1% 0.15 154.449)"),
  "green.400": cssVar("color-green-400", "oklch(79.2% 0.209 151.711)"),
  "green.500": cssVar("color-green-500", "oklch(72.3% 0.219 149.579)"),
  "green.600": cssVar("color-green-600", "oklch(62.7% 0.194 149.214)"),
  "green.700": cssVar("color-green-700", "oklch(52.7% 0.154 150.069)"),
  "green.800": cssVar("color-green-800", "oklch(44.8% 0.119 151.328)"),
  "green.900": cssVar("color-green-900", "oklch(39.3% 0.095 152.535)"),
  "green.950": cssVar("color-green-950", "oklch(26.6% 0.065 152.934)"),

  "emerald.50": cssVar("color-emerald-50", "oklch(97.9% 0.021 166.113)"),
  "emerald.100": cssVar("color-emerald-100", "oklch(95% 0.052 163.051)"),
  "emerald.200": cssVar("color-emerald-200", "oklch(90.5% 0.093 164.15)"),
  "emerald.300": cssVar("color-emerald-300", "oklch(84.5% 0.143 164.978)"),
  "emerald.400": cssVar("color-emerald-400", "oklch(76.5% 0.177 163.223)"),
  "emerald.500": cssVar("color-emerald-500", "oklch(69.6% 0.17 162.48)"),
  "emerald.600": cssVar("color-emerald-600", "oklch(59.6% 0.145 163.225)"),
  "emerald.700": cssVar("color-emerald-700", "oklch(50.8% 0.118 165.612)"),
  "emerald.800": cssVar("color-emerald-800", "oklch(43.2% 0.095 166.913)"),
  "emerald.900": cssVar("color-emerald-900", "oklch(37.8% 0.077 168.94)"),
  "emerald.950": cssVar("color-emerald-950", "oklch(26.2% 0.051 172.552)"),

  "teal.50": cssVar("color-teal-50", "oklch(98.4% 0.014 180.72)"),
  "teal.100": cssVar("color-teal-100", "oklch(95.3% 0.051 180.801)"),
  "teal.200": cssVar("color-teal-200", "oklch(91% 0.096 180.426)"),
  "teal.300": cssVar("color-teal-300", "oklch(85.5% 0.138 181.071)"),
  "teal.400": cssVar("color-teal-400", "oklch(77.7% 0.152 181.912)"),
  "teal.500": cssVar("color-teal-500", "oklch(70.4% 0.14 182.503)"),
  "teal.600": cssVar("color-teal-600", "oklch(60% 0.118 184.704)"),
  "teal.700": cssVar("color-teal-700", "oklch(51.1% 0.096 186.391)"),
  "teal.800": cssVar("color-teal-800", "oklch(43.7% 0.078 188.216)"),
  "teal.900": cssVar("color-teal-900", "oklch(38.6% 0.063 188.416)"),
  "teal.950": cssVar("color-teal-950", "oklch(27.7% 0.046 192.524)"),

  "cyan.50": cssVar("color-cyan-50", "oklch(98.4% 0.019 200.873)"),
  "cyan.100": cssVar("color-cyan-100", "oklch(95.6% 0.045 203.388)"),
  "cyan.200": cssVar("color-cyan-200", "oklch(91.7% 0.08 205.041)"),
  "cyan.300": cssVar("color-cyan-300", "oklch(86.5% 0.127 207.078)"),
  "cyan.400": cssVar("color-cyan-400", "oklch(78.9% 0.154 211.53)"),
  "cyan.500": cssVar("color-cyan-500", "oklch(71.5% 0.143 215.221)"),
  "cyan.600": cssVar("color-cyan-600", "oklch(60.9% 0.126 221.723)"),
  "cyan.700": cssVar("color-cyan-700", "oklch(52% 0.105 223.128)"),
  "cyan.800": cssVar("color-cyan-800", "oklch(45% 0.085 224.283)"),
  "cyan.900": cssVar("color-cyan-900", "oklch(39.8% 0.07 227.392)"),
  "cyan.950": cssVar("color-cyan-950", "oklch(30.2% 0.056 229.695)"),

  "sky.50": cssVar("color-sky-50", "oklch(97.7% 0.013 236.62)"),
  "sky.100": cssVar("color-sky-100", "oklch(95.1% 0.026 236.824)"),
  "sky.200": cssVar("color-sky-200", "oklch(90.1% 0.058 230.902)"),
  "sky.300": cssVar("color-sky-300", "oklch(82.8% 0.111 230.318)"),
  "sky.400": cssVar("color-sky-400", "oklch(74.6% 0.16 232.661)"),
  "sky.500": cssVar("color-sky-500", "oklch(68.5% 0.169 237.323)"),
  "sky.600": cssVar("color-sky-600", "oklch(58.8% 0.158 241.966)"),
  "sky.700": cssVar("color-sky-700", "oklch(50% 0.134 242.749)"),
  "sky.800": cssVar("color-sky-800", "oklch(44.3% 0.11 240.79)"),
  "sky.900": cssVar("color-sky-900", "oklch(39.1% 0.09 240.876)"),
  "sky.950": cssVar("color-sky-950", "oklch(29.3% 0.066 243.157)"),

  "blue.50": cssVar("color-blue-50", "oklch(97% 0.014 254.604)"),
  "blue.100": cssVar("color-blue-100", "oklch(93.2% 0.032 255.585)"),
  "blue.200": cssVar("color-blue-200", "oklch(88.2% 0.059 254.128)"),
  "blue.300": cssVar("color-blue-300", "oklch(80.9% 0.105 251.813)"),
  "blue.400": cssVar("color-blue-400", "oklch(70.7% 0.165 254.624)"),
  "blue.500": cssVar("color-blue-500", "oklch(62.3% 0.214 259.815)"),
  "blue.600": cssVar("color-blue-600", "oklch(54.6% 0.245 262.881)"),
  "blue.700": cssVar("color-blue-700", "oklch(48.8% 0.243 264.376)"),
  "blue.800": cssVar("color-blue-800", "oklch(42.4% 0.199 265.638)"),
  "blue.900": cssVar("color-blue-900", "oklch(37.9% 0.146 265.522)"),
  "blue.950": cssVar("color-blue-950", "oklch(28.2% 0.091 267.935)"),

  "indigo.50": cssVar("color-indigo-50", "oklch(96.2% 0.018 272.314)"),
  "indigo.100": cssVar("color-indigo-100", "oklch(93% 0.034 272.788)"),
  "indigo.200": cssVar("color-indigo-200", "oklch(87% 0.065 274.039)"),
  "indigo.300": cssVar("color-indigo-300", "oklch(78.5% 0.115 274.713)"),
  "indigo.400": cssVar("color-indigo-400", "oklch(67.3% 0.182 276.935)"),
  "indigo.500": cssVar("color-indigo-500", "oklch(58.5% 0.233 277.117)"),
  "indigo.600": cssVar("color-indigo-600", "oklch(51.1% 0.262 276.966)"),
  "indigo.700": cssVar("color-indigo-700", "oklch(45.7% 0.24 277.023)"),
  "indigo.800": cssVar("color-indigo-800", "oklch(39.8% 0.195 277.366)"),
  "indigo.900": cssVar("color-indigo-900", "oklch(35.9% 0.144 278.697)"),
  "indigo.950": cssVar("color-indigo-950", "oklch(25.7% 0.09 281.288)"),

  "violet.50": cssVar("color-violet-50", "oklch(96.9% 0.016 293.756)"),
  "violet.100": cssVar("color-violet-100", "oklch(94.3% 0.029 294.588)"),
  "violet.200": cssVar("color-violet-200", "oklch(89.4% 0.057 293.283)"),
  "violet.300": cssVar("color-violet-300", "oklch(81.1% 0.111 293.571)"),
  "violet.400": cssVar("color-violet-400", "oklch(70.2% 0.183 293.541)"),
  "violet.500": cssVar("color-violet-500", "oklch(60.6% 0.25 292.717)"),
  "violet.600": cssVar("color-violet-600", "oklch(54.1% 0.281 293.009)"),
  "violet.700": cssVar("color-violet-700", "oklch(49.1% 0.27 292.581)"),
  "violet.800": cssVar("color-violet-800", "oklch(43.2% 0.232 292.759)"),
  "violet.900": cssVar("color-violet-900", "oklch(38% 0.189 293.745)"),
  "violet.950": cssVar("color-violet-950", "oklch(28.3% 0.141 291.089)"),

  "purple.50": cssVar("color-purple-50", "oklch(97.7% 0.014 308.299)"),
  "purple.100": cssVar("color-purple-100", "oklch(94.6% 0.033 307.174)"),
  "purple.200": cssVar("color-purple-200", "oklch(90.2% 0.063 306.703)"),
  "purple.300": cssVar("color-purple-300", "oklch(82.7% 0.119 306.383)"),
  "purple.400": cssVar("color-purple-400", "oklch(71.4% 0.203 305.504)"),
  "purple.500": cssVar("color-purple-500", "oklch(62.7% 0.265 303.9)"),
  "purple.600": cssVar("color-purple-600", "oklch(55.8% 0.288 302.321)"),
  "purple.700": cssVar("color-purple-700", "oklch(49.6% 0.265 301.924)"),
  "purple.800": cssVar("color-purple-800", "oklch(43.8% 0.218 303.724)"),
  "purple.900": cssVar("color-purple-900", "oklch(38.1% 0.176 304.987)"),
  "purple.950": cssVar("color-purple-950", "oklch(29.1% 0.149 302.717)"),

  "fuchsia.50": cssVar("color-fuchsia-50", "oklch(97.7% 0.017 320.058)"),
  "fuchsia.100": cssVar("color-fuchsia-100", "oklch(95.2% 0.037 318.852)"),
  "fuchsia.200": cssVar("color-fuchsia-200", "oklch(90.3% 0.076 319.62)"),
  "fuchsia.300": cssVar("color-fuchsia-300", "oklch(83.3% 0.145 321.434)"),
  "fuchsia.400": cssVar("color-fuchsia-400", "oklch(74% 0.238 322.16)"),
  "fuchsia.500": cssVar("color-fuchsia-500", "oklch(66.7% 0.295 322.15)"),
  "fuchsia.600": cssVar("color-fuchsia-600", "oklch(59.1% 0.293 322.896)"),
  "fuchsia.700": cssVar("color-fuchsia-700", "oklch(51.8% 0.253 323.949)"),
  "fuchsia.800": cssVar("color-fuchsia-800", "oklch(45.2% 0.211 324.591)"),
  "fuchsia.900": cssVar("color-fuchsia-900", "oklch(40.1% 0.17 325.612)"),
  "fuchsia.950": cssVar("color-fuchsia-950", "oklch(29.3% 0.136 325.661)"),

  "pink.50": cssVar("color-pink-50", "oklch(97.1% 0.014 343.198)"),
  "pink.100": cssVar("color-pink-100", "oklch(94.8% 0.028 342.258)"),
  "pink.200": cssVar("color-pink-200", "oklch(89.9% 0.061 343.231)"),
  "pink.300": cssVar("color-pink-300", "oklch(82.3% 0.12 346.018)"),
  "pink.400": cssVar("color-pink-400", "oklch(71.8% 0.202 349.761)"),
  "pink.500": cssVar("color-pink-500", "oklch(65.6% 0.241 354.308)"),
  "pink.600": cssVar("color-pink-600", "oklch(59.2% 0.249 0.584)"),
  "pink.700": cssVar("color-pink-700", "oklch(52.5% 0.223 3.958)"),
  "pink.800": cssVar("color-pink-800", "oklch(45.9% 0.187 3.815)"),
  "pink.900": cssVar("color-pink-900", "oklch(40.8% 0.153 2.432)"),
  "pink.950": cssVar("color-pink-950", "oklch(28.4% 0.109 3.907)"),

  "rose.50": cssVar("color-rose-50", "oklch(96.9% 0.015 12.422)"),
  "rose.100": cssVar("color-rose-100", "oklch(94.1% 0.03 12.58)"),
  "rose.200": cssVar("color-rose-200", "oklch(89.2% 0.058 10.001)"),
  "rose.300": cssVar("color-rose-300", "oklch(81% 0.117 11.638)"),
  "rose.400": cssVar("color-rose-400", "oklch(71.2% 0.194 13.428)"),
  "rose.500": cssVar("color-rose-500", "oklch(64.5% 0.246 16.439)"),
  "rose.600": cssVar("color-rose-600", "oklch(58.6% 0.253 17.585)"),
  "rose.700": cssVar("color-rose-700", "oklch(51.4% 0.222 16.935)"),
  "rose.800": cssVar("color-rose-800", "oklch(45.5% 0.188 13.697)"),
  "rose.900": cssVar("color-rose-900", "oklch(41% 0.159 10.272)"),
  "rose.950": cssVar("color-rose-950", "oklch(27.1% 0.105 12.094)"),

  "mauve.50": cssVar("color-mauve-50", "oklch(98.5% 0 0)"),
  "mauve.100": cssVar("color-mauve-100", "oklch(96% 0.003 325.6)"),
  "mauve.200": cssVar("color-mauve-200", "oklch(92.2% 0.005 325.62)"),
  "mauve.300": cssVar("color-mauve-300", "oklch(86.5% 0.012 325.68)"),
  "mauve.400": cssVar("color-mauve-400", "oklch(71.1% 0.019 323.02)"),
  "mauve.500": cssVar("color-mauve-500", "oklch(54.2% 0.034 322.5)"),
  "mauve.600": cssVar("color-mauve-600", "oklch(43.5% 0.029 321.78)"),
  "mauve.700": cssVar("color-mauve-700", "oklch(36.4% 0.029 323.89)"),
  "mauve.800": cssVar("color-mauve-800", "oklch(26.3% 0.024 320.12)"),
  "mauve.900": cssVar("color-mauve-900", "oklch(21.2% 0.019 322.12)"),
  "mauve.950": cssVar("color-mauve-950", "oklch(14.5% 0.008 326)"),

  "olive.50": cssVar("color-olive-50", "oklch(98.8% 0.003 106.5)"),
  "olive.100": cssVar("color-olive-100", "oklch(96.6% 0.005 106.5)"),
  "olive.200": cssVar("color-olive-200", "oklch(93% 0.007 106.5)"),
  "olive.300": cssVar("color-olive-300", "oklch(88% 0.011 106.6)"),
  "olive.400": cssVar("color-olive-400", "oklch(73.7% 0.021 106.9)"),
  "olive.500": cssVar("color-olive-500", "oklch(58% 0.031 107.3)"),
  "olive.600": cssVar("color-olive-600", "oklch(46.6% 0.025 107.3)"),
  "olive.700": cssVar("color-olive-700", "oklch(39.4% 0.023 107.4)"),
  "olive.800": cssVar("color-olive-800", "oklch(28.6% 0.016 107.4)"),
  "olive.900": cssVar("color-olive-900", "oklch(22.8% 0.013 107.4)"),
  "olive.950": cssVar("color-olive-950", "oklch(15.3% 0.006 107.1)"),

  "mist.50": cssVar("color-mist-50", "oklch(98.7% 0.002 197.1)"),
  "mist.100": cssVar("color-mist-100", "oklch(96.3% 0.002 197.1)"),
  "mist.200": cssVar("color-mist-200", "oklch(92.5% 0.005 214.3)"),
  "mist.300": cssVar("color-mist-300", "oklch(87.2% 0.007 219.6)"),
  "mist.400": cssVar("color-mist-400", "oklch(72.3% 0.014 214.4)"),
  "mist.500": cssVar("color-mist-500", "oklch(56% 0.021 213.5)"),
  "mist.600": cssVar("color-mist-600", "oklch(45% 0.017 213.2)"),
  "mist.700": cssVar("color-mist-700", "oklch(37.8% 0.015 216)"),
  "mist.800": cssVar("color-mist-800", "oklch(27.5% 0.011 216.9)"),
  "mist.900": cssVar("color-mist-900", "oklch(21.8% 0.008 223.9)"),
  "mist.950": cssVar("color-mist-950", "oklch(14.8% 0.004 228.8)"),

  "taupe.50": cssVar("color-taupe-50", "oklch(98.6% 0.002 67.8)"),
  "taupe.100": cssVar("color-taupe-100", "oklch(96% 0.002 17.2)"),
  "taupe.200": cssVar("color-taupe-200", "oklch(92.2% 0.005 34.3)"),
  "taupe.300": cssVar("color-taupe-300", "oklch(86.8% 0.007 39.5)"),
  "taupe.400": cssVar("color-taupe-400", "oklch(71.4% 0.014 41.2)"),
  "taupe.500": cssVar("color-taupe-500", "oklch(54.7% 0.021 43.1)"),
  "taupe.600": cssVar("color-taupe-600", "oklch(43.8% 0.017 39.3)"),
  "taupe.700": cssVar("color-taupe-700", "oklch(36.7% 0.016 35.7)"),
  "taupe.800": cssVar("color-taupe-800", "oklch(26.8% 0.011 36.5)"),
  "taupe.900": cssVar("color-taupe-900", "oklch(21.4% 0.009 43.1)"),
  "taupe.950": cssVar("color-taupe-950", "oklch(14.7% 0.004 49.3)"),
};

export function c(name: ColorKey): string {
  return colors[name].var;
}

export const allColorsVars: CssVar[] = Object.values(colors).reduce((acc, color) => {
  if ("name" in color) {
    acc.push(color);
    return acc;
  }
  return acc;
}, [] as CssVar[]);
