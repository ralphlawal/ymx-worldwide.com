import { ArtistGrid } from "../../components/catalogue";
import { artists } from "../../lib/content";
import { pageMetadata } from "../../lib/metadata";

export const metadata = pageMetadata("Artists", "Meet Shmokes, Mayorcruiz, Staeci Moore and Josianah.", "/artists", "/social/artists");

export default function ArtistsPage() {
  return <><h1 className="display page-title">Artists</h1><ArtistGrid artists={artists} /></>;
}
