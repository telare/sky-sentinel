import type { SupportedThemes } from "@/providers";
import { useState, useEffect } from "react";

const useBrowserTheme = (): SupportedThemes => {
  const [theme, setTheme] = useState<SupportedThemes>("dark");

  useEffect(() => {
    const isSystemInDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    console.log("System theme is dark:", isSystemInDarkMode);
    setTheme(isSystemInDarkMode ? "dark" : "light");
  }, []);

  return theme;
};

export default useBrowserTheme;
