import fr from './fr.json';
import en from './en.json';

export type Language = 'fr' | 'en';

export const translations = { fr, en };

export const defaultLanguage: Language = 'fr';

export const getTranslation = (lang: Language, key: string): string => {
  const keys = key.split('.');
  let current: any = translations[lang];
  
  for (const k of keys) {
    current = current?.[k];
  }
  
  return current || key;
};
