/** @jsx h */
import { h, PageProps } from "$fresh/runtime.ts";
import { tw } from "../twind.ts";

import Head from "components/head.tsx";
import Navbar from "components/navbar.tsx";

export default function Index() {
  return (
    <div>
      <Head />
      <Navbar active="/" />
      <div class={tw`flex flex-wrap justify-between items-center pt-4 px-4`}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}
