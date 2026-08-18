import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa6';
import { ArrowUpRight, Code2, Eye } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { playSound } from '../utils/audio';

export default function ProjectShowcase({ soundEnabled, setCursorState }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    playSound('modal', soundEnabled);
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center space-x-3 mb-2 font-mono text-xs text-cyan-400">
        <span>05</span>
        <span className="w-8 h-px bg-cyan-400/50" />
        <span>FEATURED PROJECT</span>
      </div>

      <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">
        Current <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Build & Case Study</span>
      </h2>
      <p className="text-slate-400 text-sm max-w-xl mb-10">
        Primary application currently in active development.
      </p>

      {/* Projects Showcase Cards */}
      <div className="grid grid-cols-1 gap-8">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="cyber-glass p-8 rounded-3xl border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 relative overflow-hidden group shadow-[0_0_30px_rgba(0,240,255,0.08)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Project Info */}
              <div className="lg:col-span-7 space-y-4 text-left">
                <div className="flex items-center space-x-3 font-mono text-xs">
                  <span className="px-3 py-1 bg-cyan-950/60 border border-cyan-500/40 text-cyan-400 font-bold rounded-full">
                    {project.status}
                  </span>
                  <span className="text-slate-400">{project.type}</span>
                </div>

                <h3 className="text-3xl font-extrabold text-white group-hover:text-cyan-300 transition">
                  {project.title}
                </h3>

                <p className="text-cyan-300 text-sm font-mono font-semibold">{project.tagline}</p>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-900 border border-slate-700/80 text-cyan-400 font-mono text-xs rounded-lg"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <button
                    onClick={() => handleOpenModal(project)}
                    onMouseEnter={() => setCursorState({ type: 'hover', text: 'DETAILS' })}
                    onMouseLeave={() => setCursorState({ type: 'default', text: '' })}
                    className="flex items-center space-x-2 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-[0_0_15px_rgba(0,240,255,0.3)] transition cursor-pointer"
                  >
                    <Eye size={16} />
                    <span>VIEW PROJECT DETAILS</span>
                  </button>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      onMouseEnter={() => setCursorState({ type: 'hover', text: 'GITHUB' })}
                      onMouseLeave={() => setCursorState({ type: 'default', text: '' })}
                      className="flex items-center space-x-2 border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl transition cursor-pointer"
                    >
                      <FaGithub size={16} />
                      <span>GITHUB REPO</span>
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>

              {/* Right Feature Highlights */}
              <div className="lg:col-span-5 cyber-glass p-6 rounded-2xl border border-purple-500/20 space-y-4">
                <div className="flex items-center space-x-2 text-xs font-mono text-purple-400 font-bold">
                  <Code2 size={16} />
                  <span>KEY_HIGHLIGHTS</span>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                  {project.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start space-x-2">
                      <span className="text-cyan-400 font-bold mt-0.5">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          soundEnabled={soundEnabled}
        />
      )}
    </section>
  );
}
