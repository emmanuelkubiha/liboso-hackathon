'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Agent } from '@/types';
import { useI18n } from '@/context/I18nContext';
import {
  Star,
  CheckCircle,
  Phone,
  Mail,
  ArrowRight,
  Filter,
} from 'lucide-react';

interface AgentSelectorProps {
  agents: Agent[];
  serviceId?: string;
  onSelectAgent?: (agent: Agent) => void;
}

export function AgentSelector({
  agents,
  serviceId,
  onSelectAgent,
}: AgentSelectorProps) {
  const { t } = useI18n();
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'rating' | 'jobs' | 'availability'>(
    'rating'
  );

  const filteredAgents = agents
    .filter((agent) =>
      serviceId
        ? agent.services.includes(serviceId)
        : true
    )
    .sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'jobs') return b.completedJobs - a.completedJobs;
      return a.availability === b.availability ? 0 : a.availability ? -1 : 1;
    });

  const handleSelectAgent = (agent: Agent) => {
    setSelectedAgent(agent.id);
    onSelectAgent?.(agent);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            {t('agents.title')}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-1">
            {t('agents.subtitle')}
          </p>
        </div>

        {/* Sort Options */}
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-slate-600 dark:text-slate-400" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="rating">{t('common.confirm')} - {t('agents.rating')}</option>
            <option value="jobs">{t('agents.completedJobs')}</option>
            <option value="availability">{t('agents.availability')}</option>
          </select>
        </div>
      </div>

      {/* Agents Grid */}
      {filteredAgents.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAgents.map((agent, idx) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                selectedAgent === agent.id
                  ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20'
                  : 'border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700'
              }`}
              onClick={() => handleSelectAgent(agent)}
            >
              {/* Agent Image & Info Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 overflow-hidden flex-shrink-0">
                  {agent.image ? (
                    <img
                      src={agent.image}
                      alt={agent.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white font-bold text-2xl">
                      {agent.name.charAt(0)}
                    </div>
                  )}
                </div>

                <div className="flex-1">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                    {agent.name}
                  </h3>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-sm text-slate-700 dark:text-slate-300">
                      {agent.rating}
                    </span>
                  </div>

                  {/* Availability Badge */}
                  <div
                    className={`inline-flex items-center gap-1 mt-2 px-2 py-1 rounded text-xs font-semibold ${
                      agent.availability
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                        : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                    }`}
                  >
                    <CheckCircle className="w-3 h-3" />
                    {agent.availability
                      ? t('agents.available')
                      : t('agents.unavailable')}
                  </div>
                </div>
              </div>

              {/* Description */}
              {agent.description && (
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                  {agent.description}
                </p>
              )}

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 mb-4 py-4 border-t border-b border-slate-200 dark:border-slate-700">
                <div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {t('agents.completedJobs')}
                  </p>
                  <p className="font-bold text-slate-900 dark:text-white">
                    {agent.completedJobs}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {t('agents.performanceScore')}
                  </p>
                  <p className="font-bold text-slate-900 dark:text-white">
                    {agent.performance}%
                  </p>
                </div>
              </div>

              {/* Services */}
              <div className="mb-4">
                <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2">
                  {t('agents.services')}
                </p>
                <div className="flex flex-wrap gap-2">
                  {agent.services.slice(0, 2).map((service) => (
                    <span
                      key={service}
                      className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-xs"
                    >
                      {service}
                    </span>
                  ))}
                  {agent.services.length > 2 && (
                    <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-xs">
                      +{agent.services.length - 2}
                    </span>
                  )}
                </div>
              </div>

              {/* Contact & CTA */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                  <Phone className="w-3 h-3" />
                  {agent.phone}
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                  <Mail className="w-3 h-3" />
                  {agent.email}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
                  onClick={() => handleSelectAgent(agent)}
                >
                  {selectedAgent === agent.id ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      {t('common.confirm')}
                    </>
                  ) : (
                    <>
                      <ArrowRight className="w-4 h-4" />
                      {t('agents.bookWithAgent')}
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-slate-600 dark:text-slate-400">
            {t('agents.noAgentsAvailable')}
          </p>
        </div>
      )}
    </div>
  );
}
