import React from 'react';
import TerminalWidget from './TerminalWidget';
import { personalInfo } from '../data/portfolioData';

export default function AboutSection({ soundEnabled }) {
  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center space-x-3 mb-2 font-mono text-xs text-cyan-400">
        <span>01</span>
        <span className="w-8 h-px bg-cyan-400/50" />
        <span>ABOUT ME</span>
      </div>

      <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-8 tracking-tight">
        Building thoughtful software with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">code & logic</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Human Introduction */}
        <div className="lg:col-span-7 cyber-glass p-8 rounded-2xl border border-cyan-500/20 space-y-6">
          <p className="text-slate-300 leading-relaxed text-base">
            I'm <strong className="text-white">{personalInfo.name}</strong>, a Computer Science & Engineering student passionate about turning ideas into clean, functional digital products. I enjoy full-stack web development, working with structured data, and exploring modern AI integration.
          </p>

          {/* 4 Visual Domain Blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {personalInfo.aboutDomains.map((block, idx) => (
              <div key={idx} className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl space-y-1 hover:border-cyan-400/40 transition">
                <span className="text-xs font-mono font-bold text-cyan-400 block">{block.title}</span>
                <p className="text-xs text-slate-300 leading-normal">{block.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Embedded Interactive Shell Widget */}
        <div className="lg:col-span-5 space-y-4">
          <TerminalWidget soundEnabled={soundEnabled} />
        </div>
      </div>
    </section>
  );
}
