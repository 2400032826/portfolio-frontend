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
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-fadeIn font-mono"
      onClick={onClose}
    >
      <div
        className="cyber-glass w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-cyan-500/40 p-6 sm:p-8 space-y-6 relative shadow-[0_0_50px_rgba(0,240,255,0.25)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            playSound('click', soundEnabled);
            onClose();
          }}
          className="absolute top-6 right-6 p-2 rounded-full border border-slate-700 bg-slate-900 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition cursor-pointer"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-cyan-500/40 bg-cyan-950/50 text-cyan-400 text-xs">
            <span>{project.status}</span>
            <span>•</span>
            <span>{project.type}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{project.title}</h2>
          <p className="text-cyan-300 text-xs sm:text-sm font-semibold">{project.tagline}</p>
        </div>

        {/* Overview Box */}
        <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
          <p className="text-slate-400 text-[10px] uppercase font-mono">// PROJECT_SUMMARY</p>
          <p>{project.description}</p>
        </div>

        {/* Tech Stack */}
        <div className="space-y-2">
          <p className="text-slate-400 text-xs uppercase">// TECHNOLOGIES_USED</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs rounded-lg font-mono"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Key Highlights */}
        <div className="space-y-2">
          <p className="text-slate-400 text-xs uppercase">// DEVELOPMENT_HIGHLIGHTS</p>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-sans">
            {project.highlights.map((h, idx) => (
              <li key={idx} className="flex items-start space-x-2">
                <CheckCircle2 size={16} className="text-cyan-400 mt-0.5 shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-800 font-mono">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center space-x-2 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold py-3 rounded-xl transition"
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
              className="flex-1 flex items-center justify-center space-x-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-bold py-3 rounded-xl transition"
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
