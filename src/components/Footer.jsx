import React from 'react';
import { ChevronUp, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer
      className="px-4 sm:px-6 py-8 sm:py-10 font-sans"
      style={{ backgroundColor: '#0f172a', borderTop: '1px solid rgba(255,255,255,0.08)' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Mobile: stack. md+: horizontal row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-6">

          {/* Identity */}
          <div className="text-center md:text-left space-y-1">
            <div className="font-extrabold text-sm sm:text-base" style={{ color: '#ffffff' }}>
              {personalInfo.name}
            </div>
            <div className="text-xs font-mono" style={{ color: '#64748b' }}>
              B.Tech CSE · Data Science · AI · Web Development
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-5 text-xs font-mono">
            {[
              { href: personalInfo.github, icon: <FaGithub size={14} />, label: 'GitHub' },
              { href: personalInfo.linkedin, icon: <FaLinkedin size={14} />, label: 'LinkedIn' },
              { href: `mailto:${personalInfo.email}`, icon: <Mail size={14} />, label: 'Email' },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel={label !== 'Email' ? 'noreferrer' : undefined}
                className="flex items-center space-x-1.5 transition-colors duration-200"
                style={{ color: '#94a3b8', minHeight: '44px' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#60a5fa')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                aria-label={label}
              >
                {icon}
                <span className="hidden sm:inline">{label}</span>
              </a>
            ))}
          </div>

          {/* Copyright + back-to-top */}
          <div className="flex items-center space-x-4">
            <span className="text-xs font-mono" style={{ color: '#475569' }}>
              © 2026 K Venkat Chowdary
            </span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center justify-center rounded-xl cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
              style={{
                backgroundColor: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#64748b',
                width: '40px',
                height: '40px',
                minWidth: '40px',
                minHeight: '40px',
              }}
              title="Back to top"
              aria-label="Back to top"
              onMouseEnter={(e) => { e.currentTarget.style.color = '#60a5fa'; e.currentTarget.style.borderColor = '#2563eb'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#64748b'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
            >
              <ChevronUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
