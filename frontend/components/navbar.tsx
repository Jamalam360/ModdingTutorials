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
        src="https://github.com/Jamalam360.png"
        class={tw`h-12 rounded-lg`}
      />
      <p class={tw`font-semibold text-base sm:text-2xl px-2 md:px-4`}>
        Jamalam
      </p>
      <div class={tw`flex-grow`} />
      <ul class={tw`flex flex-row`}>
        <li
          class={navLink +
            (active == "/" ? " " + ` ${activeLink}` : "")}
        >
          <a href="/">Home</a>
        </li>
        <li
          class={navLink +
            (active == "/about" ? ` ${activeLink}` : "")}
        >
          <a href="/about">About</a>
        </li>
        <li
          class={navLink +
            (active == "/projects" ? ` ${activeLink}` : "")}
        >
          <a href="/projects">Projects</a>
        </li>
        <li
          id="dark-mode-toggle-parent"
          class={navLink}
        >
          <i id="dark-mode-toggle" class="fa-solid" />
        </li>
      </ul>
    </nav>
  );
}
