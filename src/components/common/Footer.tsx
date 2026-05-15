'use client';

import React from 'react';
import Link from 'next/link';
import { useI18n } from '@/context/I18nContext';

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-slate-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">LIBOSO</h3>
            <p className="text-slate-300 text-sm">{t('footer.description')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-slate-300 hover:text-white transition">
                  {t('navigation.home')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white transition">
                  {t('navigation.about')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-300 hover:text-white transition">
                  {t('navigation.services')}
                </Link>
              </li>
              <li>
                <Link href="/transborder" className="text-slate-300 hover:text-white transition">
                  {t('navigation.transborder')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/impact" className="text-slate-300 hover:text-white transition">
                  {t('navigation.impact')}
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-slate-300 hover:text-white transition">
                  {t('navigation.team')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white transition">
                  {t('navigation.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition">
                  {t('footer.privacy')}
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition">
                  {t('footer.terms')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <p className="text-center text-slate-400 text-sm">
            © 2026 LIBOSO SERVICE. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
