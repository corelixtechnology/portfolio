import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Server, Palette, ShieldCheck, Briefcase, GraduationCap, Calendar, Building2, Download } from 'lucide-react';
import { SKILL_CATEGORIES, EXPERIENCES, EDUCATIONS, USER_INFO } from '../data/content';

export const SkillsJourney: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code2 className="w-5 h-5 text-sky-400" />;
      case 'server':
        return <Server className="w-5 h-5 text-emerald-400" />;
      case 'palette':
        return <Palette className="w-5 h-5 text-purple-400" />;
      case 'shield':
        return <ShieldCheck className="w-5 h-5 text-amber-400" />;
      default:
        return <Code2 className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="skills" className="bg-bg py-16 md:py-24 relative z-20 border-t border-stroke/40">
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
                Expertise & Journey
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-text-primary">
              Skills & <span className="font-display italic text-5xl md:text-6xl lg:text-7xl">craft</span>
            </h2>

            {/* Subtext */}
            <p className="text-sm md:text-base text-muted max-w-md mt-3">
              Multi-disciplinary technical proficiencies across modern frontend frameworks, scalable backend APIs, and UI/UX design systems.
            </p>
          </div>

          <a
            href={USER_INFO.resumeUrl || "/Keerthivasan_V_Resume.pdf"}
            download="Keerthivasan_V_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider px-5 py-3 rounded-full bg-white text-bg hover:bg-white/90 hover:scale-105 active:scale-95 transition-all shadow-md self-start md:self-auto"
          >
            <Download className="w-4 h-4 text-bg" />
            <span>Download Resume PDF</span>
          </a>
        </motion.div>

        {/* 4-Card Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="p-6 rounded-3xl bg-surface border border-stroke hover:border-white/20 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-bg/80 border border-stroke flex items-center justify-center">
                    {getCategoryIcon(cat.icon)}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-muted/80 px-2 py-0.5 rounded-full bg-white/5 border border-white/5">
                    {cat.skills.length} skills
                  </span>
                </div>

                <h3 className="text-lg font-medium text-text-primary mb-4 tracking-tight">
                  {cat.title}
                </h3>

                <div className="space-y-2.5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between p-2 rounded-xl bg-bg/40 border border-stroke/50 group-hover:border-stroke transition-colors text-xs"
                    >
                      <span className="text-text-primary/90 font-medium">{skill.name}</span>
                      <span className="text-[10px] uppercase tracking-wider text-muted font-mono">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Career Timeline / Journey */}
        <div className="p-8 sm:p-10 rounded-3xl bg-surface/40 border border-stroke">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-stroke/60 pb-6 mb-8">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-muted font-medium">
                Professional Roadmap
              </span>
              <h3 className="text-2xl sm:text-3xl font-light text-text-primary mt-1">
                Experience & <span className="font-display italic text-3xl sm:text-4xl">Education</span>
              </h3>
            </div>

            {/* Toggle Tabs */}
            <div className="inline-flex p-1 rounded-full bg-bg border border-stroke">
              <button
                type="button"
                onClick={() => setActiveTab('experience')}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-medium transition-all ${
                  activeTab === 'experience'
                    ? 'bg-text-primary text-bg font-semibold'
                    : 'text-muted hover:text-text-primary'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>Experience</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('education')}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-medium transition-all ${
                  activeTab === 'education'
                    ? 'bg-text-primary text-bg font-semibold'
                    : 'text-muted hover:text-text-primary'
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
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {EXPERIENCES.map((exp) => (
                  <div
                    key={exp.company}
                    className="p-6 rounded-2xl bg-bg/50 border border-stroke/80 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 text-xs text-muted mb-2">
                        <div className="flex items-center gap-1.5 font-mono">
                          <Building2 className="w-3.5 h-3.5 text-sky-400" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>

                      <h4 className="text-base sm:text-lg font-medium text-text-primary mb-3">
                        {exp.role}
                      </h4>

                      <p className="text-xs text-muted leading-relaxed mb-4">
                        {exp.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-stroke/40">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-muted"
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
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {EDUCATIONS.map((edu) => (
                  <div
                    key={edu.degree}
                    className="p-6 rounded-2xl bg-bg/50 border border-stroke/80 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-1.5 text-xs text-muted font-mono mb-2">
                        <Calendar className="w-3.5 h-3.5 text-sky-400" />
                        <span>{edu.year}</span>
                      </div>

                      <h4 className="text-base sm:text-lg font-medium text-text-primary mb-2">
                        {edu.degree}
                      </h4>

                      <p className="text-xs text-sky-300 font-medium mb-3">
                        {edu.institution}
                      </p>

                      {edu.details && (
                        <p className="text-xs text-muted leading-relaxed">
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
