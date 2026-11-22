import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "../lib/content";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <header className="header">
          <div className="shell header-inner">
            <Link className="wordmark" href="/">
              <Image src="/images/medallion.png" width={54} height={54} alt="" preload />
              <span>YMX <small>WORLDWIDE</small></span>
            </Link>
            <nav aria-label="Main navigation">
              <Link href="/artists">Artists</Link><Link href="/releases">Releases</Link><Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>
        <main className="shell main" id="main">{children}</main>
        <footer className="footer shell">
          <Link className="footer-name" href="/">YMX Worldwide</Link>
          <div><a href={site.instagram}>Instagram</a><a href={`mailto:${site.email}`}>{site.email}</a></div>
        </footer>
      </body>
    </html>
  );
}
