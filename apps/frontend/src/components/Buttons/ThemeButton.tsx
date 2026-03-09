import { ThemeContext } from "@/providers";
import { useContext } from "react";
import { Switch } from "@/components/ui/switch";
import { useTranslation } from "react-i18next";

export const ThemeButton = () => {
  const { t } = useTranslation();
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    return null;
  }
  const { userTheme, setTheme } = themeContext;
  // The Switch provides a boolean (true/false) when toggled
  const handleThemeChange = (isChecked: boolean) => {
    setTheme?.(isChecked ? "dark" : "light");
  };

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm">☀️</span>
      <Switch
        checked={userTheme === "dark"}
        onCheckedChange={handleThemeChange}
        aria-label={t("common.toggleTheme")}
      />
      <span className="text-sm">🌙</span>
    </div>
  );
};
