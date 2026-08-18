import React from 'react';
import { ChevronUp, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ setCursorState }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 py-12 px-6 bg-[#07090e] font-sans text-xs text-slate-400 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Info */}
        <div className="space-y-1 text-center md:text-left">
          <div className="text-white font-bold text-sm tracking-wide">{personalInfo.name}</div>
          <div className="text-slate-400 font-mono text-xs">{personalInfo.roleHeadline}</div>
        </div>

        {/* Center Links */}
        <div className="flex items-center space-x-6 font-mono text-xs">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition flex items-center space-x-1"
          >
            <FaGithub size={14} />
            <span>GitHub</span>
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition flex items-center space-x-1"
          >
            <FaLinkedin size={14} />
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="hover:text-cyan-400 transition flex items-center space-x-1"
          >
            <Mail size={14} />
            <span>Email</span>
          </a>
        </div>

        {/* Right Copyright & Scroll to Top */}
        <div className="flex items-center space-x-4">
          <span className="font-mono text-slate-500">© 2026 {personalInfo.name}</span>
          <button
            onClick={scrollToTop}
            onMouseEnter={() => setCursorState({ type: 'hover', text: 'TOP' })}
            onMouseLeave={() => setCursorState({ type: 'default', text: '' })}
            className="p-2 bg-slate-900 border border-slate-800 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 rounded-xl transition cursor-pointer"
            title="Scroll to Top"
          >
            <ChevronUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
