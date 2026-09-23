import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Play, X, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data/content';
import { Project } from '../types';

export const SelectedWorks: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Extended project case taglines for Tubik feel
  const projectTaglines: Record<string, string> = {
    "hospital-portal": "Comprehensive medical workflows. Precision healthcare experience.",
    "movie-explorer": "Curated cinema discovery. Real-time TMDB indexing.",
    "travel-website": "Immersive tourism platform. Fluid destination booking.",
    "ecommerce-store": "High-performance storefront. Seamless checkout architecture."
  };

  return (
    <>
      <section id="work" className="bg-[#09090c] py-16 sm:py-24 md:py-32 relative z-20 border-t border-white/10">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
          {/* Tubik Header */}
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
                  PORTFOLIO SHOWCASE
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-syne font-extrabold tracking-tight text-white">
                Featured <span className="font-serif italic font-normal text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#C9C1FF]">work</span>
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs sm:text-sm text-white/60 max-w-md">
              <p className="leading-relaxed">
                Selected web engineering platforms, responsive portals, and interactive digital products crafted for maximum performance.
              </p>
            </div>
          </motion.div>

          {/* Tubik 2-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: idx * 0.12 }}
                className="group flex flex-col cursor-pointer"
              >
                {/* Media Wrap with Rounded Corners & Shutter/Hover effect */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className="relative w-full aspect-[16/11] rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#161622] border border-white/10 group-hover:border-white/30 transition-all duration-500 shadow-2xl mb-5 sm:mb-6"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Gradient & Texture Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090c]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute inset-0 halftone-overlay opacity-20 pointer-events-none" />

                  {/* Category Pill Tag (Top Left) */}
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-10">
                    <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white shadow-lg">
                      {project.category}
                    </span>
                  </div>

                  {/* Tubik Signature "Quick View" Play Button (Floating Bottom Right) */}
                  <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 z-10">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="group/btn inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 hover:bg-white text-[#09090c] backdrop-blur-md transition-all duration-300 shadow-xl group-hover:scale-105 active:scale-95 text-xs font-bold uppercase tracking-wider"
                    >
                      {/* Double Triangle Play Icon */}
                      <div className="relative w-3.5 h-3.5 flex items-center justify-center overflow-hidden">
                        <Play className="w-3 h-3 fill-[#09090c] text-[#09090c] transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                      </div>
                      <span>quick view</span>
                    </button>
                  </div>
                </div>

                {/* Text Wrap (Tubik Typography) */}
                <div className="flex items-start justify-between gap-4 px-1">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-syne font-bold text-white tracking-tight group-hover:text-[#C9C1FF] transition-colors mb-1.5">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-normal">
                      {projectTaglines[project.id] || project.description}
                    </p>
                  </div>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-white/15 bg-white/[0.04] group-hover:bg-white group-hover:text-[#09090c] text-white flex items-center justify-center transition-all shrink-0 mt-1"
                      aria-label={`Open ${project.title}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mt-3 px-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.08] text-white/60 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tubik View All Projects Button */}
          <div className="mt-14 sm:mt-20 flex justify-center">
            <a
              href="https://github.com/keerthivasanv01"
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center justify-center rounded-full border border-white/20 bg-[#161622] hover:bg-white hover:text-[#09090c] text-white px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl"
            >
              <div className="roll-link">
                <div className="roll-link-inner">
                  <span className="roll-link-line">Explore All Repos on GitHub</span>
                  <span className="roll-link-line">Explore All Repos on GitHub</span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Tubik Quick View Project Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl rounded-[32px] overflow-hidden bg-[#14141d] border border-white/20 shadow-2xl p-6 sm:p-8 flex flex-col gap-6 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-white text-white hover:text-black border border-white/20 flex items-center justify-center transition-all"
                aria-label="Close project preview"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image Banner */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-[#09090c] border border-white/10">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Modal Details */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#C9C1FF]">
                    {selectedProject.category} • {selectedProject.year}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-syne font-bold text-white mt-1">
                    {selectedProject.title}
                  </h3>
                </div>

                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#6344f5] hover:bg-[#785cf7] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg"
                  >
                    <span>Launch Live Platform</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-white/70 leading-relaxed font-normal">
                {selectedProject.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-white/80 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
