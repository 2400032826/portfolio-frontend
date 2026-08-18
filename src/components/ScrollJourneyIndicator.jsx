import React, { useEffect, useState } from 'react';

const sections = [
  { id: 'hero',           label: 'TOP' },
  { id: 'about',          label: 'ABOUT' },
  { id: 'education',      label: 'EDU' },
  { id: 'skills',         label: 'SKILLS' },
  { id: 'certifications', label: 'CERTS' },
  { id: 'projects',       label: 'BUILD' },
  { id: 'contact',        label: 'END' },
];

export default function ScrollJourneyIndicator({ activeSection }) {
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) setScrollPct(Math.min(100, (window.scrollY / total) * 100));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const TRACK_H = 200; // px height of the track

  return (
    <div
      className="hidden xl:flex fixed right-6 top-1/2 z-40 flex-col items-end space-y-3 select-none"
      style={{ transform: 'translateY(-50%)' }}
    >
      {/* Track + traveling dot */}
      <div
        className="relative mx-auto"
        style={{ width: '2px', height: `${TRACK_H}px` }}
      >
        {/* Background track */}
        <div
          className="absolute inset-0 rounded-full"
          style={{ backgroundColor: '#e2e8f0' }}
        />
        {/* Progress fill */}
        <div
          className="absolute top-0 left-0 right-0 rounded-full"
          style={{
            height: `${scrollPct}%`,
            backgroundColor: '#2563eb',
            transition: 'height 0.18s ease-out',
          }}
        />
        {/* Traveling dot */}
        <div
          className="absolute left-1/2"
          style={{
            top: `${scrollPct}%`,
            transform: 'translate(-50%, -50%)',
            transition: 'top 0.18s ease-out',
          }}
        >
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              border: '2px solid #2563eb',
              boxShadow: '0 0 0 3px rgba(37,99,235,0.12)',
              transition: 'box-shadow 0.2s ease',
            }}
          />
        </div>
      </div>

      {/* Section labels */}
      <div className="flex flex-col items-end space-y-2">
        {sections.map((s) => {
          const isActive = activeSection === s.id;
          return (
            <button
              key={s.id}
              onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center space-x-2 cursor-pointer group"
              style={{ background: 'none', border: 'none' }}
            >
              <span
                className="text-[9px] font-mono font-bold"
                style={{
                  color: isActive ? '#2563eb' : '#cbd5e1',
                  transition: 'color 0.2s ease',
                }}
              >
                {s.label}
              </span>
              <div
                style={{
                  width: isActive ? '8px' : '6px',
                  height: isActive ? '8px' : '6px',
                  borderRadius: '50%',
                  backgroundColor: isActive ? '#2563eb' : '#e2e8f0',
                  transition: 'all 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
                  boxShadow: isActive ? '0 0 0 3px rgba(37,99,235,0.15)' : 'none',
                }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
