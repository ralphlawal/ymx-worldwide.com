import Image from "next/image";
import Link from "next/link";
import { artists, site } from "../lib/content";
import { pageMetadata } from "../lib/metadata";
export const metadata = pageMetadata(site.name, site.description, "/");

export default function Home() {
  return <div className="device-home"><nav aria-label="Main menu">
    {[["Artists","/artists"],["Recent Releases","/releases"],["Featured song","/releases/" + site.featured],["About YMX","/about"],["Contact","/contact"],["Settings","/settings"]].map(([name,url]) =>
      <Link href={url} key={url}>{name}<span aria-hidden="true">›</span></Link>)}
  </nav><div className="home-sleeve">
    {artists.map(artist => <Image key={artist.slug} src={"/images/"+artist.slug+".jpg"} alt={artist.name} width={120} height={150} sizes="90px" />)}
  </div></div>;
}
