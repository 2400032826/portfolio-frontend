import React, { useState, useEffect } from 'react';
import { ChevronUp, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ _soundEnabled, setCursorState }) {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(now.toLocaleTimeString());
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 py-12 px-6 bg-[#07090e] font-mono text-xs text-slate-500 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Info */}
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-lg">
            <Cpu size={16} />
          </div>
          <div>
            <div className="text-white font-bold">{personalInfo.name.toUpperCase()}</div>
            <div className="text-[10px]">FULLSTACK COMMAND CENTER v2.6</div>
          </div>
        </div>

        {/* Center Live Clock */}
        <div className="cyber-glass px-4 py-2 rounded-full border border-slate-800 text-slate-400">
          SYSTEM_TIME: <span className="text-cyan-400 font-bold">{timeString || '00:00:00'}</span> IST
        </div>

        {/* Right Copyright & Back to top */}
        <div className="flex items-center space-x-4">
          <span>© 2026 {personalInfo.name}</span>
          <button
            onClick={scrollToTop}
            onMouseEnter={() => setCursorState({ type: 'hover', text: 'TOP' })}
            onMouseLeave={() => setCursorState({ type: 'default', text: '' })}
            className="p-2 bg-slate-900 border border-slate-800 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 rounded-xl transition cursor-pointer"
            title="Scroll to Top"
          >
            <ChevronUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
