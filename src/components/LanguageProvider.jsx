"use client";

import { createContext, useContext, useEffect, useState } from "react";

const LangContext = createContext();

export const useLang = () => useContext(LangContext);

export default function LanguageProvider({ children }) {
  const [lang, setLang] = useState("fr");

  // Charger depuis localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem("lang"); 
    if (saved === "fr" || saved === "en") {
      setLang(saved);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}
