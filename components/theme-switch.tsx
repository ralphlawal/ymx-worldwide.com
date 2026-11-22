"use client";

export function ThemeSwitch() {
  function toggle() {
    const root = document.documentElement;
    const next = getComputedStyle(root).colorScheme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try { localStorage.setItem("ymx-theme", next); } catch { /* Keep the session selection. */ }
  }
  return <button className="theme-switch" type="button" onClick={toggle}>
    <span className="choose-light"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v3m0 14v3M2 12h3m14 0h3M5 5l2 2m10 10 2 2M5 19l2-2M17 7l2-2"/></svg><span className="sr-only">Switch to light mode</span></span>
    <span className="choose-dark"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 15a9 9 0 0 1-11-11 9 9 0 1 0 11 11Z"/></svg><span className="sr-only">Switch to dark mode</span></span>
  </button>;
}
