import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PEDESTAL_SKILLS, PedestalSkill } from '../data/content';
import { TechIcon } from './TechIcons';
import { Sparkles, Layout, Server, Palette, ShieldCheck } from 'lucide-react';

type SkillCategoryTab = 'all' | 'frontend' | 'backend' | 'design' | 'testing';

export const SkillsPedestals: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SkillCategoryTab>('all');

  const filteredSkills = activeTab === 'all'
    ? PEDESTAL_SKILLS
    : PEDESTAL_SKILLS.filter((skill) => skill.category === activeTab);

  const tabs: { id: SkillCategoryTab; label: string; icon: React.ReactNode; count: number }[] = [
    {
      id: 'all',
      label: 'All Skills',
      icon: <Sparkles className="w-3.5 h-3.5" />,
      count: PEDESTAL_SKILLS.length,
    },
    {
      id: 'frontend',
      label: 'Frontend Development',
      icon: <Layout className="w-3.5 h-3.5" />,
      count: PEDESTAL_SKILLS.filter((s) => s.category === 'frontend').length,
    },
    {
      id: 'backend',
      label: 'Backend Development',
      icon: <Server className="w-3.5 h-3.5" />,
      count: PEDESTAL_SKILLS.filter((s) => s.category === 'backend').length,
    },
    {
      id: 'design',
      label: 'UI/UX Design',
      icon: <Palette className="w-3.5 h-3.5" />,
      count: PEDESTAL_SKILLS.filter((s) => s.category === 'design').length,
    },
    {
      id: 'testing',
      label: 'Testing & Architecture',
      icon: <ShieldCheck className="w-3.5 h-3.5" />,
      count: PEDESTAL_SKILLS.filter((s) => s.category === 'testing').length,
    },
  ];

  return (
    <section
      id="skills"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#07080d] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[70vw] h-[350px] bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-emerald-600/10 blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-[300px] h-[300px] bg-cyan-500/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1300px] mx-auto w-full">
        {/* Section Header & Tabs */}
        <div className="flex flex-col xl:flex-row xl:items-end justify-between mb-10 sm:mb-14 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <div className="text-xs font-bold tracking-[0.2em] text-[#38bdf8] uppercase mb-2">
              MY SKILLS
            </div>
            <h2 className="font-syne font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              Technologies I Work With
            </h2>
          </motion.div>

          {/* Interactive Category Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-[#0f111f]/90 border border-white/10 backdrop-blur-md self-start xl:self-auto"
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  type="button"
                  className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_15px_rgba(147,51,234,0.4)]'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className={isActive ? 'text-white' : 'text-[#38bdf8]'}>
                    {tab.icon}
                  </span>
                  <span>{tab.label}</span>
                  <span
                    className={`ml-1 text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      isActive ? 'bg-white/20 text-white' : 'bg-white/5 text-white/40'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* 3D Illuminated Pedestals Grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-5">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill: PedestalSkill, idx: number) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.35, delay: idx * 0.025 }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="group relative flex flex-col items-center justify-between p-4 sm:p-5 rounded-2xl bg-[#0e101d]/90 border border-white/10 hover:border-white/30 backdrop-blur-md shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Top ambient color glow */}
                <div
                  className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full blur-2xl opacity-40 group-hover:opacity-90 transition-opacity pointer-events-none"
                  style={{ backgroundColor: skill.color }}
                />

                {/* Category mini badge */}
                <div className="w-full flex justify-end">
                  <span className="text-[9px] uppercase tracking-wider font-mono text-white/30 group-hover:text-white/60 transition-colors">
                    {skill.category}
                  </span>
                </div>

                {/* Icon Container */}
                <div className="relative my-3 sm:my-4 flex items-center justify-center h-14 w-14 sm:h-16 sm:w-16 group-hover:scale-110 transition-transform duration-300">
                  <TechIcon name={skill.icon} size={36} />
                </div>

                {/* 3D Illuminated Glass Pedestal Base */}
                <div className="relative w-full flex flex-col items-center mt-1">
                  {/* Pedestal Top Surface */}
                  <div
                    className="w-14 sm:w-16 h-2 rounded-full border border-white/20 shadow-sm"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      boxShadow: `0 0 14px ${skill.glowColor}`,
                    }}
                  />

                  {/* Pedestal Bottom Base Plate */}
                  <div
                    className="w-16 sm:w-20 h-1.5 rounded-full mt-1 opacity-80"
                    style={{
                      backgroundColor: skill.color,
                      boxShadow: `0 4px 16px ${skill.glowColor}`,
                    }}
                  />
                </div>

                {/* Pill Name Label at bottom */}
                <div className="mt-3.5 px-3 py-1 rounded-full bg-[#17192d] border border-white/10 text-[11px] font-semibold text-white/80 group-hover:text-white group-hover:border-white/30 transition-colors text-center truncate max-w-full">
                  {skill.name}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
