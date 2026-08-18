import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { JOURNAL_ENTRIES } from '../data/content';

export const Journal: React.FC = () => {
  return (
    <section id="journal" className="bg-bg py-16 md:py-24 relative z-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6"
        >
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium">
                Journal
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-text-primary">
              Recent <span className="font-display italic text-5xl md:text-6xl lg:text-7xl">thoughts</span>
            </h2>

            {/* Subtext */}
            <p className="text-sm md:text-base text-muted max-w-md mt-3">
              Essays on software architecture, design philosophy, and digital craftsmanship.
            </p>
          </div>

          {/* "View all" Button */}
          <div className="inline-flex">
            <a
              href="#contact"
              className="relative group rounded-full text-xs font-medium px-5 py-2.5 transition-all duration-300 focus:outline-none"
            >
              {/* Gradient hover border */}
              <span
                className="absolute -inset-[1px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)",
                }}
              />
              <span className="relative z-10 inline-flex items-center gap-2 bg-surface rounded-full px-5 py-2.5 -mx-5 -my-2.5 border border-stroke group-hover:border-transparent text-text-primary transition-colors">
                <span>View all articles</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>
        </motion.div>

        {/* 4 Horizontal Pills */}
        <div className="flex flex-col gap-4">
          {JOURNAL_ENTRIES.map((entry, idx) => (
            <motion.a
              key={entry.id}
              href="#contact"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              className="group relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 p-4 sm:p-5 rounded-[28px] sm:rounded-full bg-surface/30 hover:bg-surface border border-stroke hover:border-white/20 transition-all duration-300 cursor-pointer"
            >
              {/* Left side: Thumbnail + Title */}
              <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto">
                {/* Thumbnail */}
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl sm:rounded-full overflow-hidden flex-shrink-0 bg-surface border border-stroke/50">
                  <img
                    src={entry.image}
                    alt={entry.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 halftone-overlay opacity-20" />
                </div>

                {/* Title & Category */}
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted font-medium mb-1">
                    {entry.category}
                  </span>
                  <h3 className="text-base sm:text-lg md:text-xl font-light text-text-primary group-hover:text-white transition-colors line-clamp-1">
                    {entry.title}
                  </h3>
                </div>
              </div>

              {/* Right side: Meta (Date, Read Time, Arrow) */}
              <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-stroke/40">
                <div className="flex items-center gap-4 text-xs text-muted">
                  <span className="tracking-wider">{entry.date}</span>
                  <span className="w-1 h-1 rounded-full bg-stroke" />
                  <span className="tracking-wider">{entry.readTime}</span>
                </div>

                {/* Arrow Icon */}
                <div className="w-9 h-9 rounded-full bg-surface/80 border border-stroke flex items-center justify-center text-muted group-hover:text-text-primary group-hover:bg-white/10 group-hover:border-white/30 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
