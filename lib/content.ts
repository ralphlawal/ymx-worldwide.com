export type Artist = {
  slug: string;
  name: string;
  bio: string;
  spotifyId: string;
  instagram?: string;
  apple?: string;
  audiomack?: string;
};

export type Release = {
  slug: string;
  title: string;
  credit: string;
  artists: string[];
  date: string;
  albumId: string;
  imageId: string;
  artwork?: string;
  apple?: string;
};

export const site = {
  name: "YMX Worldwide",
  url: "https://ymx-worldwide.com",
  email: "hello@ymx-worldwide.com",
  instagram: "https://www.instagram.com/ymx.worldwide/",
  description: "Explore the artists and releases of YMX Worldwide.",
  featured: "fle-fle",
  consoleReleases: ["fle-fle", "roue", "gift-of-life", "spell"],
};

export const artists: Artist[] = [
  {
    slug: "shmokes", name: "Shmokes",
    bio: "Shmokes is a singer and songwriter from Western Nigeria who blends Afrobeats, R&B and soul. He writes about relationships, ambition and everyday life, and has performed at Felabration ’25 and Trench Fest.",
    spotifyId: "0C5tu07Bu0p3bgiyCp1yFS", instagram: "Shmokessounds",
    apple: "https://music.apple.com/us/artist/shmokes/1473530898",
  },
  {
    slug: "mayorcruiz", name: "Mayorcruiz",
    bio: "Mayorcruiz is a Nigerian Afrobeats singer and songwriter who lists Ekiti as his location on Audiomack. Storytelling and rhythm run through his catalogue, from UPDATE to THANKFUL with Tiphe and MMM with Godillac. He also appears on Shmokes’ KOWE.",
    spotifyId: "5NU1yLT6BKMUk8khGKD4Q2",
    apple: "https://music.apple.com/us/artist/mayorcruiz/1805450866",
    audiomack: "https://audiomack.com/mayorcruiz",
  },
  {
    slug: "staeci-moore", name: "Staeci Moore",
    bio: "Staeci Moore is a Nigerian Afro-soul and Afro-R&B artist, vocalist and songwriter. Her credits include background vocals on Wizkid’s IDK featuring Zlatan and work on Flavour’s Afroculture.",
    spotifyId: "75mMhWrvUtvOtlv91mtGla", instagram: "staecimoore",
    apple: "https://music.apple.com/us/artist/staeci-moore/1794383135",
  },
  {
    slug: "josianah", name: "Josianah",
    bio: "Josianah is an R&B and Afro-R&B artist from Festac Town, Lagos. Her soulful vocals carry songs about love, healing and self-discovery, including HIGH and ACUPUNCTURE featuring Shmokes.",
    spotifyId: "051eMdeA2HGCRYcx1XF8x8", instagram: "josianah.h",
    apple: "https://music.apple.com/us/artist/josianah/1724677372",
  },
];

export const releases: Release[] = [
  { slug: "fle-fle", title: "FLE FLE", credit: "Mayorcruiz feat. Valid", artists: ["mayorcruiz"], date: "2026-11-06", albumId: "5tCXhkKGerTqLGLfEABGyg", imageId: "ab67616d0000b2734b7a72061f21773f41cad34c" },
  { slug: "roue", title: "ROUÉ", credit: "Shmokes & Tiimie", artists: ["shmokes"], date: "2026-08-12", albumId: "3oWGGDxvXeEvsTHKwl1I9b", imageId: "ab67616d0000b27325ccc5bbd238fa70ae5a5078", apple: "https://music.apple.com/us/album/rou%C3%A9-single/6803338280" },
  { slug: "gift-of-life", title: "Gift Of Life", credit: "Mayorcruiz", artists: ["mayorcruiz"], date: "2026-07-20", albumId: "3mE91AmHxWR85k9BgdNfHm", imageId: "ab67616d0000b273427c2d69e1d92745c05cdacf", apple: "https://music.apple.com/us/album/gift-of-life-single/6789814945" },
  { slug: "spell", title: "Spell", credit: "Staeci Moore", artists: ["staeci-moore"], date: "2026-07-17", albumId: "7pmbcPo0D1SCAWwsvkQEZH", imageId: "ab67616d0000b273ca3ef8eeb0f462263f22dae3" },
  { slug: "tmb", title: "TMB (Touch My Body)", credit: "Staeci Moore", artists: ["staeci-moore"], date: "2025-10-31", albumId: "5qswiLEWViq9XTrZ9zR9k7", imageId: "ab67616d0000b273df0ff7db017e07c5d59375dc", apple: "https://music.apple.com/us/album/tmb-touch-my-body/1892693390" },
  { slug: "open-up-x-kowe", title: "OPEN UP X KOWE", credit: "Shmokes", artists: ["shmokes", "mayorcruiz"], date: "2025-10-21", albumId: "5F2ZweuetmyVk1WZ845ddp", imageId: "ab67616d0000b273ce59233ecfb6a3e2d4e238ef", apple: "https://music.apple.com/us/album/open-up-x-kowe-single/1849343236" },
  { slug: "high", title: "HIGH", credit: "Josianah", artists: ["josianah"], date: "2025-02-14", albumId: "49fkOAlvnq41I3sZ756ESu", imageId: "ab67616d0000b2736075c79408a814ba784d5d97", apple: "https://music.apple.com/us/album/high-single/1849342995" },
  { slug: "acupuncture", title: "ACUPUNCTURE", credit: "Josianah feat. Shmokes", artists: ["josianah", "shmokes"], date: "2025-01-28", albumId: "02NTk1RcrKRiwlTbqEZgm5", imageId: "ab67616d0000b27319decefbaedb1098f034df5a", apple: "https://music.apple.com/us/album/acupuncture-feat-shmokes-single/1849342989" },
].sort((first, second) => second.date.localeCompare(first.date));

export function spotify(release: Release) {
  return `https://open.spotify.com/album/${release.albumId}`;
}

export function cover(release: Release) {
  return release.artwork ?? `https://i.scdn.co/image/${release.imageId}`;
}

export function portrait(artist: Artist) {
  return `/images/${artist.slug}.jpg`;
}

export function displayDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", { dateStyle: "long", timeZone: "UTC" }).format(new Date(date));
}

export function email(subject: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
}
