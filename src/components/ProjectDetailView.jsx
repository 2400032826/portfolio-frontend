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
    <div
      className="min-h-screen font-sans"
      style={{ backgroundColor: '#f7fafc', color: '#0f172a' }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-16 sm:pb-20 space-y-6 sm:space-y-10">

        {/* Back Button */}
        <button
          onClick={onBack}
          className="inline-flex items-center space-x-2 text-sm font-bold font-mono px-4 py-2.5 rounded-xl cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            color: '#64748b',
            minHeight: '44px',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = '#2563eb'; e.currentTarget.style.borderColor = '#bfdbfe'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = '#64748b'; e.currentTarget.style.borderColor = '#e2e8f0'; }}
        >
          <ArrowLeft size={15} />
          <span>BACK TO PORTFOLIO</span>
        </button>

        {/* Banner */}
        <div
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl"
          style={{ backgroundColor: '#ffffff', border: '1px solid #bfdbfe' }}
        >
          <div className="absolute top-0 left-0 right-0 h-1.5" style={{ backgroundColor: '#ef4444' }} />
          <div className="p-5 sm:p-8 md:p-10 space-y-4">
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
              <span
                className="px-3 py-1.5 rounded-full font-extrabold"
                style={{ backgroundColor: '#fef2f2', border: '1px solid #fecaca', color: '#ef4444' }}
              >
                ● {project.status}
              </span>
              <span className="font-bold" style={{ color: '#64748b' }}>{project.type}</span>
            </div>

            <h1
              className="font-extrabold tracking-tight"
              style={{ color: '#0f172a', fontSize: 'clamp(1.6rem, 6vw, 3rem)', lineHeight: 1.1 }}
            >
              {project.title}
            </h1>
            <p className="text-sm font-bold font-mono" style={{ color: '#2563eb' }}>{project.tagline}</p>
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#475569' }}>
              {project.description}
            </p>
          </div>
        </div>

        {/* Highlights + Tech */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          <div
            className="p-5 sm:p-7 rounded-2xl space-y-4"
            style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0' }}
          >
            <div className="flex items-center space-x-2 text-xs font-mono font-bold" style={{ color: '#2563eb' }}>
              <Code2 size={16} />
              <span>DEVELOPMENT HIGHLIGHTS</span>
            </div>
            <ul className="space-y-3 sm:space-y-4">
              {project.highlights.map((h, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <CheckCircle2 size={15} className="shrink-0 mt-0.5" style={{ color: '#2563eb' }} />
                  <span className="text-xs sm:text-sm leading-relaxed" style={{ color: '#0f172a' }}>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="p-5 sm:p-7 rounded-2xl space-y-5"
            style={{ backgroundColor: '#eaf2ff', border: '1px solid #bfdbfe' }}
          >
            <div className="flex items-center space-x-2 text-xs font-mono font-bold" style={{ color: '#2563eb' }}>
              <Layers size={16} />
              <span>VERIFIED TECH STACK</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold font-mono"
                  style={{ backgroundColor: '#ffffff', border: '1px solid #bfdbfe', color: '#0f172a' }}
                >
                  {t}
                </span>
              ))}
            </div>
            <div
              className="p-4 rounded-xl space-y-1.5 text-sm"
              style={{ backgroundColor: '#ffffff', border: '1px solid #bfdbfe' }}
            >
              <div className="flex items-center space-x-2 font-bold font-mono text-xs" style={{ color: '#2563eb' }}>
                <Database size={13} />
                <span>Backend Architecture</span>
              </div>
              <p className="text-xs sm:text-sm" style={{ color: '#475569' }}>
                Relational MySQL schema structured for apparel ordering, customer accounts, and catalog item indexing.
              </p>
            </div>
          </div>
        </div>

        {/* Problem / Solution */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            ['The Problem', 'Small fashion studios lack a centralized digital platform to manage product catalogs, custom orders, and customer interactions. Manual processes are inefficient and error-prone.'],
            ['The Solution', 'SLV Fashion Studio provides a full-stack web platform with an intuitive product catalog, custom apparel ordering workflows, and a robust backend for seamless studio operations.'],
          ].map(([title, text]) => (
            <div
              key={title}
              className="p-5 sm:p-7 rounded-2xl space-y-2"
              style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0' }}
            >
              <h3 className="text-sm sm:text-base font-bold" style={{ color: '#0f172a' }}>{title}</h3>
              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#475569' }}>{text}</p>
            </div>
          ))}
        </div>

        {/* Dev Status */}
        <div
          className="p-5 sm:p-7 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-5"
          style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0' }}
        >
          <div className="text-center sm:text-left">
            <h3 className="text-sm sm:text-base font-bold mb-1" style={{ color: '#0f172a' }}>Active Full-Stack Build</h3>
            <p className="text-xs sm:text-sm" style={{ color: '#64748b' }}>Currently in active local development.</p>
          </div>
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 font-bold text-sm px-5 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
              style={{ backgroundColor: '#2563eb', color: '#ffffff', minHeight: '44px' }}
            >
              <FaGithub size={16} />
              <span>VIEW GITHUB REPOSITORY</span>
            </a>
          ) : (
            <span
              className="px-4 py-2 rounded-xl text-xs font-bold font-mono"
              style={{ backgroundColor: '#f1f5f9', border: '1px solid #e2e8f0', color: '#64748b' }}
            >
              REPO PRIVATE DURING DEVELOPMENT
            </span>
          )}
        </div>

        {/* Back Bottom */}
        <div className="text-center pt-2">
          <button
            onClick={onBack}
            className="inline-flex items-center space-x-2 font-bold font-mono text-sm px-6 sm:px-8 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            style={{ backgroundColor: '#0f172a', color: '#ffffff', minHeight: '44px' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2563eb')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0f172a')}
          >
            <ArrowLeft size={15} />
            <span>RETURN TO PORTFOLIO</span>
          </button>
        </div>
      </div>
    </div>
  );
}
