import React, { useEffect, useRef } from 'react';
import { ArrowLeft, Code2, CheckCircle2, Layers, Database } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { projectsData } from '../data/portfolioData';

export default function ProjectDetailView({ onBack }) {
  const project = projectsData.find((p) => p.id === 'slv-fashion-studio') || projectsData[0];
  const ref = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div
      className="min-h-screen font-sans"
      style={{ backgroundColor: '#f7fafc', color: '#0f172a' }}
      ref={ref}
    >
      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20 space-y-10">

        {/* Back Button */}
        <button
          onClick={onBack}
          className="inline-flex items-center space-x-2 text-sm font-bold font-mono px-4 py-2.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            color: '#64748b',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#2563eb';
            e.currentTarget.style.borderColor = '#bfdbfe';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#64748b';
            e.currentTarget.style.borderColor = '#e2e8f0';
          }}
        >
          <ArrowLeft size={16} />
          <span>← BACK TO PORTFOLIO</span>
        </button>

        {/* Case Study Banner */}
        <div
          className="relative overflow-hidden rounded-3xl p-8 sm:p-10 space-y-4"
          style={{ backgroundColor: '#ffffff', border: '1px solid #bfdbfe' }}
        >
          <div className="absolute top-0 left-0 right-0 h-1.5" style={{ backgroundColor: '#ef4444' }} />

          <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
            <span
              className="px-3 py-1.5 rounded-full font-extrabold"
              style={{ backgroundColor: '#fef2f2', border: '1px solid #fecaca', color: '#ef4444' }}
            >
              ● {project.status}
            </span>
            <span className="font-bold" style={{ color: '#64748b' }}>
              {project.type}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight" style={{ color: '#0f172a' }}>
            {project.title}
          </h1>

          <p className="text-sm sm:text-base font-bold font-mono" style={{ color: '#2563eb' }}>
            {project.tagline}
          </p>

          <p className="text-base leading-relaxed" style={{ color: '#475569' }}>
            {project.description}
          </p>
        </div>

        {/* Overview & Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Development Highlights */}
          <div
            className="p-6 sm:p-8 rounded-2xl space-y-4"
            style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0' }}
          >
            <div className="flex items-center space-x-2 text-xs font-mono font-bold" style={{ color: '#2563eb' }}>
              <Code2 size={18} />
              <span>DEVELOPMENT HIGHLIGHTS</span>
            </div>
            <ul className="space-y-4">
              {project.highlights.map((h, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color: '#2563eb' }} />
                  <span className="text-sm leading-relaxed" style={{ color: '#0f172a' }}>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Tech Stack */}
          <div
            className="p-6 sm:p-8 rounded-2xl space-y-5"
            style={{ backgroundColor: '#eaf2ff', border: '1px solid #bfdbfe' }}
          >
            <div className="flex items-center space-x-2 text-xs font-mono font-bold" style={{ color: '#2563eb' }}>
              <Layers size={18} />
              <span>VERIFIED TECH STACK</span>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-bold font-mono"
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
                <Database size={14} />
                <span>Backend Architecture</span>
              </div>
              <p style={{ color: '#475569' }}>
                Relational MySQL schema structured for apparel ordering, customer accounts, and catalog item indexing.
              </p>
            </div>
          </div>
        </div>

        {/* Problem & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="p-6 sm:p-8 rounded-2xl space-y-3"
            style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0' }}
          >
            <h3 className="text-lg font-bold" style={{ color: '#0f172a' }}>The Problem</h3>
            <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>
              Small fashion studios often lack a centralized digital platform to manage
              product catalogs, custom orders, and customer interactions. Manual processes
              are inefficient and error-prone.
            </p>
          </div>
          <div
            className="p-6 sm:p-8 rounded-2xl space-y-3"
            style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0' }}
          >
            <h3 className="text-lg font-bold" style={{ color: '#0f172a' }}>The Solution</h3>
            <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>
              SLV Fashion Studio is a full-stack web platform providing an intuitive
              product catalog, custom apparel ordering workflows, and a robust backend
              for seamless studio operations management.
            </p>
          </div>
        </div>

        {/* Development Status & Links */}
        <div
          className="p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0' }}
        >
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold" style={{ color: '#0f172a' }}>
              Active Full-Stack Build
            </h3>
            <p className="text-sm" style={{ color: '#64748b' }}>
              Currently in active local development.
            </p>
          </div>

          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              style={{ backgroundColor: '#2563eb', color: '#ffffff' }}
            >
              <FaGithub size={18} />
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

        {/* Bottom Back */}
        <div className="text-center pt-4">
          <button
            onClick={onBack}
            className="inline-flex items-center space-x-2 font-bold font-mono text-sm px-8 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            style={{ backgroundColor: '#0f172a', color: '#ffffff' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2563eb')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0f172a')}
          >
            <ArrowLeft size={16} />
            <span>RETURN TO PORTFOLIO</span>
          </button>
        </div>
      </div>
    </div>
  );
}
