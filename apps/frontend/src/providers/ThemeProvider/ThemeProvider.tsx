import { useLayoutEffect, useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import useBrowserTheme from "@/hooks/useBrowserTheme";
import { ThemeContext } from "./theme.context";

export type SupportedThemes = "light" | "dark";

export default function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cookies, setCookie] = useCookies(["theme-preference"]);
  const browserTheme = useBrowserTheme();

  const [theme, setTheme] = useState<SupportedThemes>(() => {
    if (cookies["theme-preference"])
      return cookies["theme-preference"];
    return "dark";
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (cookies["theme-preference"]) {
      setTheme(cookies["theme-preference"]);
    }
    else {
      setTheme(browserTheme);
    }
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  useLayoutEffect(() => {
    if (!isMounted)
      return;

    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    }
    else {
      root.classList.remove("dark");
    }
    setCookie("theme-preference", theme, { path: "/" });
  }, [theme, isMounted]);

  const value = {
    userTheme: theme,
    toggleTheme,
  };

  return <ThemeContext value={value}>{children}</ThemeContext>;
}
