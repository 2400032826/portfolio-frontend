import React from 'react';
import { Award, Code2, Sparkles, Cpu } from 'lucide-react';
import TerminalWidget from './TerminalWidget';
import { personalInfo } from '../data/portfolioData';

export default function AboutSection({ soundEnabled }) {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center space-x-3 mb-2 font-mono text-xs text-cyan-400">
        <span>01</span>
        <span className="w-8 h-px bg-cyan-400/50" />
        <span>IDENTITY // ARCHITECTURE</span>
      </div>

      <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-10 tracking-tight">
        Turning caffeine & curiosity into <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">clean code</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Interactive Identity Card */}
        <div className="lg:col-span-7 cyber-glass p-8 rounded-2xl border border-cyan-500/20 space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-10 text-cyan-400 pointer-events-none">
            <Cpu size={120} />
          </div>

          <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs rounded-full">
            SYSTEM_PROFILE // K VENKAT CHOWDARY
          </div>

          <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
            <p>
              I'm <strong className="text-white">{personalInfo.name}</strong>, a Computer Science & Engineering student with an exceptional academic background — scoring <strong className="text-cyan-400 font-mono">580/600 (96.6%)</strong> in my PCMB pre-university studies. That mathematical rigour directly translates into how I structure software logic and solve complex problems.
            </p>
            <p>
              My primary focus centers on <strong className="text-white">full-stack web development & REST backend services</strong>. I enjoy crafting intuitive, responsive user interfaces paired with robust backend APIs built on Java, Spring Boot, Python, and SQL databases.
            </p>
          </div>

          {/* Skill Tag Pills */}
          <div className="pt-2">
            <p className="text-xs font-mono text-slate-400 mb-3 uppercase tracking-wider">// CORE_DOMAINS</p>
            <div className="flex flex-wrap gap-2">
              {['Problem Solving', 'Full-Stack Web', 'Java & Spring Boot', 'REST APIs', 'MySQL Database', 'Clean Architecture'].map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-slate-900/80 border border-slate-700/80 text-xs font-mono text-slate-300 rounded-lg hover:border-cyan-400 transition"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Stats & Terminal Stack */}
        <div className="lg:col-span-5 space-y-4">
          <div className="grid grid-cols-3 gap-3">
            <div className="cyber-glass p-4 rounded-xl border border-cyan-500/20 text-center">
              <div className="p-2 bg-cyan-500/10 text-cyan-400 rounded-lg w-fit mx-auto mb-2">
                <Award size={20} />
              </div>
              <div className="text-lg font-bold text-white font-mono">580/600</div>
              <div className="text-[10px] font-mono text-slate-400">PCMB Score</div>
            </div>

            <div className="cyber-glass p-4 rounded-xl border border-purple-500/20 text-center">
              <div className="p-2 bg-purple-500/10 text-purple-400 rounded-lg w-fit mx-auto mb-2">
                <Code2 size={20} />
              </div>
              <div className="text-lg font-bold text-white font-mono">8+</div>
              <div className="text-[10px] font-mono text-slate-400">Languages</div>
            </div>

            <div className="cyber-glass p-4 rounded-xl border border-emerald-500/20 text-center">
              <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg w-fit mx-auto mb-2">
                <Sparkles size={20} />
              </div>
              <div className="text-lg font-bold text-white font-mono">5+</div>
              <div className="text-[10px] font-mono text-slate-400">Projects</div>
            </div>
          </div>

          {/* Embedded Terminal Widget */}
          <TerminalWidget soundEnabled={soundEnabled} />
        </div>
      </div>
    </section>
  );
}
