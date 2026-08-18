import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data/content';

export const SelectedWorks: React.FC = () => {
  return (
    <section id="work" className="bg-bg py-16 md:py-24 relative z-20">
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
                Selected Work
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-text-primary">
              Featured <span className="font-display italic text-5xl md:text-6xl lg:text-7xl">projects</span>
            </h2>

            {/* Subtext */}
            <p className="text-sm md:text-base text-muted max-w-md mt-3">
              A curated collection of web applications, hospital management portals, and client platforms built with React & modern stacks.
            </p>
          </div>

          {/* Desktop "View all work" button */}
          <div className="hidden md:inline-flex">
            <a
              href="https://github.com/keerthivasanv01"
              target="_blank"
              rel="noreferrer"
              className="relative group rounded-full text-xs font-medium px-5 py-2.5 transition-all duration-300 focus:outline-none"
            >
              {/* Animated gradient border on hover */}
              <span
                className="absolute -inset-[1px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)",
                }}
              />
              <span className="relative z-10 inline-flex items-center gap-2 bg-surface rounded-full px-5 py-2.5 -mx-5 -my-2.5 border border-stroke group-hover:border-transparent text-text-primary transition-colors">
                <span>View all on GitHub</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {PROJECTS.map((project, idx) => (
            <motion.a
              key={project.id}
              href={project.liveUrl || "#work"}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className={`${project.colSpan} group relative rounded-3xl overflow-hidden bg-surface border border-stroke transition-all duration-500 hover:border-white/20 block`}
            >
              <div className={`relative w-full ${project.aspect} overflow-hidden bg-surface`}>
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Halftone texture overlay */}
                <div className="absolute inset-0 halftone-overlay opacity-20 mix-blend-overlay pointer-events-none" />

                {/* Static gentle dark gradient at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg/95 via-bg/30 to-transparent pointer-events-none" />

                {/* Default Visible Card Meta */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex items-end justify-between z-10">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.2em] text-muted mb-1.5 font-medium">
                      {project.category} • {project.year}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-light text-text-primary tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                  
                  <div className="w-10 h-10 rounded-full bg-surface/80 border border-stroke flex items-center justify-center text-muted group-hover:text-text-primary group-hover:border-white/30 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* Hover Overlay: Dark blur + Animated Gradient Pill */}
                <div className="absolute inset-0 bg-bg/75 opacity-0 group-hover:opacity-100 backdrop-blur-lg transition-all duration-300 flex flex-col items-center justify-center p-6 text-center z-20">
                  {/* Hover Pill Label */}
                  <div className="relative p-[1px] rounded-full animate-gradient-shift mb-4">
                    <div
                      className="absolute inset-0 rounded-full animate-gradient-shift"
                      style={{
                        background: "linear-gradient(90deg, #89AACC, #4E85BF, #89AACC)",
                        backgroundSize: "200% 200%",
                      }}
                    />
                    <div className="relative px-6 py-2.5 rounded-full bg-surface border border-white/10 text-text-primary text-sm font-medium flex items-center gap-2">
                      <span>Live Demo —</span>
                      <span className="font-display italic text-lg text-white">
                        {project.title}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 ml-1 text-sky-400" />
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-muted max-w-sm line-clamp-2 px-4 mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 justify-center">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
