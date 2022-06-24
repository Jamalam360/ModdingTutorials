/** @jsx h */
import { AppProps, h } from "$fresh/runtime.ts";
import { tw } from "../twind.ts";

import Footer from "components/footer.tsx";

export default function App({ Component }: AppProps) {
  return (
    <div
      class={tw
        `h-screen flex flex-col font(inter medium) lg:px-80 md:pt-6 dark:bg-night dark:text-white`}
    >
      <Component />
      <div class={tw`flex-grow`} />
      <Footer />
    </div>
  );
}
