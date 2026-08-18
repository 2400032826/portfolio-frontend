import React from 'react';
import { FaGithub } from 'react-icons/fa6';
import { Mail, ArrowDown, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { playSound } from '../utils/audio';

export default function Hero({ soundEnabled }) {
  return (
    <section id="hero" className="relative min-h-[80vh] pt-36 pb-20 px-6 max-w-4xl mx-auto flex flex-col items-center justify-center text-center bg-[#f7fafc]">
      {/* Centered Typography Content */}
      <div className="space-y-6 max-w-3xl">
        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#0f172a] leading-tight">
            Hi, I'm <span className="text-[#2563eb]">Venkat.</span>
          </h1>
          <p className="text-xl sm:text-2xl font-extrabold text-[#0f172a]">{personalInfo.name}</p>
          <p className="text-sm sm:text-base font-mono text-[#2563eb] font-bold tracking-wide">
            {personalInfo.roleHeadline}
          </p>
        </div>

        {/* Short Statement */}
        <p className="text-slate-700 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto font-normal">
          "{personalInfo.shortStatement}"
        </p>

        {/* Stat Cards (3 Top Highlights Only with Red Accent Line) */}
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          {personalInfo.highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white px-5 py-3 rounded-xl border border-blue-200 shadow-xs text-xs font-mono relative overflow-hidden text-center min-w-[140px]"
            >
              {/* Red Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#ef4444]" />
              <span className="text-[#2563eb] font-extrabold block text-base sm:text-lg">{item.value}</span>
              <span className="text-[#0f172a] text-[11px] font-sans font-bold">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a
            href="#projects"
            onClick={() => playSound('click', soundEnabled)}
            className="flex items-center space-x-2 bg-[#2563eb] hover:bg-blue-700 text-white font-sans font-bold text-xs sm:text-sm px-7 py-3.5 rounded-xl shadow-xs transition cursor-pointer"
          >
            <span>VIEW MY WORK</span>
            <ArrowDown size={16} />
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            onClick={() => playSound('click', soundEnabled)}
            className="flex items-center space-x-2 bg-[#f0f6ff] hover:bg-blue-100 border border-blue-200 text-[#0f172a] font-sans font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-xs transition cursor-pointer"
          >
            <FaGithub size={18} className="text-[#0f172a]" />
            <span>GITHUB</span>
            <ExternalLink size={14} className="text-slate-400" />
          </a>

          <a
            href="#contact"
            onClick={() => playSound('click', soundEnabled)}
            className="flex items-center space-x-2 bg-white hover:bg-red-50 border border-[#2563eb] text-[#2563eb] hover:border-[#ef4444] hover:text-[#ef4444] font-sans font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition cursor-pointer"
          >
            <Mail size={16} />
            <span>CONTACT ME</span>
          </a>
        </div>
      </div>
    </section>
  );
}
