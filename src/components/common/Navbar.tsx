'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useI18n } from '@/context/I18nContext';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useI18n();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navigation = [
    { name: t('navigation.home'), href: '/' },
    { name: t('navigation.about'), href: '/a-propos' },
    { name: t('navigation.services'), href: '/services' },
    { name: t('navigation.transborder'), href: '/transfrontalier' },
    { name: t('navigation.impact'), href: '/impact' },
    { name: t('navigation.team'), href: '/equipe' },
    { name: t('navigation.reviews'), href: '/avis' },
    { name: t('navigation.contact'), href: '/contact' },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-gradient-to-r from-white via-white to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 border-b border-slate-200 dark:border-slate-700 shadow-lg backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 font-bold text-2xl group">
            <div className="p-2 bg-white rounded-lg border border-slate-200 group-hover:shadow-lg transition">
              <Image
                src="/images/logo-liboso.png"
                alt="Liboso Logo"
                width={28}
                height={28}
                className="w-7 h-7 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-slate-900 dark:text-white leading-tight">LIBOSO</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-normal">SERVICE</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded transition"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
              className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition font-medium text-slate-700 dark:text-slate-300 text-sm"
              title="Toggle language"
            >
              <Globe className="w-4 h-4" />
              <span>
                {language === 'fr' ? '🇫🇷 FR' : '🇬🇧 EN'}
              </span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="hidden sm:flex items-center justify-center p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
              title="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-slate-700" />
              ) : (
                <Sun className="w-5 h-5 text-slate-300" />
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg bg-slate-100 dark:bg-slate-800"
            >
              {isOpen ? (
                <X className="w-5 h-5 text-slate-700 dark:text-slate-300" />
              ) : (
                <Menu className="w-5 h-5 text-slate-700 dark:text-slate-300" />
              )}
            </button>

            {/* CTA Button */}
            <Link
              href="/reservation"
              className="px-4 sm:px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold transition shadow-lg hover:shadow-xl"
            >
              <span className="hidden sm:inline">{t('navigation.bookNow')}</span>
              <span className="sm:hidden">Réserver</span>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/reservation"
              className="block w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-center"
            >
              {t('navigation.bookNow')}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
