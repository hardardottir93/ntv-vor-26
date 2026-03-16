import { useContext } from "react";
import { ThemeContext } from "../root";

export function ThemeToggle() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("ThemeToggle must be used inside ThemeContext.Provider");
  }

  const { theme, setTheme } = context;

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
