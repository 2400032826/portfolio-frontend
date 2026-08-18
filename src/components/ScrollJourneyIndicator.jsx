import React, { useEffect, useState } from 'react';

const sections = [
  { id: 'hero', label: 'TOP' },
  { id: 'about', label: 'ABOUT' },
  { id: 'education', label: 'EDU' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'certifications', label: 'CERTS' },
  { id: 'projects', label: 'BUILD' },
  { id: 'contact', label: 'END' },
];

export default function ScrollJourneyIndicator({ activeSection }) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) setScrollProgress(Math.min(100, (window.scrollY / total) * 100));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center space-y-2 pointer-events-auto select-none">
      {/* Track + Rocket */}
      <div className="relative flex flex-col items-center" style={{ height: '220px' }}>
        {/* Background track */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px rounded-full"
          style={{ backgroundColor: '#e2e8f0' }}
        />
        {/* Fill */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 w-px rounded-full transition-all duration-200 ease-out"
          style={{
            backgroundColor: '#2563eb',
            height: `${scrollProgress}%`,
          }}
        />
        {/* Rocket dot */}
        <div
          className="absolute left-1/2 -translate-x-1/2 transition-all duration-200 ease-out"
          style={{ top: `${scrollProgress}%`, transform: `translateX(-50%) translateY(-50%)` }}
        >
          <div
            className="w-3.5 h-3.5 rounded-full border-2 shadow-sm"
            style={{ backgroundColor: '#ffffff', borderColor: '#2563eb' }}
          />
        </div>
      </div>

      {/* Section labels */}
      <div className="flex flex-col items-end space-y-2 mt-2">
        {sections.map((s) => {
          const isActive = activeSection === s.id;
          return (
            <button
              key={s.id}
              onClick={() => handleClick(s.id)}
              className="flex items-center space-x-2 cursor-pointer group"
            >
              <span
                className="text-[9px] font-mono font-bold transition-colors duration-200"
                style={{ color: isActive ? '#2563eb' : '#94a3b8' }}
              >
                {s.label}
              </span>
              <div
                className="w-1.5 h-1.5 rounded-full transition-all duration-200"
                style={{
                  backgroundColor: isActive ? '#2563eb' : '#cbd5e1',
                  transform: isActive ? 'scale(1.4)' : 'scale(1)',
                }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
