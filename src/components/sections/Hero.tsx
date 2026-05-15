'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  cta1Text?: string;
  cta1Link?: string;
  cta2Text?: string;
  cta2Link?: string;
  backgroundImage?: string;
}

export function Hero({
  title,
  subtitle,
  description,
  cta1Text,
  cta1Link = '#',
  cta2Text,
  cta2Link = '#',
  backgroundImage,
}: HeroProps) {
  return (
    <section className="relative min-h-[80vh] pt-32 pb-20 overflow-hidden">
      {/* Background */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
      )}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-green-500" />
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-xl sm:text-2xl text-blue-100 mb-4 font-semibold">{subtitle}</p>
          )}

          {/* Description */}
          {description && (
            <p className="text-lg sm:text-xl text-blue-50 mb-8 max-w-3xl mx-auto">{description}</p>
          )}

          {/* CTA Buttons */}
          {(cta1Text || cta2Text) && (
            <div className="flex gap-4 justify-center flex-wrap">
              {cta1Text && (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={cta1Link}
                    className="inline-flex px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    {cta1Text}
                  </Link>
                </motion.div>
              )}
              {cta2Text && (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={cta2Link}
                    className="inline-flex px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
                  >
                    {cta2Text}
                  </Link>
                </motion.div>
              )}
            </div>
          )}
        </motion.div>
      </div>

      {/* Scroll Animation */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-white rounded-full mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
