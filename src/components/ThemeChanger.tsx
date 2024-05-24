import { MoonIcon } from "@heroicons/react/24/outline";
import { SunIcon } from "@heroicons/react/24/outline";
export default function ThemeChanger() {
  return (
    <label className="swap swap-rotate pt-2">
      {/* this hidden checkbox controls the state */}
      <input type="checkbox" className="theme-controller" value="dim" />

      {/* sun icon */}
      <MoonIcon className="swap-on  w-8 h-8" />
      <SunIcon className="swap-off  w-8 h-8" />

      {/* moon icon */}
    </label>
  );
}
