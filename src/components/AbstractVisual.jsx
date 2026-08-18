import React, { useEffect, useState, useRef } from 'react';

export default function AbstractVisual() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) / (window.innerWidth / 2);
      const deltaY = (e.clientY - centerY) / (window.innerHeight / 2);

      setOffset({
        x: Math.max(-12, Math.min(12, deltaX * 12)),
        y: Math.max(-10, Math.min(10, deltaY * 10))
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[380px] aspect-square mx-auto flex items-center justify-center select-none"
    >
      {/* Outer Glow Spheres */}
      <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-transparent blur-2xl animate-pulse-glow" />

      {/* Rotating Concentric Glass Rings */}
      <div className="absolute inset-2 border border-cyan-500/20 rounded-full animate-spin [animation-duration:30s] border-dashed pointer-events-none" />
      <div className="absolute inset-8 border border-purple-500/20 rounded-full animate-spin [animation-duration:45s] [animation-direction:reverse] pointer-events-none" />

      {/* Abstract Glassmorphism Container with Dynamic Offset */}
      <div
        className="relative w-64 h-64 cyber-glass rounded-3xl border border-cyan-500/30 shadow-[0_0_40px_rgba(0,240,255,0.15)] flex items-center justify-center transition-transform duration-300 ease-out"
        style={{
          transform: `perspective(1000px) rotateX(${-offset.y}deg) rotateY(${offset.x}deg) translate3d(${offset.x}px, ${offset.y}px, 0)`
        }}
      >
        {/* Corner Accent Dots */}
        <div className="absolute top-4 left-4 w-1.5 h-1.5 rounded-full bg-cyan-400" />
        <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-purple-400" />
        <div className="absolute bottom-4 left-4 w-1.5 h-1.5 rounded-full bg-emerald-400" />
        <div className="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full bg-cyan-400" />

        {/* Floating Code Accent Pills */}
        <div className="absolute -top-3 left-8 cyber-glass border border-cyan-500/30 px-3 py-0.5 rounded-full text-[10px] font-mono text-cyan-400">
          REACT • JAVA • DATA
        </div>

        <div className="absolute -bottom-3 right-8 cyber-glass border border-purple-500/30 px-3 py-0.5 rounded-full text-[10px] font-mono text-purple-400">
          AWS CERTIFIED
        </div>

        {/* Central Monogram Graphic (VK) */}
        <div className="relative flex flex-col items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-32 h-32 text-cyan-400 drop-shadow-[0_0_15px_rgba(0,240,255,0.6)]">
            <defs>
              <linearGradient id="vkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00f0ff" />
                <stop offset="50%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
            </defs>

            {/* Stylized VK Monogram Lines */}
            <path
              d="M 22,25 L 38,75 M 38,75 L 54,25"
              fill="none"
              stroke="url(#vkGrad)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 60,25 L 60,75 M 60,50 L 78,25 M 60,50 L 78,75"
              fill="none"
              stroke="url(#vkGrad)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Node Points */}
            <circle cx="22" cy="25" r="3" fill="#00f0ff" />
            <circle cx="38" cy="75" r="3" fill="#a855f7" />
            <circle cx="54" cy="25" r="3" fill="#10b981" />
            <circle cx="60" cy="25" r="3" fill="#00f0ff" />
            <circle cx="78" cy="25" r="3" fill="#a855f7" />
            <circle cx="78" cy="75" r="3" fill="#10b981" />
          </svg>

          <span className="text-xs font-mono tracking-widest text-slate-300 font-bold mt-1">
            VENKAT<span className="text-cyan-400">.DEV</span>
          </span>
        </div>
      </div>
    </div>
  );
}
