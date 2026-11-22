const paths = {
  menu: "M4 6h16M4 12h16M4 18h16",
  previous: "M5 5v14M18 5l-10 7 10 7z",
  next: "M19 5v14M6 5l10 7-10 7z",
  play: "M7 4l13 8-13 8z",
  close: "M6 6l12 12M18 6L6 18",
  arrow: "M5 12h14m-6-6 6 6-6 6",
};

export function PlayerIcon({ name }: { name: keyof typeof paths }) {
  return <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={paths[name]} /></svg>;
}
