export const speeds = { Slower: .65, Standard: .44, Faster: .28 };
export type Speed = keyof typeof speeds;
let sessionSpeed: Speed = "Standard";

export function readSpeed(): Speed {
  try {
    const value = localStorage.getItem("ymx-wheel-speed");
    if (value === "Slower" || value === "Standard" || value === "Faster") return value;
  } catch {}
  return sessionSpeed;
}
export function changeSpeed(value: Speed) {
  sessionSpeed = value;
  try { localStorage.setItem("ymx-wheel-speed", value); } catch {}
  window.dispatchEvent(new Event("ymx-wheel-speed"));
}
