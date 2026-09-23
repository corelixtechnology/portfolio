import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { USER_INFO } from '../data/content';

export const Journal: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const scrollAmount = 380;
    sliderRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const opinionatedNotes = [
    {
      id: "note-1",
      title: "The discipline loop: how training rewired my engineering and design brain",
      category: "Engineering Philosophy",
      readTime: "4 min read",
      author: USER_INFO.name,
      role: "Full-Stack Dev & Designer",
      avatar: USER_INFO.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
      summary: "Why deep technical practice, rapid prototyping, and rigorous UI systems always beat raw intuition.",
    },
    {
      id: "note-2",
      title: "Old rules, bad advice: 10 frontend & full-stack myths everyone still believes",
      category: "Architecture",
      readTime: "5 min read",
      author: USER_INFO.name,
      role: "Full-Stack Dev & Designer",
      avatar: USER_INFO.avatar || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      summary: "Deconstructing overcomplicated state management, premature optimization, and dogma in modern web development.",
    },
    {
      id: "note-3",
      title: "Form-over-function mistakes: how not to harm your business with pretty interfaces",
      category: "UI/UX Insights",
      readTime: "4 min read",
      author: USER_INFO.name,
      role: "Lead UI Engineer",
      avatar: USER_INFO.avatar || "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
      summary: "Interface aesthetics should empower conversion and usability, not hide confusing product friction.",
    },
    {
      id: "note-4",
      title: "From Figma tokens to pixel-perfect React: bridging the design-to-code gap",
      category: "Design Systems",
      readTime: "6 min read",
      author: USER_INFO.name,
      role: "Design Systems Lead",
      avatar: USER_INFO.avatar || "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop",
      summary: "Building robust component libraries that sync effortless design tokens with reactive UI states.",
    },
    {
      id: "note-5",
      title: "The anatomy of a great code & UX review: talk first, design later",
      category: "Process & QA",
      readTime: "3 min read",
      author: USER_INFO.name,
      role: "Software Engineer",
      avatar: USER_INFO.avatar || "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=200&auto=format&fit=crop",
      summary: "The secret to shipping seamless digital products without unnecessary iterations or tech debt.",
    }
  ];

  return (
    <section id="notes" className="bg-[#09090c] py-16 sm:py-20 md:py-28 relative z-20 border-t border-white/10">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Header with Tubik Title and Prev/Next Navigation Controls */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-6"
        >
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-6 h-px bg-[#C9C1FF]" />
              <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#C9C1FF]">
                JOURNAL & PERSPECTIVES
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-syne font-extrabold tracking-tight text-white">
              Read our <span className="font-serif italic font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#C9C1FF]">highly-opinionated</span> notes
            </h2>
          </div>

          {/* Slider Prev & Next Circular Buttons */}
          <div className="flex items-center gap-3 self-end sm:self-auto">
            <button
              type="button"
              onClick={() => scrollSlider('left')}
              className="w-12 h-12 rounded-full border border-white/20 bg-white/[0.04] hover:bg-white text-white hover:text-[#09090c] flex items-center justify-center transition-all duration-300 active:scale-95 shadow-md group"
              aria-label="Previous insight"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              type="button"
              onClick={() => scrollSlider('right')}
              className="w-12 h-12 rounded-full border border-white/20 bg-white/[0.04] hover:bg-white text-white hover:text-[#09090c] flex items-center justify-center transition-all duration-300 active:scale-95 shadow-md group"
              aria-label="Next insight"
            >
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Tubik Smooth Horizontal Cards Slider */}
        <div
          ref={sliderRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {opinionatedNotes.map((note, idx) => (
            <motion.a
              key={note.id}
              href="#contact"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="snap-start flex-shrink-0 w-[290px] sm:w-[360px] md:w-[390px] p-6 sm:p-7 rounded-[28px] bg-[#14141d] border border-white/10 hover:border-white/30 transition-all duration-500 hover:bg-[#1a1a26] flex flex-col justify-between group cursor-pointer shadow-xl relative overflow-hidden"
            >
              {/* Subtle hover gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#6344f5]/10 rounded-full blur-2xl group-hover:bg-[#6344f5]/25 transition-all pointer-events-none" />

              <div>
                {/* Category & Read Time Tag */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[10px] uppercase font-extrabold tracking-widest text-[#C9C1FF] px-3 py-1 rounded-full bg-white/[0.06] border border-white/10">
                    {note.category}
                  </span>
                  <span className="text-[11px] text-white/40 font-medium">
                    {note.readTime}
                  </span>
                </div>

                {/* Main Opinionated Heading */}
                <h3 className="text-lg sm:text-xl font-syne font-bold text-white leading-snug group-hover:text-[#C9C1FF] transition-colors mb-3">
                  {note.title}
                </h3>

                <p className="text-xs sm:text-sm text-white/50 leading-relaxed line-clamp-3 mb-6 font-normal">
                  {note.summary}
                </p>
              </div>

              {/* Author Footer (Tubik Style Member Info) */}
              <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20 bg-white/10 flex items-center justify-center shrink-0">
                    <img
                      src={note.avatar}
                      alt={note.author}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback avatar icon if local image not found
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <div className="font-bold text-xs text-white">KV</div>
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">{note.author}</h5>
                    <p className="text-[10px] font-medium text-white/50">{note.role}</p>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 group-hover:text-[#09090c] group-hover:bg-white transition-all duration-300">
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
