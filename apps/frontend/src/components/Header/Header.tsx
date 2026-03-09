import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ua" : "en");
  };

  return (
    <header className="w-full text-white py-4 flex items-center justify-between">
      <h1 className="text-3xl font-bold">{t("header.title")}</h1>
      <button
        onClick={toggleLanguage}
        className="px-4 py-2 border rounded hover:bg-white/10 transition-colors"
      >
        {i18n.language === "en" ? "UA" : "EN"}
      </button>
    </header>
  );
}
