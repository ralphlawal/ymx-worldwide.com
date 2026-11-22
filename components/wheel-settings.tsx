"use client";
import { useSyncExternalStore } from "react";
import { changeSpeed, readSpeed, speeds, type Speed } from "../lib/wheel-speed";

function subscribe(update: () => void) {
  window.addEventListener("ymx-wheel-speed", update);
  window.addEventListener("storage", update);
  return () => {
    window.removeEventListener("ymx-wheel-speed", update);
    window.removeEventListener("storage", update);
  };
}
export function WheelSettings() {
  const current = useSyncExternalStore(subscribe, readSpeed, () => "Standard");
  return <fieldset><legend>Wheel sensitivity</legend>
    {(Object.keys(speeds) as Speed[]).map(speed => <button key={speed} type="button" aria-pressed={current === speed}
      onClick={() => changeSpeed(speed)}>{speed}<span aria-hidden="true">{current === speed ? "✓" : ""}</span></button>)}
  </fieldset>;
}
