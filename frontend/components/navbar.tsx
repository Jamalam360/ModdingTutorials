/** @jsx h */
import { h } from "$fresh/runtime.ts";
import { tw } from "../twind.ts";

export default function Navbar(
  { active }: {
    active: string;
  },
) {
  const navLink = tw`px-2`;
  const activeLink = tw`text-sky-700 dark:text-cyan-600 font-semibold`;

  return (
    <nav
      class={tw`flex flex-row border-gray-200 px-2 sm:px-4 py-2.5 items-center`}
    >
      <img
        src="https://via.placeholder.com/256x256"
        class={tw`h-12 rounded-lg`}
      />
      <p class={tw`font-semibold text-base sm:text-2xl px-2 md:px-4`}>
        Jamalam's Modding Tutorials
      </p>
      <div class={tw`flex-grow`} />
      <ul class={tw`flex flex-row items-center`}>
        <li
          class={navLink +
            (active == "/" ? " " + ` ${activeLink}` : "")}
        >
          <a href="/">Home</a>
        </li>
        <li
          id="dark-mode-toggle-parent"
          class={navLink}
        >
          <i id="dark-mode-toggle" class="fa-solid" />
        </li>
        <li>
          <div class={tw`pl-8`} />
        </li>
        <li>
          <a
            href="/tutorials/introduction"
            class={tw
              `text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
          >
            Get started
          </a>
        </li>
      </ul>
    </nav>
  );
}
