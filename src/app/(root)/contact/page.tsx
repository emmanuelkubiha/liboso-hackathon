'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-600 to-cyan-600">
        <div className="max-w-7xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold mb-4">Nous Contacter</h1>
            <p className="text-xl text-cyan-100">Parlons de votre vision pour les services urbains africains</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Envoyez-nous un Message</h2>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                    Nom Complet
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                    Sujet
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Sujet de votre message"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Votre message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-lg transition-colors"
                >
                  Envoyer le Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
                Coordonnées
              </h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="text-3xl">📍</div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">Siège Social</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Kigali, Rwanda
                      <br />
                      East Africa Hub
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-3xl">📧</div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">Email</h3>
                    <a href="mailto:hello@liboso.com" className="text-teal-600 hover:text-teal-700">
                      hello@liboso.com
                    </a>
                    <br />
                    <a href="mailto:business@liboso.com" className="text-teal-600 hover:text-teal-700">
                      business@liboso.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-3xl">📱</div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">Téléphone</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      +250 788 123 456
                      <br />
                      +243 820 000 789
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-3xl">⏰</div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">Heures d'Ouverture</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Lundi - Vendredi: 8h - 18h
                      <br />
                      Samedi: 9h - 14h
                      <br />
                      Dimanche: Fermé
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                <h3 className="font-bold text-slate-900 dark:text-white mb-4">Réseaux Sociaux</h3>
                <div className="flex gap-4">
                  {['LinkedIn', 'Twitter', 'Facebook', 'Instagram'].map((platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="px-4 py-2 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-lg hover:bg-teal-200 dark:hover:bg-teal-900 transition-colors"
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
