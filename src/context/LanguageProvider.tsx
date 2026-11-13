import { useEffect, useState, type PropsWithChildren } from "react";
import { LanguageContext, type Lang } from "./languageContext";
import { es } from "../i18n/es";
import { en } from "../i18n/en";

const STORAGE_KEY = "lang";

const isLang = (value: unknown): value is Lang =>
  value === "es" || value === "en";

// 1) idioma elegido antes por el usuario, 2) idioma del navegador, 3) español
const getInitialLang = (): Lang => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (isLang(stored)) return stored;
  } catch {
    // localStorage puede no estar disponible (modo privado, cookies bloqueadas)
  }
  return navigator.language?.toLowerCase().startsWith("es") ? "es" : "en";
};

export const LanguageProvider = ({ children }: PropsWithChildren) => {
  const [lang, setLang] = useState<Lang>(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignorar: el sitio funciona igual sin persistencia
    }
  }, [lang]);

  const translations = lang === "es" ? es : en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};
