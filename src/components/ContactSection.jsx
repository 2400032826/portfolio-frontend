import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { personalInfo } from '../data/portfolioData';
import { playSound } from '../utils/audio';

export default function ContactSection({ soundEnabled }) {
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
        setStatusMsg('Failed to send message. Please try again.');
      }
    } catch (_err) {
      setStatusMsg('Something went wrong. Please try again later.');
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#0f172a] text-white relative border-t-4 border-[#ef4444]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-2 font-mono text-xs text-[#2563eb] font-bold">
          <span>06</span>
          <span className="w-8 h-px bg-blue-500/50" />
          <span className="text-cyan-400">CONTACT</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-3 tracking-tight">
          LET'S BUILD <span className="text-cyan-400">SOMETHING.</span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-12 font-medium">
          Have an idea, project, or opportunity? My inbox is always open.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Direct Contact Info */}
          <div className="lg:col-span-5 space-y-4">
            <div
              onClick={() => handleCopy(personalInfo.email, 'email')}
              className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 flex items-center justify-between hover:border-cyan-400 transition cursor-pointer group"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-600/20 text-cyan-400 rounded-xl">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">EMAIL</div>
                  <div className="font-mono text-sm font-bold text-white group-hover:text-cyan-300 transition">
                    {personalInfo.email}
                  </div>
                </div>
              </div>
              {copiedField === 'email' ? <Check size={18} className="text-emerald-400" /> : <Copy size={16} className="text-slate-500 group-hover:text-cyan-400" />}
            </div>

            <div
              onClick={() => handleCopy(personalInfo.phone, 'phone')}
              className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 flex items-center justify-between hover:border-cyan-400 transition cursor-pointer group"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-600/20 text-cyan-400 rounded-xl">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">PHONE</div>
                  <div className="font-mono text-sm font-bold text-white group-hover:text-cyan-300 transition">
                    {personalInfo.phone}
                  </div>
                </div>
              </div>
              {copiedField === 'phone' ? <Check size={18} className="text-emerald-400" /> : <Copy size={16} className="text-slate-500 group-hover:text-cyan-400" />}
            </div>

            <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 flex items-center space-x-4">
              <div className="p-3 bg-blue-600/20 text-cyan-400 rounded-xl">
                <MapPin size={20} />
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase">LOCATION</div>
                <div className="font-mono text-sm font-bold text-white">{personalInfo.location}</div>
              </div>
            </div>

            <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="text-xs font-mono text-slate-400 font-bold uppercase">FIND ME ONLINE</div>
              <div className="flex space-x-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 p-3 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center space-x-2 text-slate-200 hover:text-cyan-400 hover:border-cyan-400 transition font-mono text-xs font-bold"
                >
                  <FaGithub size={16} />
                  <span>GitHub</span>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 p-3 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center space-x-2 text-slate-200 hover:text-cyan-400 hover:border-cyan-400 transition font-mono text-xs font-bold"
                >
                  <FaLinkedin size={16} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7 bg-slate-900 p-8 rounded-2xl border border-slate-800 relative">
            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <CheckCircle2 size={52} className="mx-auto text-emerald-400" />
                <h3 className="text-2xl font-bold text-white">Message Delivered!</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you for reaching out! Your message has been sent to Venkat, and he will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-slate-800 text-cyan-400 border border-slate-700 rounded-xl font-bold text-xs hover:bg-slate-700 transition cursor-pointer font-mono"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {statusMsg && (
                  <div className="p-3 bg-slate-800 border border-cyan-500/40 text-cyan-400 text-xs rounded-xl font-mono">
                    {statusMsg}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1 font-mono">YOUR NAME</label>
                  <input
                    required
                    type="text"
                    className="w-full bg-[#07090e] border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-cyan-400 text-xs sm:text-sm font-sans"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1 font-mono">YOUR EMAIL</label>
                  <input
                    required
                    type="email"
                    className="w-full bg-[#07090e] border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-cyan-400 text-xs sm:text-sm font-sans"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1 font-mono">SUBJECT / TOPIC</label>
                  <input
                    required
                    type="text"
                    className="w-full bg-[#07090e] border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-cyan-400 text-xs sm:text-sm font-sans"
                    placeholder="Project offer, opportunity, or inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1 font-mono">MESSAGE</label>
                  <textarea
                    required
                    rows="4"
                    className="w-full bg-[#07090e] border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-cyan-400 text-xs sm:text-sm font-sans"
                    placeholder="Tell me about your idea..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  disabled={loading}
                  type="submit"
                  className="w-full bg-[#2563eb] hover:bg-blue-600 text-white font-mono font-bold py-3.5 rounded-xl transition shadow-sm flex items-center justify-center space-x-2 text-xs sm:text-sm cursor-pointer"
                >
                  <Send size={16} />
                  <span>{loading ? 'SENDING...' : 'CONTACT ME'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
