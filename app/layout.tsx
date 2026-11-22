import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "../lib/content";
import { ThemeSwitch } from "../components/theme-switch";
import { LogoIntro } from "../components/logo-intro";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem("ymx-theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch{}` }} /></head>
      <body>
        <LogoIntro />
        <a className="skip" href="#main">Skip to content</a>
        <header className="header">
          <div className="shell header-inner">
            <Link className="wordmark" href="/">
              <Image src="/images/ymx.png" width={512} height={512} alt="YMX Worldwide" sizes="(max-width: 680px) 152px, 196px" preload />
            </Link>
            <nav aria-label="Main navigation">
              <Link href="/artists">Artists</Link><Link href="/releases">Releases</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>
        <main className="shell main" id="main">{children}</main>
        <footer className="footer shell">
          <Link className="footer-name" href="/about">About YMX Worldwide</Link>
          <div><a href={site.instagram}>Instagram</a><a href={`mailto:${site.email}`}>{site.email}</a></div>
          <ThemeSwitch />
          <small className="copyright">© {new Date().getUTCFullYear()} YMX Worldwide</small>
        </footer>
      </body>
    </html>
  );
}
