import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  Palette, 
  ShoppingBag, 
  Database, 
  Gauge 
} from 'lucide-react';
import { EXPERIENCES_TIMELINE, SERVICES_LIST } from '../data/content';

export const ExperienceServices: React.FC = () => {
  const getServiceIcon = (iconName: string, color: string) => {
    const props = { className: "w-5 h-5", style: { color } };
    switch (iconName) {
      case 'code':
        return <Code {...props} />;
      case 'smartphone':
        return <Smartphone {...props} />;
      case 'palette':
        return <Palette {...props} />;
      case 'shopping-bag':
        return <ShoppingBag {...props} />;
      case 'database':
        return <Database {...props} />;
      case 'gauge':
        return <Gauge {...props} />;
      default:
        return <Code {...props} />;
    }
  };

  return (
    <section
      id="experience"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#07080d] overflow-hidden"
    >
      {/* Ambient background lighting */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-purple-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-[1300px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">

          {/* Left Column: Experience / My Journey */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="text-xs font-bold tracking-[0.2em] text-[#38bdf8] uppercase mb-2">
              EXPERIENCE
            </div>
            <h2 className="font-syne font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-8">
              My Journey
            </h2>

            {/* Vertical Timeline */}
            <div className="relative pl-6 sm:pl-8 space-y-8">
              {/* Vertical connecting line */}
              <div className="absolute left-[9px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-purple-500 via-indigo-500 to-cyan-500" />

              {EXPERIENCES_TIMELINE.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Glowing Node Dot */}
                  <div className="absolute -left-[27px] sm:-left-[31px] top-1 w-4 h-4 rounded-full bg-[#07080d] border-2 border-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.8)] flex items-center justify-center group-hover:scale-125 transition-transform">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  </div>

                  {/* Period Tag */}
                  <div className="text-xs font-mono font-semibold text-purple-300 mb-1">
                    {item.period}
                  </div>

                  {/* Role Title */}
                  <h3 className="font-syne font-bold text-base sm:text-lg text-white group-hover:text-cyan-300 transition-colors">
                    {item.role}
                  </h3>

                  {/* Company */}
                  <div className="text-xs font-medium text-white/50 mb-2">
                    {item.company}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-white/70 leading-relaxed max-w-md">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Services / What I Can Do For You */}
          <motion.div
            id="services"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="text-xs font-bold tracking-[0.2em] text-[#38bdf8] uppercase mb-2">
                  SERVICES
                </div>
                <h2 className="font-syne font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                  What I Can Do For You
                </h2>
              </div>

              {/* 3D Isometric Purple Cubes Graphic Decor */}
              <div className="hidden sm:flex items-center justify-center w-14 h-14 relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-700 to-indigo-500 shadow-[0_0_25px_rgba(147,51,234,0.6)] transform rotate-45 animate-pulse" />
                <div className="absolute w-6 h-6 rounded-lg bg-cyan-400/40 transform -rotate-12 blur-xs pointer-events-none" />
              </div>
            </div>

            {/* 2x3 Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SERVICES_LIST.map((srv) => (
                <div
                  key={srv.title}
                  className="p-4 sm:p-5 rounded-2xl bg-[#0f111f]/85 border border-white/10 hover:border-purple-500/40 backdrop-blur-md shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  {/* Icon Box */}
                  <div
                    className="w-10 h-10 rounded-xl bg-[#171a2e] border border-white/10 flex items-center justify-center mb-3 shadow-inner group-hover:scale-110 transition-transform"
                    style={{
                      boxShadow: `0 0 16px ${srv.accentColor}25`,
                    }}
                  >
                    {getServiceIcon(srv.icon, srv.accentColor)}
                  </div>

                  <h3 className="font-syne font-bold text-sm sm:text-base text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-xs text-white/60 leading-relaxed">
                    {srv.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
