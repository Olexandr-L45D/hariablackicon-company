import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: ["en", "it", "pl"],
    debug: false,

    backend: {
      loadPath: "/locales/{{lng}}/common.json",
    },

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: true,
    },
  });
// ✅ окрема функція яку імпортую в операції і тепер використовую замість феч: fetch("/data/projectProductsTable.json");
export const getProductsFile = () => {
  const lang = i18n.language;

  if (lang === "it") return "/data/projectProductsTable.it.json";
  if (lang === "pl") return "/data/projectProductsTable.pl.json";

  return "/data/projectProductsTable.en.json";
};

// ✅ default лишається один

export default i18n;
