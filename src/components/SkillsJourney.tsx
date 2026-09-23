import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Server, Palette, ShieldCheck, Briefcase, GraduationCap, Calendar, Building2, Download, ArrowUpRight, Check } from 'lucide-react';
import { SKILL_CATEGORIES, EXPERIENCES, EDUCATIONS, USER_INFO } from '../data/content';

export const SkillsJourney: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code2 className="w-5 h-5 text-[#C9C1FF]" />;
      case 'server':
        return <Server className="w-5 h-5 text-[#00F59B]" />;
      case 'palette':
        return <Palette className="w-5 h-5 text-[#C9C1FF]" />;
      case 'shield':
        return <ShieldCheck className="w-5 h-5 text-amber-300" />;
      default:
        return <Code2 className="w-5 h-5 text-[#C9C1FF]" />;
    }
  };

  const services = [
    {
      id: "srv-1",
      number: "01",
      title: "UI/UX & Product Design",
      description: "Interactive wireframes, design systems, modern prototypes in Figma, and human-centric UX architecture.",
      highlights: ["Figma Design Systems", "High-Fidelity Prototyping", "Design Tokens", "Usability Testing"]
    },
    {
      id: "srv-2",
      number: "02",
      title: "Frontend Engineering",
      description: "Blazing fast single-page applications and responsive client portals built with React, TypeScript, and Tailwind CSS.",
      highlights: ["React JS & TypeScript", "Tailwind CSS & Animations", "Performance Optimization", "Semantic SEO"]
    },
    {
      id: "srv-3",
      number: "03",
      title: "Backend & RESTful APIs",
      description: "Robust enterprise microservices and secure database architectures with Node.js, Express.js, MySQL, and MongoDB.",
      highlights: ["Node.js & Express", "RESTful API Design", "MongoDB & MySQL", "Authentication & Security"]
    },
    {
      id: "srv-4",
      number: "04",
      title: "Creative Motion & Quality",
      description: "Fluid micro-animations with GSAP & Framer Motion, thorough QA testing, and cross-platform reliability.",
      highlights: ["GSAP & Framer Motion", "Cross-Browser QA", "Postman API Automation", "Responsive Layouts"]
    }
  ];

  return (
    <section id="services" className="bg-[#09090c] py-16 sm:py-24 md:py-32 relative z-20 border-t border-white/10">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 md:mb-20 gap-6"
        >
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-6 h-px bg-[#C9C1FF]" />
              <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#C9C1FF]">
                CAPABILITIES & ROADMAP
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-syne font-extrabold tracking-tight text-white">
              Services & <span className="font-serif italic font-normal text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#C9C1FF]">expertise</span>
            </h2>
          </div>

          <a
            href={USER_INFO.resumeUrl || "/Keerthivasan_V_Resume.pdf"}
            download="Keerthivasan_V_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider px-6 py-4 rounded-full bg-white text-[#09090c] hover:bg-[#C9C1FF] transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl self-start md:self-auto"
          >
            <div className="roll-link">
              <div className="roll-link-inner">
                <span className="roll-link-line">Download Resume PDF</span>
                <span className="roll-link-line text-[#09090c]">Download Resume PDF</span>
              </div>
            </div>
            <Download className="w-4 h-4 ml-1 text-[#09090c]" />
          </a>
        </motion.div>

        {/* Tubik 4-Card Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-14 sm:mb-20">
          {services.map((srv, idx) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="p-6 sm:p-7 rounded-[28px] bg-[#14141d] border border-white/10 hover:border-white/30 hover:bg-[#1a1a26] transition-all duration-500 flex flex-col justify-between group shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#6344f5]/10 rounded-full blur-xl group-hover:bg-[#6344f5]/30 transition-all pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-syne font-extrabold text-xs text-white/40 tracking-widest">
                    {srv.number}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/50 group-hover:text-white group-hover:bg-white/10 transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h3 className="text-xl font-syne font-bold text-white mb-3 group-hover:text-[#C9C1FF] transition-colors">
                  {srv.title}
                </h3>

                <p className="text-xs sm:text-sm text-white/50 leading-relaxed mb-6 font-normal">
                  {srv.description}
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-white/10">
                {srv.highlights.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-white/70">
                    <Check className="w-3 h-3 text-[#00F59B] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Skills Categories breakdown */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-14 sm:mb-20">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="p-5 sm:p-6 rounded-[24px] bg-[#111118] border border-white/[0.08] hover:border-white/20 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                  {getCategoryIcon(cat.icon)}
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#C9C1FF] px-2.5 py-0.5 rounded-full bg-white/[0.05]">
                  {cat.skills.length} tools
                </span>
              </div>

              <h4 className="text-sm font-syne font-bold text-white mb-3">
                {cat.title}
              </h4>

              <div className="space-y-1.5">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02] border border-white/[0.04] text-[11px]"
                  >
                    <span className="text-white/80 font-medium">{skill.name}</span>
                    <span className="text-[9px] uppercase tracking-wider text-white/40 font-mono">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tubik Career Roadmap & Experience */}
        <div className="p-6 sm:p-10 md:p-12 rounded-[32px] bg-[#14141d] border border-white/10 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8 sm:mb-10">
            <div>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-bold text-[#C9C1FF]">
                CAREER TRACK
              </span>
              <h3 className="text-2xl sm:text-4xl font-syne font-bold text-white mt-1">
                Experience & <span className="font-serif italic font-normal text-3xl sm:text-5xl text-[#C9C1FF]">Education</span>
              </h3>
            </div>

            {/* Toggle Tabs */}
            <div className="inline-flex p-1 rounded-full bg-white/[0.04] border border-white/10">
              <button
                type="button"
                onClick={() => setActiveTab('experience')}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === 'experience'
                    ? 'bg-white text-[#09090c]'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>Experience</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('education')}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === 'education'
                    ? 'bg-white text-[#09090c]'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Education</span>
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'experience' ? (
              <motion.div
                key="exp"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {EXPERIENCES.map((exp) => (
                  <div
                    key={exp.company}
                    className="p-6 sm:p-7 rounded-[24px] bg-[#1a1a26] border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-white/50 mb-3">
                        <div className="flex items-center gap-1.5 font-mono">
                          <Building2 className="w-3.5 h-3.5 text-[#C9C1FF] shrink-0" />
                          <span className="font-bold text-white">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1 shrink-0 text-white/40">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>

                      <h4 className="text-lg sm:text-xl font-syne font-bold text-white mb-3">
                        {exp.role}
                      </h4>

                      <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-5 font-normal">
                        {exp.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.08] text-white/70 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="edu"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {EDUCATIONS.map((edu) => (
                  <div
                    key={edu.degree}
                    className="p-6 sm:p-7 rounded-[24px] bg-[#1a1a26] border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-1.5 text-xs text-white/50 font-mono mb-3">
                        <Calendar className="w-3.5 h-3.5 text-[#C9C1FF]" />
                        <span>{edu.year}</span>
                      </div>

                      <h4 className="text-lg sm:text-xl font-syne font-bold text-white mb-2">
                        {edu.degree}
                      </h4>

                      <p className="text-xs sm:text-sm text-[#C9C1FF] font-semibold mb-3">
                        {edu.institution}
                      </p>

                      {edu.details && (
                        <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-normal">
                          {edu.details}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
