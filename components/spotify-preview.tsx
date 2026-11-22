"use client";

import { useId, useState } from "react";
import { spotify, type Release } from "../lib/content";

export function SpotifyPreview({ release }: { release: Release }) {
  return (
    <div className="player">
      <iframe
        title={`Spotify preview for ${release.title}`}
        src={`https://open.spotify.com/embed/album/${release.albumId}?theme=0`}
        width="100%"
        height="152"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      />
      <p><a href={spotify(release)}>Open on Spotify if playback is unavailable here</a></p>
    </div>
  );
}

export function ReleasePreview({ release }: { release: Release }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className="release-preview">
      <button className="button primary" type="button" aria-expanded={open} aria-controls={id}
        onClick={() => setOpen(!open)}>
        {open ? "Close preview" : "Preview on site"}
      </button>
      <div id={id} hidden={!open}>{open && <SpotifyPreview release={release} />}</div>
    </div>
  );
}
