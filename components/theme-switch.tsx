"use client";

export function ThemeSwitch() {
  function toggle() {
    const root = document.documentElement;
    const next = getComputedStyle(root).colorScheme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try { localStorage.setItem("ymx-theme", next); } catch { /* Keep the session selection. */ }
  }
  return <button className="theme-switch" type="button" onClick={toggle}>
    <span className="choose-light">Light mode</span><span className="choose-dark">Dark mode</span>
  </button>;
}
