import React, { useEffect, useState } from 'react';

export default function IntroLoader({ onComplete }) {
  const [phase, setPhase] = useState('show'); // 'show' | 'fade'

  useEffect(() => {
    const seen = sessionStorage.getItem('venkat_intro_seen');
    if (seen) { onComplete(); return; }

    // Show for ~800ms then fade out over 300ms
    const showTimer = setTimeout(() => setPhase('fade'), 800);
    const doneTimer = setTimeout(() => {
      sessionStorage.setItem('venkat_intro_seen', 'true');
      onComplete();
    }, 1100);

    return () => { clearTimeout(showTimer); clearTimeout(doneTimer); };
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center font-sans"
      style={{
        backgroundColor: '#0f172a',
        opacity: phase === 'fade' ? 0 : 1,
        transition: 'opacity 0.3s ease',
        pointerEvents: phase === 'fade' ? 'none' : 'auto',
      }}
    >
      <div className="text-center space-y-3">
        <p
          className="text-2xl font-extrabold tracking-tight"
          style={{ color: '#ffffff' }}
        >
          VENKAT<span style={{ color: '#2563eb' }}>.DEV</span>
        </p>
        <p className="text-sm text-slate-400 font-mono tracking-widest">
          K VENKAT CHOWDARY
        </p>
      </div>
    </div>
  );
}
