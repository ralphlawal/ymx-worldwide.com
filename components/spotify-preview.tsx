"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useId, useRef, useState } from "react";
import { spotify, type Release } from "../lib/content";

type Controller = {
  togglePlay(): void;
  play(): void;
  destroy(): void;
  addListener(name: "ready", callback: () => void): void;
};
type EmbedAPI = {
  createController(element: HTMLElement, options: { uri: string; width: string; height: number },
    callback: (controller: Controller) => void): void;
};
declare global { interface Window { onSpotifyIframeApiReady?: (api: EmbedAPI) => void } }
let apiPromise: Promise<EmbedAPI> | undefined;
function getAPI() {
  if (!apiPromise) apiPromise = new Promise<EmbedAPI>((resolve,reject) => {
    window.onSpotifyIframeApiReady = resolve;
    const script = document.createElement("script");
    script.src = "https://open.spotify.com/embed/iframe-api/v1";
    script.onerror = () => { apiPromise = undefined; reject(new Error("Player unavailable")); };
    document.head.appendChild(script);
  });
  return apiPromise;
}

export function SpotifyPreview({ release }: { release: Release }) {
  return <iframe title={`Spotify preview for ${release.title}`} src={`https://open.spotify.com/embed/album/${release.albumId}`}
    width="100%" height="152" allow="autoplay; encrypted-media; fullscreen; picture-in-picture" />;
}

export function ReleasePreview({ release }: { release: Release }) {
  return <Suspense fallback={<span>Preview on site</span>}><PreviewControls release={release} /></Suspense>;
}

function PreviewControls({ release }: { release: Release }) {
  const params = useSearchParams();
  const [open, setOpen] = useState(params.get("listen") === "1");
  const [fallback, setFallback] = useState(false);
  const host = useRef<HTMLDivElement>(null);
  const player = useRef<Controller | null>(null);
  const id = useId();
  useEffect(() => {
    if (!open || fallback || !host.current) return;
    let active = true;
    const node = document.createElement("div");
    host.current.replaceChildren(node);
    const timeout = window.setTimeout(() => setFallback(true), 9000);
    getAPI().then(api => {
      if (!active) return;
      api.createController(node,{uri:"spotify:album:"+release.albumId,width:"100%",height:152},controller => {
        if (!active) { controller.destroy(); return; }
        player.current = controller;
        controller.addListener("ready", () => {
          if (!active) return;
          clearTimeout(timeout);
          controller.play();
        });
      });
    }).catch(() => { if (active) setFallback(true); });
    return () => { active = false; clearTimeout(timeout); player.current?.destroy(); player.current = null; };
  }, [open,fallback,release.albumId]);
  return <div className="release-preview">
    <button data-preview-control type="button" className="button primary" aria-controls={id}
      onClick={() => {
        if (!open) setOpen(true);
        else if (player.current) player.current.togglePlay();
        else host.current?.querySelector("iframe")?.focus();
      }}>{open ? "Play / pause" : "Preview on site"}</button>
    <div id={id} hidden={!open}>
      <div ref={host} className="player">{fallback && <SpotifyPreview release={release} />}</div>
      {open && <><a href={spotify(release)}>Open in Spotify</a>{" · "}
        <button type="button" onClick={() => {setOpen(false);setFallback(false);}}>Close preview</button></>}
    </div>
  </div>;
}
