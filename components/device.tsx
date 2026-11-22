"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { PlayerIcon } from "./player-icon";
import { site } from "../lib/content";

export function Device({children}: {children: React.ReactNode}) {
  const path = usePathname();
  const router = useRouter();
  const screen = useRef<HTMLElement>(null);
  const selected = useRef<HTMLElement | null>(null);
  const wheel = useRef<HTMLDivElement>(null);
  const drag = useRef<{ id: number; angle: number; accumulated: number } | null>(null);
  const dragged = useRef(false);
  const parent = path.slice(0, path.lastIndexOf("/")) || "/";
  function highlight(el: HTMLElement) {
    selected.current?.removeAttribute("data-wheel-selected");
    selected.current = el;
    el.dataset.wheelSelected = "true";
  }
  useEffect(() => {
    const first = screen.current?.querySelector<HTMLElement>("a[href],button");
    if (first) highlight(first);
  }, [path]);
  function choices() {
    return Array.from(screen.current?.querySelectorAll<HTMLElement>("a[href], button:not(:disabled), iframe") ?? [])
      .filter(el => el.getClientRects().length > 0);
  }
  function move(delta: number) {
    const items = choices();
    if (!items.length) return;
    const active = items.indexOf(selected.current!);
    const next = active < 0 ? (delta > 0 ? 0 : items.length - 1) : (active + delta + items.length) % items.length;
    highlight(items[next]);
    items[next].focus({preventScroll:true});
    items[next].scrollIntoView({block:"nearest"});
  }
  function select() {
    const items = choices();
    const item = items.find(el => el === selected.current) ?? items[0];
    item?.focus();
    item?.click();
  }
  function play() {
    const preview = screen.current?.querySelector<HTMLButtonElement>("[data-preview-control]");
    if (preview) { preview.click(); preview.scrollIntoView({block:"nearest"}); return; }
    const href = selected.current?.closest("a")?.getAttribute("href");
    router.push((href?.startsWith("/releases/") ? href : "/releases/" + site.featured) + "?listen=1");
  }
  function angle(x: number, y: number) {
    const box = wheel.current!.getBoundingClientRect();
    return Math.atan2(y - box.top - box.height / 2, x - box.left - box.width / 2);
  }
  return <div className="device-stage"><div className="classic-device" onKeyDown={event => {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    if (["ArrowDown","ArrowRight","ArrowUp","ArrowLeft"].includes(event.key)) {
      event.preventDefault(); move(event.key === "ArrowDown" || event.key === "ArrowRight" ? 1 : -1);
    } else if (event.key === "Escape") { event.preventDefault(); router.push(parent); }
    else if (event.key === " " && event.target instanceof HTMLElement && !event.target.closest("button")) { event.preventDefault(); play(); }
  }}>
    <div className="glass"><div className="lcd-bar"><span>{path === "/" ? "YMX Worldwide" : path.split("/")[1].replace(/^./, c => c.toUpperCase())}</span><i aria-hidden="true" /></div>
      <main key={path} id="main" ref={screen} className="lcd" tabIndex={-1}
        onFocus={event => { if (event.target !== screen.current) highlight(event.target); }}>{children}</main>
    </div>
    <div ref={wheel} className="click-wheel" role="group" aria-label="Player controls"
      onPointerDown={event => {
        if (!event.isPrimary || event.button !== 0) return;
        dragged.current = false;
        if ((event.target as Element).closest(".wheel-select")) return;
        drag.current = { id:event.pointerId, angle:angle(event.clientX,event.clientY), accumulated:0 };
      }}
      onPointerMove={event => {
        const g = drag.current;
        if (!g || g.id !== event.pointerId || !event.buttons) return;
        const current = angle(event.clientX,event.clientY);
        g.accumulated += Math.atan2(Math.sin(current-g.angle),Math.cos(current-g.angle));
        g.angle = current;
        const steps = Math.trunc(g.accumulated / .44);
        if (!steps) return;
        dragged.current = true;
        event.currentTarget.setPointerCapture(event.pointerId);
        g.accumulated -= steps * .44;
        for (let i=0; i<Math.abs(steps); i++) move(Math.sign(steps));
      }}
      onPointerUp={() => { drag.current = null; }}
      onPointerCancel={() => { drag.current = null; }}
      onClickCapture={event => { if (dragged.current && event.detail) { event.preventDefault(); event.stopPropagation(); dragged.current=false; } }}>
      <button className="wheel-menu" onClick={() => router.push(parent)} aria-label="Back to menu">MENU</button>
      <button className="wheel-prev" aria-label="Previous item" onClick={() => move(-1)}><PlayerIcon name="previous" /></button>
      <button className="wheel-select" aria-label="Select highlighted item" onClick={select} />
      <button className="wheel-next" aria-label="Next item" onClick={() => move(1)}><PlayerIcon name="next" /></button>
      <button className="wheel-preview" aria-label="Play or pause preview" onClick={play}><PlayerIcon name="play" /><b aria-hidden="true">Ⅱ</b></button>
    </div>
  </div></div>;
}
