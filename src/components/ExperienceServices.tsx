import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  Palette, 
  ShoppingBag, 
  Database, 
  Gauge,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  GraduationCap
} from 'lucide-react';
import { 
  EXPERIENCES_TIMELINE, 
  SERVICES_LIST, 
  FREELANCE_WORKFLOW, 
  FREELANCE_BENEFITS,
  EDUCATIONS
} from '../data/content';

export const ExperienceServices: React.FC = () => {
  const getServiceIcon = (iconName: string, color: string) => {
    const props = { className: "w-5 h-5", style: { color } };
    switch (iconName) {
      case 'code':
        return <Code {...props} />;
      case 'smartphone':
        return <Smartphone {...props} />;
      case 'palette':
        return <Palette {...props} />;
      case 'shopping-bag':
        return <ShoppingBag {...props} />;
      case 'database':
        return <Database {...props} />;
      case 'gauge':
        return <Gauge {...props} />;
      default:
        return <Code {...props} />;
    }
  };

  return (
    <section
      id="experience"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#07080d] overflow-hidden"
    >
      {/* Ambient background lighting */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-purple-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-[1300px] mx-auto w-full">
        {/* Row 1: Experience & Freelance Services */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 mb-20">

          {/* Left Column: Experience / My Journey */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="text-xs font-bold tracking-[0.2em] text-[#38bdf8] uppercase mb-2">
              TRACK RECORD
            </div>
            <h2 className="font-syne font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-8">
              My Journey & Experience
            </h2>

            {/* Vertical Timeline */}
            <div className="relative pl-6 sm:pl-8 space-y-8">
              {/* Vertical connecting line */}
              <div className="absolute left-[9px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-purple-500 via-indigo-500 to-cyan-500" />

              {EXPERIENCES_TIMELINE.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Glowing Node Dot */}
                  <div className="absolute -left-[27px] sm:-left-[31px] top-1 w-4 h-4 rounded-full bg-[#07080d] border-2 border-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.8)] flex items-center justify-center group-hover:scale-125 transition-transform">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  </div>

                  {/* Period Tag */}
                  <div className="text-xs font-mono font-semibold text-purple-300 mb-1">
                    {item.period}
                  </div>

                  {/* Role Title */}
                  <h3 className="font-syne font-bold text-base sm:text-lg text-white group-hover:text-cyan-300 transition-colors">
                    {item.role}
                  </h3>

                  {/* Company */}
                  <div className="text-xs font-medium text-white/50 mb-2">
                    {item.company}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-white/70 leading-relaxed max-w-md">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Education Highlight Card */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#38bdf8] uppercase mb-3">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span>EDUCATION</span>
              </div>

              {EDUCATIONS.map((edu, i) => (
                <div key={i} className="p-4 rounded-2xl bg-[#0e101d]/80 border border-white/10 hover:border-cyan-500/40 backdrop-blur-md transition-all duration-300 group">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="font-syne font-bold text-sm sm:text-base text-white group-hover:text-cyan-300 transition-colors">
                      {edu.degree}
                    </h4>
                    <span className="text-[11px] font-mono font-semibold text-purple-300">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-xs text-white/70 font-medium mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-[11px] text-white/50 leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Services / What I Can Do For You */}
          <motion.div
            id="services"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="text-xs font-bold tracking-[0.2em] text-[#38bdf8] uppercase mb-2">
                  FREELANCE SERVICES
                </div>
                <h2 className="font-syne font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                  What I Can Build For You
                </h2>
              </div>

              {/* 3D Isometric Decor */}
              <div className="hidden sm:flex items-center justify-center w-14 h-14 relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-700 to-indigo-500 shadow-[0_0_25px_rgba(147,51,234,0.6)] transform rotate-45 animate-pulse" />
                <div className="absolute w-6 h-6 rounded-lg bg-cyan-400/40 transform -rotate-12 blur-xs pointer-events-none" />
              </div>
            </div>

            {/* 2x3 Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SERVICES_LIST.map((srv) => (
                <div
                  key={srv.title}
                  className="p-4 sm:p-5 rounded-2xl bg-[#0f111f]/85 border border-white/10 hover:border-purple-500/40 backdrop-blur-md shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  {/* Icon Box */}
                  <div
                    className="w-10 h-10 rounded-xl bg-[#171a2e] border border-white/10 flex items-center justify-center mb-3 shadow-inner group-hover:scale-110 transition-transform"
                    style={{
                      boxShadow: `0 0 16px ${srv.accentColor}25`,
                    }}
                  >
                    {getServiceIcon(srv.icon, srv.accentColor)}
                  </div>

                  <h3 className="font-syne font-bold text-sm sm:text-base text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-xs text-white/60 leading-relaxed">
                    {srv.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Row 2: How I Work With Clients (Freelance Workflow) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 pt-8 border-t border-white/10"
        >
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="text-xs font-bold tracking-[0.2em] text-[#38bdf8] uppercase mb-2">
              CLIENT PROCESS
            </div>
            <h2 className="font-syne font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight mb-3">
              How We Work Together
            </h2>
            <p className="text-xs sm:text-sm text-white/60">
              A transparent, agile 4-step workflow designed to deliver your project on schedule, within budget, and to the highest industry standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {FREELANCE_WORKFLOW.map((wf, idx) => (
              <div
                key={idx}
                className="relative p-5 sm:p-6 rounded-2xl bg-[#0e101d]/90 border border-white/10 hover:border-cyan-500/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="text-2xl sm:text-3xl font-mono font-extrabold text-white/20 group-hover:text-cyan-400/80 transition-colors mb-2">
                  {wf.step}
                </div>
                <h3 className="font-syne font-bold text-base sm:text-lg text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {wf.title}
                </h3>
                <p className="text-xs text-white/65 leading-relaxed">
                  {wf.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Row 3: Why Hire Me (Client Benefits & Guarantees) + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl bg-gradient-to-r from-[#121426] via-[#16182e] to-[#0f1122] border border-white/15 p-6 sm:p-10 backdrop-blur-xl overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-[11px] font-mono font-medium mb-3">
                <Sparkles className="w-3 h-3 text-purple-400" />
                <span>WHY CLIENTS CHOOSE ME</span>
              </div>
              <h3 className="font-syne font-extrabold text-xl sm:text-2xl md:text-3xl text-white mb-4">
                Enterprise Quality with Freelance Agility & Speed
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {FREELANCE_BENEFITS.map((ben, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/15 border border-cyan-500/40 flex items-center justify-center text-cyan-400 flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white mb-0.5">{ben.title}</h4>
                      <p className="text-[11px] text-white/60 leading-relaxed">{ben.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <div className="w-full text-center lg:text-right">
                <span className="text-xs font-mono text-cyan-300 font-semibold block mb-1">
                  Ready to start?
                </span>
                <h4 className="font-syne font-bold text-lg sm:text-xl text-white mb-4">
                  Let's Discuss Your Project
                </h4>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-[0_0_25px_rgba(56,189,248,0.35)] hover:shadow-[0_0_35px_rgba(56,189,248,0.6)] transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <span>Get a Free Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
