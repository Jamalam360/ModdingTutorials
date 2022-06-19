function updateTheme() {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    document.getElementById("dark-mode-toggle").classList.remove("fa-sun");
    document.getElementById("dark-mode-toggle").classList.add("fa-moon");
    document.getElementById("markdown")?.setAttribute(
      "data-color-mode",
      "dark",
    );

    // Apply the PrismJS theme for dark mode
    document.getElementById("markdown")?.classList.add("prism-dark");

    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    document.getElementById("dark-mode-toggle").classList.remove("fa-moon");
    document.getElementById("dark-mode-toggle").classList.add("fa-sun");
    document.getElementById("markdown")?.setAttribute(
      "data-color-mode",
      "light",
    );
    localStorage.theme = "light";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  updateTheme();

  document.getElementById("dark-mode-toggle-parent").addEventListener(
    "click",
    () => {
      localStorage.theme = localStorage.theme == "dark" ? "light" : "dark";
      updateTheme();
    },
  );
});
