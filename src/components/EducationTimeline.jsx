import React from 'react';
import { GraduationCap, Award, Code2, CheckCircle2 } from 'lucide-react';
import { educationData, achievements } from '../data/portfolioData';

export default function EducationTimeline({ _setCursorState }) {
  return (
    <section id="education" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center space-x-3 mb-2 font-mono text-xs text-cyan-400">
        <span>02</span>
        <span className="w-8 h-px bg-cyan-400/50" />
        <span>ACADEMIC // TIMELINE</span>
      </div>

      <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-10 tracking-tight">
        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Educational Journey</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Vertical Timeline */}
        <div className="lg:col-span-8 relative space-y-8 pl-6 border-l-2 border-slate-800">
          {educationData.map((edu, idx) => (
            <div key={idx} className="relative group">
              {/* Animated Glow Node on Timeline */}
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#07090e] border-2 border-cyan-400 group-hover:scale-125 group-hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_10px_#00f0ff]" />

              <div className="cyber-glass p-6 rounded-2xl border border-cyan-500/10 hover:border-cyan-400/40 transition">
                <span className="text-xs font-mono text-cyan-400 font-bold px-3 py-1 bg-cyan-950/50 rounded-full border border-cyan-500/30">
                  {edu.period}
                </span>

                <h3 className="text-xl font-bold text-white mt-3">{edu.degree}</h3>
                <p className="text-slate-400 text-sm mb-3 font-mono">{edu.institution} — {edu.location}</p>

                {edu.highlight && (
                  <div className="mb-4 inline-flex items-center space-x-2 px-3.5 py-1.5 bg-emerald-950/40 border border-emerald-500/40 text-emerald-400 font-mono text-xs font-bold rounded-lg shadow-[0_0_12px_rgba(16,185,129,0.2)]">
                    <CheckCircle2 size={14} />
                    <span>{edu.highlight}</span>
                  </div>
                )}

                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {edu.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start space-x-2">
                      <span className="text-cyan-400 mt-1">▸</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Right Badges & Highlights Card */}
        <div className="lg:col-span-4 space-y-4">
          <div className="cyber-glass p-6 rounded-2xl border border-purple-500/20">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center space-x-2 font-mono">
              <Award size={18} className="text-purple-400" />
              <span>ACHIEVEMENTS // BADGES</span>
            </h3>

            <div className="space-y-3">
              {achievements.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl flex items-center space-x-3.5 hover:border-purple-400/40 transition"
                >
                  <div className="p-2 bg-purple-500/10 text-purple-400 rounded-lg">
                    {idx === 0 ? <GraduationCap size={20} /> : idx === 1 ? <Award size={20} /> : <Code2 size={20} />}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{item.title}</div>
                    <div className="text-xs text-slate-400 font-mono">{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
