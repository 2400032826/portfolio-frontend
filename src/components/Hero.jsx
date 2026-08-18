import React from 'react';
import { FaGithub } from 'react-icons/fa6';
import { Mail, ChevronDown, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{ backgroundColor: '#f7fafc', paddingTop: '80px' }}
    >
      <div className="max-w-3xl mx-auto space-y-8 reveal-up">

        {/* Greeting */}
        <div className="space-y-3">
          <p
            className="text-base sm:text-lg font-mono font-bold tracking-widest uppercase"
            style={{ color: '#2563eb' }}
          >
            Hi, I'm Venkat.
          </p>

          <h1
            className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-none"
            style={{ color: '#0f172a' }}
          >
            {personalInfo.name}
          </h1>

          <p
            className="text-base sm:text-xl font-semibold tracking-wide"
            style={{ color: '#475569' }}
          >
            B.Tech CSE Undergraduate &nbsp;·&nbsp; Data Science &nbsp;·&nbsp; AI &nbsp;·&nbsp; Web Development
          </p>
        </div>

        {/* Introduction */}
        <p
          className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal delay-100 reveal-up"
          style={{ color: '#64748b' }}
        >
          {personalInfo.shortStatement}
        </p>

        {/* Highlight Stats */}
        <div className="flex flex-wrap justify-center gap-4 delay-200 reveal-up">
          {/* PCMB */}
          <div
            className="relative px-6 py-4 rounded-2xl text-left min-w-[130px] overflow-hidden"
            style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0' }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-0.5"
              style={{ backgroundColor: '#ef4444' }}
            />
            <span
              className="block text-2xl font-extrabold font-mono"
              style={{ color: '#2563eb' }}
            >
              580/600
            </span>
            <span className="block text-xs font-bold mt-0.5" style={{ color: '#0f172a' }}>
              PCMB
            </span>
            <span className="block text-[10px] font-mono" style={{ color: '#94a3b8' }}>
              High Distinction
            </span>
          </div>

          {/* AWS */}
          <div
            className="relative px-6 py-4 rounded-2xl text-left min-w-[130px] overflow-hidden"
            style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0' }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-0.5"
              style={{ backgroundColor: '#ef4444' }}
            />
            <span
              className="block text-2xl font-extrabold font-mono"
              style={{ color: '#2563eb' }}
            >
              AWS
            </span>
            <span className="block text-xs font-bold mt-0.5" style={{ color: '#0f172a' }}>
              CERTIFIED
            </span>
            <span className="block text-[10px] font-mono" style={{ color: '#94a3b8' }}>
              Cloud Practitioner
            </span>
          </div>

          {/* 10th */}
          <div
            className="relative px-6 py-4 rounded-2xl text-left min-w-[130px] overflow-hidden"
            style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0' }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-0.5"
              style={{ backgroundColor: '#ef4444' }}
            />
            <span
              className="block text-2xl font-extrabold font-mono"
              style={{ color: '#2563eb' }}
            >
              527/625
            </span>
            <span className="block text-xs font-bold mt-0.5" style={{ color: '#0f172a' }}>
              10th
            </span>
            <span className="block text-[10px] font-mono" style={{ color: '#94a3b8' }}>
              84.32%
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 delay-300 reveal-up">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center space-x-2 font-bold text-sm px-8 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
            style={{ backgroundColor: '#2563eb', color: '#ffffff' }}
          >
            <span>VIEW MY WORK</span>
            <ChevronDown size={16} />
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 font-bold text-sm px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            style={{
              backgroundColor: '#ffffff',
              color: '#0f172a',
              border: '1px solid #e2e8f0',
            }}
          >
            <FaGithub size={17} />
            <span>GITHUB</span>
            <ExternalLink size={13} style={{ color: '#94a3b8' }} />
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center space-x-2 font-bold text-sm px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            style={{
              backgroundColor: '#ffffff',
              color: '#2563eb',
              border: '1px solid #bfdbfe',
            }}
          >
            <Mail size={16} />
            <span>CONTACT ME</span>
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1.5 delay-600 reveal-fade"
        style={{ color: '#94a3b8' }}
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </div>
    </section>
  );
}
