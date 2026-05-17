'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { COUNTRIES } from '@/data/mock';
import { useI18n } from '@/context/I18nContext';
import { Globe, Star, BarChart3, Handshake, Smartphone, Plane, MapPin } from 'lucide-react';

export default function TransborderPage() {
  const { t, language } = useI18n();
  const [selectedCountryCode, setSelectedCountryCode] = useState('CD');

  const flagByCode: Record<string, string> = {
    CD: '🇨🇩',
    RW: '🇷🇼',
    KE: '🇰🇪',
    TZ: '🇹🇿',
    UG: '🇺🇬',
  };

  const mapPoints: Array<{ code: string; x: string; y: string }> = [
    { code: 'CD', x: '28%', y: '56%' },
    { code: 'RW', x: '50%', y: '49%' },
    { code: 'UG', x: '58%', y: '42%' },
    { code: 'KE', x: '70%', y: '48%' },
    { code: 'TZ', x: '64%', y: '62%' },
  ];

  const selectedCountry = COUNTRIES.find((country) => country.code === selectedCountryCode) || COUNTRIES[0];

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold mb-4">{t('transborder.title')}</h1>
            <p className="text-xl text-blue-100">
              {t('transborder.subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-8 flex flex-wrap justify-center gap-2"
          >
            {COUNTRIES.map((country, idx) => (
              <span
                key={country.code}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur text-sm font-medium"
              >
                <span>{flagByCode[country.code] || '🏳️'}</span>
                <span className="text-blue-50">{language === 'en' ? country.nameEn : country.name}</span>
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              {t('transborderSection.operationRegion')}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {t('transborderSection.operationRegionDesc')}
            </p>
          </motion.div>

          {/* Map Visualization */}
          <div className="mb-12 p-6 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
            <div className="grid lg:grid-cols-3 gap-5 items-stretch">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2 relative rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 min-h-[320px] overflow-hidden"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(59,130,246,0.08),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.08),transparent_45%)]" />
                <div className="absolute top-[46%] left-[30%] w-[22%] h-[2px] bg-purple-400/40" />
                <div className="absolute top-[48%] left-[52%] w-[18%] h-[2px] bg-purple-400/40" />
                <div className="absolute top-[50%] left-[60%] w-[8%] h-[2px] bg-purple-400/40 rotate-[28deg]" />

                {mapPoints.map((point, idx) => {
                  const country = COUNTRIES.find((item) => item.code === point.code);
                  const isActive = selectedCountryCode === point.code;

                  return (
                    <motion.button
                      key={point.code}
                      type="button"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.08 }}
                      onClick={() => setSelectedCountryCode(point.code)}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full px-2.5 py-1.5 border text-sm shadow transition ${
                        isActive
                          ? 'bg-purple-600 text-white border-purple-500'
                          : 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-slate-300 dark:border-slate-600 hover:border-purple-400'
                      }`}
                      style={{ left: point.x, top: point.y }}
                      aria-label={country ? (language === 'en' ? country.nameEn : country.name) : point.code}
                    >
                      <span>{flagByCode[point.code] || '🏳️'}</span>
                    </motion.button>
                  );
                })}

                <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-500 dark:text-slate-400 bg-white/70 dark:bg-slate-900/70 backdrop-blur rounded-lg px-3 py-2 border border-slate-200 dark:border-slate-700">
                  {language === 'en'
                    ? 'Click a marker to explore each country role in the transborder network.'
                    : 'Cliquez sur un marqueur pour voir le rôle de chaque pays dans le réseau transfrontalier.'}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 p-5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-full bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center text-xl">
                    {flagByCode[selectedCountry.code] || '🏳️'}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {language === 'en' ? selectedCountry.nameEn : selectedCountry.name}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{selectedCountry.currency}</p>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    {selectedCountry.role === 'strategic' ? <Star className="w-4 h-4 text-green-500" /> : selectedCountry.role === 'main' ? <BarChart3 className="w-4 h-4 text-blue-500" /> : <Handshake className="w-4 h-4 text-orange-500" />}
                    <span className="font-medium">
                      {selectedCountry.role === 'strategic'
                        ? t('transborderSection.strategicHub')
                        : selectedCountry.role === 'main'
                          ? t('transborderSection.mainMarket')
                          : t('transborderSection.partner')}
                    </span>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 leading-relaxed">
                    {t('transborderSection.mapDesc')}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Countries Grid */}
          <div className="grid md:grid-cols-5 gap-4">
            {COUNTRIES.map((country, idx) => (
              <motion.div
                key={country.code}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-6 rounded-xl text-center ${
                  country.role === 'strategic'
                    ? 'bg-green-100 dark:bg-green-900/30 border-2 border-green-600'
                    : country.role === 'main'
                      ? 'bg-blue-100 dark:bg-blue-900/30 border-2 border-blue-600'
                      : 'bg-orange-100 dark:bg-orange-900/30 border-2 border-orange-600'
                }`}
              >
                <div className="mb-3 flex justify-center">
                  <span className="text-3xl">{flagByCode[country.code] || '🏳️'}</span>
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">{country.name}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{country.currency}</p>
                <span className="text-xs font-semibold flex items-center gap-1.5">
                  {country.role === 'strategic'
                    ? <>
                        <Star className="w-4 h-4" /> {t('transborderSection.strategicHub')}
                      </>
                    : country.role === 'main'
                      ? <>
                        <BarChart3 className="w-4 h-4" /> {t('transborderSection.mainMarket')}
                      </>
                      : <>
                        <Handshake className="w-4 h-4" /> {t('transborderSection.partner')}
                      </>}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              {t('transborderSection.strategicPosition')}
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                country: '🇷🇼 Rwanda',
                role: 'Hub Technologique',
                description: 'Centre de technologie et innovation régional',
                highlights: ['Infrastructure digitale', 'Centre de données', 'Innovation hub'],
              },
              {
                country: '🇨🇩 RDC',
                role: 'Marché Principal',
                description: '80M habitants, plus grand marché de la région',
                highlights: ['80% secteur informel', '50M+ urbains', 'Urgence de formalisation'],
              },
              {
                country: '🇰🇪 Kenya',
                role: 'Partenaire Régional',
                description: 'Porte vers l\'Afrique de l\'Est',
                highlights: ['PayTech leader', 'Innovation hub', 'Intégration M-Pesa'],
              },
              {
                country: '🇹🇿 Tanzanie',
                role: 'Expansion',
                description: 'Marché croissant et opportunités',
                highlights: ['Mobilité croissante', 'Digitalisation rapide', 'M-Pesa intégration'],
              },
              {
                country: '🇺🇬 Ouganda',
                role: 'Partenaire Régional',
                description: 'Intégration à la communauté est-africaine',
                highlights: ['Mobilité régionale', 'Services urbains', 'Partenariats'],
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-xl border-l-4 border-purple-600 bg-white dark:bg-slate-900 shadow-lg"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {item.country}
                    </h3>
                    <p className="text-lg text-purple-600 dark:text-purple-400 font-semibold">
                      {item.role}
                    </p>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-4">{item.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {item.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Connectivity */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              {t('transborderSection.interconnection')}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {t('transborderSection.interconnectionDesc')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Plane,
                title: 'Mobilité des Agents',
                description: 'Agents certifiés pouvant travailler dans plusieurs pays',
              },
              {
                icon: Smartphone,
                title: 'Paiement Mobile Unifié',
                description: 'Intégration multi-devise et multi-opérateurs',
              },
              {
                icon: Globe,
                title: 'Plateforme Commune',
                description: 'Une seule plateforme pour accéder à tous les services',
              },
              {
                icon: Handshake,
                title: 'Partenariats Régionaux',
                description: 'Collaboration entre pays et organisations locales',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20"
                >
                  <div className="mb-4"><Icon className="w-12 h-12 text-purple-600 dark:text-purple-400" /></div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Vision 2030</h2>
            <p className="text-xl text-pink-100 mb-8">
              Un réseau interconnecté de 100M+ utilisateurs, 500k+ agents certifiés, opérant dans 15 pays africains
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-left">
              {[
                { metric: '100M+', label: 'Utilisateurs' },
                { metric: '500K+', label: 'Agents' },
                { metric: '15', label: 'Pays' },
              ].map((item, idx) => (
                <div key={idx} className="p-4 bg-white/10 backdrop-blur rounded-lg">
                  <div className="text-3xl font-bold">{item.metric}</div>
                  <div className="text-pink-100">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
