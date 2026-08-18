import React, { useEffect, useState } from 'react';

export default function ScrollJourneyIndicator({ activeSection }) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'hero', label: 'START' },
    { id: 'about', label: 'ABOUT' },
    { id: 'education', label: 'EDU' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'certifications', label: 'CERTS' },
    { id: 'projects', label: 'BUILD' },
    { id: 'contact', label: 'END' }
  ];

  return (
    <div className="hidden xl:flex fixed left-6 top-1/3 -translate-y-1/2 z-40 flex-col items-center pointer-events-none select-none">
      {/* Track Line */}
      <div className="relative w-0.5 h-64 bg-slate-200 rounded-full">
        {/* Fill Line */}
        <div
          className="w-full bg-[#2563eb] rounded-full transition-all duration-150 ease-out"
          style={{ height: `${scrollProgress}%` }}
        />

        {/* Line-Art Rocket Moving Icon */}
        <div
          className="absolute left-1/2 -translate-x-1/2 transition-all duration-150 ease-out flex items-center justify-center"
          style={{ top: `${scrollProgress}%` }}
        >
          <div className="p-1.5 bg-white border border-blue-600 text-[#2563eb] rounded-full shadow-sm -translate-y-1/2">
            <svg
              className="w-3.5 h-3.5 transform -rotate-45"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {/* Minimal Rocket Icon Path */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Section Node Checkpoints */}
      <div className="mt-4 flex flex-col space-y-3 font-mono text-[9px] text-slate-400">
        {sections.map((s) => {
          const isActive = activeSection === s.id;
          return (
            <div key={s.id} className="flex items-center space-x-2">
              <div
                className={`w-1.5 h-1.5 rounded-full transition ${
                  isActive ? 'bg-[#2563eb] scale-125' : 'bg-slate-300'
                }`}
              />
              <span className={isActive ? 'text-[#2563eb] font-bold' : 'text-slate-400'}>
                {s.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
