import { IS_BROWSER } from "$fresh/runtime.ts";
import { apply, setup, tw } from "$twind";
import * as colors from "$twind/colors";

export { apply, setup, tw };

export const theme = {
  colors: {
    slate: colors.blueGray,
    gray: colors.gray,
    white: colors.white,
    cyan: colors.cyan,
    blue: colors.blue,
    transparent: "transparent",
    // I am colourblind, the colour names are probably stupid.
    // Created with Adobe Color.
    night: "#0F172A",
    sky: "#457DFF",
    lightBlue: "#255BD9",
    green: "#8C6300",
    lightGreen: "#D9A325",
  },
  fontFamily: {
    inter: "'Inter var', sans-serif",
  },
};

if (IS_BROWSER) {
  setup({ theme: theme, darkMode: "class" });
}
