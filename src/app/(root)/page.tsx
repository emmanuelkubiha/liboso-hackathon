'use client';

import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { Features } from '@/components/sections/Features';
import { ServiceCard } from '@/components/common/ServiceCard';
import { useI18n } from '@/context/I18nContext';
import { SERVICES } from '@/data/mock';
import { motion } from 'framer-motion';
import { AlertCircle, Handshake, Lock, Users, Globe, DollarSign, Smartphone, CheckCircle2, Briefcase, Clipboard, BarChart3 } from 'lucide-react';

export default function HomePage() {
  const { t } = useI18n();

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Hero
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        description={t('hero.description')}
        cta1Text={t('hero.cta1')}
        cta1Link="/services"
        cta2Text={t('hero.cta2')}
        cta2Link="/contact"
      />

      {/* Problem Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Le Problème
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              80% des travailleurs en RDC opèrent dans l'économie informelle. L'urbanisation rapide crée une demande croissante de services urbains profesionnels, fiables et sécurisés.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: AlertCircle,
                title: 'Manque de Formalisation',
                description: 'Services urbains non structurés et peu régulés',
              },
              {
                icon: Handshake,
                title: 'Manque de Confiance',
                description: 'Difficultés à trouver des prestataires de qualité',
              },
              {
                icon: BarChart3,
                title: 'Impact Social Limité',
                description: 'Économie informelle sans protection ni avantages',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800"
              >
                <item.icon className="w-10 h-10 text-slate-700 dark:text-slate-300 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Notre Solution : LIBOSO</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Une plateforme digitale qui formalise, connecte et sécurise les services urbains en Afrique
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: CheckCircle2,
                title: 'Formalisation',
                description: 'Structuration des prestataires et professionnalisation des services',
              },
              {
                icon: Lock,
                title: 'Sécurité & Confiance',
                description: 'Vérification d\'identité et système de notation transparent',
              },
              {
                icon: Briefcase,
                title: 'Professionnalisation',
                description: 'Formation, certification et outils de gestion professionnels',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-xl bg-blue-500/20 backdrop-blur border border-white/20 text-white"
              >
                <item.icon className="w-10 h-10 text-white mb-4" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-blue-100">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Comment Ça Marche
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Un processus simple et sécurisé en 4 étapes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              { step: '1', title: 'Sélectionner', description: 'Choisir un service' },
              { step: '2', title: 'Localiser', description: 'Indiquer votre adresse' },
              { step: '3', title: 'Payer', description: 'Paiement mobile sécurisé' },
              { step: '4', title: 'Profiter', description: 'Évaluer le service' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-8 -right-8 w-8 h-1 bg-blue-600" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats
        title="Notre Impact"
        stats={[
          { value: '1,200+', label: 'Agents Certifiés', icon: Users },
          { value: '50K+', label: 'Réservations', icon: '📋' },
          { value: '5', label: 'Pays Couverts', icon: Globe },
          { value: '$2.5M', label: 'Revenus Générés', icon: DollarSign },
        ]}
      />

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-2 text-slate-900 dark:text-white">
              {t('services.title')}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              {t('services.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0, 6).map((service, idx) => (
              <ServiceCard key={service.id} service={service} index={idx} />
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <a
              href="/services"
              className="inline-flex px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors"
            >
              Voir Tous les Services →
            </a>
          </motion.div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-2 text-slate-900 dark:text-white">
              {t('payments.title')}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {t('payments.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Smartphone, name: 'Airtel Money', description: 'Paiement mobile sécurisé' },
              { icon: '💳', name: 'M-Pesa', description: 'Service de paiement rapide' },
              { icon: '🟠', name: 'Orange Money', description: 'Paiement approuvé' },
              { icon: DollarSign, name: 'Visa/Mastercard', description: 'Cartes internationales' },
              { icon: '🏦', name: 'POS', description: 'Terminal de paiement' },
              { icon: '📲', name: 'Sans Contact', description: 'Paiement instantané' },
            ].map((method, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {method.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Prêt à Commencer?</h2>
            <p className="text-xl text-green-100 mb-8">
              Rejoignez la révolution des services urbains africains
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="/booking"
                className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Réserver Maintenant
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
              >
                Nous Contacter
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
