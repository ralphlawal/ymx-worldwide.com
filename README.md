# YMX Worldwide

Next.js App Router and TypeScript. Use Node.js 22 or newer.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Run `npm run lint`, `npm run typecheck`, and `npm run build` before review.

## Updating content with Codex

- “Add an artist called …” Include their bio facts, portrait, Spotify artist ID, and verified platform links. Codex updates `lib/content.ts` and adds the portrait at `public/images/<slug>.jpg`.
- “Add a release called …” Include the exact credit, release date, related artist slugs, Spotify album and cover image IDs, and any verified Apple Music URL. Include a local original cover if available. The catalogue sorts by date and generates a shareable page automatically.
- “Feature … on the homepage” Name the release and any other releases to include in the console. Codex updates `site.featured` and `site.consoleReleases` in `lib/content.ts`.
- Keep existing slugs stable so shared links continue working. Contact information and the canonical domain live in the same file.

Spotify cover artwork links to its matching album. Spotify’s icon comes from its [official brand assets](https://developer.spotify.com/documentation/design). The console creates the Spotify iframe only when a visitor opens the player. Release text, links, routes, and social cards are built from local data.

## Vercel after review

Commit and push the approved changes to the GitHub repository. In Vercel, import `ralphlawal/ymx-worldwide.com`, select the Next.js preset, and deploy from the repository root. Vercel can use the default build command and requires no environment variables for this site. Review the preview deployment, then connect the production domain `ymx-worldwide.com` in the Vercel project’s Domains settings.
