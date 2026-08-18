import React from 'react';
import { ChevronUp, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer
      className="py-10 px-6 font-sans"
      style={{
        backgroundColor: '#0f172a',
        borderTop: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left — Identity */}
        <div className="text-center md:text-left space-y-1">
          <div className="font-extrabold text-base" style={{ color: '#ffffff' }}>
            {personalInfo.name}
          </div>
          <div className="text-xs font-mono" style={{ color: '#64748b' }}>
            B.Tech CSE Undergraduate &nbsp;·&nbsp; Data Science &nbsp;·&nbsp; AI &nbsp;·&nbsp; Web Development
          </div>
        </div>

        {/* Center — Links */}
        <div className="flex items-center space-x-6 text-xs font-mono">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-1.5 transition-colors duration-200"
            style={{ color: '#94a3b8' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#60a5fa')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
          >
            <FaGithub size={14} />
            <span>GitHub</span>
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-1.5 transition-colors duration-200"
            style={{ color: '#94a3b8' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#60a5fa')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
          >
            <FaLinkedin size={14} />
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center space-x-1.5 transition-colors duration-200"
            style={{ color: '#94a3b8' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#60a5fa')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
          >
            <Mail size={14} />
            <span>Email</span>
          </a>
        </div>

        {/* Right — Copyright + Back to Top */}
        <div className="flex items-center space-x-4">
          <span className="text-xs font-mono" style={{ color: '#475569' }}>
            © 2026 {personalInfo.name}
          </span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-2 rounded-xl transition-all duration-200 cursor-pointer hover:-translate-y-0.5"
            style={{
              backgroundColor: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#64748b',
            }}
            title="Back to top"
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#60a5fa';
              e.currentTarget.style.borderColor = '#2563eb';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#64748b';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
            }}
          >
            <ChevronUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
