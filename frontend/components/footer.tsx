/** @jsx h */
import { h } from "$fresh/runtime.ts";
import { tw } from "../twind.ts";

export default function Footer() {
  const navLink = tw`px-2`;
  const icon = tw`text-2xl`;

  return (
    <div
      class={tw
        `flex flex-col items-center justify-center border-gray-200 space-y-4 px-2 sm:px-4 pt-8 pb-6 py-2.5`}
    >
      <p>
        <span class={tw`font-bold`}>©</span> Jamalam and Contributors,{" "}
        {new Date().getFullYear()}
      </p>
      <ul class={tw`flex flex-row`}>
        <li
          class={navLink}
        >
          <a href="https://github.com/Jamalam360/ModdingTutorials">
            <i class={"fa-brands fa-github " + icon} />
          </a>
        </li>
        <li
          class={navLink}
        >
          <a href="https://discord.jamalam.tech">
            <i class={"fa-brands fa-discord " + icon} />
          </a>
        </li>
      </ul>
    </div>
  );
}
