"use client";

import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex gap-1 rounded-xl border border-slate-200 p-1 dark:border-slate-700">
      <Button variant={locale === "fr" ? "default" : "ghost"} size="sm" onClick={() => setLocale("fr")}>FR</Button>
      <Button variant={locale === "en" ? "default" : "ghost"} size="sm" onClick={() => setLocale("en")}>EN</Button>
    </div>
  );
}
