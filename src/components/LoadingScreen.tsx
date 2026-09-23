import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { USER_INFO } from '../data/content';

interface LoadingScreenProps {
  onComplete: () => void;
}

const ROTATING_WORDS = ["Design", "Create", "Inspire"];

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [count, setCount] = useState<number>(0);
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [isExiting, setIsExiting] = useState<number | boolean>(false);

  // Counter using requestAnimationFrame over 2200ms
  useEffect(() => {
    let animationFrameId: number;
    const duration = 2200;
    const startTime = performance.now();

    const animateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Smooth easing curve
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentVal = Math.floor(easedProgress * 100);
      setCount(Math.min(currentVal, 100));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animateCount);
      } else {
        setCount(100);
        const timer = setTimeout(() => {
          setIsExiting(true);
          setTimeout(onComplete, 400);
        }, 300);
        return () => clearTimeout(timer);
      }
    };

    animationFrameId = requestAnimationFrame(animateCount);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [onComplete]);

  // Word cycler every 750ms
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 750);

    return () => clearInterval(wordInterval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1, y: isExiting ? -20 : 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[9999] bg-[#09090c] flex flex-col justify-between p-6 sm:p-12 md:p-16 select-none overflow-hidden"
    >
      {/* Top Left: Tubik Studio style label */}
      <div className="flex justify-between items-start">
        <motion.span
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-xs text-white/50 uppercase tracking-[0.3em] font-extrabold"
        >
          {USER_INFO.name} • Studio Portfolio
        </motion.span>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xs text-[#C9C1FF] font-mono tracking-wider hidden sm:inline-block"
        >
          2026 Edition
        </motion.span>
      </div>

      {/* Center: Rotating Words */}
      <div className="flex items-center justify-center my-auto">
        <div className="h-16 sm:h-28 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={ROTATING_WORDS[wordIndex]}
              initial={{ y: 30, opacity: 0, filter: "blur(6px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{ y: -30, opacity: 0, filter: "blur(6px)" }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-7xl lg:text-8xl font-syne font-extrabold text-white tracking-tight"
            >
              {ROTATING_WORDS[wordIndex]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Area: Counter + Progress Bar */}
      <div className="flex flex-col gap-4 sm:gap-6">
        <div className="flex justify-between items-end">
          <span className="text-[11px] sm:text-xs text-white/40 tracking-widest uppercase font-bold">
            Initializing Craft
          </span>
          <div className="text-6xl sm:text-8xl lg:text-9xl font-syne font-extrabold text-white tabular-nums tracking-tighter leading-none">
            {String(count).padStart(3, "0")}
          </div>
        </div>

        {/* Bottom Progress Bar */}
        <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-[#6344f5] to-[#C9C1FF] rounded-full origin-left transition-transform duration-75 ease-out"
            style={{
              transform: `scaleX(${count / 100})`,
              boxShadow: "0 0 12px rgba(99, 68, 245, 0.6)",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};
