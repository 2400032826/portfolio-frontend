import React, { useEffect, useState } from 'react';

export default function IntroLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING_CORE_SYSTEMS...');
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Check if intro has already run this session
    const hasSeenIntro = sessionStorage.getItem('venkat_intro_seen');
    if (hasSeenIntro) {
      onComplete();
      return;
    }

    const textStages = [
      { threshold: 20, text: 'BOOTING_QUANTUM_HUD...' },
      { threshold: 50, text: 'LOADING_PORTFOLIO_MODULES...' },
      { threshold: 80, text: 'SYNCHRONIZING_CYBER_AVATAR...' },
      { threshold: 95, text: 'SYSTEM_READY' }
    ];

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFading(true);
            setTimeout(() => {
              sessionStorage.setItem('venkat_intro_seen', 'true');
              onComplete();
            }, 500);
          }, 300);
          return 100;
        }

        const next = prev + Math.floor(Math.random() * 8) + 4;
        const currentText = textStages.find((s) => next >= s.threshold)?.text;
        if (currentText) setStatusText(currentText);

        return next > 100 ? 100 : next;
      });
    }, 60);

    return () => clearInterval(timer);
  }, [onComplete]);

  const handleSkip = () => {
    sessionStorage.setItem('venkat_intro_seen', 'true');
    setIsFading(true);
    setTimeout(() => onComplete(), 300);
  };

  return (
    <div
      className={`fixed inset-0 z-[10000] bg-[#07090e] flex flex-col items-center justify-center font-mono transition-opacity duration-500 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Central Cyber Loader */}
      <div className="w-80 max-w-[90vw] space-y-6 text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-400 text-xs shadow-[0_0_15px_rgba(0,240,255,0.2)]">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>VENKAT.DEV v2.6</span>
        </div>

        <h2 className="text-xl font-bold text-white tracking-widest uppercase">
          K VENKAT CHOWDARY
        </h2>

        {/* Progress Bar Container */}
        <div className="relative w-full h-2 bg-slate-900 border border-slate-800 rounded-full overflow-hidden p-0.5">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full shadow-[0_0_12px_#00f0ff] transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Diagnostic Status & Percentage */}
        <div className="flex justify-between items-center text-xs text-slate-400">
          <span className="text-cyan-400 animate-pulse">{statusText}</span>
          <span className="font-bold text-cyan-300">{progress}%</span>
        </div>

        {/* Skip button */}
        <button
          onClick={handleSkip}
          className="mt-6 text-xs text-slate-500 hover:text-cyan-400 underline transition cursor-pointer"
        >
          [SKIP INTRO]
        </button>
      </div>
    </div>
  );
}
