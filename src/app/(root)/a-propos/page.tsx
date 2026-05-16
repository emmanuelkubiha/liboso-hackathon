'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '@/context/I18nContext';
import { Target, Rocket, Wrench, TrendingUp, Cpu, Globe, Users, Baby, Heart, Leaf, Handshake } from 'lucide-react';

export default function AboutPage() {
  const { t } = useI18n();

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold mb-4">{t('about.title')}</h1>
            <p className="text-xl text-blue-100">
              Comprendre notre mission et vision pour l'Afrique
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
                Notre Mission
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                {t('about.mission')}
              </p>
              <div className="mt-6 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-lg font-semibold text-blue-900 dark:text-blue-300 flex items-center gap-2">
                  <Target className="w-5 h-5" /> Structurer et sécuriser par la technologie
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
                Notre Vision
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                {t('about.vision')}
              </p>
              <div className="mt-6 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <p className="text-lg font-semibold text-green-900 dark:text-green-300 flex items-center gap-2">
                  <Globe className="w-5 h-5" /> Créer un réseau africain transfrontalier
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Context */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Le Contexte Africain
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Comprendre les enjeux qui motivent LIBOSO
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: 'Users',
                stat: '80%',
                title: 'Économie Informelle',
                description: 'Des travailleurs en RDC opèrent dans le secteur informel',
              },
              {
                icon: 'Rocket',
                stat: 'Rapide',
                title: 'Urbanisation Rapide',
                description: 'Croissance urbaine accélérée en Afrique de l\'Est',
              },
              {
                icon: 'Wrench',
                stat: 'Urgent',
                title: 'Besoin de Structure',
                description: 'Professionnalisation et formalisation urgente',
              },
              {
                icon: 'Cpu',
                stat: 'Digitale',
                title: 'Innovation Digitale',
                description: 'La technologie comme catalyseur de changement',
              },
            ].map((item, idx) => {
              const IconComponents = { Users, Rocket, Wrench, Cpu };
              const Icon = IconComponents[item.icon as keyof typeof IconComponents];
              return <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-xl bg-white dark:bg-slate-900 shadow-lg"
              >
                <div className="text-5xl mb-4">{Icon && <Icon className="w-12 h-12 text-blue-600 dark:text-blue-400" />}</div>
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {item.stat}
                </h3>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
              </motion.div>;
            })}
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Nos Domaines d'Impact
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                icon: Baby,
                title: 'Inclusion des Jeunes',
                description: 'Accès aux premiers emplois formels et développement de compétences',
              },
              {
                icon: Heart,
                title: 'Autonomisation des Femmes',
                description: 'Opportunités entrepreneuriales et indépendance économique',
              },
              {
                icon: Wrench,
                title: 'Hygiène Urbaine',
                description: 'Services professionnels de nettoyage et gestion des déchets',
              },
              {
                icon: Leaf,
                title: 'Durabilité',
                description: 'Services écologiques et responsabilité environnementale',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-lg border-l-4 border-blue-600 bg-slate-50 dark:bg-slate-800"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Icon className="w-6 h-6 text-blue-600" />
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-lg">{item.description}</p>
              </motion.div>
            );})}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 text-white"
          >
            <h2 className="text-4xl font-bold mb-4">Nos Valeurs</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Handshake',
                title: 'Confiance',
                description: 'Transparence et intégrité en toutes choses',
              },
              {
                icon: 'Rocket',
                title: 'Innovation',
                description: 'Solutions technologiques créatives et durables',
              },
              {
                icon: 'Globe',
                title: 'Impact Social',
                description: 'Créer de la valeur pour tous les acteurs',
              },
            ].map((item, idx) => {
              const IconComponent = { Handshake, Rocket, Globe }[item.icon] || Rocket;
              return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-xl bg-white/10 backdrop-blur border border-white/20 text-white text-center"
              >
                <div className="mb-4"><IconComponent className="w-12 h-12 mx-auto" /></div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/80">{item.description}</p>
              </motion.div>
            );})}
          </div>
        </div>
      </section>
    </div>
  );
}
