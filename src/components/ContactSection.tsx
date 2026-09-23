import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  ArrowUp, 
  Send, 
  User, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Copy, 
  Check, 
  Sparkles 
} from 'lucide-react';
import { USER_INFO } from '../data/content';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Web Development',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const projectTypes = [
    'Web Development',
    'Full-Stack App',
    'UI/UX Design',
    'Mobile App',
    'College Portal',
    'Other Inquiry'
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(USER_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setStatusMessage('Please fill in all required fields.');
      return;
    }

    setStatus('submitting');
    setStatusMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: USER_INFO.web3formsKey || '9a514b20-9293-4247-8300-c28760880d06',
          name: formData.name,
          email: formData.email,
          subject: `[Portfolio Inquiry] ${formData.subject} - from ${formData.name}`,
          message: `Topic: ${formData.subject}\n\nSender Name: ${formData.name}\nSender Email: ${formData.email}\n\nMessage:\n${formData.message}`,
          from_name: `${formData.name} via Keerthivasan Portfolio`,
          replyto: formData.email,
          to_email: 'keerthivasanvbe@gmail.com',
        }),
      });

      const result = await response.json();

      if (response.status === 200 || result.success) {
        setStatus('success');
        setStatusMessage('Your message has been sent successfully! I will get back to you at ' + USER_INFO.email + ' shortly.');
        setFormData({ name: '', email: '', subject: 'Web Development', message: '' });
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (err: any) {
      console.error('Contact Form Error:', err);
      // If network fails or access key is restricted, provide fallback
      setStatus('error');
      setStatusMessage('Could not send automatically. You can send directly via your email client.');
    }
  };

  const handleMailtoFallback = () => {
    const subjectEncoded = encodeURIComponent(`Portfolio Inquiry: ${formData.subject || 'Project Discussion'}`);
    const bodyEncoded = encodeURIComponent(
      `Hi Keerthivasan,\n\nName: ${formData.name}\nEmail: ${formData.email}\nTopic: ${formData.subject}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:${USER_INFO.email}?subject=${subjectEncoded}&body=${bodyEncoded}`, '_blank');
  };

  return (
    <footer
      id="contact"
      className="relative w-full pt-16 sm:pt-24 pb-12 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#06070b] overflow-hidden border-t border-white/5"
    >
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-cyan-600/10 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-[1300px] mx-auto w-full">
        {/* Main 2-Column Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-12">
          
          {/* Left Column: CTA Info & 3D Envelope */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between h-full space-y-6"
          >
            <div>
              <div className="text-xs font-bold tracking-[0.2em] text-[#38bdf8] uppercase mb-2">
                LET'S WORK TOGETHER
              </div>
              <h2 className="font-syne font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-3">
                Have a project in mind?
              </h2>
              <p className="text-xs sm:text-sm text-white/65 leading-relaxed mb-6">
                I'm always open to discussing new opportunities, web applications, freelance projects, or institutional systems. Send me a message and I'll reply promptly to <span className="text-purple-300 font-mono">{USER_INFO.email}</span>.
              </p>
            </div>

            {/* 3D Holographic Envelope Banner */}
            <div className="relative w-full rounded-2xl bg-[#0e101d]/80 border border-white/10 p-5 backdrop-blur-md overflow-hidden flex items-center justify-between group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-cyan-500/10 pointer-events-none" />
              
              <div className="relative z-10">
                <span className="text-[11px] font-mono text-cyan-400 font-medium uppercase tracking-wider block mb-1">
                  Direct Inbox
                </span>
                <span className="font-syne font-bold text-white text-base sm:text-lg block">
                  keerthivasanvbe@gmail.com
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-white/10 hover:bg-white/15 text-white/90 border border-white/15 transition-all"
                >
                  {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedEmail ? 'Copied to clipboard' : 'Copy Email Address'}</span>
                </button>
              </div>

              <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 flex items-center justify-center">
                <div className="absolute inset-2 rounded-full bg-cyan-500/20 blur-xl pointer-events-none" />
                <img
                  src={USER_INFO.envelope3dImage || "/assets/img/envelope_3d.jpg"}
                  alt="3D Glowing Contact Mail"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(56,189,248,0.4)] group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Quick Contact Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {/* Phone */}
              <a
                href={`tel:${USER_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-[#0e101d]/60 border border-white/10 hover:border-cyan-500/40 text-xs sm:text-sm text-white/80 hover:text-white transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#171a2e] border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-white/40 uppercase tracking-wider">Phone / WhatsApp</div>
                  <div className="font-semibold text-white/90">{USER_INFO.displayPhone}</div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#0e101d]/60 border border-white/10 text-xs sm:text-sm text-white/80">
                <div className="w-8 h-8 rounded-lg bg-[#171a2e] border border-white/10 flex items-center justify-center text-emerald-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-white/40 uppercase tracking-wider">Location</div>
                  <div className="font-semibold text-white/90">Coimbatore, India</div>
                </div>
              </div>

              {/* GitHub */}
              <a
                href={USER_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-[#0e101d]/60 border border-white/10 hover:border-purple-500/40 text-xs sm:text-sm text-white/80 hover:text-white transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#171a2e] border border-white/10 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-white/40 uppercase tracking-wider">GitHub</div>
                  <div className="font-mono text-xs text-white/90 truncate">{USER_INFO.githubHandle}</div>
                </div>
              </a>

              {/* Email Client Direct Link */}
              <a
                href={`mailto:${USER_INFO.email}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-[#0e101d]/60 border border-white/10 hover:border-pink-500/40 text-xs sm:text-sm text-white/80 hover:text-white transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#171a2e] border border-white/10 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-white/40 uppercase tracking-wider">Mail Direct</div>
                  <div className="font-semibold text-white/90 truncate">{USER_INFO.email}</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Glass Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-3xl bg-[#0e101f]/90 border border-white/15 p-6 sm:p-8 md:p-10 backdrop-blur-xl shadow-2xl overflow-hidden">
              {/* Subtle inner ambient glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-syne font-bold text-xl sm:text-2xl text-white">
                      Send a Message
                    </h3>
                    <p className="text-xs text-white/50 mt-1">
                      Fill in the details below to reach Keerthivasan directly via email.
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <Sparkles className="w-5 h-5" />
                  </div>
                </div>

                {/* Form Content / Success View */}
                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-10 text-center flex flex-col items-center justify-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500/60 flex items-center justify-center text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.5)]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <h4 className="font-syne font-bold text-xl text-white">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-xs sm:text-sm text-white/70 max-w-md leading-relaxed">
                      Thank you for getting in touch. Your email has been forwarded to <strong className="text-white font-mono">keerthivasanvbe@gmail.com</strong>. I will get back to you shortly.
                    </p>

                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="mt-4 px-6 py-2.5 rounded-full text-xs font-semibold bg-[#1a1d33] hover:bg-[#252947] border border-white/20 text-white transition-all active:scale-95"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    {/* Error Banner */}
                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-300 flex items-center justify-between gap-3"
                      >
                        <div className="flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-400" />
                          <span>{statusMessage || 'An error occurred while sending.'}</span>
                        </div>
                        <button
                          type="button"
                          onClick={handleMailtoFallback}
                          className="px-3 py-1 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-[11px] font-semibold text-white whitespace-nowrap"
                        >
                          Send via Mail App
                        </button>
                      </motion.div>
                    )}

                    {/* Name and Email Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-semibold text-white/80 mb-1.5">
                          Your Name <span className="text-purple-400">*</span>
                        </label>
                        <div className="relative flex items-center">
                          <div className="absolute left-3.5 text-white/40 pointer-events-none">
                            <User className="w-4 h-4" />
                          </div>
                          <input
                            type="text"
                            required
                            placeholder="e.g. John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl bg-[#07080f] border border-white/15 focus:border-purple-500 focus:shadow-[0_0_15px_rgba(168,85,247,0.3)] text-xs sm:text-sm text-white placeholder-white/30 transition-all"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-semibold text-white/80 mb-1.5">
                          Your Email Address <span className="text-purple-400">*</span>
                        </label>
                        <div className="relative flex items-center">
                          <div className="absolute left-3.5 text-white/40 pointer-events-none">
                            <Mail className="w-4 h-4" />
                          </div>
                          <input
                            type="email"
                            required
                            placeholder="e.g. john@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl bg-[#07080f] border border-white/15 focus:border-purple-500 focus:shadow-[0_0_15px_rgba(168,85,247,0.3)] text-xs sm:text-sm text-white placeholder-white/30 transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Topic / Project Type Selection */}
                    <div>
                      <label className="block text-xs font-semibold text-white/80 mb-2">
                        I'm interested in:
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {projectTypes.map((type) => {
                          const isSelected = formData.subject === type;
                          return (
                            <button
                              key={type}
                              type="button"
                              onClick={() => setFormData({ ...formData, subject: type })}
                              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                                isSelected
                                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white border border-purple-400/50 shadow-[0_0_12px_rgba(168,85,247,0.4)]'
                                  : 'bg-[#141629] text-white/60 hover:text-white border border-white/10 hover:border-white/20'
                              }`}
                            >
                              {type}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Message Area */}
                    <div>
                      <label className="block text-xs font-semibold text-white/80 mb-1.5">
                        Your Message <span className="text-purple-400">*</span>
                      </label>
                      <div className="relative">
                        <textarea
                          required
                          rows={4}
                          placeholder="Tell me about your project, timeline, budget, or general questions..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full p-3.5 rounded-xl bg-[#07080f] border border-white/15 focus:border-purple-500 focus:shadow-[0_0_15px_rgba(168,85,247,0.3)] text-xs sm:text-sm text-white placeholder-white/30 transition-all resize-none"
                        />
                      </div>
                    </div>

                    {/* Submit Button & Target Note */}
                    <div className="pt-1 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <span className="text-[11px] text-white/40 text-center sm:text-left">
                        Direct delivery to <strong className="text-white/70">keerthivasanvbe@gmail.com</strong>
                      </span>

                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-[0_0_20px_rgba(124,58,237,0.5)] hover:shadow-[0_0_30px_rgba(124,58,237,0.7)] transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {status === 'submitting' ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin text-white" />
                            <span>Sending Email...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send className="w-4 h-4 text-cyan-200" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Bar with Copyright & Scroll to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} Keerthivasan V. All rights reserved.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-[#111322] hover:bg-[#1a1d36] border border-white/15 hover:border-purple-500/50 flex items-center justify-center text-white/80 hover:text-white transition-all shadow-md active:scale-95 group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
