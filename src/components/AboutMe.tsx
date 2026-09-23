import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { USER_INFO, ABOUT_STATS, SKILL_PROGRESS_LIST } from '../data/content';

interface AboutMeProps {
  onOpenResume?: () => void;
}

export const AboutMe: React.FC<AboutMeProps> = ({ onOpenResume }) => {
  return (
    <section
      id="about"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#090b14] overflow-hidden border-t border-b border-white/5"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-10 w-[400px] h-[400px] rounded-full bg-purple-600/10 blur-[130px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1300px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* 1. Left Column: Real Photo in Glowing Halo Portal + Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 flex flex-col items-center lg:items-start"
          >
            {/* Circular Halo Portal with Real Photo */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 mb-8 flex items-center justify-center">
              {/* Outer Neon Glow Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-purple-500/60 shadow-[0_0_40px_rgba(168,85,247,0.55)] animate-pulse" />
              
              {/* Secondary decorative concentric rings */}
              <div className="absolute -inset-3 rounded-full border border-purple-400/20 border-dashed animate-spin-slow pointer-events-none" />
              <div className="absolute -inset-6 rounded-full bg-purple-600/15 blur-2xl -z-10" />

              {/* Floating ambient glow particles */}
              <div className="absolute -top-2 left-6 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_#38bdf8] animate-bounce" />
              <div className="absolute -bottom-1 right-8 w-3.5 h-3.5 rounded-full bg-purple-400 shadow-[0_0_15px_#c084fc] animate-pulse" />

              {/* Real Photo Avatar Container */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-2 border-white/20 bg-gradient-to-b from-[#1c1f36] to-[#0d0f1c] shadow-2xl">
                <img
                  src={USER_INFO.realPhoto || "/assets/img/pp2.jpg"}
                  alt={USER_INFO.name}
                  className="w-full h-full object-cover object-top scale-105 hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes("hero.png")) {
                      target.src = "/assets/img/hero.png";
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07080d]/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Quick Experience Stats Box */}
            <div className="w-full max-w-sm grid grid-cols-3 gap-2 sm:gap-3 p-4 rounded-2xl bg-[#111322]/90 border border-white/10 shadow-lg backdrop-blur-md">
              {ABOUT_STATS.map((stat, idx) => (
                <div key={idx} className="text-center px-1">
                  <div className="text-xl sm:text-2xl font-syne font-extrabold text-white tracking-tight bg-gradient-to-b from-white to-purple-200 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-medium text-white/60 leading-tight mt-0.5 whitespace-pre-line">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 2. Middle Column: About Text & Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-4 flex flex-col justify-center"
          >
            {/* Eyebrow */}
            <div className="text-xs font-bold tracking-[0.2em] text-[#38bdf8] uppercase mb-3">
              ABOUT ME
            </div>

            {/* Heading */}
            <h2 className="font-syne font-extrabold text-2xl sm:text-3xl lg:text-[2rem] leading-tight text-white mb-4">
              Building Digital Solutions That Solve Real Problems
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6">
              {USER_INFO.aboutDescription}
            </p>

            {/* Button */}
            <div>
              <a
                href={USER_INFO.resumeUrl}
                download="Keerthivasan_V_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white/90 bg-[#151829] hover:bg-[#1f243d] border border-white/15 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 active:scale-95 shadow-md"
              >
                <span>More About Me</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-purple-400" />
              </a>
            </div>
          </motion.div>

          {/* 3. Right Column: Glowing Purple Skill Progress Bars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col justify-center space-y-4"
          >
            {SKILL_PROGRESS_LIST.map((skill) => (
              <div key={skill.name} className="w-full">
                <div className="flex items-center justify-between text-xs font-medium text-white mb-1.5">
                  <span className="text-white/90">{skill.name}</span>
                  <span className="font-mono text-white/70">{skill.percentage}%</span>
                </div>
                
                {/* Progress bar container */}
                <div className="w-full h-2 rounded-full bg-[#16192d] border border-white/10 overflow-hidden relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-purple-600 to-[#a855f7] shadow-[0_0_12px_rgba(168,85,247,0.7)]"
                  />
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
