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
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('section-visible'); },
      { threshold: 0.06 }
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
      } else {
        setStatusMsg('Failed to send. Please try again.');
      }
    } catch {
      setStatusMsg('Something went wrong. Please try again later.');
    }
    setLoading(false);
  };

  const inputBase = {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.07)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: '12px',
    padding: '12px 14px',
    color: '#ffffff',
    fontSize: '16px', // 16px prevents iOS auto-zoom on focus
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'border-color 0.2s',
    WebkitAppearance: 'none',
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="section-hidden contact-bg py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative"
      style={{ borderTop: '4px solid #ef4444' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <div className="flex items-center space-x-3 mb-3">
          <span className="text-xs font-mono font-bold" style={{ color: '#2563eb' }}>06</span>
          <span className="w-8 h-px" style={{ backgroundColor: '#1e40af' }} />
          <span className="text-xs font-mono font-bold" style={{ color: '#2563eb' }}>CONTACT</span>
        </div>

        <h2
          className="font-extrabold tracking-tight mb-3"
          style={{ color: '#ffffff', fontSize: 'clamp(1.75rem, 6vw, 3rem)', lineHeight: 1.1 }}
        >
          Let&apos;s build something{' '}
          <span style={{ color: '#2563eb' }}>together.</span>
        </h2>
        <p className="text-sm sm:text-base mb-8 sm:mb-12" style={{ color: '#94a3b8' }}>
          Have an idea, project, or opportunity? I&apos;d love to hear from you.
        </p>

        {/* Main grid — stacks on mobile, side-by-side on lg */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">

          {/* Contact Info — full width mobile, 2 cols lg */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            {/* Email — tap to copy */}
            <button
              onClick={() => handleCopy(personalInfo.email, 'email')}
              className="w-full text-left flex items-center justify-between rounded-2xl cursor-pointer transition-all duration-200 group"
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '14px 16px',
                minHeight: '60px',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#2563eb')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
              aria-label="Copy email address"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-xl shrink-0" style={{ backgroundColor: 'rgba(37,99,235,0.2)', color: '#60a5fa' }}>
                  <Mail size={16} />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono uppercase mb-0.5" style={{ color: '#64748b' }}>EMAIL</div>
                  <div className="text-sm font-bold truncate" style={{ color: '#e2e8f0' }}>
                    {personalInfo.email}
                  </div>
                </div>
              </div>
              {copiedField === 'email'
                ? <Check size={15} className="shrink-0 ml-2" style={{ color: '#34d399' }} />
                : <Copy size={14} className="shrink-0 ml-2" style={{ color: '#475569' }} />}
            </button>

            {/* Location */}
            <div
              className="flex items-center space-x-3 rounded-2xl"
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '14px 16px',
                minHeight: '60px',
              }}
            >
              <div className="p-2 rounded-xl shrink-0" style={{ backgroundColor: 'rgba(37,99,235,0.2)', color: '#60a5fa' }}>
                <MapPin size={16} />
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase mb-0.5" style={{ color: '#64748b' }}>LOCATION</div>
                <div className="text-sm font-bold" style={{ color: '#e2e8f0' }}>{personalInfo.location}</div>
              </div>
            </div>

            {/* Social Links */}
            <div
              className="rounded-2xl space-y-3"
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '14px 16px',
              }}
            >
              <div className="text-[10px] font-mono uppercase font-bold" style={{ color: '#64748b' }}>
                FIND ME ONLINE
              </div>
              <div className="flex space-x-3">
                {[
                  { href: personalInfo.github, icon: <FaGithub size={15} />, label: 'GitHub' },
                  { href: personalInfo.linkedin, icon: <FaLinkedin size={15} />, label: 'LinkedIn' },
                ].map(({ href, icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 rounded-xl font-bold text-xs font-mono transition-all duration-200"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: '#cbd5e1',
                      minHeight: '44px',
                      padding: '10px 12px',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#60a5fa'; e.currentTarget.style.borderColor = '#2563eb'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#cbd5e1'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                    aria-label={label}
                  >
                    {icon}
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="lg:col-span-3 rounded-2xl"
            style={{
              backgroundColor: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: 'clamp(20px, 4vw, 32px)',
            }}
          >
            {submitted ? (
              <div className="py-10 sm:py-12 text-center space-y-4">
                <CheckCircle2 size={48} className="mx-auto" style={{ color: '#34d399' }} />
                <h3 className="text-xl sm:text-2xl font-bold" style={{ color: '#ffffff' }}>Message Delivered!</h3>
                <p className="text-sm" style={{ color: '#94a3b8' }}>
                  Thank you for reaching out. Venkat will get back to you shortly.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }); }}
                  className="mt-4 px-6 py-2.5 rounded-xl font-bold text-xs font-mono cursor-pointer"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    color: '#60a5fa',
                    border: '1px solid rgba(255,255,255,0.12)',
                    minHeight: '44px',
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {statusMsg && (
                  <div
                    className="p-3 rounded-xl text-xs font-mono"
                    style={{ backgroundColor: 'rgba(37,99,235,0.15)', border: '1px solid rgba(37,99,235,0.3)', color: '#93c5fd' }}
                  >
                    {statusMsg}
                  </div>
                )}

                {/* Name + Email side by side on sm+ */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold font-mono mb-2" style={{ color: '#94a3b8' }}>
                      YOUR NAME
                    </label>
                    <input
                      required type="text"
                      style={inputBase}
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onFocus={(e) => (e.target.style.borderColor = '#2563eb')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold font-mono mb-2" style={{ color: '#94a3b8' }}>
                      YOUR EMAIL
                    </label>
                    <input
                      required type="email"
                      style={inputBase}
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onFocus={(e) => (e.target.style.borderColor = '#2563eb')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold font-mono mb-2" style={{ color: '#94a3b8' }}>SUBJECT</label>
                  <input
                    required type="text"
                    style={inputBase}
                    placeholder="Project, opportunity, or inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    onFocus={(e) => (e.target.style.borderColor = '#2563eb')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold font-mono mb-2" style={{ color: '#94a3b8' }}>MESSAGE</label>
                  <textarea
                    required rows={4}
                    style={{ ...inputBase, resize: 'vertical', minHeight: '100px' }}
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
                  className="w-full flex items-center justify-center space-x-2 rounded-xl font-bold text-sm cursor-pointer transition-all duration-200 disabled:opacity-60"
                  style={{ backgroundColor: '#2563eb', color: '#ffffff', minHeight: '48px' }}
                >
                  <Send size={15} />
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
