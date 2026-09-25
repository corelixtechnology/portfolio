import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import gsap from 'gsap';
import { ArrowUp, ArrowUpRight, Mail, Phone, MessageSquare, Send, CheckCircle2, Copy, Check } from 'lucide-react';
import { HLS_STREAM_URL, SOCIAL_LINKS, USER_INFO } from '../data/content';

export const ContactFooter: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [selectedServices, setSelectedServices] = useState<string[]>(['UI/UX Design', 'Full-Stack App']);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copiedEmail, setCopiedEmail] = useState(false);

  const serviceOptions = [
    "UI/UX Design",
    "Full-Stack App",
    "Frontend Engineering",
    "Spring Boot & APIs",
    "Hospital System",
    "Design System"
  ];

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  // Initialize HLS for Footer Background
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;
    if (Hls.isSupported()) {
      hls = new Hls({ enableWorker: true, lowLatencyMode: true });
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
      if (hls) hls.destroy();
    };
  }, []);

  // GSAP Marquee Animation
  useEffect(() => {
    if (!marqueeRef.current) return;
    const marqueeTrack = marqueeRef.current.querySelector('.marquee-track');
    if (!marqueeTrack) return;

    const tween = gsap.to(marqueeTrack, {
      xPercent: -50,
      duration: 35,
      ease: "none",
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(USER_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: USER_INFO.web3formsKey,
          name: formData.name,
          email: formData.email,
          subject: `[Portfolio Inquiry] from ${formData.name}`,
          message: `Services Requested: ${selectedServices.join(', ')}\n\nMessage:\n${formData.message}`,
          from_name: `${formData.name} (Portfolio)`,
          replyto: formData.email
        })
      });

      const result = await response.json();
      if (result.success) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const marqueeText = "LET'S BUILD SOMETHING REMARKABLE • CRAFTING FULL-STACK EXCELLENCE • AVAILABLE FOR PROJECTS • ".repeat(6);

  return (
    <footer
      id="contact"
      className="relative bg-[#09090c] pt-16 sm:pt-24 md:pt-32 pb-8 md:pb-12 overflow-hidden border-t border-white/10"
    >
      {/* Background Video with heavy obsidian overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-[#09090c]/90 backdrop-blur-[3px]" />
      </div>

      {/* Tubik Marquee Banner */}
      <div
        ref={marqueeRef}
        className="relative z-10 w-full overflow-hidden whitespace-nowrap py-3.5 sm:py-4 border-y border-white/10 bg-white/[0.02] backdrop-blur-md mb-12 sm:mb-20 select-none"
      >
        <div className="marquee-track inline-flex items-center text-xs sm:text-sm font-extrabold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-white/40">
          <span className="pr-6">{marqueeText}</span>
          <span className="pr-6">{marqueeText}</span>
        </div>
      </div>

      {/* Main Contact Grid */}
      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 mb-16 sm:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Tubik Display Title & Contact Cards */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-6 h-px bg-[#C9C1FF]" />
              <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#C9C1FF]">
                START A PROJECT
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-syne font-extrabold tracking-tight text-white mb-4 sm:mb-6">
              Have a project <span className="font-serif italic font-normal text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#C9C1FF]">in mind?</span>
            </h2>

            <p className="text-sm sm:text-base text-white/60 mb-8 sm:mb-10 leading-relaxed font-normal">
              Whether you need end-to-end full-stack web application development, a high-converting UI/UX redesign, or scalable backend systems, let's connect.
            </p>

            {/* Quick Contact Cards */}
            <div className="flex flex-col gap-3">
              {/* Direct Copy Email Card */}
              <div
                onClick={handleCopyEmail}
                className="flex items-center justify-between p-4 rounded-2xl bg-[#14141d] border border-white/10 hover:border-white/30 transition-all cursor-pointer group active:scale-[0.99]"
              >
                <div className="flex items-center gap-3.5 min-w-0 flex-1">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#C9C1FF] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-white/40 block">
                      Direct Email (Click to Copy)
                    </span>
                    <span className="text-sm text-white font-mono block truncate">
                      {USER_INFO.email}
                    </span>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-bold text-white flex items-center gap-1 shrink-0 ml-2">
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#00F59B]" />
                      <span className="text-[#00F59B]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-white/60" />
                      <span className="text-white/60">Copy</span>
                    </>
                  )}
                </div>
              </div>

              {/* WhatsApp Card */}
              <a
                href={USER_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-[#14141d] border border-white/10 hover:border-white/30 transition-all group active:scale-[0.99]"
              >
                <div className="flex items-center gap-3.5 min-w-0 flex-1">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#00F59B] shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-white/40 block">
                      WhatsApp Chat
                    </span>
                    <span className="text-sm text-white font-mono block truncate">
                      {USER_INFO.phone}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-2" />
              </a>

              {/* Phone Card */}
              <a
                href={`tel:${USER_INFO.phone}`}
                className="flex items-center justify-between p-4 rounded-2xl bg-[#14141d] border border-white/10 hover:border-white/30 transition-all group active:scale-[0.99]"
              >
                <div className="flex items-center gap-3.5 min-w-0 flex-1">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#C9C1FF] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-white/40 block">
                      Direct Phone
                    </span>
                    <span className="text-sm text-white font-mono block truncate">
                      {USER_INFO.phone}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-2" />
              </a>
            </div>
          </div>

          {/* Right Column: Tubik Interactive Inquiry Form */}
          <div className="lg:col-span-7 p-6 sm:p-10 rounded-[32px] bg-[#14141d] border border-white/10 shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-syne font-bold text-white mb-2">
              Send an Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-white/50 mb-6 font-normal">
              Select the capabilities you require and describe your project goals.
            </p>

            {/* Service Chips */}
            <div className="mb-6">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-white/50 mb-2.5">
                What are you looking to build?
              </label>
              <div className="flex flex-wrap gap-2">
                {serviceOptions.map((srv) => {
                  const isSelected = selectedServices.includes(srv);
                  return (
                    <button
                      key={srv}
                      type="button"
                      onClick={() => toggleService(srv)}
                      className={`px-3.5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                        isSelected
                          ? "bg-[#6344f5] text-white border border-[#6344f5] shadow-lg shadow-[#6344f5]/30"
                          : "bg-white/[0.03] text-white/60 border border-white/10 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      {srv}
                    </button>
                  );
                })}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div>
                <label htmlFor="name" className="block text-[11px] font-bold uppercase tracking-wider text-white/50 mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="e.g. Elena Rostova"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-2xl bg-[#09090c] border border-white/10 focus:border-[#6344f5] focus:ring-1 focus:ring-[#6344f5] text-white placeholder:text-white/30 text-sm transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[11px] font-bold uppercase tracking-wider text-white/50 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="e.g. elena@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-2xl bg-[#09090c] border border-white/10 focus:border-[#6344f5] focus:ring-1 focus:ring-[#6344f5] text-white placeholder:text-white/30 text-sm transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[11px] font-bold uppercase tracking-wider text-white/50 mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Tell me about your product requirements, timeline, or design challenges..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-2xl bg-[#09090c] border border-white/10 focus:border-[#6344f5] focus:ring-1 focus:ring-[#6344f5] text-white placeholder:text-white/30 text-sm transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full group relative inline-flex items-center justify-center rounded-full bg-white hover:bg-[#C9C1FF] text-[#09090c] py-4 px-8 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] shadow-xl shadow-white/5"
              >
                {formStatus === 'submitting' ? (
                  <span>Sending Your Request...</span>
                ) : formStatus === 'success' ? (
                  <div className="flex items-center gap-2 text-[#09090c]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Inquiry Sent Successfully!</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <div className="roll-link">
                      <div className="roll-link-inner">
                        <span className="roll-link-line">Send Project Inquiry</span>
                        <span className="roll-link-line text-[#09090c]">Send Project Inquiry</span>
                      </div>
                    </div>
                    <Send className="w-4 h-4" />
                  </div>
                )}
              </button>

              {formStatus === 'success' && (
                <p className="text-xs text-[#00F59B] text-center mt-2 font-medium">
                  Thank you! Your project request has been delivered directly to Keerthivasan.
                </p>
              )}

              {formStatus === 'error' && (
                <p className="text-xs text-rose-400 text-center mt-2 font-medium">
                  Failed to send message. Please reach out directly via {USER_INFO.email}.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Tubik Footer Bottom Bar */}
      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Availability Badge */}
        <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs font-bold uppercase tracking-wider text-white/80">
          <span className="w-2 h-2 rounded-full bg-[#00F59B] animate-pulse" />
          <span>Available for global client projects</span>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-7 text-xs font-bold uppercase tracking-wider text-white/50">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <span>{link.name}</span>
              <ArrowUpRight className="w-3 h-3 text-white/30" />
            </a>
          ))}
        </div>

        {/* Copyright & Scroll To Top */}
        <div className="flex items-center gap-4 text-xs font-medium text-white/40">
          <span>© 2026 {USER_INFO.name}.</span>
          <button
            type="button"
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 hover:bg-white hover:text-[#09090c] text-white flex items-center justify-center transition-all duration-300 active:scale-95"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
