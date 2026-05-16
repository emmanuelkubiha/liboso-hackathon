'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '@/context/I18nContext';
import { Star, Send, User, Mail, CheckCircle } from 'lucide-react';

export default function FeedbackPage() {
  const { t } = useI18n();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    rating: 5,
    comment: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (field: string, value: any) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.comment) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', service: '', rating: 5, comment: '' });
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-600 to-emerald-600">
        <div className="max-w-7xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold mb-4">{t('feedback.title')}</h1>
            <p className="text-xl text-emerald-100">{t('feedback.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Feedback Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white mb-2">
                    <User className="w-4 h-4" />
                    {t('feedback.yourName')}
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-600"
                    placeholder={t('feedback.yourName')}
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white mb-2">
                    <Mail className="w-4 h-4" />
                    {t('feedback.yourEmail')}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-600"
                    placeholder={t('feedback.yourEmail')}
                    required
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                    {t('feedback.serviceUsed')}
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => handleInputChange('service', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-600"
                  >
                    <option value="">Sélectionner un service / Select a service</option>
                    <option value="cleaning-house">{t('services.housecleaning')}</option>
                    <option value="cleaning-office">{t('services.officecleaning')}</option>
                    <option value="car-wash">{t('services.carwash')}</option>
                    <option value="gardening">{t('services.gardening')}</option>
                    <option value="waste-management">{t('services.wastemanagement')}</option>
                    <option value="building-cleaning">{t('services.buildingcleaning')}</option>
                  </select>
                </div>

                {/* Rating */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                    {t('feedback.rating')}
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleInputChange('rating', star)}
                        className="transition-transform hover:scale-110"
                      >
                        <Star
                          className={`w-8 h-8 ${
                            star <= formData.rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-slate-300 dark:text-slate-600'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Comment */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                    {t('feedback.comment')}
                  </label>
                  <textarea
                    value={formData.comment}
                    onChange={(e) => handleInputChange('comment', e.target.value)}
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-600 resize-none"
                    placeholder={t('feedback.comment')}
                    required
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
                >
                  <Send className="w-4 h-4" />
                  {t('feedback.submitReview')}
                </motion.button>
              </form>

              {/* Success Message */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center gap-2 text-green-700 dark:text-green-300"
                >
                  <CheckCircle className="w-5 h-5" />
                  Avis soumis avec succès! / Review submitted successfully!
                </motion.div>
              )}
            </motion.div>

            {/* Recent Reviews */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
                {t('feedback.recentFeedback')}
              </h2>

              <div className="space-y-6">
                {/* Sample Reviews */}
                {[
                  {
                    name: 'Yasmina K.',
                    rating: 5,
                    service: 'Service de nettoyage maison / House Cleaning',
                    comment: 'Service excellente et agent très professionnel. Je recommande vivement! / Excellent service and very professional agent. Highly recommended!',
                  },
                  {
                    name: 'Michel T.',
                    rating: 4,
                    service: 'Lavage Auto / Car Wash',
                    comment: 'Très satisfait du résultat. Reviendrai pour sûr! / Very satisfied with the result. Will definitely come back!',
                  },
                  {
                    name: 'Amina S.',
                    rating: 5,
                    service: 'Jardinage / Gardening',
                    comment: 'Professionnel, à l\'écoute et résultat parfait. / Professional, attentive and perfect result.',
                  },
                ].map((review, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-slate-900 dark:text-white">
                        {review.name}
                      </h3>
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-slate-300 dark:text-slate-600'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                      {review.service}
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {review.comment}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-slate-800 dark:to-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: 'Avis Totaux / Total Reviews', value: '2,847' },
              { label: 'Note Moyenne / Average Rating', value: '4.8 ⭐' },
              { label: 'Taux de Satisfaction / Satisfaction Rate', value: '94%' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                  {stat.value}
                </p>
                <p className="text-slate-600 dark:text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
