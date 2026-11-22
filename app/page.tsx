import Link from "next/link";
import { ArtistGrid } from "../components/catalogue";
import { Console } from "../components/console";
import { artists, releases, site } from "../lib/content";
import { pageMetadata } from "../lib/metadata";

export const metadata = pageMetadata(site.name, "Listen to the featured release and meet the artists of YMX Worldwide.", "/");

export default function Home() {
  const selection = [...new Set([site.featured, ...site.consoleReleases])].map(slug => {
    const release = releases.find(item => item.slug === slug);
    if (!release) throw new Error(`Unknown console release: ${slug}`);
    return release;
  });

  return <>
    <Console releases={selection} />
    <section className="home-artists" aria-labelledby="artists-heading">
      <div className="section-heading">
        <h2 id="artists-heading" className="display">Artists</h2>
        <Link className="text-link" href="/artists">View roster</Link>
      </div>
      <ArtistGrid artists={artists} />
    </section>
  </>;
}
