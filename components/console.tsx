"use client";

import { PlayerIcon } from "./player-icon";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { spotify, type Release } from "../lib/content";
import { Cover, SpotifyIcon } from "./catalogue";
import { SpotifyPreview } from "./spotify-preview";

export function Console({ releases }: { releases: Release[] }) {
  const [index, setIndex] = useState(0);
  const [mode, setMode] = useState<"track" | "menu" | "preview">("track");
  const release = releases[index];

  function step(direction: number) {
    setIndex(current => (current + direction + releases.length) % releases.length);
    setMode("track");
  }

  return (
    <section className="portable" aria-label="YMX portable player">
      <div className="portable-face">
        <div className="portable-screen">
          <div className="screen-status">
            <span>{mode === "menu" ? "Menu" : mode === "preview" ? "Spotify preview" : "Now selected"}</span>
            <span>{index + 1} / {releases.length}</span>
          </div>
          <div className="screen-track" key={release.slug}>
            <Cover release={release} priority={index === 0} />
            <div aria-live="polite" aria-atomic="true">
              <h1 className="display">{release.title}</h1>
              <p>{release.credit}</p>
              <Link href={`/releases/${release.slug}`}>Release details</Link>
            </div>
          </div>
          <div id="portable-menu" hidden={mode !== "menu"}>
            <nav className="device-menu" aria-label="Player menu">
              <Link href="/artists">Artists</Link>
              <Link href="/releases">Releases</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
          <div id="portable-preview" hidden={mode !== "preview"}>
            {mode === "preview" && <SpotifyPreview release={release} />}
          </div>
        </div>

        <div className="portable-controls">
          <Image className="device-logo" src="/images/ymx.png" width={512} height={512} sizes="160px" alt="" />
          <div className="device-keys">
            <button type="button" aria-expanded={mode === "menu"} aria-controls="portable-menu"
              onClick={() => setMode(mode === "menu" ? "track" : "menu")}><PlayerIcon name="menu" /> Menu</button>
            <button type="button" aria-expanded={mode === "preview"} aria-controls="portable-preview"
              onClick={() => setMode(mode === "preview" ? "track" : "preview")}>
              <PlayerIcon name={mode === "preview" ? "close" : "play"} />
              {mode === "preview" ? "Close preview" : "Preview on site"}
            </button>
            <button type="button" aria-label="Previous release" disabled={releases.length < 2} onClick={() => step(-1)}>
              <PlayerIcon name="previous" /> Previous
            </button>
            <button type="button" aria-label="Next release" disabled={releases.length < 2} onClick={() => step(1)}>
              Next <PlayerIcon name="next" />
            </button>
          </div>
          <a className="device-spotify" href={spotify(release)}><SpotifyIcon /> Open in Spotify</a>
        </div>
      </div>
      <div className="memory-bank" role="group" aria-label="Featured release presets">
        {releases.map((item, position) => <button key={item.slug} type="button"
          aria-pressed={position === index} onClick={() => { setIndex(position); setMode("track"); }}>
          <span aria-hidden="true" className="preset-light" />{item.title}
        </button>)}
      </div>
    </section>
  );
}
