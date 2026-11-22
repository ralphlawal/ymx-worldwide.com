import type { Metadata } from "next";
import { site } from "./content";

export function pageMetadata(title: string, description: string, path: string, image = "/social/label") : Metadata {
  const fullTitle = path === "/" ? site.name : `${title} | ${site.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: fullTitle, description, url: path, images: [{ url: image, width: 1200, height: 630, alt: fullTitle }], siteName: site.name, type: "website" },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [image] },
  };
}
