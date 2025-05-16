import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./i18n/en.json";
import zh from "./i18n/zh.json";

const resources = {
  en: {
    translation: en,
  },
  zh: {
    translation: zh,
  },
};

i18next
.use(initReactI18next)
.init({
  lng: "en",
  fallbackLng: "en",
  resources,
  interpolation: {
    escapeValue: false, // React already does escaping
  },
});