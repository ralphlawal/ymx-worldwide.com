import { ReleaseBrowser } from "../../components/release-browser";
import { pageMetadata } from "../../lib/metadata";

export const metadata = pageMetadata("Releases", "Browse the YMX Worldwide release catalogue, from the latest singles to earlier releases.", "/releases", "/social/releases");

export default function ReleasesPage() {
  return <><h1 className="display page-title">Releases</h1><ReleaseBrowser /></>;
}
