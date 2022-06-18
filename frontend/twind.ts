import { IS_BROWSER } from "$fresh/runtime.ts";
import { apply, setup, tw } from "$twind";
import * as colors from "$twind/colors";

export { apply, setup, tw };

export const theme = {
  colors: {
    slate: colors.blueGray,
    gray: colors.gray,
    blue: colors.blue,
    white: colors.white,
    sky: colors.sky,
    cyan: colors.cyan,
    transparent: "transparent",
  },
  fontFamily: {
    inter: "'Inter var', sans-serif",
  },
};

if (IS_BROWSER) {
  setup({ theme: theme, darkMode: "class" });
}
