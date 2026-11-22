import Link from "next/link";
import { notFound } from "next/navigation";
import { Portrait, ReleaseGrid, SpotifyIcon } from "../../../components/catalogue";
import { artists, email, releases } from "../../../lib/content";
import { pageMetadata } from "../../../lib/metadata";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export const generateStaticParams = () => artists.map(({ slug }) => ({ slug }));

async function getArtist(params: Props["params"]) {
  const { slug } = await params;
  return artists.find(item => item.slug === slug) ?? notFound();
}

export async function generateMetadata({ params }: Props) {
  const artist = await getArtist(params);
  return pageMetadata(artist.name, artist.bio, `/artists/${artist.slug}`, `/social/artist-${artist.slug}`);
}

export default async function ArtistPage({ params }: Props) {
  const artist = await getArtist(params);
  const catalogue = releases.filter(release => release.artists.includes(artist.slug));

  return <>
    <Link className="text-link breadcrumb" href="/artists">All artists</Link>
    <section className="detail">
      <Portrait artist={artist} />
      <div>
        <h1 className="display detail-title">{artist.name}</h1>
        <p className="bio">{artist.bio}</p>
        <div className="actions">
          <a className="button primary" href={email(`Booking enquiry: ${artist.name}`)}>Book {artist.name}</a>
          <a className="button spotify" href={`https://open.spotify.com/artist/${artist.spotifyId}`}><SpotifyIcon /> Spotify</a>
          {artist.instagram && <a className="button secondary" href={`https://www.instagram.com/${artist.instagram}/`}>Instagram</a>}
          {artist.apple && <a className="button secondary" href={artist.apple}>Apple Music</a>}
          {artist.audiomack && <a className="button secondary" href={artist.audiomack}>Audiomack</a>}
        </div>
      </div>
    </section>
    {catalogue.length > 0 && <section className="related">
      <h2 className="display">Releases</h2>
      <ReleaseGrid releases={catalogue} />
    </section>}
  </>;
}
