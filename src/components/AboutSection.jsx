import React, { useEffect, useRef } from 'react';
import { BookOpen, Brain, Globe } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const domains = [
  {
    icon: <Brain size={20} />,
    title: 'Data Science',
    desc: 'Data analysis pipelines, statistical modeling, and structured database queries using Python and SQL.',
  },
  {
    icon: <Globe size={20} />,
    title: 'Web Development',
    desc: 'Responsive, modern full-stack web applications with clean frontend UX and scalable backend REST APIs.',
  },
  {
    icon: <BookOpen size={20} />,
    title: 'AI',
    desc: 'Artificial intelligence concepts, smart machine learning workflows, and modern AI tooling integration.',
  },
];

const facts = [
  ['Degree',     'B.Tech CSE — Data Science'],
  ['University', 'KL University, Vijayawada, AP'],
  ['Focus',      'Data Science · AI · Web Development'],
  ['Location',   'Vijayawada, Andhra Pradesh, India'],
];

export default function AboutSection() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('section-visible'); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="section-hidden py-16 sm:py-20 md:py-24 px-4 sm:px-6"
      style={{ backgroundColor: '#ffffff' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <div className="flex items-center space-x-3 mb-3">
          <span className="text-xs font-mono font-bold" style={{ color: '#2563eb' }}>01</span>
          <span className="w-8 h-px" style={{ backgroundColor: '#bfdbfe' }} />
          <span className="text-xs font-mono font-bold" style={{ color: '#2563eb' }}>ABOUT ME</span>
        </div>

        <h2 className="section-heading mb-6">
          Building with code,{' '}
          <span style={{ color: '#2563eb' }}>driven by curiosity.</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Left — Story */}
          <div className="stagger-child stagger-1 space-y-4 sm:space-y-5">
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#475569' }}>
              I'm <strong style={{ color: '#0f172a' }}>{personalInfo.name}</strong>, a Computer Science &amp; Engineering
              undergraduate at <strong style={{ color: '#0f172a' }}>KL University</strong>, specializing in Data Science.
              I enjoy turning ideas into clean, functional digital products through full-stack web development,
              data analysis, and AI exploration.
            </p>
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#475569' }}>
              I'm actively building real-world projects, learning modern frameworks, and developing a strong
              foundation for a career at the intersection of software engineering and data-driven systems.
            </p>

            {/* Key facts */}
            <div
              className="p-4 sm:p-5 rounded-2xl space-y-3"
              style={{ backgroundColor: '#eaf2ff', border: '1px solid #bfdbfe' }}
            >
              {facts.map(([label, value]) => (
                <div key={label} className="flex items-start space-x-3 text-sm">
                  <span
                    className="font-mono font-bold text-xs pt-0.5 shrink-0"
                    style={{ color: '#2563eb', minWidth: '72px' }}
                  >
                    {label}
                  </span>
                  <span style={{ color: '#0f172a' }}>{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Domain cards */}
          <div className="grid grid-cols-1 gap-3 sm:gap-4">
            {domains.map((d, i) => (
              <div
                key={i}
                className={`card-hover stagger-child stagger-${i + 2} flex items-start space-x-4 p-4 sm:p-5 rounded-2xl`}
                style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0' }}
              >
                <div
                  className="p-2.5 rounded-xl shrink-0"
                  style={{ backgroundColor: '#eaf2ff', color: '#2563eb' }}
                >
                  {d.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold mb-1" style={{ color: '#0f172a' }}>{d.title}</h3>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#64748b' }}>{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
