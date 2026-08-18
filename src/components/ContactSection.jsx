import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { personalInfo } from '../data/portfolioData';
import { playSound } from '../utils/audio';

export default function ContactSection({ soundEnabled, setCursorState }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, field) => {
    playSound('click', soundEnabled);
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    playSound('click', soundEnabled);
    setLoading(true);
    setStatusMsg('');

    try {
      const response = await fetch(personalInfo.formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setStatusMsg('Message delivered successfully!');
      } else {
        setStatusMsg('Transmission failed. Please try again.');
      }
    } catch (_err) {
      setStatusMsg('Network error. Please try again later.');
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center space-x-3 mb-2 font-mono text-xs text-cyan-400">
        <span>05</span>
        <span className="w-8 h-px bg-cyan-400/50" />
        <span>TRANSMISSION // CONTACT</span>
      </div>

      <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
        HAVE AN IDEA? <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400">
          LET'S BUILD SOMETHING.
        </span>
      </h2>
      <p className="text-slate-400 text-sm sm:text-base max-w-xl mb-12">
        Whether you have a project, an internship opportunity, or technical questions — my communication link is always open.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Information Cards */}
        <div className="lg:col-span-5 space-y-4">
          {/* Email Card */}
          <div
            onClick={() => handleCopy(personalInfo.email, 'email')}
            onMouseEnter={() => setCursorState({ type: 'hover', text: 'COPY' })}
            onMouseLeave={() => setCursorState({ type: 'default', text: '' })}
            className="cyber-glass p-5 rounded-2xl border border-cyan-500/20 flex items-center justify-between hover:border-cyan-400/50 transition cursor-pointer group"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl">
                <Mail size={20} />
              </div>
              <div>
                <div className="text-[10px] font-mono text-slate-400 uppercase">EMAIL_ADDRESS</div>
                <div className="font-mono text-sm font-bold text-white group-hover:text-cyan-300 transition">
                  {personalInfo.email}
                </div>
              </div>
            </div>
            {copiedField === 'email' ? <Check size={18} className="text-emerald-400" /> : <Copy size={16} className="text-slate-500 group-hover:text-cyan-400" />}
          </div>

          {/* Phone Card */}
          <div
            onClick={() => handleCopy(personalInfo.phone, 'phone')}
            onMouseEnter={() => setCursorState({ type: 'hover', text: 'COPY' })}
            onMouseLeave={() => setCursorState({ type: 'default', text: '' })}
            className="cyber-glass p-5 rounded-2xl border border-cyan-500/20 flex items-center justify-between hover:border-cyan-400/50 transition cursor-pointer group"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl">
                <Phone size={20} />
              </div>
              <div>
                <div className="text-[10px] font-mono text-slate-400 uppercase">PHONE_NUMBER</div>
                <div className="font-mono text-sm font-bold text-white group-hover:text-cyan-300 transition">
                  {personalInfo.phone}
                </div>
              </div>
            </div>
            {copiedField === 'phone' ? <Check size={18} className="text-emerald-400" /> : <Copy size={16} className="text-slate-500 group-hover:text-cyan-400" />}
          </div>

          {/* Location Card */}
          <div className="cyber-glass p-5 rounded-2xl border border-cyan-500/20 flex items-center space-x-4">
            <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl">
              <MapPin size={20} />
            </div>
            <div>
              <div className="text-[10px] font-mono text-slate-400 uppercase">LOCATION</div>
              <div className="font-mono text-sm font-bold text-white">{personalInfo.location}</div>
            </div>
          </div>

          {/* Online Networks */}
          <div className="cyber-glass p-6 rounded-2xl border border-purple-500/20 space-y-3">
            <div className="text-[10px] font-mono text-slate-400 uppercase">// ONLINE_PROFILES</div>
            <div className="flex space-x-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => setCursorState({ type: 'hover', text: 'GITHUB' })}
                onMouseLeave={() => setCursorState({ type: 'default', text: '' })}
                className="flex-1 p-3 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center space-x-2 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition"
              >
                <FaGithub size={18} />
                <span className="font-mono text-xs">GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => setCursorState({ type: 'hover', text: 'LINKEDIN' })}
                onMouseLeave={() => setCursorState({ type: 'default', text: '' })}
                className="flex-1 p-3 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center space-x-2 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition"
              >
                <FaLinkedin size={18} />
                <span className="font-mono text-xs">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Formspree Contact Form */}
        <div className="lg:col-span-7 cyber-glass p-8 rounded-2xl border border-cyan-500/30 relative">
          {submitted ? (
            <div className="py-12 text-center space-y-4 font-mono">
              <CheckCircle2 size={56} className="mx-auto text-emerald-400 animate-bounce" />
              <h3 className="text-2xl font-bold text-white">TRANSMISSION DELIVERED!</h3>
              <p className="text-slate-400 text-sm max-w-md mx-auto">
                Thank you for reaching out. Your message has been encrypted and sent directly to Venkat.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 bg-slate-800 text-cyan-400 border border-cyan-500/30 rounded-xl font-bold text-xs hover:bg-slate-700 transition cursor-pointer"
              >
                [TRANSMIT ANOTHER MESSAGE]
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-mono">
              {statusMsg && (
                <div className="p-3 bg-slate-800 border border-cyan-500/40 text-cyan-400 text-xs rounded-xl">
                  {statusMsg}
                </div>
              )}

              <div>
                <label className="block text-xs text-slate-300 mb-1">YOUR NAME</label>
                <input
                  required
                  type="text"
                  className="w-full bg-[#07090e] border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-cyan-400 text-xs sm:text-sm font-mono"
                  placeholder="e.g. Alex Mercer"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1">YOUR EMAIL</label>
                <input
                  required
                  type="email"
                  className="w-full bg-[#07090e] border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-cyan-400 text-xs sm:text-sm font-mono"
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1">SUBJECT / TOPIC</label>
                <input
                  required
                  type="text"
                  className="w-full bg-[#07090e] border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-cyan-400 text-xs sm:text-sm font-mono"
                  placeholder="Project Collaboration / Opportunity"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1">TRANSMISSION DETAILS</label>
                <textarea
                  required
                  rows="4"
                  className="w-full bg-[#07090e] border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-cyan-400 text-xs sm:text-sm font-mono"
                  placeholder="Describe your idea or request..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                disabled={loading}
                type="submit"
                onMouseEnter={() => setCursorState({ type: 'hover', text: 'SEND' })}
                onMouseLeave={() => setCursorState({ type: 'default', text: '' })}
                className="w-full bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-cyan-300 hover:to-purple-400 text-slate-950 font-bold py-3.5 rounded-xl transition shadow-[0_0_20px_rgba(0,240,255,0.4)] flex items-center justify-center space-x-2 text-xs sm:text-sm cursor-pointer"
              >
                <Send size={16} />
                <span>{loading ? 'TRANSMITTING...' : 'TRANSMIT MESSAGE'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
