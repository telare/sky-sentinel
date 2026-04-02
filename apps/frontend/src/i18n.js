import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: "en",
    supportedLngs: ["en", "ua"],
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    interpolation: {
      escapeValue: false,
    },
    // Avoid double detection on client if we already know the language from the server
    detection: {
      order: ["cookie", "navigator", "htmlTag"],
      caches: ["cookie"],
      lookupCookie: "i18n-locale",
    },
  });

export default i18n;
