import React, { useEffect, useRef } from 'react';
import { GraduationCap, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function EducationTimeline() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible', 'timeline-active');
        }
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="section-hidden py-16 sm:py-20 md:py-24 px-4 sm:px-6"
      style={{ backgroundColor: '#eaf2ff' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <div className="flex items-center space-x-3 mb-3">
          <span className="text-xs font-mono font-bold" style={{ color: '#2563eb' }}>02</span>
          <span className="w-8 h-px" style={{ backgroundColor: '#bfdbfe' }} />
          <span className="text-xs font-mono font-bold" style={{ color: '#2563eb' }}>EDUCATION</span>
        </div>

        <h2 className="section-heading mb-8 sm:mb-10">
          Academic <span style={{ color: '#2563eb' }}>Background</span>
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — desktop only */}
          <div
            className="hidden md:block absolute overflow-hidden"
            style={{ left: '20px', top: '24px', bottom: '24px', width: '1px', backgroundColor: '#dbeafe' }}
          >
            <div className="w-full timeline-line" style={{ backgroundColor: '#bfdbfe' }} />
          </div>

          <div className="space-y-5 sm:space-y-8">
            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className={`relative flex items-start stagger-child stagger-${idx + 1}`}
                style={{ gap: '0', paddingLeft: '0' }}
              >
                {/* Desktop dot */}
                <div
                  className="hidden md:flex shrink-0 w-10 h-10 rounded-full items-center justify-center z-10 mr-8"
                  style={{ backgroundColor: '#2563eb' }}
                >
                  <GraduationCap size={16} color="#ffffff" />
                </div>

                {/* Mobile left bar indicator */}
                <div
                  className="md:hidden shrink-0 mr-4 mt-1"
                  style={{ width: '3px', height: '100%', backgroundColor: '#2563eb', minHeight: '100%', alignSelf: 'stretch', borderRadius: '2px' }}
                />

                {/* Card */}
                <div
                  className="card-hover flex-1 rounded-2xl relative overflow-hidden"
                  style={{ backgroundColor: '#ffffff', border: '1px solid #bfdbfe' }}
                >
                  {/* Red left accent */}
                  <div
                    className="absolute top-0 left-0 bottom-0 w-1 rounded-l-2xl"
                    style={{ backgroundColor: '#ef4444' }}
                  />

                  <div className="p-4 sm:p-6 md:p-8 pl-5 sm:pl-7">
                    {/* Period */}
                    <span
                      className="inline-block text-xs font-mono font-bold px-2.5 py-1 rounded-full mb-3"
                      style={{ backgroundColor: '#eaf2ff', color: '#2563eb' }}
                    >
                      {edu.period}
                    </span>

                    <h3
                      className="font-extrabold mb-1"
                      style={{ color: '#0f172a', fontSize: 'clamp(1rem, 3vw, 1.25rem)' }}
                    >
                      {edu.degree}
                    </h3>

                    {edu.specialization && (
                      <p className="text-xs font-mono font-bold mb-2" style={{ color: '#2563eb' }}>
                        {edu.specialization}
                      </p>
                    )}

                    <p className="text-xs sm:text-sm font-medium mb-3 sm:mb-4" style={{ color: '#64748b' }}>
                      {edu.institution} — {edu.location}
                    </p>

                    {edu.highlight && (
                      <div
                        className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-xl mb-3 text-xs font-bold font-mono"
                        style={{ backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0', color: '#065f46' }}
                      >
                        <CheckCircle2 size={13} className="check-icon" />
                        <span>{edu.highlight}</span>
                      </div>
                    )}

                    <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#475569' }}>
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
