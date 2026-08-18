import React, { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Copy, Check } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { personalInfo } from '../data/portfolioData';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');
  const [copiedField, setCopiedField] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('section-visible');
      },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text).catch(() => {});
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg('');
    try {
      const res = await fetch(personalInfo.formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
        setStatusMsg('Message delivered successfully!');
      } else {
        setStatusMsg('Failed to send. Please try again.');
      }
    } catch {
      setStatusMsg('Something went wrong. Please try again later.');
    }
    setLoading(false);
  };

  const inputStyle = {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.07)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: '12px',
    padding: '12px 14px',
    color: '#ffffff',
    fontSize: '14px',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="section-hidden py-24 px-6 relative"
      style={{ backgroundColor: '#0f172a', borderTop: '4px solid #ef4444' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center space-x-3 mb-3">
          <span className="text-xs font-mono font-bold" style={{ color: '#2563eb' }}>06</span>
          <span className="w-8 h-px" style={{ backgroundColor: '#1e40af' }} />
          <span className="text-xs font-mono font-bold" style={{ color: '#2563eb' }}>CONTACT</span>
        </div>

        <h2
          className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-3"
          style={{ color: '#ffffff' }}
        >
          Let&apos;s build something{' '}
          <span style={{ color: '#2563eb' }}>together.</span>
        </h2>
        <p className="text-base mb-12" style={{ color: '#94a3b8' }}>
          Have an idea, project, or opportunity? I&apos;d love to hear from you.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left — Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {/* Email */}
            <button
              onClick={() => handleCopy(personalInfo.email, 'email')}
              className="w-full text-left flex items-center justify-between p-5 rounded-2xl transition-all duration-200 cursor-pointer group"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#2563eb')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
            >
              <div className="flex items-center space-x-4">
                <div
                  className="p-2.5 rounded-xl"
                  style={{ backgroundColor: 'rgba(37,99,235,0.15)', color: '#60a5fa' }}
                >
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase mb-0.5" style={{ color: '#64748b' }}>EMAIL</div>
                  <div className="text-sm font-bold" style={{ color: '#e2e8f0' }}>
                    {personalInfo.email}
                  </div>
                </div>
              </div>
              {copiedField === 'email'
                ? <Check size={16} style={{ color: '#34d399' }} />
                : <Copy size={15} style={{ color: '#475569' }} />}
            </button>

            {/* Location */}
            <div
              className="flex items-center space-x-4 p-5 rounded-2xl"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <div
                className="p-2.5 rounded-xl"
                style={{ backgroundColor: 'rgba(37,99,235,0.15)', color: '#60a5fa' }}
              >
                <MapPin size={18} />
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase mb-0.5" style={{ color: '#64748b' }}>LOCATION</div>
                <div className="text-sm font-bold" style={{ color: '#e2e8f0' }}>{personalInfo.location}</div>
              </div>
            </div>

            {/* Social Links */}
            <div
              className="p-5 rounded-2xl space-y-3"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <div className="text-[10px] font-mono uppercase font-bold" style={{ color: '#64748b' }}>
                FIND ME ONLINE
              </div>
              <div className="flex space-x-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 p-3 rounded-xl font-bold text-xs font-mono transition-all duration-200"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#cbd5e1',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#60a5fa';
                    e.currentTarget.style.borderColor = '#2563eb';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#cbd5e1';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  }}
                >
                  <FaGithub size={15} />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 p-3 rounded-xl font-bold text-xs font-mono transition-all duration-200"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#cbd5e1',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#60a5fa';
                    e.currentTarget.style.borderColor = '#2563eb';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#cbd5e1';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  }}
                >
                  <FaLinkedin size={15} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div
            className="lg:col-span-3 p-8 rounded-2xl"
            style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 size={52} className="mx-auto" style={{ color: '#34d399' }} />
                <h3 className="text-2xl font-bold" style={{ color: '#ffffff' }}>Message Delivered!</h3>
                <p className="text-sm" style={{ color: '#94a3b8' }}>
                  Thank you for reaching out. Venkat will get back to you shortly.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }); }}
                  className="mt-4 px-6 py-2.5 rounded-xl font-bold text-xs font-mono transition cursor-pointer"
                  style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: '#60a5fa', border: '1px solid rgba(255,255,255,0.12)' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {statusMsg && (
                  <div
                    className="p-3 rounded-xl text-xs font-mono"
                    style={{ backgroundColor: 'rgba(37,99,235,0.15)', border: '1px solid rgba(37,99,235,0.3)', color: '#93c5fd' }}
                  >
                    {statusMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold font-mono mb-2" style={{ color: '#94a3b8' }}>
                      YOUR NAME
                    </label>
                    <input
                      required
                      type="text"
                      style={inputStyle}
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onFocus={(e) => (e.target.style.borderColor = '#2563eb')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold font-mono mb-2" style={{ color: '#94a3b8' }}>
                      YOUR EMAIL
                    </label>
                    <input
                      required
                      type="email"
                      style={inputStyle}
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onFocus={(e) => (e.target.style.borderColor = '#2563eb')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold font-mono mb-2" style={{ color: '#94a3b8' }}>
                    SUBJECT
                  </label>
                  <input
                    required
                    type="text"
                    style={inputStyle}
                    placeholder="Project, opportunity, or inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    onFocus={(e) => (e.target.style.borderColor = '#2563eb')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold font-mono mb-2" style={{ color: '#94a3b8' }}>
                    MESSAGE
                  </label>
                  <textarea
                    required
                    rows={5}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    placeholder="Tell me about your idea..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={(e) => (e.target.style.borderColor = '#2563eb')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
                  />
                </div>

                <button
                  disabled={loading}
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer hover:-translate-y-0.5 disabled:opacity-60"
                  style={{ backgroundColor: '#2563eb', color: '#ffffff' }}
                >
                  <Send size={16} />
                  <span>{loading ? 'SENDING...' : 'SEND MESSAGE'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
