"use client";

import { useLanguage } from "@/components/language-provider";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-8 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 text-sm text-slate-600 dark:text-slate-300 lg:px-8">
        <p className="font-semibold text-slate-800 dark:text-slate-100">LIBOSO SERVICE</p>
        <p>{t.common.mission}</p>
        <p>© {new Date().getFullYear()} LIBOSO SERVICE · Vercel Ready</p>
      </div>
    </footer>
  );
}
