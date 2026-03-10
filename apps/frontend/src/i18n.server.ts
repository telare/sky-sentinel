import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resolve } from "node:path";
import { readFileSync } from "node:fs";

const SUPPORTED_LNGS = ["en", "ua"];
const FALLBACK_LNG = "en";

export async function getLocale(request: Request) {
  // 1. Check cookie
  const cookieHeader = request.headers.get("Cookie");
  if (cookieHeader) {
    const cookies = Object.fromEntries(
      cookieHeader.split("; ").map((c) => c.split("=")),
    );
    if (cookies["i18n-locale"] && SUPPORTED_LNGS.includes(cookies["i18n-locale"])) {
      return cookies["i18n-locale"];
    }
  }

  // 2. Check Accept-Language header
  const acceptLanguage = request.headers.get("Accept-Language");
  if (acceptLanguage) {
    const preferredLng = acceptLanguage.split(",")[0].split("-")[0];
    if (SUPPORTED_LNGS.includes(preferredLng)) {
      return preferredLng;
    }
  }

  return FALLBACK_LNG;
}

export async function initI18nServer(locale: string) {
  const i18nInstance = i18n.createInstance();
  
  // Load the translation file for the current locale
  const localesPath = resolve(process.cwd(), "public", "locales");
  const filePath = resolve(localesPath, locale, "translation.json");
  const resource = JSON.parse(readFileSync(filePath, "utf-8"));

  await i18nInstance
    .use(initReactI18next)
    .init({
      lng: locale,
      fallbackLng: FALLBACK_LNG,
      supportedLngs: SUPPORTED_LNGS,
      resources: {
        [locale]: {
          translation: resource
        }
      },
      interpolation: {
        escapeValue: false,
      },
    });

  return i18nInstance;
}
