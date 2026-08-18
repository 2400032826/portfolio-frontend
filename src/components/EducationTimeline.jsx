import React from 'react';
import { CheckCircle2, GraduationCap } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function EducationTimeline() {
  return (
    <section id="education" className="py-20 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center space-x-3 mb-2 font-mono text-xs text-cyan-400">
        <span>02</span>
        <span className="w-8 h-px bg-cyan-400/50" />
        <span>EDUCATION</span>
      </div>

      <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-10 tracking-tight">
        Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Background</span>
      </h2>

      {/* Clean Timeline Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {educationData.map((edu, idx) => (
          <div
            key={idx}
            className="cyber-glass p-6 rounded-2xl border border-cyan-500/20 flex flex-col justify-between hover:border-cyan-400/40 transition space-y-4"
          >
            <div>
              <div className="flex justify-between items-center text-xs font-mono text-cyan-400 mb-2">
                <span>{edu.period}</span>
                <GraduationCap size={16} />
              </div>

              <h3 className="text-lg font-bold text-white mb-1">{edu.degree}</h3>
              <p className="text-slate-400 text-xs font-mono mb-3">{edu.institution} — {edu.location}</p>

              {edu.highlight && (
                <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-emerald-950/50 border border-emerald-500/40 text-emerald-400 font-mono text-xs font-bold rounded-lg mb-3">
                  <CheckCircle2 size={14} />
                  <span>{edu.highlight}</span>
                </div>
              )}

              <p className="text-slate-300 text-xs leading-relaxed">{edu.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
