'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
  index?: number;
}

function Feature({ icon, title, description, index = 0 }: FeatureProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-6 rounded-2xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400">{description}</p>
    </motion.div>
  );
}

interface FeaturesProps {
  title?: string;
  subtitle?: string;
  features: FeatureProps[];
}

export function Features({ title, subtitle, features }: FeaturesProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">{title}</h2>
            {subtitle && <p className="text-lg text-slate-600 dark:text-slate-400">{subtitle}</p>}
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <Feature key={idx} {...feature} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
