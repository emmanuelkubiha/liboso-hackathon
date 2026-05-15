"use client";

import Link from "next/link";
import { NAV_LINKS } from "@/lib/site-data";
import { useLanguage } from "@/components/language-provider";
import { LanguageToggle } from "@/components/language-toggle";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <Link href="/" className="text-lg font-bold tracking-tight text-[#0D1B3D] dark:text-emerald-300">
          LIBOSO SERVICE
        </Link>
        <nav className="hidden items-center gap-4 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-700 transition hover:text-[#F97316] dark:text-slate-300 dark:hover:text-orange-300">
              {t.nav[link.key as keyof typeof t.nav]}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
