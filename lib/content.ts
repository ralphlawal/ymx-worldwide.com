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
  founder: "Abayomi Oluwaseun Olajide",
  picturesInstagram: "https://www.instagram.com/ymx_pictures/",
  description: "A Lagos record label and creative hub working in artist management, photography, and beauty.",
  featured: "fle-fle",
  consoleReleases: ["fle-fle", "roue", "gift-of-life", "spell"],
};

export const artists: Artist[] = [
  {
    slug: "shmokes", name: "Shmokes",
    bio: "Shmokes is a singer and songwriter from Western Nigeria who blends Afrobeats, R&B and soul. His songs include BIGGER and LOVE NA SCAM, and he has performed at Felabration ’25 and Trench Fest.",
    spotifyId: "0C5tu07Bu0p3bgiyCp1yFS", instagram: "shmokessounds",
    apple: "https://music.apple.com/us/artist/shmokes/1473530898",
  },
  {
    slug: "mayorcruiz", name: "Mayorcruiz",
    bio: "Mayorcruiz is an Afrobeats singer and songwriter based in Ekiti, Nigeria. He describes UPDATE as a song about hustle and resilience. He has recorded with Tiphe, Godillac and Valid, and features on Shmokes’ KOWE.",
    spotifyId: "5NU1yLT6BKMUk8khGKD4Q2", instagram: "cruzzy__",
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
  { slug: "mmm", title: "MMM", credit: "Mayorcruiz feat. Godillac", artists: ["mayorcruiz"], date: "2025-10-27", albumId: "5u1i2ePInEGjxq0zTDM9aJ", imageId: "ab67616d0000b273d50b3af0e1539ab123553c9b", apple: "https://music.apple.com/us/album/mmm-feat-godillac/1892589736?i=1892589737" },
  { slug: "thankful", title: "THANKFUL", credit: "Mayorcruiz feat. Tiphe", artists: ["mayorcruiz"], date: "2025-05-23", albumId: "0THE2kHAjf7yQwxrshiQ60", imageId: "ab67616d0000b273d6f326c357a2db425857815f" },
  { slug: "update", title: "UPDATE", credit: "Mayorcruiz", artists: ["mayorcruiz"], date: "2025-04-03", albumId: "2MOroZMDSzFEGSa0dnJfEp", imageId: "ab67616d0000b27304f51c8e98db7a59f6b3d80c", apple: "https://music.apple.com/ng/album/update-single/1849342599" },
  { slug: "mr-macaroni", title: "MR MACARONI", credit: "Staeci Moore", artists: ["staeci-moore"], date: "2025-02-14", albumId: "0DbmOTbQaSCA3H7TjiZecU", imageId: "ab67616d0000b2737bc1ee957f0e43ae76371d1a" },
  { slug: "love-na-scam", title: "LOVE NA SCAM", credit: "Shmokes", artists: ["shmokes"], date: "2025-02-13", albumId: "6edHA0glUTfnEcvyX3ikf1", imageId: "ab67616d0000b273ff4c335e6025e89373777ba9", apple: "https://music.apple.com/us/album/love-na-scam-single/1849342948" },
  { slug: "jo-fuji-cruise", title: "JO (fuji cruise)", credit: "Shmokes feat. Pepe", artists: ["shmokes"], date: "2024-11-22", albumId: "1vzSqg2H9lPA3RDGx6lUXt", imageId: "ab67616d0000b273f65c5f2f85ed64140c579057" },
  { slug: "go-shawty", title: "GO SHAWTY", credit: "Shmokes feat. Dunton ASA", artists: ["shmokes"], date: "2024-05-17", albumId: "3uGr57x12V0yvAElHCFmNc", imageId: "ab67616d0000b273818339d10be05625d118bf24" },
  { slug: "bibidibabidu", title: "Bibidibabidu", credit: "Josianah", artists: ["josianah"], date: "2024-04-29", albumId: "12hMZpn556ceULht5qpPgf", imageId: "ab67616d0000b2739c781f09d7bb84f38d2c2562", apple: "https://music.apple.com/us/album/bibidibabidu-single/1849342619" },
  { slug: "scarred-in-love", title: "Scarred In Love", credit: "Josianah", artists: ["josianah"], date: "2024-04-19", albumId: "4cyt8w4WgUqmLMTRgGsNih", imageId: "ab67616d0000b2734d987eb2797b83128164102e", apple: "https://music.apple.com/us/album/scarred-in-love-single/1849342736" },
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
