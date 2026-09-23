import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight, ExternalLink, Download, Smartphone } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/content';
import { TechIcon } from './TechIcons';

export const FeaturedProjects: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="projects"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#090b14] overflow-hidden border-t border-white/5"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-10 w-[400px] h-[400px] rounded-full bg-purple-600/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] rounded-full bg-blue-600/10 blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-[1300px] mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs font-bold tracking-[0.2em] text-[#38bdf8] uppercase mb-2">
              FEATURED PROJECTS
            </div>
            <h2 className="font-syne font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              Some Things I've Built
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 self-start sm:self-auto"
          >
            {/* Carousel navigation arrow buttons */}
            <button
              type="button"
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full bg-[#131526] hover:bg-[#1f223d] border border-white/15 hover:border-purple-500/50 flex items-center justify-center text-white/80 hover:text-white transition-all shadow-md active:scale-95"
              aria-label="Previous projects"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full bg-[#131526] hover:bg-[#1f223d] border border-white/15 hover:border-purple-500/50 flex items-center justify-center text-white/80 hover:text-white transition-all shadow-md active:scale-95"
              aria-label="Next projects"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <a
              href="https://github.com/keerthivasanv01"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white/80 hover:text-white bg-[#131526] hover:bg-[#1f223d] border border-white/15 hover:border-purple-500/40 transition-all ml-2"
            >
              <span>View All Projects</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>

        {/* Horizontal Project Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {FEATURED_PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="min-w-[300px] sm:min-w-[350px] md:min-w-[380px] max-w-[400px] flex-1 snap-start flex flex-col justify-between rounded-2xl bg-[#0f111f]/90 border border-white/10 hover:border-purple-500/40 p-4 backdrop-blur-md shadow-xl transition-all duration-300 group hover:-translate-y-1.5"
            >
              <div>
                {/* Project Image Thumbnail */}
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-[#181b2e] mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f111f]/85 via-transparent to-transparent pointer-events-none" />

                  {/* Top Action Icon */}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
                      title={project.isApk ? "View App Details" : "Visit Project"}
                    >
                      {project.isApk ? <Smartphone className="w-4 h-4 text-cyan-300" /> : <ExternalLink className="w-3.5 h-3.5 text-cyan-300" />}
                    </a>
                  )}
                </div>

                {/* Title & Badge */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-syne font-bold text-base sm:text-lg text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wider border ${
                    project.isApk 
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300' 
                      : 'bg-[#1c203b] border-white/10 text-purple-300'
                  }`}>
                    {project.badge}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-white/65 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Action Links & Tech Stack */}
                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  {/* Tech Stack Icons Row */}
                  <div className="flex items-center gap-1.5">
                    {project.techIcons.map((tech) => (
                      <div
                        key={tech}
                        className="w-6 h-6 rounded-md bg-[#16182c] border border-white/10 flex items-center justify-center"
                        title={tech}
                      >
                        <TechIcon name={tech} size={14} />
                      </div>
                    ))}
                  </div>

                  {/* Direct Link button */}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <span>{project.isApk ? 'App Portal' : 'Live Site'}</span>
                      {project.isApk ? <Download className="w-3 h-3" /> : <ArrowUpRight className="w-3 h-3" />}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
