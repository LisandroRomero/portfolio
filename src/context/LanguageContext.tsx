import  { useState, type PropsWithChildren } from "react";
import { LanguageContext } from "./languageContext";
import { es } from "../i18n/es";
import { en } from "../i18n/en";

export const LanguageProvider = ({ children }:PropsWithChildren) => {
  const [lang, setLang] = useState("es");

  const translations = lang === "es" ? es : en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};