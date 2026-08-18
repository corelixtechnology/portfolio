import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { USER_INFO } from '../data/content';

interface NavbarProps {
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("Home");
  const [logoHovered, setLogoHovered] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      const sections = [
        { id: "home", name: "Home" },
        { id: "work", name: "Work" },
        { id: "skills", name: "Skills" },
        { id: "journal", name: "Journal" },
        { id: "explorations", name: "Explorations" },
        { id: "contact", name: "Contact" }
      ];

      const scrollPosition = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].name);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string, name: string) => {
    e.preventDefault();
    setActiveSection(name);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4 pointer-events-none transition-all duration-300">
      <nav
        className={`pointer-events-auto inline-flex items-center gap-1 sm:gap-2 rounded-full backdrop-blur-md border border-white/10 bg-surface/90 px-2 py-2 transition-all duration-300 ${
          scrolled ? "shadow-lg shadow-black/40 border-white/15 bg-surface/95 scale-[0.98]" : ""
        }`}
      >
        {/* 1. Logo: 9x9 circle with accent gradient border */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, "home", "Home")}
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
          className="relative w-9 h-9 rounded-full p-[2px] transition-transform duration-300 hover:scale-110 flex items-center justify-center group focus:outline-none"
          title={`${USER_INFO.name} Portfolio`}
        >
          {/* Gradient Border (reverses direction on hover) */}
          <div
            className="absolute inset-0 rounded-full transition-all duration-500"
            style={{
              background: logoHovered
                ? "linear-gradient(270deg, #89AACC 0%, #4E85BF 100%)"
                : "linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)",
            }}
          />
          {/* Inner circle */}
          <div className="relative w-full h-full rounded-full bg-bg flex items-center justify-center select-none">
            <span className="font-display italic text-[13px] font-bold text-text-primary tracking-tight group-hover:text-white transition-colors">
              {USER_INFO.initials}
            </span>
          </div>
        </a>

        {/* 2. Divider (hidden on mobile) */}
        <div className="w-px h-5 bg-stroke mx-1 hidden sm:block" />

        {/* 3. Nav links: ["Home", "Work", "Skills", "Resume"] */}
        <div className="flex items-center gap-1">
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "home", "Home")}
            className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 font-medium transition-all duration-200 ${
              activeSection === "Home"
                ? "text-text-primary bg-stroke/50 shadow-sm"
                : "text-muted hover:text-text-primary hover:bg-stroke/40"
            }`}
          >
            Home
          </a>

          <a
            href="#work"
            onClick={(e) => scrollToSection(e, "work", "Work")}
            className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 font-medium transition-all duration-200 ${
              activeSection === "Work"
                ? "text-text-primary bg-stroke/50 shadow-sm"
                : "text-muted hover:text-text-primary hover:bg-stroke/40"
            }`}
          >
            Work
          </a>

          <a
            href="#skills"
            onClick={(e) => scrollToSection(e, "skills", "Skills")}
            className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 font-medium transition-all duration-200 ${
              activeSection === "Skills"
                ? "text-text-primary bg-stroke/50 shadow-sm"
                : "text-muted hover:text-text-primary hover:bg-stroke/40"
            }`}
          >
            Skills
          </a>

          {/* Resume link/modal button */}
          <button
            type="button"
            onClick={() => {
              if (onOpenResume) {
                onOpenResume();
              } else {
                const el = document.getElementById("contact");
                el?.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 font-medium text-muted hover:text-text-primary hover:bg-stroke/40 transition-all duration-200"
          >
            Resume
          </button>
        </div>

        {/* 4. Divider */}
        <div className="w-px h-5 bg-stroke mx-1" />

        {/* 5. "Say hi" button */}
        <a
          href="#contact"
          onClick={(e) => scrollToSection(e, "contact", "Contact")}
          className="relative group inline-flex items-center text-xs sm:text-sm rounded-full font-medium focus:outline-none"
        >
          {/* Accent gradient border on hover */}
          <span
            className="absolute -inset-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: "linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)",
            }}
          />
          {/* Inner content */}
          <span className="relative z-10 inline-flex items-center gap-1.5 bg-surface/90 hover:bg-surface rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-text-primary transition-colors backdrop-blur-md">
            <span>Say hi</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-muted group-hover:text-text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
          </span>
        </a>
      </nav>
    </header>
  );
};
