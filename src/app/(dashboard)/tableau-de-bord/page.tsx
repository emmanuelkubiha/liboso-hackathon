'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '@/context/I18nContext';
import { AGENTS, SERVICES } from '@/data/mock';
import {
  Users,
  Calendar,
  CreditCard,
  BarChart3,
  TrendingUp,
  Award,
  MapPin,
  Phone,
} from 'lucide-react';

export default function DashboardPage() {
  const { t } = useI18n();
  const [activeTab, setActiveTab] = useState('overview');

  const dashboardMetrics = [
    {
      icon: <Users className="w-6 h-6" />,
      label: 'Agents Actifs',
      value: '1,245',
      change: '+12% ce mois',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      label: 'Réservations',
      value: '8,392',
      change: '+23% ce mois',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      label: 'Revenu Total',
      value: '$125K',
      change: '+18% ce mois',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      label: 'Note Moyenne',
      value: '4.7/5',
      change: '+0.3 ce mois',
      color: 'from-amber-500 to-amber-600',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 mb-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
              Tableau de Bord
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Gestion centralisée des opérations LIBOSO
            </p>
          </motion.div>
        </div>
      </section>

      {/* Metrics Cards */}
      <section className="px-4 sm:px-6 lg:px-8 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {dashboardMetrics.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 20 }}
                transition={{ delay: idx * 0.1 }}
                className={`p-6 rounded-xl bg-gradient-to-br ${metric.color} text-white shadow-lg`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-white/20 rounded-lg">{metric.icon}</div>
                  <span className="text-xs font-semibold bg-white/20 px-2 py-1 rounded-full">
                    {metric.change}
                  </span>
                </div>
                <p className="text-white/80 text-sm font-semibold">{metric.label}</p>
                <p className="text-3xl font-bold mt-2">{metric.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="px-4 sm:px-6 lg:px-8 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-2 border-b border-slate-200 dark:border-slate-700 overflow-x-auto">
            {[
              { id: 'overview', label: 'Aperçu', icon: '📊' },
              { id: 'agents', label: 'Agents', icon: '👥' },
              { id: 'bookings', label: 'Réservations', icon: '📋' },
              { id: 'payments', label: 'Paiements', icon: '💰' },
              { id: 'analytics', label: 'Analyses', icon: '📈' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="grid md:grid-cols-2 gap-8">
                {/* Chart Placeholder 1 */}
                <div className="p-6 rounded-xl bg-white dark:bg-slate-800 shadow-lg">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                    Revenus par Service
                  </h3>
                  <div className="space-y-4">
                    {SERVICES.slice(0, 5).map((service, idx) => (
                      <div key={service.id}>
                        <div className="flex justify-between mb-2">
                          <span className="text-slate-600 dark:text-slate-400">{service.name}</span>
                          <span className="font-semibold text-slate-900 dark:text-white">
                            ${Math.floor(Math.random() * 50000)}
                          </span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                            style={{ width: `${Math.random() * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Chart Placeholder 2 */}
                <div className="p-6 rounded-xl bg-white dark:bg-slate-800 shadow-lg">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                    Réservations par Pays
                  </h3>
                  <div className="space-y-4">
                    {[
                      { country: '🇨🇩 RDC', bookings: 4500, percentage: 53 },
                      { country: '🇷🇼 Rwanda', bookings: 1800, percentage: 21 },
                      { country: '🇰🇪 Kenya', bookings: 1200, percentage: 14 },
                      { country: '🇹🇿 Tanzanie', bookings: 600, percentage: 7 },
                      { country: '🇺🇬 Ouganda', bookings: 292, percentage: 3 },
                    ].map((item, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between mb-2">
                          <span className="text-slate-600 dark:text-slate-400">{item.country}</span>
                          <span className="font-semibold text-slate-900 dark:text-white">
                            {item.percentage}%
                          </span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full"
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="p-6 rounded-xl bg-white dark:bg-slate-800 shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                  Activité Récente
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: '✅', action: 'Réservation terminée', details: 'Service nettoyage - Note 5★' },
                    { icon: '💰', action: 'Paiement reçu', details: '+$45 via M-Pesa' },
                    { icon: '👤', action: 'Agent inscrit', details: 'Marie Nsabire - Nettoyage Bureau' },
                    { icon: '📋', action: 'Nouvelle réservation', details: 'Lavage auto - Demain 14h' },
                  ].map((activity, idx) => (
                    <div key={idx} className="flex gap-4 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                      <div className="text-2xl">{activity.icon}</div>
                      <div>
                        <p className="font-semibold text-slate-900 dark:text-white">
                          {activity.action}
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{activity.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Agents Tab */}
          {activeTab === 'agents' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="mb-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Gestion des Agents
                </h2>
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors">
                  + Ajouter un Agent
                </button>
              </div>

              <div className="space-y-4">
                {AGENTS.map((agent) => (
                  <motion.div
                    key={agent.id}
                    whileHover={{ scale: 1.02 }}
                    className="p-6 rounded-xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex gap-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600" />
                        <div>
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                            {agent.name}
                          </h3>
                          <div className="flex gap-4 text-sm text-slate-600 dark:text-slate-400 mt-2">
                            <span>📧 {agent.email}</span>
                            <span>📱 {agent.phone}</span>
                          </div>
                          <div className="flex gap-2 mt-3">
                            {agent.services.map((service) => (
                              <span
                                key={service}
                                className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full"
                              >
                                {service}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-2xl font-bold text-slate-900 dark:text-white">
                            {agent.rating}
                          </span>
                          <span className="text-yellow-500">⭐</span>
                        </div>
                        <div className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                          {agent.completedJobs} tâches complétées
                        </div>
                        <div className="w-24 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full"
                            style={{ width: `${agent.performance}%` }}
                          />
                        </div>
                        <span className="text-xs text-slate-600 dark:text-slate-400 mt-1 block">
                          Performance: {agent.performance}%
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Bookings Tab */}
          {activeTab === 'bookings' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Réservations Actives
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-700">
                      <th className="text-left py-4 px-4 font-semibold text-slate-900 dark:text-white">
                        Code
                      </th>
                      <th className="text-left py-4 px-4 font-semibold text-slate-900 dark:text-white">
                        Service
                      </th>
                      <th className="text-left py-4 px-4 font-semibold text-slate-900 dark:text-white">
                        Agent
                      </th>
                      <th className="text-left py-4 px-4 font-semibold text-slate-900 dark:text-white">
                        Statut
                      </th>
                      <th className="text-left py-4 px-4 font-semibold text-slate-900 dark:text-white">
                        Tarif
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        code: 'LIB-001',
                        service: 'Nettoyage Maison',
                        agent: 'Jean Paul',
                        status: 'En cours',
                        price: '$45',
                      },
                      {
                        code: 'LIB-002',
                        service: 'Lavage Auto',
                        agent: 'Marie',
                        status: 'Complété',
                        price: '$25',
                      },
                      {
                        code: 'LIB-003',
                        service: 'Jardinage',
                        agent: 'David',
                        status: 'En attente',
                        price: '$60',
                      },
                    ].map((booking) => (
                      <tr
                        key={booking.code}
                        className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                      >
                        <td className="py-4 px-4 text-slate-900 dark:text-white font-semibold">
                          {booking.code}
                        </td>
                        <td className="py-4 px-4 text-slate-600 dark:text-slate-400">
                          {booking.service}
                        </td>
                        <td className="py-4 px-4 text-slate-600 dark:text-slate-400">
                          {booking.agent}
                        </td>
                        <td className="py-4 px-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              booking.status === 'Complété'
                                ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                                : booking.status === 'En cours'
                                  ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                                  : 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300'
                            }`}
                          >
                            {booking.status}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-slate-900 dark:text-white font-semibold">
                          {booking.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {/* Payments Tab */}
          {activeTab === 'payments' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Historique des Paiements
              </h2>

              <div className="space-y-4">
                {[
                  { method: 'M-Pesa', amount: '+$450', date: 'Aujourd\'hui', status: 'Confirmé' },
                  { method: 'Airtel Money', amount: '+$320', date: 'Hier', status: 'Confirmé' },
                  { method: 'Visa', amount: '+$850', date: 'Il y a 2 jours', status: 'Confirmé' },
                  { method: 'Orange Money', amount: '+$200', date: 'Il y a 3 jours', status: 'Confirmé' },
                ].map((payment, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-xl bg-white dark:bg-slate-800 shadow-lg flex items-center justify-between"
                  >
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">{payment.method}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{payment.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-green-600">{payment.amount}</p>
                      <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded-full">
                        {payment.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { label: 'Score de Satisfaction', value: '92%', icon: '😊' },
                  { label: 'Taux de Complétion', value: '98.5%', icon: '✅' },
                  { label: 'Temps de Réponse Moyen', value: '2.3 min', icon: '⏱️' },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 text-center"
                  >
                    <div className="text-4xl mb-3">{stat.icon}</div>
                    <p className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                      {stat.value}
                    </p>
                    <p className="text-slate-600 dark:text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-xl bg-white dark:bg-slate-800 shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                  Top Services
                </h3>
                <div className="space-y-4">
                  {SERVICES.slice(0, 5)
                    .sort(() => Math.random() - 0.5)
                    .map((service, idx) => (
                      <div key={service.id}>
                        <div className="flex justify-between mb-2">
                          <span className="font-semibold text-slate-900 dark:text-white">
                            {idx + 1}. {service.name}
                          </span>
                          <span className="text-slate-600 dark:text-slate-400">
                            {Math.floor(Math.random() * 500 + 100)} réservations
                          </span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full"
                            style={{ width: `${100 - idx * 15}%` }}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
