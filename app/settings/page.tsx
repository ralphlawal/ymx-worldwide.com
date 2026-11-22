import { WheelSettings } from "../../components/wheel-settings";
export const metadata = { title: "Settings" };
export default function Settings() {
  return <section className="player-settings"><WheelSettings />
    <h2>Using the player</h2><p>Slide around the wheel to highlight a row. Press the centre button to open the highlighted row. MENU takes you back one screen.</p>
    <p>Use the arrow keys to browse, Enter to choose, and Escape to go back. Play opens a song preview.</p>
    <small>© {new Date().getUTCFullYear()} YMX Worldwide</small>
  </section>;
}
