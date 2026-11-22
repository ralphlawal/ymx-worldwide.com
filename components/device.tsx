"use client";

import { usePathname, useRouter } from "next/navigation";
import { useRef } from "react";
import { PlayerIcon } from "./player-icon";
import { site } from "../lib/content";

export function Device({children}: {children: React.ReactNode}) {
  const path = usePathname();
  const router = useRouter();
  const screen = useRef<HTMLElement>(null);
  const selected = useRef<HTMLElement | null>(null);
  function choices() {
    return Array.from(screen.current?.querySelectorAll<HTMLElement>("a[href], button:not(:disabled), iframe") ?? [])
      .filter(el => el.getClientRects().length > 0);
  }
  function move(delta: number) {
    const items = choices();
    if (!items.length) return;
    const active = items.indexOf(selected.current!);
    const next = active < 0 ? (delta > 0 ? 0 : items.length - 1) : (active + delta + items.length) % items.length;
    items[next].focus();
  }
  function select() {
    const items = choices();
    const item = items.find(el => el === selected.current) ?? items[0];
    item?.focus();
    item?.click();
  }
  return <div className="device-stage"><div className="classic-device">
    <div className="glass"><div className="lcd-bar"><span>YMX Worldwide</span><i aria-hidden="true" /></div>
      <main key={path} id="main" ref={screen} className="lcd" tabIndex={-1}
        onFocus={event => { selected.current = event.target; }}
        onKeyDown={event => {
          if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault(); move(event.key === "ArrowDown" ? 1 : -1);
          }
        }}>{children}</main>
    </div>
    <div className="click-wheel" aria-label="Player controls">
      <button className="wheel-menu" onClick={() => router.push(path === "/" ? "/" : path.slice(0,path.lastIndexOf("/")) || "/")} aria-label="Back to menu">MENU</button>
      <button className="wheel-prev" aria-label="Previous item" onClick={() => move(-1)}><PlayerIcon name="previous" /></button>
      <button className="wheel-select" aria-label="Select item" onClick={select} />
      <button className="wheel-next" aria-label="Next item" onClick={() => move(1)}><PlayerIcon name="next" /></button>
      <button className="wheel-preview" aria-label={path.startsWith("/releases/") ? "Open or close song preview" : "Open featured song"} onClick={() => {
        const button = screen.current?.querySelector<HTMLButtonElement>(".release-preview button");
        if (button) { button.click(); button.scrollIntoView({block:"nearest"}); }
        else router.push("/releases/" + site.featured);
      }}><PlayerIcon name="play" /></button>
    </div>
  </div></div>;
}
