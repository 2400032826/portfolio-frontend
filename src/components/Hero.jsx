import React from 'react';
import { FaGithub } from 'react-icons/fa6';
import { Mail, ArrowDown, ExternalLink } from 'lucide-react';
import AbstractVisual from './AbstractVisual';
import { personalInfo } from '../data/portfolioData';
import { playSound } from '../utils/audio';

export default function Hero({ soundEnabled, setCursorState }) {
  return (
    <section id="hero" className="relative min-h-[90vh] pt-32 pb-16 px-6 max-w-6xl mx-auto flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left Intro Text */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Greeting */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400">Venkat.</span>
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-slate-200">{personalInfo.name}</p>
            <p className="text-sm sm:text-base font-mono text-cyan-400 font-semibold tracking-wide">
              {personalInfo.roleHeadline}
            </p>
          </div>

          {/* Short Statement */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
            "{personalInfo.shortStatement}"
          </p>

          {/* Highlight Metrics (Top 3 Only) */}
          <div className="flex flex-wrap gap-3 pt-1">
            {personalInfo.highlights.map((item, idx) => (
              <div
                key={idx}
                className="cyber-glass px-4 py-2 rounded-xl border border-cyan-500/20 text-xs font-mono"
              >
                <span className="text-cyan-400 font-bold block">{item.value}</span>
                <span className="text-slate-400 text-[11px]">{item.label}</span>
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
              className="flex items-center space-x-2 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-[0_0_20px_rgba(0,240,255,0.3)] transition cursor-pointer"
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
              className="flex items-center space-x-2 border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition cursor-pointer"
            >
              <FaGithub size={18} />
              <span>GITHUB</span>
              <ExternalLink size={14} />
            </a>

            <a
              href="#contact"
              onClick={() => playSound('click', soundEnabled)}
              onMouseEnter={() => setCursorState({ type: 'hover', text: 'CONTACT' })}
              onMouseLeave={() => setCursorState({ type: 'default', text: '' })}
              className="flex items-center space-x-2 border border-purple-500/30 bg-purple-950/20 text-purple-300 hover:bg-purple-900/30 font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl transition cursor-pointer"
            >
              <Mail size={16} />
              <span>CONTACT ME</span>
            </a>
          </div>
        </div>

        {/* Right Abstract Visual */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <AbstractVisual />
        </div>
      </div>
    </section>
  );
}
