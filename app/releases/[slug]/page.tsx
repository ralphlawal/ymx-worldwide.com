import Link from "next/link";
import { notFound } from "next/navigation";
import { Cover, ReleaseLinks } from "../../../components/catalogue";
import { artists, displayDate, releases } from "../../../lib/content";
import { pageMetadata } from "../../../lib/metadata";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export const generateStaticParams = () => releases.map(({ slug }) => ({ slug }));

async function getRelease(params: Props["params"]) {
  const { slug } = await params;
  return releases.find(item => item.slug === slug) ?? notFound();
}

export async function generateMetadata({ params }: Props) {
  const release = await getRelease(params);
  return pageMetadata(release.title, `Listen to ${release.title} by ${release.credit}, released ${displayDate(release.date)}.`,
    `/releases/${release.slug}`, `/social/release-${release.slug}`);
}

export default async function ReleasePage({ params }: Props) {
  const release = await getRelease(params);
  const related = artists.filter(artist => release.artists.includes(artist.slug));

  return <>
    <Link className="text-link breadcrumb" href="/releases">All releases</Link>
    <section className="detail">
      <Cover release={release} priority />
      <div>
        <time className="eyebrow release-label" dateTime={release.date}>{displayDate(release.date)}</time>
        <h1 className="display detail-title">{release.title}</h1>
        <p className="credit">{release.credit}</p>
        <div className="actions"><ReleaseLinks release={release} /></div>
        <div className="artist-links">{related.map(artist =>
          <Link className="text-link" key={artist.slug} href={`/artists/${artist.slug}`}>{artist.name}</Link>,
        )}</div>
      </div>
    </section>
  </>;
}
