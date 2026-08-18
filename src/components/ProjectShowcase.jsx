import React, { useEffect, useRef } from 'react';
import { FaGithub } from 'react-icons/fa6';
import { Eye, Code2, CheckCircle2 } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function ProjectShowcase({ onViewDetail }) {
  const project = projectsData[0];
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('section-visible');
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={ref}
      className="section-hidden py-24 px-6"
      style={{ backgroundColor: '#ffffff' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center space-x-3 mb-3">
          <span className="text-xs font-mono font-bold" style={{ color: '#2563eb' }}>05</span>
          <span className="w-8 h-px" style={{ backgroundColor: '#bfdbfe' }} />
          <span className="text-xs font-mono font-bold" style={{ color: '#2563eb' }}>FEATURED PROJECT</span>
        </div>

        <h2
          className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3"
          style={{ color: '#0f172a' }}
        >
          Current <span style={{ color: '#2563eb' }}>Build</span>
        </h2>
        <p className="text-sm mb-10" style={{ color: '#64748b' }}>
          Primary application currently in active development.
        </p>

        {/* Featured Project Card */}
        <div
          className="card-hover stagger-child stagger-1 rounded-3xl overflow-hidden"
          style={{ border: '1px solid #e2e8f0', backgroundColor: '#f8fafc' }}
        >
          {/* Top red accent */}
          <div className="h-1" style={{ backgroundColor: '#ef4444' }} />

          <div className="p-8 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              {/* Left — Project Info */}
              <div className="space-y-5">
                {/* Status badges */}
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

                <h3 className="text-3xl sm:text-4xl font-extrabold" style={{ color: '#0f172a' }}>
                  {project.title}
                </h3>

                <p className="text-sm font-bold font-mono" style={{ color: '#2563eb' }}>
                  {project.tagline}
                </p>

                <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#475569' }}>
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-bold font-mono"
                      style={{
                        backgroundColor: '#ffffff',
                        border: '1px solid #e2e8f0',
                        color: '#0f172a',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 pt-2">
                  <button
                    onClick={() => onViewDetail && onViewDetail('slv-fashion-studio')}
                    className="inline-flex items-center space-x-2 font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                    style={{ backgroundColor: '#2563eb', color: '#ffffff' }}
                  >
                    <Eye size={16} />
                    <span>VIEW PROJECT DETAILS</span>
                  </button>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center space-x-2 font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                      style={{
                        backgroundColor: '#ffffff',
                        border: '1px solid #e2e8f0',
                        color: '#0f172a',
                      }}
                    >
                      <FaGithub size={16} />
                      <span>GITHUB</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Right — Key Highlights */}
              <div
                className="p-6 rounded-2xl space-y-4"
                style={{ backgroundColor: '#eaf2ff', border: '1px solid #bfdbfe' }}
              >
                <div className="flex items-center space-x-2 text-xs font-mono font-bold" style={{ color: '#2563eb' }}>
                  <Code2 size={16} />
                  <span>KEY HIGHLIGHTS</span>
                </div>

                <ul className="space-y-4">
                  {project.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle2
                        size={16}
                        className="shrink-0 mt-0.5"
                        style={{ color: '#2563eb' }}
                      />
                      <span className="text-sm leading-relaxed" style={{ color: '#0f172a' }}>
                        {h}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Dev status note */}
                <div
                  className="p-4 rounded-xl text-xs font-mono"
                  style={{ backgroundColor: '#ffffff', border: '1px solid #bfdbfe', color: '#64748b' }}
                >
                  <span className="font-bold block mb-1" style={{ color: '#0f172a' }}>
                    Development Status
                  </span>
                  Currently in active local development. GitHub repository will be made public upon first stable release.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
