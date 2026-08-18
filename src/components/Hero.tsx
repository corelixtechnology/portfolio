import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import gsap from 'gsap';
import { HERO_ROLES, HLS_STREAM_URL, USER_INFO } from '../data/content';

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState<number>(0);

  // Initialize HLS.js video stream
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
      });
      hls.loadSource(HLS_STREAM_URL);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = HLS_STREAM_URL;
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(() => {});
      });
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, []);

  // Role cycler every 2s
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % HERO_ROLES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // GSAP Entrance Timeline
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".name-reveal",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.1 }
      )
      .fromTo(
        ".blur-in",
        { opacity: 0, filter: "blur(10px)", y: 20 },
        { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, stagger: 0.15 },
        0.3
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToWorks = () => {
    const el = document.getElementById("work");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-bg px-4 sm:px-6 pt-24 pb-16"
    >
      {/* Background HLS Video */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover opacity-60"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/25" />
        {/* Subtle radial gradient focus */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,10,0.6)_100%)]" />
        {/* Bottom fade to page bg */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg via-bg/80 to-transparent" />
      </div>

      {/* Hero Content (Centered, z-10) */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Eyebrow */}
        <div className="blur-in inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-muted uppercase tracking-[0.3em] mb-8 font-medium backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{USER_INFO.eyebrow}</span>
        </div>

        {/* Name */}
        <h1 className="name-reveal text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-6 selection:text-white">
          {USER_INFO.name}
        </h1>

        {/* Role line */}
        <div className="blur-in text-lg sm:text-xl md:text-2xl text-text-primary/90 font-light mb-5 flex items-center justify-center flex-wrap gap-x-2">
          <span>A dedicated</span>
          <span
            key={roleIndex}
            className="font-display italic text-text-primary animate-role-fade-in inline-block text-xl sm:text-2xl md:text-3xl underline decoration-stroke underline-offset-4 decoration-1"
          >
            {HERO_ROLES[roleIndex]}
          </span>
          <span>crafting digital systems.</span>
        </div>

        {/* Description */}
        <p className="blur-in text-sm md:text-base text-muted max-w-lg mb-10 leading-relaxed">
          {USER_INFO.bio}
        </p>

        {/* CTA Buttons */}
        <div className="blur-in inline-flex flex-wrap items-center justify-center gap-4">
          {/* 1. "Explore Projects": Solid button */}
          <button
            type="button"
            onClick={scrollToWorks}
            className="relative group rounded-full text-sm px-7 py-3.5 font-medium transition-all duration-300 hover:scale-105 focus:outline-none"
          >
            {/* Accent gradient ring on hover */}
            <span
              className="absolute -inset-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)",
              }}
            />
            {/* Button Surface */}
            <span className="relative z-10 inline-block rounded-full bg-text-primary text-bg group-hover:bg-bg group-hover:text-text-primary px-7 py-3.5 -mx-7 -my-3.5 transition-colors duration-300 font-semibold">
              Explore Projects
            </span>
          </button>

          {/* 2. "Let's Connect": Outlined button */}
          <button
            type="button"
            onClick={scrollToContact}
            className="relative group rounded-full text-sm px-7 py-3.5 font-medium transition-all duration-300 hover:scale-105 focus:outline-none"
          >
            {/* Accent gradient border ring on hover */}
            <span
              className="absolute -inset-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)",
              }}
            />
            {/* Button Surface */}
            <span className="relative z-10 inline-block rounded-full border-2 border-stroke bg-bg text-text-primary group-hover:border-transparent px-7 py-3.5 -mx-7 -my-3.5 transition-colors duration-300">
              Let&apos;s Connect
            </span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 select-none pointer-events-none">
        <span className="text-[10px] sm:text-xs text-muted uppercase tracking-[0.25em]">
          SCROLL
        </span>
        <div className="w-px h-10 bg-stroke/70 relative overflow-hidden rounded-full">
          <div
            className="w-full h-1/2 bg-text-primary/90 animate-scroll-down rounded-full"
            style={{
              boxShadow: "0 0 6px rgba(255, 255, 255, 0.4)"
            }}
          />
        </div>
      </div>
    </section>
  );
};
