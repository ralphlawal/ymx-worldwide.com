"use client";

import { useState } from "react";
import { artists, releases } from "../lib/content";
import { ReleaseGrid } from "./catalogue";

export function ReleaseBrowser() {
  const [selected, setSelected] = useState("");
  const records = selected ? releases.filter(release => release.artists.includes(selected)) : releases;
  return <>
    <div className="crate-tabs" role="group" aria-label="Filter releases by artist">
      {[{ slug: "", name: "All artists" }, ...artists].map(artist =>
        <button type="button" key={artist.slug} aria-pressed={selected === artist.slug} onClick={() => setSelected(artist.slug)}>{artist.name}</button>
      )}
    </div>
    <p className="crate-count" role="status">{records.length} releases</p>
    <div key={selected} className="crate-results"><ReleaseGrid releases={records} /></div>
  </>;
}
