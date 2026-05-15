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

/**
 * HomePage - Page d'accueil principale LIBOSO SERVICE
 * 
 * Rôle: Showcase de la plateforme avec sections:
 * - Hero animé avec CTA
 * - Problème/Solution 
 * - Stats d'impact
 * - Services disponibles
 * - Méthodes de paiement
 * - CTA conversion
 * 
 * Route: / (nécessite layout wrapper (root))
 */
export default function HomePage() {
  const { t } = useI18n();

  return (
    <div className="pt-16">
      {/* Hero Section - Appel à l'action principal */}
      <Hero
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        description={t('hero.description')}
        cta1Text={t('hero.cta1')}
        cta1Link="/services"
        cta2Text={t('hero.cta2')}
        cta2Link="/contact"
      />

      {/* Problem Section - Contexte du marché africain */}
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

          {/* Problèmes identifiés avec icônes */}
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

      {/* Solution Section - Notre approche */}
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

          {/* Piliers de la solution */}
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

      {/* Process Section - Comment ça marche */}
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

          {/* Étapes du processus */}
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

      {/* Stats Section - Impact metrics */}
      <Stats
        title="Notre Impact"
        stats={[
          { value: '1,200+', label: 'Agents Certifiés', icon: Users },
          { value: '50K+', label: 'Réservations', icon: Clipboard },
          { value: '5', label: 'Pays Couverts', icon: Globe },
          { value: '$2.5M', label: 'Revenus Générés', icon: DollarSign },
        ]}
      />

      {/* Services Preview - Aperçu des services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-2 text-slate-900 dark:text-white">
              Nos Services
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8">
              Découvrez notre gamme complète de services urbains professionnels
            </p>
          </motion.div>

          {/* Grille de services (premiers 6) */}
          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.slice(0, 6).map((service, idx) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={idx}
              />
            ))}
          </div>

          {/* CTA vers tous les services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition"
            >
              Voir tous nos services
            </a>
          </motion.div>
        </div>
      </section>

      {/* Payments Section - Méthodes de paiement */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Modes de Paiement Flexibles
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Paiez comme vous préférez. Sécurisé et instantané.
            </p>
          </motion.div>

          {/* Grille de moyens de paiement */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Smartphone, name: 'Airtel Money', description: 'Paiement mobile sécurisé' },
              { icon: DollarSign, name: 'M-Pesa', description: 'Transfert d\'argent fluide' },
              { icon: DollarSign, name: 'Orange Money', description: 'Paiement par SMS' },
              { icon: DollarSign, name: 'Visa/Mastercard', description: 'Cartes internationales' },
              { icon: DollarSign, name: 'POS Terminal', description: 'Point de vente physique' },
              { icon: DollarSign, name: 'Cashless Bank', description: 'Compte sans banque' },
            ].map((payment, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800 text-center hover:shadow-lg transition"
              >
                <payment.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">
                  {payment.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {payment.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final Section - Appel à l'action final */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Prêt à Rejoindre la Révolution?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Rejoignez des milliers de clients satisfaits et d'agents certifiés à travers l'Afrique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/booking"
                className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-slate-100 transition"
              >
                Commencer une réservation
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition"
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
