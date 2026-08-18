import React, { useEffect } from 'react';
import { ArrowLeft, Code2, CheckCircle2, Layers, Database } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { projectsData } from '../data/portfolioData';

export default function ProjectDetailView({ onBack }) {
  const project = projectsData.find((p) => p.id === 'slv-fashion-studio') || projectsData[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] font-sans pt-28 pb-20 px-6">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="inline-flex items-center space-x-2 px-4 py-2 bg-white border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-[#2563eb] rounded-xl font-mono text-xs font-bold transition shadow-xs cursor-pointer"
        >
          <ArrowLeft size={16} />
          <span>BACK TO PORTFOLIO</span>
        </button>

        {/* Header Case Study Banner */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-blue-200 shadow-sm space-y-4 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#ef4444]" />

          <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
            <span className="px-3 py-1 bg-red-50 border border-red-200 text-[#ef4444] font-extrabold rounded-full">
              ● {project.status}
            </span>
            <span className="text-slate-500 font-bold">{project.type}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0f172a] tracking-tight">
            {project.title}
          </h1>

          <p className="text-[#2563eb] text-sm sm:text-base font-mono font-bold">
            {project.tagline}
          </p>

          <p className="text-slate-700 text-base leading-relaxed font-sans">
            {project.description}
          </p>
        </div>

        {/* Overview & Architecture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Key Highlights */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center space-x-2 text-xs font-mono text-[#2563eb] font-bold">
              <Code2 size={18} />
              <span>DEVELOPMENT HIGHLIGHTS</span>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-[#0f172a] font-medium">
              {project.highlights.map((h, idx) => (
                <li key={idx} className="flex items-start space-x-2.5">
                  <CheckCircle2 size={16} className="text-[#2563eb] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Tech Stack */}
          <div className="bg-[#f0f6ff] p-6 sm:p-8 rounded-2xl border border-blue-200 shadow-xs space-y-4">
            <div className="flex items-center space-x-2 text-xs font-mono text-[#2563eb] font-bold">
              <Layers size={18} />
              <span>VERIFIED TECH STACK</span>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 bg-white border border-blue-200 text-[#0f172a] font-mono text-xs rounded-xl font-bold shadow-2xs"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="p-4 bg-white border border-blue-100 rounded-xl space-y-2 text-xs text-slate-700">
              <div className="flex items-center space-x-2 text-[#2563eb] font-mono font-bold">
                <Database size={14} />
                <span>Backend Architecture</span>
              </div>
              <p>Relational MySQL schema structured for apparel ordering, customer accounts, and catalog item indexing.</p>
            </div>
          </div>
        </div>

        {/* Development Progress & GitHub Actions */}
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-[#0f172a]">Active Full-Stack Build</h3>
            <p className="text-xs text-slate-600">This project is currently in active local development.</p>
          </div>

          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2 bg-[#2563eb] hover:bg-blue-700 text-white font-sans font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-xs transition"
            >
              <FaGithub size={18} />
              <span>VIEW GITHUB REPOSITORY</span>
            </a>
          ) : (
            <span className="px-4 py-2 bg-slate-100 text-slate-500 font-mono text-xs font-bold rounded-xl border border-slate-200">
              REPO PRIVATE DURING DEV
            </span>
          )}
        </div>

        {/* Bottom Back Button */}
        <div className="pt-4 text-center">
          <button
            onClick={onBack}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-[#0f172a] hover:bg-[#2563eb] text-white rounded-xl font-mono text-xs font-bold transition shadow-xs cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>RETURN TO PORTFOLIO</span>
          </button>
        </div>
      </div>
    </div>
  );
}
