import { useTheme } from "../utils/useTheme";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button onClick={toggle} className="p-2.5 rounded-full hover:bg-stone-500/25 transition relative w-10 h-10 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full">
        <defs>
          <mask id="moon-clip">
            <circle cx="12" cy="12" r="10" fill="white" />
            <circle cx="18" cy="12" r="8" fill="black" className={`transition duration-400 ${theme === "dark" ? "translate-x-1/2" : ""}`} />
          </mask>
        </defs>
        <circle cx="12" cy="12" r="10" fill="currentcolor" mask="url(#moon-clip)" />
      </svg>
    </button>
  );
}
