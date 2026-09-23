import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { ExplorationItem } from '../types';

interface LightboxModalProps {
  item: ExplorationItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center p-3 sm:p-8 bg-black/85 backdrop-blur-xl"
          onClick={onClose}
        >
          {/* Modal Box */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-surface border border-white/15 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-bg/80 border border-stroke text-muted hover:text-white flex items-center justify-center backdrop-blur-md transition-all duration-200 active:scale-95"
              aria-label="Close image modal"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Image Container */}
            <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden bg-bg">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 halftone-overlay opacity-15 pointer-events-none" />
            </div>

            {/* Content Bottom Bar */}
            <div className="p-4 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 bg-surface border-t border-stroke/40">
              <div>
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-sky-400 font-medium">
                  {item.category}
                </span>
                <h3 className="text-xl sm:text-3xl font-display italic text-text-primary mt-0.5">
                  {item.title}
                </h3>
              </div>

              {item.liveUrl && (
                <a
                  href={item.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs uppercase tracking-wider px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-stroke text-text-primary transition-all duration-200 font-semibold active:scale-95"
                >
                  <span>Open Live Project</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
