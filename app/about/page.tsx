import Link from "next/link";
import { email, site } from "../../lib/content";
import { pageMetadata } from "../../lib/metadata";

export const metadata = pageMetadata("About", site.description, "/about", "/social/about");

export default function AboutPage() {
  return (
    <article className="about">
      <header className="about-intro">
        <h1 className="display page-title">About YMX</h1>
        <div>
          <p className="about-lead">YMX Worldwide is a Lagos record label and creative hub founded by {site.founder}.</p>
          <p>YMX Worldwide Limited was incorporated in Nigeria in October 2023. Its work spans music releases, artist management, studio photography, and a salon and beauty space.</p>
        </div>
      </header>

      <div className="about-index">
        <section>
          <h2 className="display">Label &amp; management</h2>
          <p>Meet Shmokes, Mayorcruiz, Staeci Moore, and Josianah, and explore their releases and collaborations.</p>
          <div className="about-links">
            <Link href="/artists">Meet the artists</Link>
            <Link href="/releases">Browse releases</Link>
          </div>
        </section>
        <section>
          <h2 className="display">YMX Pictures</h2>
          <p>Find YMX’s photography studio on Instagram for its work and shoot enquiries.</p>
          <a href={site.picturesInstagram}>@ymx_pictures</a>
        </section>
        <section>
          <h2 className="display">Salon &amp; beauty</h2>
          <p>Contact YMX for details about the salon and beauty space.</p>
          <a href={email("Salon and beauty enquiry")}>Ask about the salon</a>
        </section>
        <section>
          <h2 className="display">From the archive</h2>
          <p>On 14 February 2025, YMX presented <cite>Love in the Yard</cite>, a Valentine’s Day listening party with Staeci Moore.</p>
          <Link href="/artists/staeci-moore">Meet Staeci Moore</Link>
        </section>
      </div>
    </article>
  );
}
