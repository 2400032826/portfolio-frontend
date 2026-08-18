import React from 'react';
import { FaGithub } from 'react-icons/fa6';
import { Mail, ArrowDown, ExternalLink } from 'lucide-react';
import AbstractVisual from './AbstractVisual';
import { personalInfo } from '../data/portfolioData';
import { playSound } from '../utils/audio';

export default function Hero({ soundEnabled, setCursorState }) {
  return (
    <section id="hero" className="relative min-h-[85vh] pt-32 pb-16 px-6 max-w-6xl mx-auto flex items-center justify-center bg-[#f7fafc]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left Intro Text */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Greeting Typography */}
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
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
            "{personalInfo.shortStatement}"
          </p>

          {/* Stat Cards (3 Top Highlights Only with Red Accent Line) */}
          <div className="flex flex-wrap gap-3.5 pt-1">
            {personalInfo.highlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-white px-4 py-2.5 rounded-xl border border-blue-200 shadow-xs text-xs font-mono relative overflow-hidden group"
              >
                {/* Red Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#ef4444]" />
                <span className="text-[#2563eb] font-extrabold block text-sm">{item.value}</span>
                <span className="text-[#0f172a] text-[11px] font-sans font-bold">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              onClick={() => playSound('click', soundEnabled)}
              onMouseEnter={() => setCursorState({ type: 'hover', text: 'PROJECTS' })}
              onMouseLeave={() => setCursorState({ type: 'default', text: '' })}
              className="flex items-center space-x-2 bg-[#2563eb] hover:bg-blue-700 text-white font-sans font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-sm transition cursor-pointer"
            >
              <span>VIEW MY WORK</span>
              <ArrowDown size={16} />
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              onClick={() => playSound('click', soundEnabled)}
              onMouseEnter={() => setCursorState({ type: 'hover', text: 'GITHUB' })}
              onMouseLeave={() => setCursorState({ type: 'default', text: '' })}
              className="flex items-center space-x-2 bg-[#f0f6ff] hover:bg-blue-100 border border-blue-200 text-[#0f172a] font-sans font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-xs transition cursor-pointer"
            >
              <FaGithub size={18} className="text-[#0f172a]" />
              <span>GITHUB</span>
              <ExternalLink size={14} className="text-slate-400" />
            </a>

            <a
              href="#contact"
              onClick={() => playSound('click', soundEnabled)}
              onMouseEnter={() => setCursorState({ type: 'hover', text: 'CONTACT' })}
              onMouseLeave={() => setCursorState({ type: 'default', text: '' })}
              className="flex items-center space-x-2 bg-white hover:bg-red-50 border border-[#2563eb] text-[#2563eb] hover:border-[#ef4444] hover:text-[#ef4444] font-sans font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl transition cursor-pointer"
            >
              <Mail size={16} />
              <span>CONTACT ME</span>
            </a>
          </div>
        </div>

        {/* Right Graphic Composition */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <AbstractVisual />
        </div>
      </div>
    </section>
  );
}
