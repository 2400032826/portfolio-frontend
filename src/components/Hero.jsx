import React from 'react';
import { FaGithub } from 'react-icons/fa6';
import { Mail, ChevronDown, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const statCards = [
  { value: '580/600', label: 'PCMB',      sub: 'High Distinction' },
  { value: 'AWS',     label: 'CERTIFIED', sub: 'Cloud Practitioner' },
  { value: '527/625', label: '10th',      sub: '84.32%' },
];

export default function Hero() {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 text-center"
      style={{ backgroundColor: '#f7fafc', paddingTop: '80px' }}
    >
      <div className="w-full max-w-3xl mx-auto space-y-6 sm:space-y-8">

        {/* Greeting */}
        <p className="hero-greeting reveal-up">
          Hi, I'm Venkat.
        </p>

        {/* Name — clamp responsive, never overflows */}
        <h1 className="hero-name reveal-up delay-100">
          K&nbsp;<span className="venkat-shimmer">Venkat</span>&nbsp;Chowdary
        </h1>

        {/* Tagline — responsive, wraps naturally */}
        <p className="hero-tagline reveal-up delay-200 px-2">
          B.Tech CSE Undergraduate
          <span className="hidden sm:inline">&nbsp;·&nbsp;Data Science&nbsp;·&nbsp;AI&nbsp;·&nbsp;Web Development</span>
          <span className="sm:hidden block text-sm mt-1" style={{ color: '#64748b', fontWeight: 500 }}>
            Data Science · AI · Web Development
          </span>
        </p>

        {/* Introduction */}
        <p
          className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto reveal-up delay-300 px-2"
          style={{ color: '#64748b' }}
        >
          {personalInfo.shortStatement}
        </p>

        {/* Stat Cards — responsive flex wrap */}
        <div className="flex flex-wrap justify-center gap-3 reveal-up delay-400">
          {statCards.map((card, i) => (
            <div
              key={i}
              className="stat-card relative px-4 sm:px-6 py-3 sm:py-4 rounded-2xl text-left overflow-hidden"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                minWidth: '110px',
                flex: '1 1 110px',
                maxWidth: '160px',
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ backgroundColor: '#ef4444' }}
              />
              <span
                className="stat-value block font-extrabold font-mono"
                style={{
                  color: '#2563eb',
                  fontSize: 'clamp(1.1rem, 4vw, 1.4rem)',
                  transition: 'transform 0.22s ease',
                }}
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

        {/* CTA Buttons — stack on mobile, row on sm+ */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 reveal-up delay-500 px-2">
          {/* VIEW MY WORK */}
          <a
            href="#projects"
            onClick={scrollTo('projects')}
            className="btn-primary inline-flex items-center justify-center space-x-2 font-bold text-sm px-6 py-3 rounded-xl shadow-sm w-full sm:w-auto"
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
            className="btn-secondary inline-flex items-center justify-center space-x-2 font-bold text-sm px-6 py-3 rounded-xl w-full sm:w-auto"
            style={{ backgroundColor: '#ffffff', color: '#0f172a', border: '1px solid #e2e8f0' }}
          >
            <FaGithub size={17} />
            <span>GITHUB</span>
            <ExternalLink size={13} className="btn-arrow" style={{ color: '#94a3b8' }} />
          </a>

          {/* CONTACT ME */}
          <a
            href="#contact"
            onClick={scrollTo('contact')}
            className="btn-secondary inline-flex items-center justify-center space-x-2 font-bold text-sm px-6 py-3 rounded-xl w-full sm:w-auto"
            style={{ backgroundColor: '#ffffff', color: '#2563eb', border: '1px solid #bfdbfe' }}
          >
            <Mail size={16} className="btn-arrow" />
            <span>CONTACT ME</span>
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1.5 reveal-fade delay-700"
        style={{ color: '#94a3b8' }}
        aria-hidden="true"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </div>
    </section>
  );
}
