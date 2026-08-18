import React from 'react';
import { FaGithub } from 'react-icons/fa6';
import { Mail, ChevronDown, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const statCards = [
  { value: '580/600', label: 'PCMB', sub: 'High Distinction' },
  { value: 'AWS',     label: 'CERTIFIED', sub: 'Cloud Practitioner' },
  { value: '527/625', label: '10th', sub: '84.32%' },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{ backgroundColor: '#f7fafc', paddingTop: '80px' }}
    >
      <div className="max-w-3xl mx-auto space-y-8">

        {/* Greeting — fastest reveal */}
        <p
          className="text-base sm:text-lg font-mono font-bold tracking-widest uppercase reveal-up"
          style={{ color: '#2563eb' }}
        >
          Hi, I'm Venkat.
        </p>

        {/* Name — delayed, more prominent */}
        <h1
          className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-none reveal-up delay-100"
          style={{ color: '#0f172a' }}
        >
          K{' '}
          <span className="venkat-shimmer">Venkat</span>
          {' '}Chowdary
        </h1>

        {/* Tagline */}
        <p
          className="text-base sm:text-xl font-semibold tracking-wide reveal-up delay-200"
          style={{ color: '#475569' }}
        >
          B.Tech CSE Undergraduate&nbsp;·&nbsp;Data Science&nbsp;·&nbsp;AI&nbsp;·&nbsp;Web Development
        </p>

        {/* Introduction */}
        <p
          className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal reveal-up delay-300"
          style={{ color: '#64748b' }}
        >
          {personalInfo.shortStatement}
        </p>

        {/* Stat Cards */}
        <div className="flex flex-wrap justify-center gap-4 reveal-up delay-400">
          {statCards.map((card, i) => (
            <div
              key={i}
              className="stat-card relative px-6 py-4 rounded-2xl text-left min-w-[130px] overflow-hidden"
              style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0' }}
            >
              {/* Red top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ backgroundColor: '#ef4444' }}
              />
              <span
                className="stat-value block text-2xl font-extrabold font-mono"
                style={{ color: '#2563eb', transition: 'transform 0.22s ease' }}
              >
                {card.value}
              </span>
              <span className="block text-xs font-bold mt-0.5" style={{ color: '#0f172a' }}>
                {card.label}
              </span>
              <span className="block text-[10px] font-mono" style={{ color: '#94a3b8' }}>
                {card.sub}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 reveal-up delay-500">
          {/* VIEW MY WORK */}
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary inline-flex items-center space-x-2 font-bold text-sm px-8 py-3.5 rounded-xl shadow-sm"
            style={{ backgroundColor: '#2563eb', color: '#ffffff' }}
          >
            <span>VIEW MY WORK</span>
            <ChevronDown size={16} className="btn-arrow" />
          </a>

          {/* GITHUB */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary inline-flex items-center space-x-2 font-bold text-sm px-7 py-3.5 rounded-xl"
            style={{ backgroundColor: '#ffffff', color: '#0f172a', border: '1px solid #e2e8f0' }}
          >
            <FaGithub size={17} />
            <span>GITHUB</span>
            <ExternalLink size={13} className="btn-arrow" style={{ color: '#94a3b8' }} />
          </a>

          {/* CONTACT ME */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-secondary inline-flex items-center space-x-2 font-bold text-sm px-7 py-3.5 rounded-xl"
            style={{ backgroundColor: '#ffffff', color: '#2563eb', border: '1px solid #bfdbfe' }}
          >
            <Mail size={16} className="btn-arrow" />
            <span>CONTACT ME</span>
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1.5 reveal-fade delay-700"
        style={{ color: '#94a3b8' }}
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </div>
    </section>
  );
}
