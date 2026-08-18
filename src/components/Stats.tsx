import React from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../data/content';

export const Stats: React.FC = () => {
  return (
    <section className="bg-bg py-16 md:py-24 border-y border-stroke/60 relative z-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col items-start md:items-center text-left md:text-center p-6 rounded-3xl bg-surface/20 border border-stroke/40 hover:border-stroke hover:bg-surface/40 transition-all duration-300 group"
            >
              {/* Stat Big Number */}
              <div className="text-6xl sm:text-7xl md:text-8xl font-display italic text-text-primary tracking-tight mb-2 group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </div>

              {/* Label */}
              <h3 className="text-sm uppercase tracking-[0.2em] font-semibold text-text-primary mb-2">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-muted max-w-xs leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
