import type { Metadata } from "next";
import { Device } from "../components/device";
import { site } from "../lib/content";
import { LogoIntro } from "../components/logo-intro";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Device intro={<LogoIntro />}>{children}</Device>

      </body>
    </html>
  );
}
