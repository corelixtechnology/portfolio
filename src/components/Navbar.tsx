import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket, Download } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { downloadResumePdf } from '../utils/downloadResume';

interface NavbarProps {
  onOpenTalk?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTalk }) => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 30);

      // 1. If at or near the very top of the page, activate "home"
      if (scrollY < 140) {
        setActiveSection("home");
        return;
      }

      // 2. If scrolled near the bottom of the page, activate "contact"
      if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 150) {
        setActiveSection("contact");
        return;
      }

      // 3. Check each section accurately using getBoundingClientRect
      const sections = ["contact", "services", "experience", "projects", "skills", "about", "home"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Active when the section top has entered the upper region of the viewport
          if (rect.top <= 260 && rect.bottom >= 100) {
            setActiveSection(id);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Run immediately on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 sm:pt-4 px-4 sm:px-8 pointer-events-none transition-all duration-300">
        <nav
          className={`pointer-events-auto w-full max-w-[1300px] flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 ${
            scrolled
              ? "bg-[#07080d]/85 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
              : "bg-transparent border border-transparent"
          }`}
        >
          {/* 1. Left: Glowing Monogram KV Logo */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "home")}
            className="flex items-center gap-2 group focus:outline-none"
          >
            <div className="relative flex items-center justify-center font-extrabold text-2xl tracking-tighter text-white font-syne">
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-500 bg-clip-text text-transparent group-hover:brightness-125 transition-all">
                KV
              </span>
              <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
            </div>
          </a>

          {/* 2. Center: Sleek Capsule Navigation (Desktop) */}
          <div className="hidden lg:flex items-center gap-1 bg-[#0f111c]/80 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                    isActive
                      ? "text-white bg-[#2e1d52]/90 border border-purple-500/40 shadow-[0_0_15px_rgba(147,51,234,0.35)]"
                      : "text-white/60 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* 3. Right: "Resume (PDF)" & "Let's Talk 🚀" Glowing Pill CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              type="button"
              onClick={(e) => downloadResumePdf(e)}
              title="Download PDF Resume directly"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold text-white/85 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/40 transition-all duration-300 active:scale-95"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume (PDF)</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => {
                scrollToSection(e, "contact");
                if (onOpenTalk) onOpenTalk();
              }}
              className="relative group inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold tracking-wide text-white bg-gradient-to-r from-[#3b82f6] to-[#7c3aed] hover:from-[#2563eb] hover:to-[#6d28d9] shadow-[0_0_20px_rgba(124,58,237,0.45)] hover:shadow-[0_0_28px_rgba(124,58,237,0.7)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>Let's Talk</span>
              <Rocket className="w-3.5 h-3.5 text-cyan-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={(e) => downloadResumePdf(e)}
              title="Download PDF Resume directly"
              className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-white flex items-center gap-1"
            >
              <Download className="w-3 h-3 text-cyan-400" />
              <span>PDF</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white active:scale-95 transition-all"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#07080d]/95 backdrop-blur-2xl lg:hidden flex flex-col justify-between p-6 pt-24"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-2 max-w-sm mx-auto w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-[11px] uppercase tracking-[0.25em] text-cyan-400 font-bold px-3 mb-2">
                Navigation
              </div>

              <div className="flex flex-col gap-1.5 bg-[#0f111c] border border-white/10 rounded-3xl p-3 shadow-2xl">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => scrollToSection(e, link.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-medium transition-all ${
                      activeSection === link.id
                        ? "bg-purple-600/30 text-white border border-purple-500/40"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>

              <div className="mt-4 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={(e) => {
                    downloadResumePdf(e);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-xs tracking-wide border border-white/15"
                >
                  <Download className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Download Resume (PDF)</span>
                </button>

                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, "contact")}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-xs tracking-wide shadow-lg shadow-purple-600/30"
                >
                  <span>Let's Talk</span>
                  <Rocket className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            <div className="text-center text-xs text-white/40 pb-4">
              © {new Date().getFullYear()} Keerthivasan V. All rights reserved.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
