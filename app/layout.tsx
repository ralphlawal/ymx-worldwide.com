import type { Metadata } from "next";
import { Device } from "../components/device";
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
        <Device>{children}</Device>
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
