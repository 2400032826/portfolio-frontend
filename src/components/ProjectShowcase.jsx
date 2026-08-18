import React from 'react';
import { FaGithub } from 'react-icons/fa6';
import { ArrowUpRight, Code2, Eye } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { playSound } from '../utils/audio';

export default function ProjectShowcase({ soundEnabled, onViewDetail }) {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto bg-white">
      {/* Section Header */}
      <div className="flex items-center space-x-3 mb-2 font-mono text-xs text-[#2563eb] font-bold">
        <span>05</span>
        <span className="w-8 h-px bg-blue-200" />
        <span>FEATURED PROJECT</span>
      </div>

      <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] mb-3 tracking-tight">
        Current <span className="text-[#2563eb]">Build & Case Study</span>
      </h2>
      <p className="text-slate-600 text-sm max-w-xl mb-10 font-medium">
        Primary application currently in active development.
      </p>

      {/* Projects Cards Showcase */}
      <div className="grid grid-cols-1 gap-8">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-[#f8fafc] p-8 rounded-3xl border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Info Left */}
              <div className="lg:col-span-7 space-y-4 text-left">
                <div className="flex items-center space-x-3 font-mono text-xs">
                  {/* Small Red CURRENTLY DEVELOPING Indicator */}
                  <span className="px-3 py-1 bg-red-50 border border-red-200 text-[#ef4444] font-extrabold rounded-full">
                    ● {project.status}
                  </span>
                  <span className="text-[#0f172a] font-bold">{project.type}</span>
                </div>

                <h3 className="text-3xl font-extrabold text-[#0f172a] group-hover:text-[#2563eb] transition">
                  {project.title}
                </h3>

                <p className="text-[#2563eb] text-sm font-mono font-bold">{project.tagline}</p>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-sans">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white border border-slate-200 text-[#0f172a] font-mono text-xs rounded-lg font-bold shadow-2xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <button
                    onClick={() => {
                      playSound('modal', soundEnabled);
                      if (onViewDetail) onViewDetail('slv-fashion-studio');
                    }}
                    className="flex items-center space-x-2 bg-[#2563eb] hover:bg-blue-700 text-white font-sans font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-xs transition cursor-pointer"
                  >
                    <Eye size={16} />
                    <span>VIEW PROJECT DETAILS</span>
                  </button>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center space-x-2 bg-white border border-slate-200 hover:border-slate-300 text-[#0f172a] font-sans font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl transition cursor-pointer"
                    >
                      <FaGithub size={16} />
                      <span>GITHUB REPO</span>
                      <ArrowUpRight size={14} className="text-slate-400" />
                    </a>
                  )}
                </div>
              </div>

              {/* Right Feature Highlights */}
              <div className="lg:col-span-5 bg-[#f0f6ff] p-6 rounded-2xl border border-blue-200 space-y-4">
                <div className="flex items-center space-x-2 text-xs font-mono text-[#2563eb] font-bold">
                  <Code2 size={16} />
                  <span>KEY HIGHLIGHTS</span>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-[#0f172a] font-medium">
                  {project.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start space-x-2">
                      <span className="text-[#2563eb] font-bold mt-0.5">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
