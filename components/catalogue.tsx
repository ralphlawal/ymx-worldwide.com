import { PlayerIcon } from "./player-icon";
import Image from "next/image";
import Link from "next/link";
import { cover, portrait, spotify, type Artist, type Release } from "../lib/content";

export function SpotifyIcon() {
  return <Image src="/images/spotify.svg" alt="" width={21} height={21} unoptimized />;
}

export function Cover({ release, priority = false }: { release: Release; priority?: boolean }) {
  return (
    <a className="cover" href={spotify(release)} aria-label={`Open ${release.title} on Spotify`}>
      <Image src={cover(release)} alt={`${release.title} cover artwork`} width={640} height={640}
        unoptimized={!release.artwork} preload={priority} />
    </a>
  );
}

export function ReleaseLinks({ release }: { release: Release }) {
  return (
    <>
      <a className="button spotify" href={spotify(release)}><SpotifyIcon /> Open in Spotify</a>
      {release.apple && <a className="button secondary" href={release.apple}>Apple Music</a>}
    </>
  );
}

export function Portrait({ artist }: { artist: Artist }) {
  return <Image className="portrait" src={portrait(artist)} alt={artist.name}
    width={640} height={800} sizes="(max-width: 600px) 50vw, (max-width: 900px) 40vw, 420px" />;
}

export function ArtistGrid({ artists }: { artists: Artist[] }) {
  return <div className="artist-grid">{artists.map(artist =>
    <Link className="artist-card" key={artist.slug} href={`/artists/${artist.slug}`}>
      <Portrait artist={artist} />
      <span>{artist.name}<PlayerIcon name="arrow" /></span>
    </Link>,
  )}</div>;
}

export function ReleaseGrid({ releases }: { releases: Release[] }) {
  return <div className="release-grid">{releases.map(release =>
    <article className="release-card" key={release.slug}>
      <Link href={`/releases/${release.slug}`} className="record-row">
        <Image src={cover(release)} alt="" width={40} height={40} unoptimized />
        <span><strong>{release.title}</strong><small>{release.credit}</small></span>
        <PlayerIcon name="arrow" />
      </Link>
    </article>,
  )}</div>;
}
