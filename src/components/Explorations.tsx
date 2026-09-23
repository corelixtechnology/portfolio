import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Plus } from 'lucide-react';
import { EXPLORATIONS } from '../data/content';
import { ExplorationItem } from '../types';
import { LightboxModal } from './LightboxModal';

gsap.registerPlugin(ScrollTrigger);

export const Explorations: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const centerContentRef = useRef<HTMLDivElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);

  const [selectedItem, setSelectedItem] = useState<ExplorationItem | null>(null);

  const col1Items = EXPLORATIONS.filter((_, i) => i % 2 === 0);
  const col2Items = EXPLORATIONS.filter((_, i) => i % 2 !== 0);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // 1. Pinned Center Content (Sticky / Pin on desktop)
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: centerContentRef.current,
        pinSpacing: false,
      });

      // 2. Parallax movement for Column 1
      if (col1Ref.current) {
        gsap.fromTo(
          col1Ref.current,
          { y: 80 },
          {
            y: -250,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          }
        );
      }

      // 3. Parallax movement for Column 2
      if (col2Ref.current) {
        gsap.fromTo(
          col2Ref.current,
          { y: 220 },
          {
            y: -380,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          }
        );
      }
    });

    return () => mm.revert();
  }, []);

  return (
    <>
      {/* Mobile Explorations (< md) */}
      <section id="lab" className="block md:hidden bg-[#09090c] py-16 px-4 sm:px-6 relative z-20 border-t border-white/10">
        <div className="max-w-xl mx-auto text-center mb-8">
          <div className="flex items-center justify-center gap-2.5 mb-3">
            <span className="w-6 h-px bg-[#C9C1FF]" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#C9C1FF]">
              LAB & EXPERIMENTS
            </span>
            <span className="w-6 h-px bg-[#C9C1FF]" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-syne font-extrabold tracking-tight text-white mb-3">
            Visual <span className="font-serif italic font-normal text-4xl sm:text-5xl text-[#C9C1FF]">playground</span>
          </h2>

          <p className="text-xs sm:text-sm text-white/50 mb-6 leading-relaxed">
            Figma UI/UX concepts, responsive clones, interactive prototypes, and digital experiments.
          </p>

          <a
            href="https://github.com/keerthivasanv01"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#09090c] rounded-full px-5 py-2.5 font-bold text-xs uppercase tracking-wider shadow-lg active:scale-95 transition-all mb-8"
          >
            <span>Explore Figma & GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Grid */}
        <div className="grid grid-cols-2 gap-3.5 sm:gap-4 max-w-lg mx-auto">
          {EXPLORATIONS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-[#14141d] border border-white/10 hover:border-white/30 transition-all cursor-pointer shadow-lg active:scale-95 flex flex-col justify-end p-3"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 halftone-overlay opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090c]/95 via-[#09090c]/40 to-transparent" />

              <div className="relative z-10 flex items-end justify-between gap-1">
                <div className="min-w-0 flex-1">
                  <span className="text-[8px] uppercase tracking-wider text-[#C9C1FF] font-bold block truncate">
                    {item.category}
                  </span>
                  <span className="text-xs font-syne font-bold text-white block truncate">
                    {item.title}
                  </span>
                </div>
                <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0">
                  <Plus className="w-3 h-3" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Desktop Explorations (>= md) with 300vh Parallax */}
      <section
        id="lab"
        ref={sectionRef}
        className="hidden md:block relative min-h-[300vh] bg-[#09090c] w-full overflow-hidden border-t border-white/10"
      >
        {/* Layer 1: Pinned Center Content (z-10) */}
        <div
          ref={centerContentRef}
          className="h-screen w-full flex flex-col items-center justify-center text-center px-4 pointer-events-none z-10"
        >
          <div className="max-w-xl mx-auto flex flex-col items-center">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-6 h-px bg-[#C9C1FF]" />
              <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#C9C1FF]">
                TUBIK LAB & EXPERIMENTS
              </span>
              <span className="w-6 h-px bg-[#C9C1FF]" />
            </div>

            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-syne font-extrabold tracking-tight text-white mb-4">
              Visual <span className="font-serif italic font-normal text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#C9C1FF]">playground</span>
            </h2>

            <p className="text-sm md:text-base text-white/50 max-w-sm mb-8 leading-relaxed font-normal">
              Figma UI/UX concepts, responsive clones, interactive prototypes, and experimental design lab explorations.
            </p>

            <a
              href="https://github.com/keerthivasanv01"
              target="_blank"
              rel="noreferrer"
              className="pointer-events-auto group relative inline-flex items-center justify-center rounded-full bg-white text-[#09090c] hover:bg-[#C9C1FF] px-7 py-3.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl"
            >
              <div className="roll-link">
                <div className="roll-link-inner">
                  <span className="roll-link-line">View Figma & GitHub</span>
                  <span className="roll-link-line text-[#09090c]">View Figma & GitHub</span>
                </div>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 ml-2 text-[#09090c] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Layer 2: Parallax Columns (z-20, absolute grid) */}
        <div className="absolute inset-0 z-20 max-w-[1400px] mx-auto px-4 sm:px-8 pointer-events-none">
          <div className="grid grid-cols-2 gap-6 sm:gap-12 md:gap-40 h-full pt-[20vh] pb-[40vh]">
            {/* Column 1 (Left) */}
            <div ref={col1Ref} className="flex flex-col gap-28 md:gap-48 items-start">
              {col1Items.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  style={{ transform: `rotate(${item.rotation}deg)` }}
                  className="pointer-events-auto group relative w-full max-w-[240px] sm:max-w-[300px] md:max-w-[340px] aspect-square rounded-[32px] overflow-hidden bg-[#14141d] border border-white/10 hover:border-white/40 transition-all duration-500 hover:scale-105 cursor-pointer shadow-2xl"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 halftone-overlay opacity-20" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090c]/95 via-transparent to-transparent opacity-70 group-hover:opacity-95 transition-opacity" />

                  {/* Card Title on Hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between z-10">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#C9C1FF] block">
                        {item.category}
                      </span>
                      <span className="text-base font-syne font-bold text-white">
                        {item.title}
                      </span>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#09090c] transition-colors">
                      <Plus className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Column 2 (Right) */}
            <div ref={col2Ref} className="flex flex-col gap-28 md:gap-48 items-end">
              {col2Items.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  style={{ transform: `rotate(${item.rotation}deg)` }}
                  className="pointer-events-auto group relative w-full max-w-[240px] sm:max-w-[300px] md:max-w-[340px] aspect-square rounded-[32px] overflow-hidden bg-[#14141d] border border-white/10 hover:border-white/40 transition-all duration-500 hover:scale-105 cursor-pointer shadow-2xl"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 halftone-overlay opacity-20" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090c]/95 via-transparent to-transparent opacity-70 group-hover:opacity-95 transition-opacity" />

                  {/* Card Title on Hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between z-10">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#C9C1FF] block">
                        {item.category}
                      </span>
                      <span className="text-base font-syne font-bold text-white">
                        {item.title}
                      </span>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#09090c] transition-colors">
                      <Plus className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </>
  );
};
