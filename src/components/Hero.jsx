import React from 'react';
import { FaGithub } from 'react-icons/fa6';
import { Mail, ArrowUpRight, Sparkles } from 'lucide-react';
import CyberAvatar from './CyberAvatar';
import { personalInfo } from '../data/portfolioData';
import { playSound } from '../utils/audio';

export default function Hero({ soundEnabled, setCursorState, hoverSection, setHoverSection, onOpenAI }) {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 px-6 max-w-6xl mx-auto flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left Typography & Hero Info */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/30 text-emerald-400 text-xs font-mono shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{personalInfo.statusTag}</span>
          </div>

          {/* Headline Typography */}
          <div className="space-y-2">
            <p className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
              // SYSTEM_COMMAND // WELCOME_VISITOR
            </p>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              HELLO, I'M <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 text-glow-cyan">
                {personalInfo.name.toUpperCase()}
              </span>
            </h1>
            <p className="text-lg sm:text-xl font-mono text-cyan-300 flex items-center space-x-2 pt-1">
              <span>{personalInfo.roleHeadline}</span>
            </p>
          </div>

          {/* Dynamic Statement Bio */}
          <p className="text-slate-400 leading-relaxed max-w-xl text-sm sm:text-base">
            Computer Science & Engineering student with a high-distinction academic background (
            <strong className="text-white font-mono">580/600 in PCMB</strong>). I craft high-performance full-stack web applications, REST backend services in Java & Spring Boot, and intelligent digital interfaces.
          </p>

          {/* Metric Highlights Pill Group */}
          <div className="flex flex-wrap gap-3 pt-2">
            {personalInfo.stats.map((stat, idx) => (
              <div
                key={idx}
                className="cyber-glass px-4 py-2 rounded-xl border border-cyan-500/20 text-xs font-mono"
              >
                <span className="text-cyan-400 font-bold block">{stat.value}</span>
                <span className="text-slate-400">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              onClick={() => playSound('click', soundEnabled)}
              onMouseEnter={() => {
                playSound('hover', soundEnabled);
                setCursorState({ type: 'hover', text: 'GITHUB' });
                setHoverSection('projects');
              }}
              onMouseLeave={() => {
                setCursorState({ type: 'default', text: '' });
                setHoverSection('default');
              }}
              className="flex items-center space-x-2.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-mono font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-[0_0_20px_rgba(0,240,255,0.4)] transition transform hover:-translate-y-0.5 cursor-pointer"
            >
              <FaGithub size={18} />
              <span>GITHUB REPOSITORIES</span>
              <ArrowUpRight size={16} />
            </a>

            <a
              href="#contact"
              onClick={() => playSound('click', soundEnabled)}
              onMouseEnter={() => {
                playSound('hover', soundEnabled);
                setCursorState({ type: 'hover', text: 'CONTACT' });
                setHoverSection('contact');
              }}
              onMouseLeave={() => {
                setCursorState({ type: 'default', text: '' });
                setHoverSection('default');
              }}
              className="flex items-center space-x-2 border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-200 font-mono text-xs sm:text-sm px-6 py-3.5 rounded-xl transition cursor-pointer"
            >
              <Mail size={16} className="text-cyan-400" />
              <span>TRANSMIT MESSAGE</span>
            </a>

            <button
              onClick={() => {
                playSound('click', soundEnabled);
                onOpenAI();
              }}
              onMouseEnter={() => {
                playSound('hover', soundEnabled);
                setCursorState({ type: 'hover', text: 'ASK AI' });
              }}
              onMouseLeave={() => setCursorState({ type: 'default', text: '' })}
              className="flex items-center space-x-2 border border-purple-500/40 bg-purple-950/30 text-purple-300 font-mono text-xs sm:text-sm px-5 py-3.5 rounded-xl hover:bg-purple-900/40 transition cursor-pointer"
            >
              <Sparkles size={16} className="text-purple-400 animate-spin" />
              <span>LAUNCH AI ASSISTANT</span>
            </button>
          </div>
        </div>

        {/* Right Interactive 2.5D Avatar */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <CyberAvatar hoverState={hoverSection} />
        </div>
      </div>
    </section>
  );
}
