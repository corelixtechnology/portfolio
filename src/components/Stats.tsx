import React from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../data/content';

export const Stats: React.FC = () => {
  return (
    <section className="bg-[#09090c] py-16 sm:py-20 md:py-24 border-y border-white/10 relative z-20">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="flex flex-col items-center text-center p-6 sm:p-8 rounded-[28px] bg-[#14141d] border border-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              {/* Stat Big Number */}
              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-syne font-extrabold text-white tracking-tight mb-2 group-hover:text-[#C9C1FF] transition-colors">
                {stat.value}
              </div>

              {/* Label */}
              <h3 className="text-xs sm:text-sm uppercase tracking-[0.2em] font-extrabold text-white mb-2">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-white/50 max-w-xs leading-relaxed font-normal">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
