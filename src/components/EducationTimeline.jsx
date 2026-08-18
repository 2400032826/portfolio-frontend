import React from 'react';
import { CheckCircle2, GraduationCap } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function EducationTimeline() {
  return (
    <section id="education" className="py-20 px-6 max-w-6xl mx-auto bg-[#f0f6ff]">
      {/* Section Header */}
      <div className="flex items-center space-x-3 mb-2 font-mono text-xs text-[#2563eb] font-bold">
        <span>02</span>
        <span className="w-8 h-px bg-blue-200" />
        <span>EDUCATION</span>
      </div>

      <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] mb-10 tracking-tight">
        Academic <span className="text-[#2563eb]">Background</span>
      </h2>

      {/* Clean Light Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {educationData.map((edu, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl border border-blue-200 shadow-xs flex flex-col justify-between hover:border-[#2563eb] transition space-y-4 relative overflow-hidden"
          >
            <div className="w-1 h-full bg-[#ef4444] absolute top-0 left-0" />

            <div>
              <div className="flex justify-between items-center text-xs font-mono text-[#2563eb] font-bold mb-2">
                <span>{edu.period}</span>
                <GraduationCap size={18} className="text-[#2563eb]" />
              </div>

              <h3 className="text-lg font-bold text-[#0f172a] mb-1">{edu.degree}</h3>
              <p className="text-slate-500 text-xs font-medium mb-3">{edu.institution} — {edu.location}</p>

              {edu.highlight && (
                <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-xs font-bold rounded-lg mb-3">
                  <CheckCircle2 size={14} />
                  <span>{edu.highlight}</span>
                </div>
              )}

              <p className="text-slate-600 text-xs leading-relaxed font-sans">{edu.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
