import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Briefcase, GraduationCap, Code2, Download, FolderGit2, ExternalLink } from 'lucide-react';
import { USER_INFO, EXPERIENCES, EDUCATIONS, SKILL_CATEGORIES, PROJECTS } from '../data/content';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const resumeUrl = USER_INFO.resumeUrl || '/Keerthivasan_V_Resume.pdf';

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto bg-surface border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl my-auto text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header / Actions */}
            <div className="flex items-start justify-between border-b border-stroke pb-6 mb-6 gap-4">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-muted font-medium">Curriculum Vitae</span>
                <h2 className="text-3xl sm:text-4xl font-display italic text-text-primary mt-1">
                  {USER_INFO.name}
                </h2>
                <p className="text-xs sm:text-sm text-muted mt-1">
                  Full-Stack Developer & UI/UX Designer • {USER_INFO.email} • {USER_INFO.phone}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={resumeUrl}
                  download="Keerthivasan_V_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold px-4 py-2.5 rounded-full bg-white text-bg hover:bg-white/90 hover:scale-105 active:scale-95 transition-all shadow-lg"
                >
                  <Download className="w-3.5 h-3.5 text-bg" />
                  <span className="hidden sm:inline">Download PDF</span>
                  <span className="sm:hidden">PDF</span>
                </a>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-bg border border-stroke text-muted hover:text-white flex items-center justify-center transition-colors hover:border-white/30"
                  aria-label="Close resume modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Experience Section */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted mb-4 font-semibold">
                  <Briefcase className="w-4 h-4 text-sky-400" />
                  <span>Work Experience</span>
                </div>

                <div className="space-y-4">
                  {EXPERIENCES.map((exp) => (
                    <div key={exp.company} className="p-4 rounded-2xl bg-bg/50 border border-stroke">
                      <div className="flex justify-between items-baseline mb-1">
                        <h4 className="text-base font-medium text-text-primary">{exp.role}</h4>
                        <span className="text-xs text-muted font-mono">{exp.duration}</span>
                      </div>
                      <p className="text-xs text-sky-400 mb-2">{exp.company}</p>
                      <p className="text-xs text-muted leading-relaxed mb-3">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-muted">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects Section */}
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted mb-4 font-semibold">
                  <FolderGit2 className="w-4 h-4 text-sky-400" />
                  <span>Key Production Projects</span>
                </div>

                <div className="space-y-4">
                  {PROJECTS.map((proj) => (
                    <div key={proj.id} className="p-4 rounded-2xl bg-bg/50 border border-stroke">
                      <div className="flex justify-between items-baseline mb-1">
                        <h4 className="text-base font-medium text-text-primary">{proj.title}</h4>
                        <span className="text-xs text-muted font-mono">{proj.year}</span>
                      </div>
                      <p className="text-xs text-sky-400 mb-2">{proj.category}</p>
                      <p className="text-xs text-muted leading-relaxed mb-3">
                        {proj.description}
                      </p>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex flex-wrap gap-1.5">
                          {proj.tags.map((tag) => (
                            <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-muted">
                              {tag}
                            </span>
                          ))}
                        </div>
                        {proj.liveUrl && (
                          <a
                            href={proj.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-sky-400 hover:text-sky-300 inline-flex items-center gap-1 font-medium transition-colors"
                          >
                            <span>Live Project</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Section */}
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted mb-4 font-semibold">
                  <Code2 className="w-4 h-4 text-sky-400" />
                  <span>Technical & Design Skills</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                  {SKILL_CATEGORIES.flatMap((c) => c.skills).map((skill) => (
                    <div key={skill.name} className="px-3 py-2 rounded-xl bg-bg/40 border border-stroke/70 text-text-primary/90 flex justify-between items-center">
                      <span>{skill.name}</span>
                      <span className="text-[9px] text-muted uppercase font-mono">{skill.level}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education Section */}
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted mb-3 font-semibold">
                  <GraduationCap className="w-4 h-4 text-sky-400" />
                  <span>Education & Certifications</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {EDUCATIONS.map((edu) => (
                    <div key={edu.degree} className="p-3.5 rounded-2xl bg-bg/50 border border-stroke text-xs text-muted">
                      <p className="font-medium text-text-primary mb-1">{edu.degree}</p>
                      <p className="text-sky-300 font-medium">{edu.institution}</p>
                      <p className="text-[10px] text-muted mt-1 font-mono">{edu.year}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Download CTA Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-white/[0.07] to-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
                <div>
                  <h4 className="text-sm font-semibold text-text-primary">Download Complete Resume</h4>
                  <p className="text-xs text-muted mt-0.5">
                    Official 2-page PDF formatted for recruiters and hiring managers.
                  </p>
                </div>
                <a
                  href={resumeUrl}
                  download="Keerthivasan_V_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-full bg-white text-bg hover:bg-white/90 hover:scale-105 active:scale-95 transition-all shadow-xl"
                >
                  <Download className="w-4 h-4 text-bg" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
