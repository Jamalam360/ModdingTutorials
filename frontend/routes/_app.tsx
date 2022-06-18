/** @jsx h */
import { AppProps, h } from "$fresh/runtime.ts";
import { tw } from "../twind.ts";

import Footer from "components/footer.tsx";

export default function App({ Component }: AppProps) {
  return (
    <div
      class={tw
        `font(inter medium) md:px-80 md:pt-6 dark:bg-slate-900 dark:text-white`}
    >
      <Component />
      <Footer />
    </div>
  );
}
