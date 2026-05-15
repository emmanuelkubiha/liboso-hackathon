'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ServiceCard } from '@/components/common/ServiceCard';
import { SERVICES } from '@/data/mock';
import { useI18n } from '@/context/I18nContext';

export default function ServicesPage() {
  const { t } = useI18n();

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold mb-4">{t('services.title')}</h1>
            <p className="text-xl text-blue-100">{t('services.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="sticky top-20 z-40 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex gap-2 overflow-x-auto pb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <button className="px-4 py-2 bg-blue-600 text-white rounded-full whitespace-nowrap">
              Tous
            </button>
            {['Nettoyage', 'Mobilité', 'Environnement', 'Maintenance'].map((cat) => (
              <button
                key={cat}
                className="px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white rounded-full whitespace-nowrap hover:bg-slate-200 dark:hover:bg-slate-600 transition"
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <ServiceCard key={service.id} service={service} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Pourquoi Choisir LIBOSO?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Nos services sont conçus pour être accessibles, fiables et de qualité premium
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: '⭐',
                title: 'Agents Vérifiés',
                description: 'Tous nos agents sont vérifiés et certifiés',
              },
              {
                icon: '💰',
                title: 'Prix Transparents',
                description: 'Aucun frais caché, tarification claire',
              },
              {
                icon: '📍',
                title: 'Suivi en Temps Réel',
                description: 'Localisez votre agent en direct',
              },
              {
                icon: '⭐',
                title: 'Notation 5★',
                description: 'Évaluation qualité par les clients',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800 text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Agents */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Agents Top Rated
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Nos meilleurs prestataires à votre service
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Jean Paul Mukala',
                rating: 4.9,
                jobs: 245,
                specialty: 'Nettoyage Premium',
              },
              {
                name: 'Marie Nsabire',
                rating: 4.8,
                jobs: 189,
                specialty: 'Lavage Auto Détail',
              },
              {
                name: 'David Mmeka',
                rating: 4.7,
                jobs: 156,
                specialty: 'Gestion Environnement',
              },
            ].map((agent, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-xl bg-white dark:bg-slate-900 shadow-lg"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-400 to-blue-600" />
                <h3 className="text-lg font-bold text-center text-slate-900 dark:text-white mb-2">
                  {agent.name}
                </h3>
                <p className="text-center text-sm text-blue-600 dark:text-blue-400 mb-4">
                  {agent.specialty}
                </p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-yellow-500">⭐ {agent.rating}</span>
                  <span className="text-slate-600 dark:text-slate-400">{agent.jobs} tâches</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
