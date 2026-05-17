'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useI18n } from '@/context/I18nContext';
import {
  Compass,
  BookOpen,
  Users,
  CreditCard,
  Globe,
  Star,
  UserCheck,
  Check,
  GraduationCap,
  Gift,
  ClipboardList,
  Handshake,
  TrendingUp,
  Rocket,
  Smartphone,
  BadgeDollarSign,
  Landmark,
  Building2,
  Flag,
} from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: 'easeOut' as const },
});

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: 'easeOut' as const },
});

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: 'easeOut' as const },
});

export default function VisionPage() {
  const { t } = useI18n();

  const pillars = [
    { icon: Compass, gradient: 'from-blue-500 to-blue-700', glow: 'rgba(59,130,246,0.4)', titleKey: 'impact.pillar1Title', descKey: 'impact.pillar1Desc' },
    { icon: BookOpen, gradient: 'from-purple-500 to-purple-700', glow: 'rgba(168,85,247,0.4)', titleKey: 'impact.pillar2Title', descKey: 'impact.pillar2Desc' },
    { icon: Users, gradient: 'from-indigo-500 to-purple-600', glow: 'rgba(129,140,248,0.4)', titleKey: 'impact.pillar3Title', descKey: 'impact.pillar3Desc' },
    { icon: CreditCard, gradient: 'from-blue-500 to-cyan-600', glow: 'rgba(59,130,246,0.4)', titleKey: 'impact.pillar4Title', descKey: 'impact.pillar4Desc' },
    { icon: Globe, gradient: 'from-sky-500 to-blue-700', glow: 'rgba(56,189,248,0.4)', titleKey: 'impact.pillar5Title', descKey: 'impact.pillar5Desc' },
  ];

  return (
    <div className="pt-24 pb-20 overflow-x-hidden">
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-slate-100 dark:bg-slate-950">
        {/* Fond animé */}
        <div className="absolute inset-0">
          <Image
            src="/images/ato-aikins-agINaOByj4k-unsplash.jpg"
            alt="Vision"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-100/80 via-slate-100/60 to-slate-100 dark:from-slate-950/80 dark:via-slate-950/60 dark:to-slate-950" />
        </div>
        {/* Orbes animés */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-600/20 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-cyan-500/20 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 7, repeat: Infinity, delay: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"
        />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/60 dark:bg-white/10 backdrop-blur border border-slate-300 dark:border-white/20 rounded-full px-5 py-2 mb-8"
          >
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="text-yellow-500"
            >
              <Star className="w-4 h-4" />
            </motion.span>
            <span className="text-slate-900 dark:text-white text-sm font-semibold tracking-widest uppercase">{t('impact.badge')}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-6xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 leading-[1.05]"
          >
            {t('impact.title').split(' ').map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="inline-block mr-3"
                style={i === 1 ? {
                  background: 'linear-gradient(135deg, #60a5fa, #34d399)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                } : {}}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-xl md:text-2xl text-slate-700 dark:text-blue-200/80 max-w-3xl mx-auto leading-relaxed"
          >
            {t('impact.subtitle')}
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-8 h-12 rounded-full border-2 border-slate-600/30 dark:border-white/30 mx-auto flex items-start justify-center pt-2"
            >
              <div className="w-1.5 h-3 bg-slate-700/60 dark:bg-white/60 rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ MANIFESTE ═══ */}
      <section className="py-24 px-4 bg-white dark:bg-slate-900 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeUp(0)}>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded mx-auto mb-8"
            />
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-8">
              {t('impact.manifestoTitle')}
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              {t('impact.manifestoText')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ 5 PILIERS ═══ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.06)_0%,_transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.1)_0%,_transparent_60%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div {...fadeUp(0)} className="text-center mb-20">
            <h2 className="text-5xl font-extrabold text-slate-900 dark:text-white mb-4">{t('impact.pillarsTitle')}</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">{t('impact.pillarsSubtitle')}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ scale: 1.04, y: -8 }}
                className={`rounded-3xl overflow-hidden cursor-pointer group`}
                style={{ boxShadow: `0 20px 60px ${pillar.glow}` }}
              >
                <div className={`p-8 bg-gradient-to-br ${pillar.gradient} text-white h-full relative overflow-hidden`}>
                  {/* Cercle déco */}
                  <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/10" />
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: idx * 0.5 }}
                    className="mb-5 relative z-10"
                  >
                    <pillar.icon className="w-14 h-14" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-3 relative z-10">{t(pillar.titleKey)}</h3>
                  <p className="text-white/85 leading-relaxed relative z-10">{t(pillar.descKey)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEMMES D'ABORD ═══ */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Photo fond */}
        <div className="absolute inset-0">
          <Image
            src="/images/african-american-woman-with-braided-hair-wearing-cleaner-apron-gloves-celebrating-surprised-amazed-success-with-arms-raised-open-eyes-winner-concept.jpg"
            alt="Femmes"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-indigo-800/90 to-purple-800/80" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeLeft(0)} className="text-white">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="mb-6"
              >
                <UserCheck className="w-16 h-16" />
              </motion.div>
              <h2 className="text-5xl font-extrabold mb-6 leading-tight">{t('impact.womenTitle')}</h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">{t('impact.womenText')}</p>
              <ul className="space-y-4">
                {[t('impact.womenPoint1'), t('impact.womenPoint2'), t('impact.womenPoint3')].map((pt, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15 }}
                    className="flex items-center gap-4 bg-white/10 backdrop-blur rounded-xl px-5 py-3"
                  >
                    <Check className="w-6 h-6 text-blue-200" />
                    <span className="text-white font-medium">{pt}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fadeRight(0.2)} className="grid grid-cols-1 gap-5">
              {[
                { value: '50%+', label: t('impact.womenStat1'), icon: Users },
                { value: '0€', label: t('impact.womenStat2'), icon: Gift },
                { value: '100%', label: t('impact.womenStat3'), icon: GraduationCap },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.2 + i * 0.15 }}
                  whileHover={{ scale: 1.04 }}
                  className="flex items-center gap-5 bg-white/15 backdrop-blur border border-white/25 rounded-2xl px-7 py-5"
                >
                  <s.icon className="w-10 h-10 text-white" />
                  <div>
                    <div className="text-4xl font-black text-white">{s.value}</div>
                    <p className="text-blue-100">{s.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ FORMATION ═══ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500" />
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div {...fadeLeft(0)} className="relative">
              <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/pexels-gustavo-fring-4920286.jpg"
                  alt="Formation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent" />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-6 left-6 right-6 bg-white/15 backdrop-blur border border-white/25 rounded-2xl p-5 text-white"
                >
                  <div className="text-3xl font-black text-purple-200 mb-1">0 diplôme requis</div>
                  <p className="text-white/80">Juste ta motivation et une connexion internet</p>
                </motion.div>
              </div>
              {/* Badge flottant */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-5 -right-5 bg-purple-600 text-white rounded-2xl px-5 py-3 font-bold shadow-xl text-sm"
              >
                <span className="inline-flex items-center gap-2"><BookOpen className="w-4 h-4" /> Formation gratuite</span>
              </motion.div>
            </motion.div>

            {/* Contenu */}
            <motion.div {...fadeRight(0.2)}>
              <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">{t('impact.trainingTitle')}</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10">{t('impact.trainingSubtitle')}</p>
              <div className="space-y-5">
                {[
                  { icon: ClipboardList, numKey: '01', titleKey: 'impact.training1', descKey: 'impact.training1Desc', color: 'border-blue-500' },
                  { icon: Handshake, numKey: '02', titleKey: 'impact.training2', descKey: 'impact.training2Desc', color: 'border-purple-500' },
                  { icon: TrendingUp, numKey: '03', titleKey: 'impact.training3', descKey: 'impact.training3Desc', color: 'border-cyan-500' },
                  { icon: Rocket, numKey: '04', titleKey: 'impact.training4', descKey: 'impact.training4Desc', color: 'border-indigo-500' },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.12 }}
                    whileHover={{ x: 5 }}
                    className={`flex gap-5 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border-l-4 ${item.color} transition-all`}
                  >
                    <item.icon className="w-8 h-8 mt-0.5 text-slate-700 dark:text-slate-200" />
                    <div>
                      <div className="text-xs font-bold text-slate-400 mb-0.5">{item.numKey}</div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-1">{t(item.titleKey)}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{t(item.descKey)}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ LEADER DIGITAL AFRIQUE ═══ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
        {/* Grille décorative */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.08)_0%,_transparent_70%)]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div {...fadeUp(0)} className="text-center mb-20">
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="block mb-6"
            >
              <Globe className="w-16 h-16 mx-auto text-blue-500 dark:text-blue-400" />
            </motion.div>
            <h2 className="text-5xl font-extrabold text-slate-900 dark:text-white mb-4">{t('impact.leaderTitle')}</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">{t('impact.leaderText')}</p>
          </motion.div>

          {/* Image panoramique */}
          <motion.div {...fadeUp(0.1)} className="relative h-64 rounded-3xl overflow-hidden mb-12">
            <Image
              src="/images/ali-mkumbwa-5dFuO02OHh0-unsplash.jpg"
              alt="Afrique"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-transparent to-slate-950/70" />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-center text-white"
              >
                <div className="text-3xl font-black mb-2">Construire l'Afrique de demain</div>
                <div className="text-white/80 text-lg">Un service à la fois</div>
              </motion.div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { icon: Landmark, country: 'RDC', role: t('impact.leaderRoleDRC'), delay: 0 },
              { icon: Building2, country: 'Rwanda', role: t('impact.leaderRoleRW'), delay: 0.12 },
              { icon: Flag, country: 'Kenya', role: t('impact.leaderRoleKE'), delay: 0.24 },
            ].map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: c.delay, type: 'spring', stiffness: 120 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 rounded-2xl bg-white dark:bg-white/8 border border-slate-200 dark:border-white/15 text-center backdrop-blur-sm cursor-pointer"
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i }}
                  className="mb-4"
                ><c.icon className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-300" /></motion.div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{c.country}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{c.role}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Smartphone, titleKey: 'impact.digital1', descKey: 'impact.digital1Desc', color: 'from-blue-600/20 to-cyan-600/20', border: 'border-blue-500/30' },
              { icon: BadgeDollarSign, titleKey: 'impact.digital2', descKey: 'impact.digital2Desc', color: 'from-indigo-600/20 to-blue-600/20', border: 'border-indigo-500/30' },
            ].map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, type: 'spring' }}
                whileHover={{ scale: 1.03 }}
                className={`p-8 rounded-2xl bg-gradient-to-br ${d.color} border ${d.border} backdrop-blur`}
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: i }}
                  className="mb-4"
                ><d.icon className="w-12 h-12 text-blue-700 dark:text-blue-300" /></motion.div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t(d.titleKey)}</h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{t(d.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ODD ═══ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div {...fadeUp(0)} className="mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-3">{t('impact.oddTitle')}</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">{t('impact.oddSubtitle')}</p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-5">
            {[
              { num: '1', labelKey: 'impact.odd1', color: 'bg-red-600', glow: '0 10px 30px rgba(220,38,38,0.4)' },
              { num: '5', labelKey: 'impact.odd5', color: 'bg-red-500', glow: '0 10px 30px rgba(239,68,68,0.4)' },
              { num: '8', labelKey: 'impact.odd8', color: 'bg-red-700', glow: '0 10px 30px rgba(185,28,28,0.4)' },
              { num: '9', labelKey: 'impact.odd9', color: 'bg-orange-500', glow: '0 10px 30px rgba(249,115,22,0.4)' },
              { num: '10', labelKey: 'impact.odd10', color: 'bg-red-600', glow: '0 10px 30px rgba(220,38,38,0.4)' },
            ].map((sdg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 250, delay: i * 0.1 }}
                whileHover={{ scale: 1.12, rotate: 3 }}
                className={`${sdg.color} text-white rounded-2xl px-8 py-5 text-center w-40 cursor-pointer`}
                style={{ boxShadow: sdg.glow }}
              >
                <div className="text-4xl font-extrabold">ODD {sdg.num}</div>
                <p className="text-xs mt-2 text-white/90 font-medium">{t(sdg.labelKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA FINAL ═══ */}
      <section className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/zulfahmi-khani-9iH_6JO7Ufs-unsplash.jpg"
            alt="CTA"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-indigo-800/90 to-purple-900/90" />
        </div>
        {/* Particules animées */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [-20, -60, -20], opacity: [0, 1, 0] }}
            transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.8 }}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{ left: `${15 + i * 14}%`, bottom: '20%' }}
          />
        ))}
        <motion.div {...fadeUp(0)} className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="mb-8 block"
          ><Rocket className="w-16 h-16 mx-auto text-white" /></motion.div>
          <h2 className="text-5xl font-extrabold mb-6 leading-tight">{t('impact.ctaTitle')}</h2>
          <p className="text-xl text-blue-100/90 mb-12">{t('impact.ctaText')}</p>
          <div className="flex flex-wrap justify-center gap-5">
            <motion.a
              href="/reservation"
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.96 }}
              className="bg-white text-blue-700 font-bold text-lg px-10 py-4 rounded-2xl hover:bg-blue-50 transition shadow-2xl"
            >
              {t('impact.ctaBtn1')}
            </motion.a>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.96 }}
              className="border-2 border-white text-white font-bold text-lg px-10 py-4 rounded-2xl hover:bg-white/15 transition"
            >
              {t('impact.ctaBtn2')}
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
