import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import gsap from 'gsap';
import { ArrowUp, ArrowUpRight, Mail, Phone, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { HLS_STREAM_URL, SOCIAL_LINKS, USER_INFO } from '../data/content';

export const ContactFooter: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Initialize HLS for Footer Background (flipped vertically)
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

  // GSAP Marquee Animation
  useEffect(() => {
    if (!marqueeRef.current) return;

    const marqueeTrack = marqueeRef.current.querySelector('.marquee-track');
    if (!marqueeTrack) return;

    const tween = gsap.to(marqueeTrack, {
      xPercent: -50,
      duration: 40,
      ease: "none",
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, []);

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
          message: formData.message,
          from_name: `${formData.name} (Portfolio Inquiry)`
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

  const marqueeText = "BUILDING SCALABLE WEB EXPERIENCES • CRAFTING HIGH-PERFORMANCE APPS • ".repeat(6);

  return (
    <footer
      id="contact"
      className="relative bg-bg pt-16 md:pt-24 pb-8 md:pb-12 overflow-hidden border-t border-stroke"
    >
      {/* Background Video (Flipped Vertically scale-y-[-1] + Heavier overlay) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover scale-y-[-1] opacity-35"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-bg to-transparent" />
      </div>

      {/* GSAP Marquee Banner */}
      <div
        ref={marqueeRef}
        className="relative z-10 w-full overflow-hidden whitespace-nowrap py-4 border-y border-stroke/40 bg-surface/50 backdrop-blur-md mb-16 select-none"
      >
        <div className="marquee-track inline-flex items-center text-xs sm:text-sm font-medium tracking-[0.3em] uppercase text-muted/80">
          <span className="pr-4">{marqueeText}</span>
          <span className="pr-4">{marqueeText}</span>
        </div>
      </div>

      {/* Main Contact Grid */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading & Quick Contact Cards */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium">
                Get In Touch
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-text-primary mb-5">
              Let&apos;s build <span className="font-display italic text-5xl sm:text-6xl md:text-7xl">together</span>
            </h2>

            <p className="text-sm md:text-base text-muted mb-8 leading-relaxed">
              Have a project in mind, an engineering role, or a design inquiry? Let&apos;s start a conversation.
            </p>

            {/* Quick Cards */}
            <div className="flex flex-col gap-3.5">
              {/* Email Card */}
              <a
                href={`mailto:${USER_INFO.email}`}
                className="flex items-center justify-between p-4 rounded-2xl bg-surface/70 border border-stroke hover:border-white/20 transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-bg border border-stroke flex items-center justify-center text-sky-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-muted font-medium block">
                      Direct Email
                    </span>
                    <span className="text-xs sm:text-sm text-text-primary group-hover:text-white font-mono">
                      {USER_INFO.email}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* WhatsApp Card */}
              <a
                href={USER_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-surface/70 border border-stroke hover:border-white/20 transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-bg border border-stroke flex items-center justify-center text-emerald-400">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-muted font-medium block">
                      WhatsApp Quick Chat
                    </span>
                    <span className="text-xs sm:text-sm text-text-primary group-hover:text-white font-mono">
                      {USER_INFO.phone}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Phone Card */}
              <a
                href={`tel:${USER_INFO.phone}`}
                className="flex items-center justify-between p-4 rounded-2xl bg-surface/70 border border-stroke hover:border-white/20 transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-bg border border-stroke flex items-center justify-center text-purple-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-muted font-medium block">
                      Direct Line
                    </span>
                    <span className="text-xs sm:text-sm text-text-primary group-hover:text-white font-mono">
                      {USER_INFO.phone}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Web3Forms Contact Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-surface/60 border border-stroke backdrop-blur-md">
            <h3 className="text-xl font-medium text-text-primary mb-2 flex items-center gap-2">
              <span>Send a Message</span>
            </h3>
            <p className="text-xs sm:text-sm text-muted mb-6">
              Fill in your details below and your message will be dispatched directly to my inbox.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="form-name" className="block text-xs font-medium text-muted uppercase tracking-wider mb-2">
                  Your Name
                </label>
                <input
                  id="form-name"
                  type="text"
                  required
                  placeholder="e.g. Alex Johnson"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-bg border border-stroke focus:border-sky-400 focus:outline-none text-sm text-text-primary placeholder:text-muted/50 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="form-email" className="block text-xs font-medium text-muted uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <input
                  id="form-email"
                  type="email"
                  required
                  placeholder="e.g. alex@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-bg border border-stroke focus:border-sky-400 focus:outline-none text-sm text-text-primary placeholder:text-muted/50 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="form-message" className="block text-xs font-medium text-muted uppercase tracking-wider mb-2">
                  Your Message
                </label>
                <textarea
                  id="form-message"
                  required
                  rows={4}
                  placeholder="Describe your project, timeline, or inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-bg border border-stroke focus:border-sky-400 focus:outline-none text-sm text-text-primary placeholder:text-muted/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full relative group rounded-full text-sm font-medium py-3.5 transition-all duration-300 hover:scale-[1.01] focus:outline-none"
              >
                <span
                  className="absolute -inset-[1px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)",
                  }}
                />
                <span className="relative z-10 w-full inline-flex items-center justify-center gap-2 rounded-full bg-text-primary text-bg group-hover:bg-bg group-hover:text-text-primary py-3.5 px-6 transition-colors font-semibold">
                  {formStatus === 'submitting' ? (
                    <span>Sending Message...</span>
                  ) : formStatus === 'success' ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Message Sent Successfully!</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </span>
              </button>

              {formStatus === 'success' && (
                <p className="text-xs text-emerald-400 text-center mt-2">
                  Thank you! Your message has been delivered. I will respond promptly.
                </p>
              )}

              {formStatus === 'error' && (
                <p className="text-xs text-rose-400 text-center mt-2">
                  Failed to send message. Please reach out directly via email or WhatsApp.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 pt-8 border-t border-stroke/60 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Availability Badge */}
        <div className="flex items-center gap-3 bg-surface/80 border border-stroke px-4 py-2 rounded-full">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-medium text-text-primary/90">
            Available for full-time & freelance projects
          </span>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="hover:text-text-primary transition-colors py-1 flex items-center gap-1 group"
            >
              <span>{link.name}</span>
              <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
            </a>
          ))}
        </div>

        {/* Copyright & Scroll To Top */}
        <div className="flex items-center gap-4 text-xs text-muted">
          <span>© 2026 {USER_INFO.name}. All rights reserved.</span>
          <button
            type="button"
            onClick={scrollToTop}
            className="w-8 h-8 rounded-full bg-surface border border-stroke hover:border-white/30 flex items-center justify-center text-muted hover:text-white transition-all"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
