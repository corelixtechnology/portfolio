import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Download, Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { USER_INFO, SOCIAL_LINKS } from '../data/content';
import { TechIcon } from './TechIcons';

interface HeroProps {
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <Github className="w-4 h-4" />;
      case 'linkedin':
        return <Linkedin className="w-4 h-4" />;
      case 'instagram':
        return <Instagram className="w-4 h-4" />;
      case 'mail':
        return <Mail className="w-4 h-4" />;
      default:
        return <Mail className="w-4 h-4" />;
    }
  };

  const floatingBadges = [
    { name: "React", icon: "react", color: "#61DAFB", glow: "rgba(97, 218, 251, 0.5)", pos: "top-8 left-6 md:top-12 md:left-10", delay: 0 },
    { name: "Node.js", icon: "node", color: "#68A063", glow: "rgba(104, 160, 99, 0.5)", pos: "top-4 right-10 md:top-8 md:right-16", delay: 1.2 },
    { name: "JS", icon: "js", color: "#F7DF1E", glow: "rgba(247, 223, 30, 0.5)", pos: "top-1/3 left-0 md:top-2/5 md:-left-4", delay: 0.6 },
    { name: "MongoDB", icon: "mongodb", color: "#47A248", glow: "rgba(71, 162, 72, 0.5)", pos: "top-1/4 right-0 md:top-1/3 md:-right-2", delay: 1.8 },
    { name: "Bootstrap", icon: "bootstrap", color: "#7952B3", glow: "rgba(121, 82, 179, 0.5)", pos: "bottom-12 right-2 md:bottom-16 md:right-8", delay: 0.9 },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#07080d] pt-24 pb-16 px-4 sm:px-6 md:px-10 lg:px-16"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/5 w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] rounded-full bg-[#6344f5]/15 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] max-w-[450px] max-h-[450px] rounded-full bg-[#38bdf8]/12 blur-[140px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-[1300px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs font-bold tracking-[0.2em] text-[#38bdf8] uppercase mb-2 sm:mb-3"
            >
              HELLO, I'M
            </motion.div>

            {/* Headline - refined and smaller font size */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-syne font-extrabold text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem] leading-[1.1] tracking-tight text-white mb-2"
            >
              {USER_INFO.name}
            </motion.h1>

            {/* Subheading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-xl sm:text-2xl md:text-3xl font-syne font-bold text-white mb-5"
            >
              Full Stack{" "}
              <span className="bg-gradient-to-r from-[#9333ea] via-[#a855f7] to-[#c084fc] bg-clip-text text-transparent">
                Developer
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xs sm:text-sm md:text-base text-white/70 max-w-lg leading-relaxed mb-8"
            >
              {USER_INFO.heroDescription}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-8 sm:mb-10"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-[#6366f1] via-[#7c3aed] to-[#9333ea] hover:from-[#4f46e5] hover:to-[#7e22ce] shadow-[0_0_25px_rgba(124,58,237,0.45)] hover:shadow-[0_0_35px_rgba(124,58,237,0.7)] transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>View My Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={USER_INFO.resumeUrl}
                download="Keerthivasan_V_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full font-semibold text-xs sm:text-sm text-white/90 bg-[#141624]/80 hover:bg-[#1f2238] border border-white/15 hover:border-white/30 backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>Download CV</span>
                <Download className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Connect With Me */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="flex flex-col gap-2.5"
            >
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-white/50">
                CONNECT WITH ME
              </span>
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#121422] border border-white/10 hover:border-purple-500/60 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#1a1d33] hover:shadow-[0_0_16px_rgba(147,51,234,0.35)] transition-all duration-300 hover:-translate-y-0.5"
                    aria-label={link.name}
                  >
                    {getSocialIcon(link.icon)}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: 3D Developer Avatar with Floating Glow Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-6 relative flex items-center justify-center"
          >
            {/* Ambient circular back-glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/30 to-pink-600/20 rounded-full blur-3xl opacity-70 pointer-events-none" />

            <div className="relative w-full max-w-[520px] aspect-[4/3] sm:aspect-[4/3] rounded-3xl overflow-hidden bg-[#0e101c]/80 border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-md group">
              {/* 3D Illustration Image */}
              <img
                src={USER_INFO.hero3dImage || "/assets/img/hero_3d.jpg"}
                alt="Keerthivasan 3D Developer"
                className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-700"
              />

              {/* Vignette border & inner glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07080d]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none" />
            </div>

            {/* Floating 3D Tech Badges */}
            {floatingBadges.map((badge) => (
              <motion.div
                key={badge.name}
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: badge.delay,
                }}
                className={`absolute ${badge.pos} z-20 hidden sm:flex items-center justify-center p-2.5 rounded-2xl bg-[#0e101d]/90 border border-white/20 backdrop-blur-md shadow-2xl transition-transform hover:scale-110`}
                style={{
                  boxShadow: `0 0 20px ${badge.glow}`,
                }}
              >
                <TechIcon name={badge.icon} size={26} />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
