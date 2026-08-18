import React, { useEffect, useState } from 'react';

export default function IntroLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('venkat_intro_seen');
    if (hasSeenIntro) {
      onComplete();
      return;
    }

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFading(true);
            setTimeout(() => {
              sessionStorage.setItem('venkat_intro_seen', 'true');
              onComplete();
            }, 400);
          }, 200);
          return 100;
        }
        return prev + 12;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  const handleSkip = () => {
    sessionStorage.setItem('venkat_intro_seen', 'true');
    setIsFading(true);
    setTimeout(() => onComplete(), 200);
  };

  return (
    <div
      className={`fixed inset-0 z-[10000] bg-[#f8fafc] flex flex-col items-center justify-center font-sans transition-opacity duration-400 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="w-80 max-w-[90vw] space-y-5 text-center">
        <div className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold font-mono">
          VENKAT.DEV
        </div>

        <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
          K VENKAT CHOWDARY
        </h2>

        {/* Progress Bar */}
        <div className="relative w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600 rounded-full transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between items-center text-xs text-slate-500 font-mono">
          <span>Loading portfolio...</span>
          <span className="font-bold text-blue-600">{progress}%</span>
        </div>

        <button
          onClick={handleSkip}
          className="mt-4 text-xs text-slate-400 hover:text-blue-600 font-mono underline cursor-pointer"
        >
          Skip Intro
        </button>
      </div>
    </div>
  );
}
