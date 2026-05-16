'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { ServiceCard } from '@/components/common/ServiceCard';
import { useI18n } from '@/context/I18nContext';
import { SERVICES } from '@/data/mock';
import { motion } from 'framer-motion';
import {
  AlertCircle,
  Handshake,
  Smartphone,
  DollarSign,
  CreditCard,
  Search,
  MapPin,
  Check,
  Users,
  TrendingUp,
  CircleCheck,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Lock,
  Briefcase,
  BarChart3,
} from 'lucide-react';

export default function HomePage() {
  const { t } = useI18n();
  const [selectedCountry, setSelectedCountry] = useState<null | {
    key: string;
    flag: string;
    x: string;
    y: string;
  }>(null);
  const [activeProblem, setActiveProblem] = useState<number | null>(null);

  const availabilityPoints = [
    { key: 'drcEast', flag: '🇨🇩', x: '42%', y: '48%' },
    { key: 'rwanda', flag: '🇷🇼', x: '56%', y: '36%' },
    { key: 'burundi', flag: '🇧🇮', x: '58%', y: '52%' },
    { key: 'uganda', flag: '🇺🇬', x: '50%', y: '60%' },
    { key: 'kenya', flag: '🇰🇪', x: '64%', y: '46%' },
    { key: 'tanzania', flag: '🇹🇿', x: '62%', y: '58%' },
  ] as const;

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
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(239,68,68,0.05)_0%,_transparent_70%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block w-16 h-1 bg-red-500 rounded mb-4"
            />
            <h2 className="text-5xl font-extrabold mb-4 text-slate-900 dark:text-white">
              {t('pages.problemTitle')}
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              {t('pages.problemSubtitle')}
            </p>
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            <p className="text-center text-sm text-slate-500 dark:text-slate-400 mb-8">
              {t('pages.problemClickHint')}
            </p>

            {/* Mobile: stack */}
            <div className="md:hidden space-y-4">
              {[
                {
                  icon: AlertCircle,
                  title: t('pages.problemTimeline.step1Title'),
                  description: t('pages.problemTimeline.step1Desc'),
                },
                {
                  icon: MapPin,
                  title: t('pages.problemTimeline.step2Title'),
                  description: t('pages.problemTimeline.step2Desc'),
                },
                {
                  icon: Handshake,
                  title: t('pages.problemTimeline.step3Title'),
                  description: t('pages.problemTimeline.step3Desc'),
                },
                {
                  icon: BarChart3,
                  title: t('pages.problemTimeline.step4Title'),
                  description: t('pages.problemTimeline.step4Desc'),
                },
              ].map((item, idx) => (
                <motion.button
                  key={idx}
                  type="button"
                  onClick={() => setActiveProblem((prev) => (prev === idx ? null : idx))}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="w-full text-left p-5 rounded-2xl bg-white/90 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-red-600 text-white font-black flex items-center justify-center shrink-0">{idx + 1}</div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <item.icon className="w-5 h-5 text-red-500" />
                        <h3 className="text-lg font-extrabold text-red-600 dark:text-red-400">{item.title}</h3>
                      </div>
                      {activeProblem === idx ? (
                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mt-2 whitespace-pre-line">{item.description}</p>
                      ) : (
                        <p className="text-slate-400 text-sm mt-2">{t('pages.problemReadMore')}</p>
                      )}
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Desktop: superposed model */}
            <div className="hidden md:block relative h-[640px]">
              {[
                {
                  icon: AlertCircle,
                  title: t('pages.problemTimeline.step1Title'),
                  description: t('pages.problemTimeline.step1Desc'),
                  pos: 'top-0 left-8 rotate-[-1.5deg] z-40',
                },
                {
                  icon: MapPin,
                  title: t('pages.problemTimeline.step2Title'),
                  description: t('pages.problemTimeline.step2Desc'),
                  pos: 'top-20 right-8 rotate-[1.2deg] z-30',
                },
                {
                  icon: Handshake,
                  title: t('pages.problemTimeline.step3Title'),
                  description: t('pages.problemTimeline.step3Desc'),
                  pos: 'top-[250px] left-20 rotate-[-1deg] z-20',
                },
                {
                  icon: BarChart3,
                  title: t('pages.problemTimeline.step4Title'),
                  description: t('pages.problemTimeline.step4Desc'),
                  pos: 'top-[340px] right-14 rotate-[1deg] z-10',
                },
              ].map((item, idx) => (
                <motion.button
                  key={idx}
                  type="button"
                  onClick={() => setActiveProblem((prev) => (prev === idx ? null : idx))}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -4, rotate: 0 }}
                  animate={{
                    boxShadow:
                      activeProblem === idx
                        ? '0 22px 50px rgba(239,68,68,0.28)'
                        : '0 10px 26px rgba(0,0,0,0.12)',
                  }}
                  className={`absolute w-[46%] text-left p-6 rounded-2xl bg-white/92 dark:bg-slate-800/92 border border-slate-200 dark:border-slate-700 backdrop-blur transition-all ${item.pos}`}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      animate={activeProblem === idx ? { scale: [1, 1.09, 1] } : { scale: [1, 1.03, 1] }}
                      transition={{ duration: 1.6, repeat: Infinity }}
                      className="w-10 h-10 rounded-full bg-red-600 text-white font-black flex items-center justify-center shrink-0"
                    >
                      {idx + 1}
                    </motion.div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <item.icon className="w-5 h-5 text-red-500" />
                        <h3 className="text-lg font-extrabold text-red-600 dark:text-red-400">{item.title}</h3>
                      </div>

                      {activeProblem === idx ? (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mt-2 whitespace-pre-line"
                        >
                          {item.description}
                        </motion.p>
                      ) : (
                        <p className="text-slate-400 text-sm mt-2">{t('pages.problemReadMore')}</p>
                      )}
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dark Availability Card */}
      <section className="px-4 sm:px-6 lg:px-8 -mt-8 mb-16 relative z-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-2xl p-6 md:p-7"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-emerald-300" />
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold">{t('pages.availabilityDarkTitle')}</h3>
            </div>
            <p className="text-slate-300 mb-5 max-w-3xl text-sm md:text-base">{t('pages.availabilityDarkSubtitle')}</p>

            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-4 relative overflow-hidden min-h-[220px]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(52,211,153,0.18)_0%,_transparent_70%)]" />
                <div className="relative h-full rounded-xl border border-slate-700/70 bg-slate-950/60">
                  {availabilityPoints.map((dot, idx) => (
                    <motion.div
                      key={dot.key}
                      initial={{ scale: 0.8, opacity: 0.7 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.08 }}
                      className="absolute -translate-x-1/2 -translate-y-1/2"
                      style={{ left: dot.x, top: dot.y }}
                    >
                      <button
                        type="button"
                        onClick={() => setSelectedCountry(dot)}
                        className="w-7 h-7 rounded-full bg-slate-900/90 border border-emerald-400/50 hover:border-emerald-300 transition flex items-center justify-center"
                        aria-label={t(`pages.availabilityCountries.${dot.key}`)}
                      >
                        <MapPin className="w-3.5 h-3.5 text-emerald-300" />
                      </button>
                    </motion.div>
                  ))}

                  {selectedCountry && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      className="absolute left-1/2 top-4 -translate-x-1/2 bg-slate-900/95 border border-slate-700 rounded-xl px-4 py-2 text-center shadow-xl"
                    >
                      <div className="flex items-center gap-2 justify-center">
                        <span className="text-lg leading-none">{selectedCountry.flag}</span>
                        <p className="text-sm font-semibold text-slate-100">
                          {t(`pages.availabilityCountries.${selectedCountry.key}`)}
                        </p>
                        <CircleCheck className="w-4 h-4 text-emerald-400" />
                      </div>
                    </motion.div>
                  )}
                </div>
                <p className="relative mt-3 text-xs text-slate-400">{t('pages.availabilityClickHint')}</p>
              </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white mb-16"
          >
            <h2 className="text-5xl font-extrabold mb-4">{t('pages.solutionTitle')}</h2>
            <p className="text-xl max-w-3xl mx-auto text-blue-100">
              {t('pages.solutionSubtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 relative">
            {[
              {
                icon: CheckCircle2,
                title: t('pages.solutionCards.formalization.title'),
                description: t('pages.solutionCards.formalization.description'),
                num: '01',
              },
              {
                icon: Lock,
                title: t('pages.solutionCards.security.title'),
                description: t('pages.solutionCards.security.description'),
                num: '02',
              },
              {
                icon: Briefcase,
                title: t('pages.solutionCards.professionalization.title'),
                description: t('pages.solutionCards.professionalization.description'),
                num: '03',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, type: 'spring', stiffness: 120 }}
                whileHover={{ y: -10, backgroundColor: 'rgba(255,255,255,0.18)' }}
                className="relative p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/25 text-white transition-all group cursor-pointer"
                style={{ boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }}
              >
                <div className="absolute top-5 right-5 text-white/20 text-5xl font-black">{item.num}</div>
                <motion.div
                  animate={{ rotate: [0, 8, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: idx * 0.8 }}
                >
                  <item.icon className="w-12 h-12 text-white mb-5" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-blue-100 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(59,130,246,0.05)_0%,_transparent_70%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-extrabold mb-4 text-slate-900 dark:text-white">
              {t('pages.howItWorksTitle')}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              {t('pages.howItWorksSubtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-5 relative">
            {/* Ligne de connexion */}
            <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 dark:from-blue-900 dark:via-blue-600 dark:to-blue-900" />
            {[
              { step: '1', icon: Search, title: t('pages.howItWorks.step1Title'), description: t('pages.howItWorks.step1Desc') },
              { step: '2', icon: MapPin, title: t('pages.howItWorks.step2Title'), description: t('pages.howItWorks.step2Desc') },
              { step: '3', icon: CreditCard, title: t('pages.howItWorks.step3Title'), description: t('pages.howItWorks.step3Desc') },
              { step: '4', icon: Check, title: t('pages.howItWorks.step4Title'), description: t('pages.howItWorks.step4Desc') },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, type: 'spring', stiffness: 100 }}
                whileHover={{ y: -10, boxShadow: '0 25px 50px rgba(59,130,246,0.15)' }}
                className="relative text-center p-7 rounded-3xl border-2 border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-lg transition-all group cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center text-2xl font-black shadow-lg shadow-blue-500/30"
                >
                  {item.step}
                </motion.div>
                <item.icon className="w-5 h-5 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NOS OBJECTIFS — Section WOW avec photos */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-slate-950 overflow-hidden relative">
        {/* Fond décoratif */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(59,130,246,0.18)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(16,185,129,0.15)_0%,_transparent_60%)]" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Titre animé */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-gradient-to-r from-blue-500 to-green-400 text-transparent bg-clip-text text-sm font-bold tracking-[0.3em] uppercase mb-4"
            >
              {t('pages.objectivesBadge')}
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              {t('pages.objectivesTitleStart')}{' '}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
                {t('pages.objectivesTitleHighlight')}
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              {t('pages.objectivesSubtitle')}
            </p>
          </motion.div>

          {/* 4 cartes photo grandes */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                img: '/images/african-american-woman-with-braided-hair-wearing-cleaner-apron-gloves-celebrating-surprised-amazed-success-with-arms-raised-open-eyes-winner-concept.jpg',
                value: '10 000',
                unit: t('pages.objectiveCards.card1.unit'),
                title: t('pages.objectiveCards.card1.title'),
                desc: t('pages.objectiveCards.card1.desc'),
                gradient: 'from-blue-900/80 via-blue-900/60 to-transparent',
                accent: 'text-blue-300',
                badge: t('pages.objectiveCards.card1.badge'),
              },
              {
                img: '/images/afro-woman-holding-bucket-with-cleaning-items.jpg',
                value: '50%+',
                unit: t('pages.objectiveCards.card2.unit'),
                title: t('pages.objectiveCards.card2.title'),
                desc: t('pages.objectiveCards.card2.desc'),
                gradient: 'from-pink-900/80 via-pink-900/60 to-transparent',
                accent: 'text-pink-300',
                badge: t('pages.objectiveCards.card2.badge'),
              },
              {
                img: '/images/pexels-tima-miroshnichenko-6195953.jpg',
                value: '5',
                unit: t('pages.objectiveCards.card3.unit'),
                title: t('pages.objectiveCards.card3.title'),
                desc: t('pages.objectiveCards.card3.desc'),
                gradient: 'from-green-900/80 via-green-900/60 to-transparent',
                accent: 'text-green-300',
                badge: t('pages.objectiveCards.card3.badge'),
              },
              {
                img: '/images/pexels-gustavo-fring-4920286.jpg',
                value: '0€',
                unit: t('pages.objectiveCards.card4.unit'),
                title: t('pages.objectiveCards.card4.title'),
                desc: t('pages.objectiveCards.card4.desc'),
                gradient: 'from-purple-900/80 via-purple-900/60 to-transparent',
                accent: 'text-purple-300',
                badge: t('pages.objectiveCards.card4.badge'),
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.15, ease: 'easeOut' }}
                whileHover={{ scale: 1.02, y: -6 }}
                className="relative rounded-3xl overflow-hidden cursor-pointer group h-72 md:h-80"
                style={{ boxShadow: '0 25px 60px rgba(0,0,0,0.5)' }}
              >
                {/* Photo fond */}
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Dégradé */}
                <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} group-hover:opacity-90 transition-opacity duration-300`} />
                {/* Badge */}
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 + 0.4 }}
                  className="absolute top-5 left-5 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full"
                >
                  {item.badge}
                </motion.span>
                {/* Contenu */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 + 0.3 }}
                  >
                    <div className={`text-5xl font-black mb-1 ${item.accent}`}>
                      {item.value} <span className="text-2xl font-bold text-white/70">{item.unit}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/75 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-24 overflow-hidden">
                      {item.desc}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bande de raisons animées */}
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: TrendingUp, title: t('pages.objectiveReasons.reason1.title'), desc: t('pages.objectiveReasons.reason1.desc') },
              { icon: Users, title: t('pages.objectiveReasons.reason2.title'), desc: t('pages.objectiveReasons.reason2.desc') },
              { icon: Smartphone, title: t('pages.objectiveReasons.reason3.title'), desc: t('pages.objectiveReasons.reason3.desc') },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -4, backgroundColor: 'rgba(255,255,255,0.08)' }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur transition-all duration-300"
              >
                <item.icon className="w-6 h-6 text-blue-300 mt-0.5" />
                <div>
                  <h4 className="text-white font-bold mb-1">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
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
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold rounded-xl transition-all shadow-lg"
            >
              {t('pages.viewAllServices')} <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Media Showcase */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-6 items-stretch"
          >
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-xl min-h-[260px]">
              <Image
                src="/images/New_liboso_look.jpg"
                alt={t('pages.mediaVisualAlt')}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-xl bg-slate-950 min-h-[260px]">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                controls
              >
                <source src="/images/Short_video_washing_a_carr.MP4" type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
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
              { icon: Smartphone, name: t('payments.methods.airtel'), description: t('pages.paymentCards.airtel') },
              { icon: Smartphone, name: t('payments.methods.mpesa'), description: t('pages.paymentCards.mpesa') },
              { icon: DollarSign, name: t('payments.methods.orange'), description: t('pages.paymentCards.orange') },
              { icon: CreditCard, name: 'Visa/Mastercard', description: t('pages.paymentCards.visa') },
              { icon: CreditCard, name: t('payments.methods.pos'), description: t('pages.paymentCards.pos') },
              { icon: Smartphone, name: t('payments.methods.cashless'), description: t('pages.paymentCards.cashless') },
            ].map((method, idx) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.06, ease: 'easeOut' }}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 text-center hover:shadow-xl border border-slate-200 dark:border-slate-700 transition-all"
                >
                  <div className="text-4xl mb-4 flex justify-center">
                    {typeof Icon === 'string' ? (
                      <span>{Icon}</span>
                    ) : (
                      <Icon className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {method.name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{method.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Availability Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-8 md:p-10 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40">
                <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                {t('pages.availabilityPanel.title')}
              </h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              {t('pages.availabilityPanel.subtitle')}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
            >
              <div className="grid md:grid-cols-3 gap-5 items-center">
                <div className="md:col-span-2">
                  <p className="text-blue-100 text-sm uppercase tracking-wide mb-1">{t('pages.availabilityPanel.mapLabel')}</p>
                  <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                    <Sparkles className="w-6 h-6" /> {t('pages.availabilityPanel.liveCoverage')}
                  </h3>
                  <p className="text-blue-100">
                    {t('pages.availabilityPanel.description')}
                  </p>
                </div>
                <div className="flex gap-3 md:justify-end">
                  <div className="px-4 py-3 rounded-xl bg-white/15 border border-white/20 text-center min-w-[88px]">
                    <p className="text-2xl font-bold">5+</p>
                    <p className="text-xs text-blue-100">{t('pages.availabilityPanel.countries')}</p>
                  </div>
                  <div className="px-4 py-3 rounded-xl bg-white/15 border border-white/20 text-center min-w-[88px]">
                    <p className="text-2xl font-bold">24/7</p>
                    <p className="text-xs text-blue-100">{t('pages.availabilityPanel.availability')}</p>
                  </div>
                  <div className="px-4 py-3 rounded-xl bg-white/15 border border-white/20 text-center min-w-[88px]">
                    <p className="text-2xl font-bold">99%</p>
                    <p className="text-xs text-blue-100">{t('pages.availabilityPanel.reliability')}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <CircleCheck className="w-5 h-5 text-green-600" /> {t('pages.availabilityPanel.centralAfrica')}
                </h3>
                <div className="space-y-3">
                  {[
                    { flag: '🇨🇩', name: t('pages.countryNames.drc') },
                    { flag: '🇷🇼', name: t('pages.countryNames.rwanda') },
                    { flag: '🇧🇮', name: t('pages.countryNames.burundi') },
                    { flag: '🇨🇫', name: t('pages.countryNames.rca') },
                    { flag: '🇨🇬', name: t('pages.countryNames.congoBrazzaville') },
                  ].map((country) => (
                    <div key={country.name} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                      <span className="text-lg">{country.flag}</span>
                      <span className="flex-1 ml-3 text-slate-900 dark:text-white">{country.name}</span>
                      <span className="text-xs text-green-700 dark:text-green-300 font-medium">{t('pages.availabilityPanel.active')}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <CircleCheck className="w-5 h-5 text-blue-600" /> {t('pages.availabilityPanel.eastAfrica')}
                </h3>
                <div className="space-y-3">
                  {[
                    { flag: '🇰🇪', name: t('pages.countryNames.kenya') },
                    { flag: '🇹🇿', name: t('pages.countryNames.tanzania') },
                    { flag: '🇺🇬', name: t('pages.countryNames.uganda') },
                    { flag: '🇪🇹', name: t('pages.countryNames.ethiopia') },
                    { flag: '🇸🇸', name: t('pages.countryNames.southSudan') },
                  ].map((country) => (
                    <div key={country.name} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                      <span className="text-lg">{country.flag}</span>
                      <span className="flex-1 ml-3 text-slate-900 dark:text-white">{country.name}</span>
                      <span className="text-xs text-blue-700 dark:text-blue-300 font-medium">{t('pages.availabilityPanel.active')}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-700 via-blue-600 to-green-600 relative overflow-hidden">
        {/* Cercles décoratifs animés */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-white/10"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-green-300/20"
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-extrabold text-white mb-4">{t('pages.readyToStart')}</h2>
            <p className="text-xl text-blue-100 mb-10">
              {t('pages.joinRevolution')}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <motion.a
                href="/reservation"
                whileHover={{ scale: 1.07, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="px-10 py-4 bg-white text-blue-700 font-bold text-lg rounded-2xl hover:bg-blue-50 transition-colors shadow-2xl"
              >
                {t('pages.bookNowCTA')}
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.07, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="px-10 py-4 border-2 border-white text-white font-bold text-lg rounded-2xl hover:bg-white/15 transition-colors"
              >
                {t('pages.contactUs')}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
