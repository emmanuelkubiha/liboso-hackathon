'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Star,
  Home,
  Building2,
  Car,
  Recycle,
  Trees,
  Building,
  Sparkles,
  Bot,
} from 'lucide-react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const ServiceIcon = {
    'cleaning-house': Home,
    'cleaning-office': Building2,
    'car-wash': Car,
    'waste-management': Recycle,
    gardening: Trees,
    'building-cleaning': Building,
    'window-cleaning': Sparkles,
    recycling: Recycle,
    housekeeping: Sparkles,
    'smart-urban': Bot,
  }[service.id] || Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Image Background */}
      <div className="aspect-video bg-gradient-to-br from-blue-500 to-blue-600 overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          onError={(event) => {
            event.currentTarget.src =
              'https://images.pexels.com/photos/4239032/pexels-photo-4239032.jpeg?auto=compress&cs=tinysrgb&w=1200';
          }}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
        <div className="absolute top-3 right-3 bg-white/90 dark:bg-slate-900/90 rounded-full p-2 shadow-md">
          <ServiceIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        </div>
      </div>

      {/* Content */}
      <div className="relative p-6">
        {/* Icon */}
        <div className="mb-4">
          <ServiceIcon className="w-9 h-9 text-blue-600 dark:text-blue-400" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
          {service.name}
        </h3>

        {/* Description */}
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
          {service.description}
        </p>

        {/* Stats */}
        <div className="flex gap-4 mb-4 text-sm">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500" />
            <span className="text-slate-700 dark:text-slate-300">{service.rating}</span>
          </div>
          <div className="text-slate-700 dark:text-slate-300">{service.agents} agents</div>
          <div className="text-slate-700 dark:text-slate-300">{service.duration}</div>
        </div>

        {/* Price */}
        <div className="mb-4">
          <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {service.price}
          </span>
        </div>

        {/* Tags */}
        <div className="flex gap-2 mb-4 flex-wrap">
          {service.tagsFr.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          href={`/reservation?service=${service.id}`}
          className="inline-flex items-center gap-2 w-full justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors group/btn"
        >
          Réserver
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
