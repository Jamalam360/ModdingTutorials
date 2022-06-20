/** @jsx h */
import { h, PageProps } from "$fresh/runtime.ts";
import { tw } from "../twind.ts";

import Head from "components/head.tsx";
import Navbar from "components/navbar.tsx";

export default function Index() {
  return (
    <div>
      <Head />
      <Navbar />
      <div class={tw`flex flex-wrap justify-between items-center pt-4 px-4`}>
        <p>
          This is a series of Minecraft modding tutorials for the{" "}
          <a href="https://quiltmc.org">Quilt mod-loader</a>, although most of
          it is applicable to the{" "}
          <a href="https://fabricmc.net">Fabric mod-loader</a> as well.
        </p>
        <p>
          The aim is to be more friendly to beginners than traditional wiki
          pages, by allowing each tutorial to follow on from the previous one,
          eventually producing a complete, working, and published mod at the end
          of the tutorials, although of course they can stil be used seperately
          by more experienced modders.
        </p>
      </div>
    </div>
  );
}
