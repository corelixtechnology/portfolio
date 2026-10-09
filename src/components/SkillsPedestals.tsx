import React, { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PEDESTAL_SKILLS, PedestalSkill } from '../data/content';
import { TechIcon } from './TechIcons';
import {
  Sparkles,
  Layout,
  Server,
  Palette,
  ShieldCheck,
  Search,
  X,
  Zap,
  CheckCircle2,
  Cpu
} from 'lucide-react';

type SkillCategoryTab = 'all' | 'frontend' | 'backend' | 'design' | 'testing';

// Interactive 3D Holographic Skill Card with cursor spotlight and pedestal light beam
const SkillCard: React.FC<{ skill: PedestalSkill; index: number }> = ({ skill, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, scale: 0.92, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92, y: -20 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.02, 0.3) }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col justify-between p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-[#0c0e1a]/90 border border-white/[0.08] hover:border-white/30 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.4)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-300 overflow-hidden cursor-pointer"
      style={{
        transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
      }}
    >
      {/* 1. Dynamic Cursor Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(220px circle at ${mousePos.x}% ${mousePos.y}%, ${skill.glowColor}, transparent 70%)`,
        }}
      />

      {/* 2. Top Ambient Haze */}
      <div
        className="absolute -top-12 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full blur-3xl opacity-20 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none"
        style={{ backgroundColor: skill.color }}
      />

      {/* 3. Subtle Cyber Circuit Border Accent */}
      <div
        className="absolute inset-x-4 top-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${skill.color}, transparent)`,
        }}
      />

      {/* Top Header: Category Tag & Proficiency Badge */}
      <div className="relative z-10 w-full flex items-center justify-between gap-1 mb-2">
        <span
          className="text-[9px] uppercase tracking-wider font-mono font-semibold px-2 py-0.5 rounded-full border transition-colors"
          style={{
            borderColor: `${skill.color}35`,
            backgroundColor: `${skill.color}12`,
            color: skill.color,
          }}
        >
          {skill.category}
        </span>

        {skill.proficiency && (
          <div className="flex items-center gap-1 text-[10px] font-mono text-white/50 group-hover:text-white/90 transition-colors">
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: skill.color }}
            />
            <span>{skill.proficiency}%</span>
          </div>
        )}
      </div>

      {/* Center 3D Stage: Hologram Beam + Floating Icon + Beveled Pedestal */}
      <div className="relative my-2 sm:my-3 flex flex-col items-center justify-center min-h-[105px]">
        {/* Hologram Light Cone radiating upward from pedestal */}
        <div
          className="absolute bottom-4 w-12 sm:w-16 h-16 sm:h-20 opacity-25 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at bottom, ${skill.color} 0%, transparent 75%)`,
            filter: 'blur(6px)',
          }}
        />

        {/* Floating 3D Tech Icon with Levitation */}
        <div className="relative z-10 flex items-center justify-center h-14 w-14 sm:h-16 sm:w-16 transition-all duration-300 group-hover:scale-115 group-hover:-translate-y-1.5 drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]">
          <TechIcon name={skill.icon} size={38} />
        </div>

        {/* 3D Illuminated Glass Pedestal Base */}
        <div className="relative z-10 w-full flex flex-col items-center mt-2 pointer-events-none">
          {/* Frosted Acrylic Upper Pedestal Ring */}
          <div
            className="w-14 sm:w-16 h-2 rounded-full border border-white/20 transition-all duration-300"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.09)',
              boxShadow: isHovered
                ? `0 0 18px ${skill.glowColor}, inset 0 1px 2px rgba(255,255,255,0.4)`
                : `0 0 10px ${skill.glowColor}`,
            }}
          />

          {/* Neon Emitter Plate */}
          <div
            className="w-16 sm:w-20 h-1.5 rounded-full mt-0.5 transition-all duration-300"
            style={{
              backgroundColor: skill.color,
              boxShadow: isHovered
                ? `0 4px 22px ${skill.glowColor}, 0 0 35px ${skill.glowColor}`
                : `0 3px 14px ${skill.glowColor}`,
            }}
          />
        </div>
      </div>

      {/* Bottom Content: Name, Subtitle Tag & Proficiency Gauge */}
      <div className="relative z-10 w-full mt-2 text-center">
        {/* Skill Title */}
        <h4 className="font-syne font-bold text-xs sm:text-sm text-white group-hover:text-cyan-200 transition-colors truncate">
          {skill.name}
        </h4>

        {/* Expressive Subtitle Tag */}
        {skill.tag && (
          <p className="text-[10px] sm:text-[11px] font-medium text-white/50 group-hover:text-white/80 transition-colors mt-0.5 truncate">
            {skill.tag}
          </p>
        )}

        {/* Dynamic Micro-Gauge / Reveal Info */}
        <div className="mt-2.5 w-full">
          {/* Glowing Progress Track */}
          <div className="w-full h-1 rounded-full bg-white/5 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: isHovered ? `${skill.proficiency || 90}%` : '20%',
                backgroundColor: skill.color,
                boxShadow: `0 0 8px ${skill.glowColor}`,
              }}
            />
          </div>

          {/* Description snippet that smoothly appears on hover for larger screens */}
          {skill.description && (
            <p className="hidden sm:block text-[9px] text-white/40 group-hover:text-white/70 transition-colors mt-1.5 leading-tight line-clamp-1 group-hover:line-clamp-2">
              {skill.description}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const SkillsPedestals: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SkillCategoryTab>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const tabs: { id: SkillCategoryTab; label: string; icon: React.ReactNode; count: number }[] = [
    {
      id: 'all',
      label: 'All Skills',
      icon: <Sparkles className="w-3.5 h-3.5" />,
      count: PEDESTAL_SKILLS.length,
    },
    {
      id: 'testing',
      label: 'QA Automation & Testing',
      icon: <ShieldCheck className="w-3.5 h-3.5" />,
      count: PEDESTAL_SKILLS.filter((s) => s.category === 'testing').length,
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
  ];

  // Filter skills by category and search query
  const filteredSkills = useMemo(() => {
    return PEDESTAL_SKILLS.filter((skill) => {
      const matchesCategory = activeTab === 'all' || skill.category === activeTab;
      const matchesSearch = searchQuery.trim() === '' ||
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (skill.tag && skill.tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (skill.description && skill.description.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <section
      id="skills"
      className="relative w-full py-20 sm:py-32 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#07080d] overflow-hidden border-t border-b border-white/[0.06]"
    >
      {/* 1. Cyber Matrix Dot Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* 2. Deep Ambient Atmospheric Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[85vw] h-[450px] bg-gradient-to-r from-purple-600/15 via-indigo-600/15 to-cyan-600/15 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-emerald-500/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-[350px] h-[350px] bg-purple-500/10 blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-[1340px] mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-14 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-left max-w-2xl"
          >
            {/* Glowing Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-[#38bdf8] text-[11px] font-mono font-semibold tracking-wider uppercase mb-3 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
              <Cpu className="w-3.5 h-3.5 animate-pulse" />
              <span>ENGINEERED TOOLCHAIN & STACK</span>
            </div>

            <h2 className="font-syne font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-white tracking-tight leading-tight">
              Technologies I{' '}
              <span className="bg-gradient-to-r from-[#38bdf8] via-[#a855f7] to-[#ec4899] bg-clip-text text-transparent">
                Command & Deploy
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-white/60 mt-3 leading-relaxed">
              Bridging enterprise-grade <span className="text-emerald-400 font-semibold">QA automation & Playwright regression</span>, modern <span className="text-cyan-300 font-semibold">React & Full-Stack architecture</span>, and cutting-edge <span className="text-purple-300 font-semibold">AI Agent & MCP workflows</span>.
            </p>

            {/* Quick Metrics Strip */}
            <div className="flex flex-wrap items-center gap-4 mt-4 pt-4 border-t border-white/10 text-[11px] font-mono text-white/50">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-white/80 font-bold">30+</span> Technologies
              </div>
              <span className="text-white/20">•</span>
              <div className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-white/80 font-bold">100%</span> Production Tested
              </div>
              <span className="text-white/20">•</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-white/80 font-bold">3.5 +Years</span> Mindset & Rigor
              </div>
            </div>
          </motion.div>

          {/* Interactive Search & Filter Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto"
          >
            {/* Live Search Input */}
            <div className="relative min-w-[220px] sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input
                type="text"
                placeholder="Search tools, QA, stacks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2.5 rounded-xl bg-[#0f111f]/90 border border-white/15 focus:border-cyan-400 focus:outline-none text-xs text-white placeholder:text-white/40 transition-colors backdrop-blur-md"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white p-0.5 rounded transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Quick Results Counter */}
            <div className="hidden xl:flex items-center text-xs font-mono text-white/40 bg-white/5 px-3 py-2.5 rounded-xl border border-white/10 shrink-0">
              <span className="text-white font-bold mr-1">{filteredSkills.length}</span> / {PEDESTAL_SKILLS.length} items
            </div>
          </motion.div>
        </div>

        {/* Category Filter Pills Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-[#0e101d]/90 border border-white/10 backdrop-blur-xl mb-8 overflow-x-auto"
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                type="button"
                className={`relative flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 ${isActive
                    ? 'text-white shadow-[0_0_20px_rgba(124,58,237,0.4)]'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
              >
                {/* Framer Motion Active Tab Pill Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}

                <span className={isActive ? 'text-white' : 'text-[#38bdf8]'}>
                  {tab.icon}
                </span>
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono transition-colors ${isActive ? 'bg-white/20 text-white' : 'bg-white/10 text-white/40'
                    }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* 3D Illuminated Pedestals Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3.5 sm:gap-4.5"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill: PedestalSkill, idx: number) => (
              <SkillCard key={skill.name} skill={skill} index={idx} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State If Search Yields Nothing */}
        {filteredSkills.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-16 text-center"
          >
            <p className="text-sm text-white/50">No technologies found matching &ldquo;{searchQuery}&rdquo;.</p>
            <button
              type="button"
              onClick={() => { setSearchQuery(''); setActiveTab('all'); }}
              className="mt-3 px-4 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/15 text-white transition-colors"
            >
              Clear filters
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};
