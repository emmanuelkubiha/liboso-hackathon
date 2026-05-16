'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { COUNTRIES } from '@/data/mock';
import { useI18n } from '@/context/I18nContext';
import { Globe, Star, BarChart3, Handshake, Smartphone, Plane } from 'lucide-react';

export default function TransborderPage() {
  const { t } = useI18n();

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold mb-4">Réseau Transfrontalier Africain</h1>
            <p className="text-xl text-pink-100">
              Connecter les services urbains à travers l'Afrique de l'Est
            </p>
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
              Notre Région d'Opération
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              5 pays africains, 1 vision commune : formaliser les services urbains
            </p>
          </motion.div>

          {/* Map Visualization */}
          <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 min-h-96 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-4"><Globe className="w-16 h-16 mx-auto text-purple-600" /></div>
              <p className="text-xl font-semibold text-slate-900 dark:text-white">
                Carte interactive des pays (Intégration future)
              </p>
              <p className="text-slate-600 dark:text-slate-400 mt-2">
                5 pays - 15M+ habitants - Écosystème commun
              </p>
            </motion.div>
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
                <div className="text-4xl mb-3">{['🇨🇩', '🇷🇼', '🇰🇪', '🇹🇿', '🇺🇬'][idx]}</div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">{country.name}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{country.currency}</p>
                <span className="text-xs font-semibold flex items-center gap-1.5">
                  {country.role === 'strategic'
                    ? <>
                        <Star className="w-4 h-4" /> Hub Stratégique
                      </>
                    : country.role === 'main'
                      ? <>
                        <BarChart3 className="w-4 h-4" /> Marché Principal
                      </>
                      : <>
                        <Handshake className="w-4 h-4" /> Partenaire
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
              Positionnement Stratégique
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
              Interconnexion Régionale
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Mobilité transfrontalière des agents et services
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
