import type React from "react";
import { createContext, useContext } from "react";
import type { Translations } from "../i18n/types";

export type Lang = "es" | "en";

export interface LanguageContextValue {
  lang: Lang;
  setLang: React.Dispatch<React.SetStateAction<Lang>>;
  translations: Translations;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
