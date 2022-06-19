/** @jsx h */
import { h, Head as Metadata } from "$fresh/runtime.ts";

export default function Head() {
  return (
    <Metadata>
      <title></title>
      <script src="https://kit.fontawesome.com/df2dc764b4.js" />
      <script src="/theme.js" />
      <link rel="stylesheet" href="/style.css" />
      <link rel="stylesheet" href="/gfm.css" />
      <link rel="stylesheet" href="/prism.css" />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </Metadata>
  );
}
