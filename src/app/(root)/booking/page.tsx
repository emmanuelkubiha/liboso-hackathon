'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SERVICES, PAYMENT_METHODS } from '@/data/mock';
import { useI18n } from '@/context/I18nContext';
import { ArrowRight, MapPin, Calendar, Clock, CreditCard } from 'lucide-react';

export default function BookingPage() {
  const { t } = useI18n();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    location: '',
    date: '',
    time: '',
    paymentMethod: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleNextStep = () => {
    if (step < 5) {
      setStep(step + 1);
    }
  };

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-600 to-orange-600">
        <div className="max-w-7xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold mb-4">{t('booking.title')}</h1>
            <p className="text-xl text-orange-100">Réservez votre service en 5 étapes simples</p>
          </motion.div>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="sticky top-20 z-40 bg-white dark:bg-slate-800 px-4 sm:px-6 lg:px-8 py-6 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="flex items-center">
                <motion.div
                  whileInView={{ scale: 1 }}
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                    num <= step
                      ? 'bg-amber-600 text-white'
                      : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {num}
                </motion.div>
                {num < 5 && (
                  <div
                    className={`h-1 flex-1 mx-2 ${
                      num < step ? 'bg-amber-600' : 'bg-slate-200 dark:bg-slate-700'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="text-sm text-slate-600 dark:text-slate-400">
            Étape {step} sur 5 - {step === 1 ? 'Sélectionner un service' : step === 2 ? 'Localisation' : step === 3 ? 'Date et heure' : step === 4 ? 'Paiement' : 'Confirmation'}
          </div>
        </div>
      </section>

      {/* Booking Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          {/* Step 1: Service Selection */}
          {step === 1 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">
                Choisir un Service
              </h2>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {SERVICES.map((service) => (
                  <motion.div
                    key={service.id}
                    onClick={() => handleInputChange('service', service.id)}
                    whileHover={{ scale: 1.02 }}
                    className={`p-6 rounded-xl cursor-pointer border-2 transition-all ${
                      formData.service === service.id
                        ? 'border-amber-600 bg-amber-50 dark:bg-amber-900/20'
                        : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-amber-600'
                    }`}
                  >
                    <div className="text-3xl mb-3">{service.icon}</div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-1">{service.name}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      {service.description}
                    </p>
                    <div className="flex justify-between text-sm">
                      <span className="text-amber-600 font-semibold">{service.price}</span>
                      <span className="text-yellow-500">⭐ {service.rating}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <button
                onClick={handleNextStep}
                disabled={!formData.service}
                className="w-full px-6 py-3 bg-amber-600 hover:bg-amber-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                Continuer <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}

          {/* Step 2: Location */}
          {step === 2 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">
                Où voulez-vous le service?
              </h2>

              <div className="space-y-4 mb-8">
                <div>
                  <label className="block font-semibold text-slate-900 dark:text-white mb-2">
                    <MapPin className="w-5 h-5 inline mr-2" />
                    Adresse
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    placeholder="Quartier, rue, numéro..."
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-600"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-900 dark:text-white mb-2">
                    Ville
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-600">
                    <option>Kinshasa</option>
                    <option>Kigali</option>
                    <option>Nairobi</option>
                    <option>Dar es Salaam</option>
                    <option>Kampala</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setStep(step - 1)}
                  className="flex-1 px-6 py-3 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 text-slate-900 dark:text-white font-bold rounded-lg transition-colors"
                >
                  Retour
                </button>
                <button
                  onClick={handleNextStep}
                  disabled={!formData.location}
                  className="flex-1 px-6 py-3 bg-amber-600 hover:bg-amber-700 disabled:bg-slate-300 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  Continuer <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Date & Time */}
          {step === 3 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">
                Quand voulez-vous le service?
              </h2>

              <div className="space-y-4 mb-8">
                <div>
                  <label className="block font-semibold text-slate-900 dark:text-white mb-2">
                    <Calendar className="w-5 h-5 inline mr-2" />
                    Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-600"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-900 dark:text-white mb-2">
                    <Clock className="w-5 h-5 inline mr-2" />
                    Heure
                  </label>
                  <input
                    type="time"
                    value={formData.time}
                    onChange={(e) => handleInputChange('time', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-600"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setStep(step - 1)}
                  className="flex-1 px-6 py-3 bg-slate-300 dark:bg-slate-700 text-slate-900 dark:text-white font-bold rounded-lg"
                >
                  Retour
                </button>
                <button
                  onClick={handleNextStep}
                  disabled={!formData.date || !formData.time}
                  className="flex-1 px-6 py-3 bg-amber-600 hover:bg-amber-700 disabled:bg-slate-300 text-white font-bold rounded-lg flex items-center justify-center gap-2"
                >
                  Continuer <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 4: Payment */}
          {step === 4 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">
                Mode de Paiement
              </h2>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {PAYMENT_METHODS.map((method) => (
                  <motion.div
                    key={method.id}
                    onClick={() => handleInputChange('paymentMethod', method.id)}
                    whileHover={{ scale: 1.02 }}
                    className={`p-6 rounded-xl cursor-pointer border-2 transition-all ${
                      formData.paymentMethod === method.id
                        ? 'border-amber-600 bg-amber-50 dark:bg-amber-900/20'
                        : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800'
                    }`}
                  >
                    <div className="text-3xl mb-3">{method.icon}</div>
                    <h3 className="font-bold text-slate-900 dark:text-white">{method.name}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      {method.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setStep(step - 1)}
                  className="flex-1 px-6 py-3 bg-slate-300 dark:bg-slate-700 text-slate-900 dark:text-white font-bold rounded-lg"
                >
                  Retour
                </button>
                <button
                  onClick={handleNextStep}
                  disabled={!formData.paymentMethod}
                  className="flex-1 px-6 py-3 bg-amber-600 hover:bg-amber-700 disabled:bg-slate-300 text-white font-bold rounded-lg flex items-center justify-center gap-2"
                >
                  Continuer <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 5: Confirmation */}
          {step === 5 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="text-3xl font-bold mb-8 text-center text-slate-900 dark:text-white">
                Confirmation de Réservation
              </h2>

              <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg mb-8">
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center pb-4 border-b border-slate-200 dark:border-slate-700">
                    <span className="text-slate-600 dark:text-slate-400">Service</span>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {SERVICES.find((s) => s.id === formData.service)?.name}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-slate-200 dark:border-slate-700">
                    <span className="text-slate-600 dark:text-slate-400">Localisation</span>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {formData.location}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-slate-200 dark:border-slate-700">
                    <span className="text-slate-600 dark:text-slate-400">Date & Heure</span>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {formData.date} à {formData.time}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 dark:text-slate-400">Paiement</span>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {PAYMENT_METHODS.find((m) => m.id === formData.paymentMethod)?.name}
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-center">
                  <p className="text-green-700 dark:text-green-300 font-semibold">
                    ✓ Prêt à confirmer votre réservation
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setStep(step - 1)}
                  className="flex-1 px-6 py-3 bg-slate-300 dark:bg-slate-700 text-slate-900 dark:text-white font-bold rounded-lg"
                >
                  Retour
                </button>
                <button
                  onClick={() => {
                    alert('Réservation confirmée! Code de suivi: LIBOSO-' + Math.random().toString(36).substr(2, 9).toUpperCase());
                    setStep(1);
                    setFormData({
                      service: '',
                      location: '',
                      date: '',
                      time: '',
                      paymentMethod: '',
                    });
                  }}
                  className="flex-1 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors"
                >
                  Confirmer et Payer
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
            Ce que Disent nos Clients
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Albertine M.',
                city: 'Kinshasa',
                text: 'Service rapide et professionnel! Agent courtois et efficace.',
                rating: 5,
              },
              {
                name: 'Pierre K.',
                city: 'Kigali',
                text: 'Premier fois très facile. Très satisfait du travail effectué.',
                rating: 5,
              },
              {
                name: 'Sarah N.',
                city: 'Nairobi',
                text: 'Excellente plateforme. Recommande vivement LIBOSO!',
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-slate-700 dark:text-slate-300 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">{testimonial.city}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
