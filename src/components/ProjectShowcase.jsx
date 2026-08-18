import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa6';
import { ArrowUpRight, Code2, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { playSound } from '../utils/audio';

export default function ProjectShowcase({ soundEnabled, setCursorState, setHoverSection }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const handleOpenModal = (project) => {
    playSound('modal', soundEnabled);
    setSelectedProject(project);
  };

  const handleNext = () => {
    playSound('click', soundEnabled);
    setActiveProjectIndex((prev) => (prev + 1) % projectsData.length);
  };

  const handlePrev = () => {
    playSound('click', soundEnabled);
    setActiveProjectIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex justify-between items-end mb-10">
        <div>
          <div className="flex items-center space-x-3 mb-2 font-mono text-xs text-cyan-400">
            <span>04</span>
            <span className="w-8 h-px bg-cyan-400/50" />
            <span>SHOWCASE // REPOSITORIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Projects & Systems</span>
          </h2>
        </div>

        {/* Carousel Navigation Buttons (Desktop) */}
        <div className="hidden sm:flex items-center space-x-3 font-mono text-xs">
          <span className="text-cyan-400 font-bold mr-2">
            0{activeProjectIndex + 1} / 0{projectsData.length}
          </span>
          <button
            onClick={handlePrev}
            onMouseEnter={() => setCursorState({ type: 'hover', text: 'PREV' })}
            onMouseLeave={() => setCursorState({ type: 'default', text: '' })}
            className="p-2.5 rounded-xl cyber-glass border border-slate-800 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 transition cursor-pointer"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={handleNext}
            onMouseEnter={() => setCursorState({ type: 'hover', text: 'NEXT' })}
            onMouseLeave={() => setCursorState({ type: 'default', text: '' })}
            className="p-2.5 rounded-xl cyber-glass border border-slate-800 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 transition cursor-pointer"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Main Project Carousel / Deck Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {projectsData.map((project, idx) => {
          const isCurrentFeatured = idx === activeProjectIndex;
          return (
            <div
              key={project.id}
              className={`lg:col-span-12 cyber-glass p-8 rounded-3xl border transition-all duration-500 relative overflow-hidden group ${
                isCurrentFeatured
                  ? 'border-cyan-500/40 shadow-[0_0_35px_rgba(0,240,255,0.15)] opacity-100 scale-100'
                  : 'border-slate-800/80 opacity-90 hover:opacity-100 hover:border-cyan-500/30'
              }`}
              onMouseEnter={() => {
                playSound('hover', soundEnabled);
                setCursorState({ type: 'hover', text: 'VIEW' });
                setHoverSection('projects');
              }}
              onMouseLeave={() => {
                setCursorState({ type: 'default', text: '' });
                setHoverSection('default');
              }}
            >
              {/* Giant Background Project Number Watermark */}
              <div className="absolute -bottom-8 -right-4 font-mono font-black text-9xl text-slate-800/20 pointer-events-none select-none">
                {project.number}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Project Details */}
                <div className="lg:col-span-7 space-y-4 text-left">
                  <div className="flex items-center space-x-3 font-mono text-xs text-cyan-400">
                    <span className="px-3 py-1 bg-cyan-950/60 border border-cyan-500/30 rounded-full">
                      PROJECT {project.number}
                    </span>
                    <span>{project.category}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-300 transition">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 bg-slate-900 border border-slate-700/80 text-cyan-400 font-mono text-xs rounded-lg"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Link Buttons */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    <button
                      onClick={() => handleOpenModal(project)}
                      className="flex items-center space-x-2 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-mono font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-[0_0_15px_rgba(0,240,255,0.3)] transition cursor-pointer"
                    >
                      <Eye size={16} />
                      <span>INSPECT SPECIFICATIONS</span>
                    </button>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center space-x-2 border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-mono text-xs sm:text-sm px-5 py-3 rounded-xl transition cursor-pointer"
                      >
                        <FaGithub size={16} />
                        <span>GITHUB REPO</span>
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Interactive Architecture Spec Highlight Card */}
                <div className="lg:col-span-5 cyber-glass p-6 rounded-2xl border border-purple-500/20 space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-purple-400">
                    <span className="flex items-center space-x-1">
                      <Code2 size={14} />
                      <span>HIGHLIGHT_FEATURES</span>
                    </span>
                    <span>SYS_VERIFIED</span>
                  </div>

                  <ul className="space-y-2.5 text-xs text-slate-300 font-mono">
                    {project.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start space-x-2">
                        <span className="text-cyan-400 mt-0.5">▸</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Fullscreen Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          soundEnabled={soundEnabled}
          setCursorState={setCursorState}
        />
      )}
    </section>
  );
}
