import React, { useEffect, useRef } from 'react';
import { GraduationCap, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function EducationTimeline() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible', 'timeline-active');
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="section-hidden py-24 px-6"
      style={{ backgroundColor: '#eaf2ff' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center space-x-3 mb-3">
          <span className="text-xs font-mono font-bold" style={{ color: '#2563eb' }}>02</span>
          <span className="w-8 h-px" style={{ backgroundColor: '#bfdbfe' }} />
          <span className="text-xs font-mono font-bold" style={{ color: '#2563eb' }}>EDUCATION</span>
        </div>

        <h2
          className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-10"
          style={{ color: '#0f172a' }}
        >
          Academic <span style={{ color: '#2563eb' }}>Background</span>
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — hidden on mobile, animated draw on desktop */}
          <div
            className="hidden md:block absolute left-5 top-6 bottom-6 w-px overflow-hidden"
            style={{ backgroundColor: '#e2e8f0' }}
          >
            <div
              ref={lineRef}
              className="w-full timeline-line"
              style={{ backgroundColor: '#bfdbfe' }}
            />
          </div>

          <div className="space-y-8">
            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className={`relative flex items-start md:space-x-10 stagger-child stagger-${idx + 1}`}
              >
                {/* Timeline Dot */}
                <div
                  className="hidden md:flex shrink-0 w-10 h-10 rounded-full items-center justify-center z-10"
                  style={{ backgroundColor: '#2563eb' }}
                >
                  <GraduationCap size={18} color="#ffffff" />
                </div>

                {/* Card */}
                <div
                  className="card-hover flex-1 p-6 sm:p-8 rounded-2xl relative overflow-hidden"
                  style={{ backgroundColor: '#ffffff', border: '1px solid #bfdbfe' }}
                >
                  {/* Red left accent */}
                  <div
                    className="absolute top-0 left-0 bottom-0 w-1 rounded-l-2xl"
                    style={{ backgroundColor: '#ef4444' }}
                  />

                  <div className="pl-3">
                    {/* Period badge */}
                    <span
                      className="inline-block text-xs font-mono font-bold px-3 py-1 rounded-full mb-3"
                      style={{ backgroundColor: '#eaf2ff', color: '#2563eb' }}
                    >
                      {edu.period}
                    </span>

                    <h3
                      className="text-lg sm:text-xl font-extrabold mb-1"
                      style={{ color: '#0f172a' }}
                    >
                      {edu.degree}
                    </h3>

                    {edu.specialization && (
                      <p
                        className="text-xs font-mono font-bold mb-2"
                        style={{ color: '#2563eb' }}
                      >
                        {edu.specialization}
                      </p>
                    )}

                    <p className="text-sm font-medium mb-4" style={{ color: '#64748b' }}>
                      {edu.institution} &mdash; {edu.location}
                    </p>

                    {edu.highlight && (
                      <div
                        className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-xl mb-4 text-xs font-bold font-mono"
                        style={{
                          backgroundColor: '#ecfdf5',
                          border: '1px solid #a7f3d0',
                          color: '#065f46',
                        }}
                      >
                        <CheckCircle2 size={14} className="check-icon" />
                        <span>{edu.highlight}</span>
                      </div>
                    )}

                    <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>
                      {edu.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
