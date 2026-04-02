import { use } from "react";
import { ThemeContext } from "./theme.context";

export function useThemeContext() {
  const context = use(ThemeContext);
  if (!context)
    throw new Error("The component must be in the ThemeContext to use it!");
  return context;
}
