'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '@/context/I18nContext';

export default function ImpactPage() {
  const { t } = useI18n();

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-600 to-emerald-600">
        <div className="max-w-7xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold mb-4">{t('impact.title')}</h1>
            <p className="text-xl text-green-100">{t('impact.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: '👥',
                metric: '50K+',
                label: 'Emplois Créés',
                change: '+320% Y/Y',
              },
              {
                icon: '👩',
                metric: '35%',
                label: 'Femmes Agents',
                change: '+45% Y/Y',
              },
              {
                icon: '👶',
                metric: '18K+',
                label: 'Jeunes Employés',
                change: '+210% Y/Y',
              },
              {
                icon: '💰',
                metric: '$85M',
                label: 'Revenus Générés',
                change: '+380% Y/Y',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                  {item.metric}
                </div>
                <p className="text-slate-900 dark:text-white font-semibold mb-2">{item.label}</p>
                <p className="text-sm text-green-700 dark:text-green-300">{item.change}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Creation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Création d'Emplois
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Transformation de l'économie informelle vers l'emploi formel et protégé
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              { country: 'RDC', jobs: 18000, percentage: 45, icon: '🇨🇩' },
              { country: 'Rwanda', jobs: 12000, percentage: 25, icon: '🇷🇼' },
              { country: 'Kenya', jobs: 11000, percentage: 18, icon: '🇰🇪' },
              { country: 'Tanzanie', jobs: 5000, percentage: 8, icon: '🇹🇿' },
              { country: 'Ouganda', jobs: 4000, percentage: 4, icon: '🇺🇬' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">{item.country}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{item.jobs} emplois</p>
                    </div>
                  </div>
                  <span className="text-2xl font-bold text-green-600">{item.percentage}%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className="bg-gradient-to-r from-green-500 to-emerald-500 h-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: idx * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Women Empowerment */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              👩 Autonomisation des Femmes
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              35% de nos agents sont des femmes avec des revenus stables et des opportunités de carrière
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                stat: '12K+',
                title: 'Femmes Agents',
                description: 'Prestataires formées et certifiées',
              },
              {
                stat: '↑45%',
                title: 'Croissance Y/Y',
                description: 'Augmentation des femmes entrepreneures',
              },
              {
                stat: '$450',
                title: 'Revenu Moyen/Mois',
                description: 'vs $80 secteur informel moyenne',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-xl bg-pink-50 dark:bg-pink-900/20 border border-pink-200 dark:border-pink-800 text-center"
              >
                <div className="text-5xl font-bold text-pink-600 dark:text-pink-400 mb-3">
                  {item.stat}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Youth Employment */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              👶 Emploi des Jeunes
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              18K+ jeunes (18-35 ans) ont accès à leur premier emploi formel
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Premier Emploi Formel',
                description:
                  'Accès à un emploi structuré avec contrat et protections légales',
                icon: '📋',
              },
              {
                title: 'Développement de Compétences',
                description: 'Formation professionnelle et certification continue',
                icon: '📚',
              },
              {
                title: 'Revenus Stables',
                description: 'Revenus prévisibles et protection sociale progressive',
                icon: '💼',
              },
              {
                title: 'Mobilité Sociale',
                description: 'Progression vers des rôles de management et supervision',
                icon: '📈',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-xl bg-white dark:bg-slate-900 shadow-lg border-l-4 border-blue-600"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Urban Hygiene Impact */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              🏥 Hygiène Urbaine
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Services de nettoyage et gestion des déchets professionnels
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                {
                  title: 'Réduction des Risques Sanitaires',
                  description: 'Services de nettoyage réguliers et hygiéniques',
                },
                {
                  title: 'Gestion Responsable des Déchets',
                  description: 'Collecte et traitement respectueux de l\'environnement',
                },
                {
                  title: 'Amélioration de l\'Image Urbaine',
                  description: 'Villes plus propres et agréables à vivre',
                },
                {
                  title: 'Impact Environnemental',
                  description: 'Réduction de la pollution et des risques écologiques',
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    ✓ {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 text-center"
            >
              <div className="text-6xl mb-4">🌍</div>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
                50M+ m² nettoyés
              </p>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Depuis le lancement de LIBOSO
              </p>
              <div className="text-lg font-semibold text-slate-900 dark:text-white">
                Impact: Villes plus saines, communautés plus sûres
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SDG Alignment */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Alignement ODD
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              LIBOSO contribue aux 17 Objectifs de Développement Durable des Nations Unies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: '1', title: 'Pas de Pauvreté', color: 'from-red-500 to-red-600' },
              { num: '5', title: 'Égalité des Genres', color: 'from-red-500 to-red-600' },
              { num: '8', title: 'Travail Décent', color: 'from-red-500 to-red-600' },
              { num: '9', title: 'Industrie & Innovation', color: 'from-orange-500 to-orange-600' },
              { num: '10', title: 'Inégalités Réduites', color: 'from-red-500 to-red-600' },
              { num: '12', title: 'Consommation Durable', color: 'from-orange-500 to-orange-600' },
            ].map((sdg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-6 rounded-xl bg-gradient-to-br ${sdg.color} text-white text-center`}
              >
                <div className="text-4xl font-bold mb-2">SDG {sdg.num}</div>
                <p className="font-semibold">{sdg.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
