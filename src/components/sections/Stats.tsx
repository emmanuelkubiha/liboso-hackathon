'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface StatItemProps {
  value: string | number;
  label: string;
  icon?: LucideIcon | React.ComponentType<any>;
  index?: number;
}

function StatItem({ value, label, icon: Icon, index = 0 }: StatItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      {Icon && <Icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />}
      <div className="text-4xl sm:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
        {value}
      </div>
      <div className="text-lg text-slate-600 dark:text-slate-400">{label}</div>
    </motion.div>
  );
}

interface StatsProps {
  title?: string;
  stats: StatItemProps[];
}

export function Stats({ title, stats }: StatsProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto">
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 text-slate-900 dark:text-white"
          >
            {title}
          </motion.h2>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <StatItem key={idx} {...stat} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
