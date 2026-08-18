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
      <div className="flex items-center space-x-3 mb-2 font-mono text-xs text-blue-600 font-bold">
        <span>05</span>
        <span className="w-8 h-px bg-blue-200" />
        <span>FEATURED PROJECT</span>
      </div>

      <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
        Current <span className="text-blue-600">Build & Case Study</span>
      </h2>
      <p className="text-slate-600 text-sm max-w-xl mb-10">
        Primary application currently in active development.
      </p>

      {/* Projects Cards Showcase */}
      <div className="grid grid-cols-1 gap-8">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Info Left */}
              <div className="lg:col-span-7 space-y-4 text-left">
                <div className="flex items-center space-x-3 font-mono text-xs">
                  <span className="px-3 py-1 bg-blue-50 border border-blue-200 text-blue-700 font-bold rounded-full">
                    {project.status}
                  </span>
                  <span className="text-slate-500 font-medium">{project.type}</span>
                </div>

                <h3 className="text-3xl font-extrabold text-slate-900 group-hover:text-blue-600 transition">
                  {project.title}
                </h3>

                <p className="text-blue-600 text-sm font-mono font-bold">{project.tagline}</p>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-100 border border-slate-200 text-slate-700 font-mono text-xs rounded-lg font-bold"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <button
                    onClick={() => handleOpenModal(project)}
                    onMouseEnter={() => setCursorState({ type: 'hover', text: 'DETAILS' })}
                    onMouseLeave={() => setCursorState({ type: 'default', text: '' })}
                    className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-sans font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-xs transition cursor-pointer"
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
                      className="flex items-center space-x-2 bg-white border border-slate-200 hover:border-slate-300 text-slate-800 font-sans font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl transition cursor-pointer"
                    >
                      <FaGithub size={16} />
                      <span>GITHUB REPO</span>
                      <ArrowUpRight size={14} className="text-slate-400" />
                    </a>
                  )}
                </div>
              </div>

              {/* Right Feature Highlights */}
              <div className="lg:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
                <div className="flex items-center space-x-2 text-xs font-mono text-blue-700 font-bold">
                  <Code2 size={16} />
                  <span>KEY HIGHLIGHTS</span>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  {project.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start space-x-2">
                      <span className="text-blue-600 font-bold mt-0.5">▸</span>
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
