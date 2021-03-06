/** @jsx h */
import { h, PageProps } from "$fresh/runtime.ts";
import { Handlers } from "$fresh/server.ts";
import { tw } from "../../twind.ts";

import Head from "components/head.tsx";
import Navbar from "components/navbar.tsx";

export const handler: Handlers<string | null> = {
  async GET(ctx) {
    const { path } = ctx.match;

    const res = await fetch(`http://localhost:8000/api/${path}`);
    const text = await res.text();

    return ctx.render(text);
  },
};

export default function Index({ data }: PageProps<string>) {
  if (!data) {
    return <div>Not Found. TODO: Add a proper 404 page.</div>;
  }

  return (
    <div>
      <Head />
      <Navbar />
      <div
        class={tw`flex flex-wrap justify-between items-center pt-4 px-4 w-full`}
      >
        <div
          id="markdown"
          class={tw`w-full font(inter normal) dark:text-white dark:bg-night` +
            " markdown-body"}
        >
          <div
            dangerouslySetInnerHTML={{ __html: data }}
          />
        </div>
      </div>
    </div>
  );
}
