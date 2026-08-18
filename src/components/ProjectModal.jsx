import React, { useEffect } from 'react';
import { FaGithub } from 'react-icons/fa6';
import { X, CheckCircle2, ExternalLink } from 'lucide-react';
import { playSound } from '../utils/audio';

export default function ProjectModal({ project, onClose, soundEnabled }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 bg-slate-900/75 backdrop-blur-sm animate-fadeIn font-sans"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6 relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            playSound('click', soundEnabled);
            onClose();
          }}
          className="absolute top-6 right-6 p-2 rounded-full border border-slate-200 bg-slate-100 text-slate-600 hover:text-slate-900 hover:border-slate-300 transition cursor-pointer"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold">
            <span>{project.status}</span>
            <span>•</span>
            <span>{project.type}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{project.title}</h2>
          <p className="text-blue-600 text-xs sm:text-sm font-semibold font-mono">{project.tagline}</p>
        </div>

        {/* Overview Box */}
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
          <p className="text-slate-500 text-[10px] uppercase font-mono font-bold">// PROJECT SUMMARY</p>
          <p>{project.description}</p>
        </div>

        {/* Tech Stack */}
        <div className="space-y-2">
          <p className="text-slate-500 text-xs font-mono font-bold uppercase">// TECHNOLOGIES USED</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-blue-50 border border-blue-200 text-blue-700 text-xs rounded-lg font-mono font-bold"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Key Highlights */}
        <div className="space-y-2">
          <p className="text-slate-500 text-xs font-mono font-bold uppercase">// DEVELOPMENT HIGHLIGHTS</p>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-sans">
            {project.highlights.map((h, idx) => (
              <li key={idx} className="flex items-start space-x-2">
                <CheckCircle2 size={16} className="text-blue-600 mt-0.5 shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-200 font-sans">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition"
            >
              <FaGithub size={18} />
              <span>VIEW GITHUB REPOSITORY</span>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center space-x-2 border border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-3 rounded-xl transition"
            >
              <ExternalLink size={18} />
              <span>LIVE DEMO</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
