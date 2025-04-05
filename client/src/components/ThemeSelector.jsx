import { PaletteIcon } from "lucide-react";
import { THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore";

function ThemeSelector() {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="dropdown dropdown-end">
      {/* DROPDOWN TRIGGER */}

      <button tabIndex={0} className="btn btn-ghost btn-circle">
        <PaletteIcon className="size-5" />
      </button>

      <div
        tabIndex={0}
        className="w-56 p-1 mt-2 border shadow-2xl dropdown-content bg-base-200 backdrop-blur-lg rounded-2xl border-base-content/10 "
      >
        {THEMES.map((themeOption) => (
          <button
            key={themeOption.name}
            className={`
                w-full px-4 py-3 rounded-xl flex items-center gap-3 transition-colors
                ${
                  theme === themeOption.name
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-base-content/5"
                }
              `}
            onClick={() => setTheme(themeOption.name)}
          >
            <PaletteIcon className="size-4" />
            <span className="text-sm font-medium">{themeOption.label}</span>

            {/* THEME PREVIEW COLORS */}
            <div className="flex gap-1 ml-auto">
              {themeOption.colors.map((color, i) => (
                <span
                  key={i}
                  className="rounded-full size-2"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
export default ThemeSelector;
