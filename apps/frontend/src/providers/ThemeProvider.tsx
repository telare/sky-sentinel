import { createContext, useMemo, useState } from "react";

export type SupportedThemes = "light" | "dark";
export const ThemeContext = createContext<{
  userTheme: SupportedThemes;
  setTheme?: (theme: SupportedThemes) => void;
} | null>(null);

export default function ThemeContextProvider({
  userTheme,
  children,
}: {
  userTheme: SupportedThemes;
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<SupportedThemes>(userTheme);
  const value = useMemo(
    () => ({
      userTheme: theme,
      setTheme,
    }),
    [theme],
  );
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
