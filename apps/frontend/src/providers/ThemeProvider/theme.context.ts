import type { SupportedThemes } from "..";
import { createContext } from "react";

export const ThemeContext = createContext<{
  userTheme: SupportedThemes;
  toggleTheme?: () => void;
} | null>(null);
