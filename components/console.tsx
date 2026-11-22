"use client";

import Link from "next/link";
import { useState } from "react";
import { displayDate, spotify, type Release } from "../lib/content";
import { Cover, ReleaseLinks } from "./catalogue";

export function Console({ releases }: { releases: Release[] }) {
  const [index, setIndex] = useState(0);
  const [playerOpen, setPlayerOpen] = useState(false);
  const release = releases[index];

  const previous = (index + releases.length - 1) % releases.length;
  const next = (index + 1) % releases.length;

  return (
    <section className="console" aria-label="Listening room">
      <div className="console-header">
        <span className="console-label">Listening room</span>
        <Link href="/releases">All releases</Link>
      </div>
      <div className="console-body">
        <Cover release={release} priority={index === 0} />
        <div className="console-controls">
          <div aria-live="polite" aria-atomic="true">
            <p className="eyebrow release-label"><time dateTime={release.date}>{displayDate(release.date)}</time></p>
            <h1 className="display console-title">{release.title}</h1>
            <p className="credit">{release.credit}</p>
          </div>
          <div className="actions">
            <button className="button primary" type="button" onClick={() => setPlayerOpen(!playerOpen)}
              aria-expanded={playerOpen} aria-controls="spotify-player">
              <span aria-hidden="true">{playerOpen ? "×" : "▶"}</span> {playerOpen ? "Close player" : "Open player"}
            </button>
            <ReleaseLinks release={release} />
          </div>
          <div id="spotify-player" hidden={!playerOpen} className="player">
            {playerOpen && <>
              <iframe key={release.albumId} title={`Spotify player for ${release.title}`}
                src={`https://open.spotify.com/embed/album/${release.albumId}`}
                width="100%" height="152" allow="encrypted-media; fullscreen; picture-in-picture" />
              <p>If the player asks you to sign in or won’t load, <a href={spotify(release)}>open {release.title} in Spotify</a>.</p>
            </>}
          </div>
          <Link className="text-link" href={`/releases/${release.slug}`}>Release details</Link>
          <div className="transport" aria-label="Browse releases">
            <button type="button" disabled={releases.length < 2} onClick={() => setIndex(previous)}>
              <span className="transport-direction">Previous release</span>
              <span>{releases[previous].title}</span>
            </button>
            <button type="button" disabled={releases.length < 2} onClick={() => setIndex(next)}>
              <span className="transport-direction">Next release</span>
              <span>{releases[next].title}</span>
            </button>
          </div>
        </div>
      </div>
      <div className="console-bank" aria-label="Select a release">
        {releases.map((item, position) =>
          <button key={item.slug} type="button" aria-pressed={position === index} onClick={() => setIndex(position)}>
            {item.title}
          </button>,
        )}
      </div>
    </section>
  );
}
