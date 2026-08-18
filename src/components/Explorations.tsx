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
    const ctx = gsap.context(() => {
      // 1. Pinned Center Content (Sticky / Pin)
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        id="explorations"
        ref={sectionRef}
        className="relative min-h-[300vh] bg-bg w-full overflow-hidden"
      >
        {/* Layer 1: Pinned Center Content (z-10) */}
        <div
          ref={centerContentRef}
          className="h-screen w-full flex flex-col items-center justify-center text-center px-4 pointer-events-none z-10"
        >
          <div className="max-w-xl mx-auto flex flex-col items-center">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium">
                Explorations
              </span>
              <span className="w-8 h-px bg-stroke" />
            </div>

            {/* Heading */}
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-text-primary mb-5">
              Visual <span className="font-display italic text-6xl sm:text-7xl md:text-8xl lg:text-9xl">playground</span>
            </h2>

            {/* Subtext */}
            <p className="text-sm md:text-base text-muted max-w-sm mb-8 leading-relaxed">
              Figma UI/UX concepts, responsive clones, interactive prototypes, and digital experiments.
            </p>

            {/* GitHub/Figma button */}
            <a
              href="https://github.com/keerthivasanv01"
              target="_blank"
              rel="noreferrer"
              className="pointer-events-auto relative group rounded-full text-xs font-medium px-6 py-3 transition-all duration-300 focus:outline-none"
            >
              <span
                className="absolute -inset-[1px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)",
                }}
              />
              <span className="relative z-10 inline-flex items-center gap-2 bg-surface/90 backdrop-blur-md rounded-full px-6 py-3 -mx-6 -my-3 border border-stroke group-hover:border-transparent text-text-primary transition-colors">
                <span>View GitHub Repos</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
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
                  className="pointer-events-auto group relative w-full max-w-[240px] sm:max-w-[300px] md:max-w-[340px] aspect-square rounded-3xl overflow-hidden bg-surface border border-stroke hover:border-white/30 transition-all duration-500 hover:scale-105 cursor-pointer shadow-2xl"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 halftone-overlay opacity-20" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/95 via-transparent to-transparent opacity-70 group-hover:opacity-95 transition-opacity" />

                  {/* Card Title on Hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 flex items-end justify-between z-10">
                    <div>
                      <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-muted font-medium block">
                        {item.category}
                      </span>
                      <span className="text-sm sm:text-base font-display italic text-text-primary">
                        {item.title}
                      </span>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-text-primary group-hover:bg-white group-hover:text-bg transition-colors">
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
                  className="pointer-events-auto group relative w-full max-w-[240px] sm:max-w-[300px] md:max-w-[340px] aspect-square rounded-3xl overflow-hidden bg-surface border border-stroke hover:border-white/30 transition-all duration-500 hover:scale-105 cursor-pointer shadow-2xl"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 halftone-overlay opacity-20" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/95 via-transparent to-transparent opacity-70 group-hover:opacity-95 transition-opacity" />

                  {/* Card Title on Hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 flex items-end justify-between z-10">
                    <div>
                      <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-muted font-medium block">
                        {item.category}
                      </span>
                      <span className="text-sm sm:text-base font-display italic text-text-primary">
                        {item.title}
                      </span>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-text-primary group-hover:bg-white group-hover:text-bg transition-colors">
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
