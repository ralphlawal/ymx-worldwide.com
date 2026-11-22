import type { MetadataRoute } from "next";
import { artists, releases, site } from "../lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...["", "/artists", "/releases", "/contact"].map(path => ({ url: site.url + path })),
    ...artists.map(({ slug }) => ({ url: `${site.url}/artists/${slug}` })),
    ...releases.map(({ slug }) => ({ url: `${site.url}/releases/${slug}` })),
  ];
}
