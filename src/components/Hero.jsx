import React from 'react';
import { FaGithub } from 'react-icons/fa6';
import { Mail, ArrowDown, ExternalLink } from 'lucide-react';
import AbstractVisual from './AbstractVisual';
import { personalInfo } from '../data/portfolioData';
import { playSound } from '../utils/audio';

export default function Hero({ soundEnabled, setCursorState }) {
  return (
    <section id="hero" className="relative min-h-[85vh] pt-32 pb-16 px-6 max-w-6xl mx-auto flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left Intro Column */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Greeting Typography */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Hi, I'm <span className="text-blue-600">Venkat.</span>
            </h1>
            <p className="text-xl sm:text-2xl font-extrabold text-slate-800">{personalInfo.name}</p>
            <p className="text-sm sm:text-base font-mono text-blue-600 font-bold tracking-wide">
              {personalInfo.roleHeadline}
            </p>
          </div>

          {/* Short Statement */}
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
            "{personalInfo.shortStatement}"
          </p>

          {/* Highlight Cards (Top 3 Only) */}
          <div className="flex flex-wrap gap-3 pt-1">
            {personalInfo.highlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-xs text-xs font-mono"
              >
                <span className="text-blue-600 font-extrabold block text-sm">{item.value}</span>
                <span className="text-slate-500 text-[11px] font-sans font-medium">{item.label}</span>
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
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-sans font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
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
              className="flex items-center space-x-2 bg-white border border-slate-200 hover:border-slate-300 text-slate-800 font-sans font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-xs transition cursor-pointer"
            >
              <FaGithub size={18} className="text-slate-900" />
              <span>GITHUB</span>
              <ExternalLink size={14} className="text-slate-400" />
            </a>

            <a
              href="#contact"
              onClick={() => playSound('click', soundEnabled)}
              onMouseEnter={() => setCursorState({ type: 'hover', text: 'CONTACT' })}
              onMouseLeave={() => setCursorState({ type: 'default', text: '' })}
              className="flex items-center space-x-2 bg-blue-50 border border-blue-200 text-blue-700 hover:bg-blue-100 font-sans font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl transition cursor-pointer"
            >
              <Mail size={16} />
              <span>CONTACT ME</span>
            </a>
          </div>
        </div>

        {/* Right Clean Abstract Visual */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <AbstractVisual />
        </div>
      </div>
    </section>
  );
}
