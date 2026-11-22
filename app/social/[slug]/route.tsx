import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { artists, releases, site } from "../../../lib/content";

const sections: Record<string, string> = {
  label: site.name,
  artists: "Artists",
  releases: "Releases",
  contact: "Contact",
};

export const dynamic = "force-static";
export const dynamicParams = false;
export const generateStaticParams = () => [
  ...Object.keys(sections),
  ...artists.map(({ slug }) => `artist-${slug}`),
  ...releases.map(({ slug }) => `release-${slug}`),
].map(slug => ({ slug }));

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const artist = artists.find(item => slug === `artist-${item.slug}`);
  const release = releases.find(item => slug === `release-${item.slug}`);
  const title = artist?.name ?? release?.title ?? sections[slug];

  if (!title) return new Response(null, { status: 404 });

  const imagePath = artist ? `images/${artist.slug}.jpg` : "images/medallion.png";
  const image = await readFile(join(process.cwd(), "public", imagePath));
  const source = `data:image/${artist ? "jpeg" : "png"};base64,${image.toString("base64")}`;

  return new ImageResponse(
    <div style={{ display: "flex", alignItems: "center", width: "100%", height: "100%", background: "#17130f", color: "#f4eee3", padding: 64, gap: 54 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={source} alt="" width={artist ? 330 : 300} height={artist ? 460 : 300} style={{ objectFit: artist ? "cover" : "contain" }} />
      <div style={{ display: "flex", flexDirection: "column", flex: 1, borderLeft: "2px solid #87663b", paddingLeft: 42 }}>
        <div style={{ color: "#e6bc77", fontSize: 24, letterSpacing: 4, textTransform: "uppercase" }}>{slug === "label" ? "Listening room" : site.name}</div>
        <div style={{ fontSize: title.length > 16 ? 66 : 90, fontWeight: 800, lineHeight: 1.03, marginTop: 18 }}>{title}</div>
        {release && <div style={{ color: "#e6bc77", fontSize: 32, marginTop: 20 }}>{release.credit}</div>}
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
