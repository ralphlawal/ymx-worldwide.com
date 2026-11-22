import Image from "next/image";

const startIntro = `(() => {
  const dialog = document.getElementById("ymx-intro");
  if (!dialog?.showModal || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  try {
    if (sessionStorage.getItem("ymx-intro-seen")) return;
    sessionStorage.setItem("ymx-intro-seen", "1");
  } catch {}
  dialog.showModal();
  const close = () => { if (dialog.open) dialog.close(); };
  const deadline = setTimeout(close, 2400);
  const logo = dialog.querySelector("img");
  logo.decode().then(() => {
    if (!dialog.open) return;
    dialog.animate([{opacity: 1}, {opacity: 0}], {
      duration: 260, delay: 960, fill: "forwards"
    }).finished.then(close, close);
    logo.animate([
      { opacity: 0, transform: "scale(.88)", filter: "brightness(.65)" },
      { opacity: 1, transform: "scale(1)", filter: "brightness(1)" }
    ], {duration: 640, easing: "ease-out"});
  }).catch(close);
  dialog.addEventListener("close", () => clearTimeout(deadline), {once: true});
})();`;

export function LogoIntro() {
  return <>
    <dialog id="ymx-intro" className="logo-intro" aria-label="YMX Worldwide intro" suppressHydrationWarning>
      <Image src="/images/ymx.png" width={512} height={512} sizes="300px" alt="YMX Worldwide" preload />
      <form method="dialog"><button type="submit">Skip intro</button></form>
    </dialog>
    <script dangerouslySetInnerHTML={{ __html: startIntro }} />
  </>;
}
