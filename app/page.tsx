import Image from "next/image";
import Link from "next/link";
import { artists, site } from "../lib/content";
import { pageMetadata } from "../lib/metadata";
export const metadata = pageMetadata(site.name, site.description, "/");

export default function Home() {
  return <div className="device-home"><nav aria-label="Main menu">
    {[["Artists","/artists"],["Releases","/releases"],["Featured song","/releases/" + site.featured],["About YMX","/about"],["Contact","/contact"]].map(([name,url]) =>
      <Link href={url} key={url}>{name}<span aria-hidden="true">›</span></Link>)}
  </nav><div className="home-sleeve">
    <Image src={"/images/"+artists[1].slug+".jpg"} alt={artists[1].name} fill sizes="150px" priority />
    <Image className="sleeve-logo" src="/images/ymx.png" width={512} height={512} alt="YMX Worldwide" />
  </div></div>;
}
