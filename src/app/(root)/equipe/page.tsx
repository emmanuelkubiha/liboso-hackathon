'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TEAM } from '@/data/mock';
import { useI18n } from '@/context/I18nContext';
import { UserRound } from 'lucide-react';

export default function TeamPage() {
  const { t } = useI18n();

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold mb-4">{t('team.title')}</h1>
            <p className="text-xl text-purple-100">{t('team.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {TEAM.map((member, idx) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow"
              >
                <div className="relative h-80 bg-gradient-to-br from-blue-500 to-indigo-600 overflow-hidden flex items-center justify-center">
                  <div className="w-44 h-44 rounded-full bg-white/20 border border-white/40 backdrop-blur flex items-center justify-center">
                    <UserRound className="w-24 h-24 text-white" />
                  </div>
                  <div className="absolute bottom-4 px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-white text-xs font-semibold tracking-wide">
                    Profil féminin
                  </div>
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                <div className="p-8 bg-white dark:bg-slate-800">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-lg text-purple-600 dark:text-purple-400 font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="p-2 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition text-lg"
                    >
                      in
                    </a>
                    <a
                      href="#"
                      className="p-2 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition text-lg"
                    >
                      𝕏
                    </a>
                    <a
                      href="#"
                      className="p-2 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition text-lg"
                    >
                      gh
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Team Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-8 rounded-xl bg-slate-50 dark:bg-slate-800"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              L'Équipe LIBOSO
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Notre équipe réunit des experts en technologie, opérations et impact social. Avec plus de 40 ans d'expérience
              combinée en Afrique, nous sommes passionnés par la transformation des services urbains et l'inclusion économique.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Conseil Consultatif
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Guidés par les meilleures pratiques et expertise mondiale
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Dr. Jean Mulumba',
                role: 'Expert Économie Informelle',
                org: 'Université Officielle de Kinshasa',
              },
              {
                name: 'Susan Kariuki',
                role: 'Experte Paiements Mobiles',
                org: 'East Africa FinTech Alliance',
              },
              {
                name: 'Paul Kasonde',
                role: 'Stratège Développement',
                org: 'African Development Bank',
              },
            ].map((advisor, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-xl bg-white dark:bg-slate-900 shadow-lg text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  {advisor.name}
                </h3>
                <p className="text-purple-600 dark:text-purple-400 font-semibold text-sm mb-2">
                  {advisor.role}
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{advisor.org}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* We're Hiring */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Rejoignez-Nous</h2>
            <p className="text-2xl text-purple-100 mb-8">
              Nous recrutons pour transformer l'Afrique
            </p>
            <a
              href="mailto:jobs@liboso.com"
              className="inline-flex px-8 py-3 bg-white text-indigo-600 font-bold rounded-lg hover:bg-purple-50 transition-colors"
            >
              Voir les Offres d'Emploi
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
