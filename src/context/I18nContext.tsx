'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language, defaultLanguage } from '@/lib/i18n/config';
import fr from '@/lib/i18n/fr.json';
import en from '@/lib/i18n/en.json';

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(defaultLanguage);

  const t = (key: string): string => {
    const keys = key.split('.');
    const translations = language === 'fr' ? fr : en;
    let current: any = translations;
    
    for (const k of keys) {
      current = current?.[k];
    }
    
    return current || key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    // Return default values during SSR/pre-rendering
    const t = (key: string): string => {
      const keys = key.split('.');
      let current: any = fr;
      
      for (const k of keys) {
        current = current?.[k];
      }
      
      return current || key;
    };
    
    return {
      language: defaultLanguage,
      setLanguage: () => {},
      t,
    };
  }
  return context;
}
