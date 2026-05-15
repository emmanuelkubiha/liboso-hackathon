"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { COPY, Locale } from "@/lib/site-data";

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === "undefined") {
      return "fr";
    }

    const savedLocale = window.localStorage.getItem("liboso-locale");
    return savedLocale === "en" ? "en" : "fr";
  });

  const value = useMemo(
    () => ({
      locale,
      setLocale: (value: Locale) => {
        window.localStorage.setItem("liboso-locale", value);
        setLocale(value);
      },
    }),
    [locale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return {
    ...context,
    t: COPY[context.locale],
  };
}
