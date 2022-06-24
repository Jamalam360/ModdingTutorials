/** @jsx h */
import { h, PageProps } from "$fresh/runtime.ts";
import { Handlers } from "$fresh/server.ts";
import { tw } from "../../twind.ts";

import Head from "components/head.tsx";
import Navbar from "components/navbar.tsx";

const categories = [
  "introduction",
  "setup",
];

export default function Index() {
  return (
    <div>
      <Head />
      <Navbar />
      <div class={tw`flex flex-wrap justify-between items-center pt-4 px-4`}>
        {categories.map((category) => (
          <div class={tw`w-1/2 px-4`}>
            <a href={`/tutorials/${category}`}>{category}</a>
          </div>
        ))}
      </div>
    </div>
  );
}
