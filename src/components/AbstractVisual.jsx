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
        x: Math.max(-8, Math.min(8, deltaX * 8)),
        y: Math.max(-6, Math.min(6, deltaY * 6))
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[360px] aspect-square mx-auto flex items-center justify-center select-none"
    >
      {/* Soft Ambient Radial Background Glow */}
      <div className="absolute inset-4 rounded-full bg-blue-100/60 blur-2xl animate-pulse-glow" />

      {/* Outer Subtle Concentric Light Ring */}
      <div className="absolute inset-2 border border-blue-200/60 rounded-full pointer-events-none" />

      {/* Clean White Card Frame with Subtle Parallax */}
      <div
        className="relative w-64 h-64 bg-white rounded-3xl border border-blue-100 shadow-xl flex flex-col items-center justify-center transition-transform duration-300 ease-out p-6"
        style={{
          transform: `perspective(1000px) rotateX(${-offset.y}deg) rotateY(${offset.x}deg) translate3d(${offset.x}px, ${offset.y}px, 0)`
        }}
      >
        {/* Corner Accents */}
        <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-blue-600" />
        <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-red-500" />
        <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-emerald-500" />
        <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-blue-600" />

        {/* Floating Light Badges */}
        <div className="absolute -top-3 left-6 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full text-[10px] font-mono font-bold text-blue-700 shadow-xs">
          REACT • JAVA • SQL
        </div>

        <div className="absolute -bottom-3 right-6 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full text-[10px] font-mono font-bold text-amber-700 shadow-xs">
          AWS CERTIFIED
        </div>

        {/* Central VK Monogram Graphic */}
        <div className="flex flex-col items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-28 h-28 text-blue-600 drop-shadow-xs">
            <defs>
              <linearGradient id="vkLightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>
            </defs>

            {/* Stylized VK Monogram Lines */}
            <path
              d="M 22,25 L 38,75 M 38,75 L 54,25"
              fill="none"
              stroke="url(#vkLightGrad)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 60,25 L 60,75 M 60,50 L 78,25 M 60,50 L 78,75"
              fill="none"
              stroke="url(#vkLightGrad)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Accent Nodes */}
            <circle cx="22" cy="25" r="3.5" fill="#2563eb" />
            <circle cx="38" cy="75" r="3.5" fill="#ef4444" />
            <circle cx="54" cy="25" r="3.5" fill="#10b981" />
            <circle cx="60" cy="25" r="3.5" fill="#2563eb" />
            <circle cx="78" cy="25" r="3.5" fill="#ef4444" />
            <circle cx="78" cy="75" r="3.5" fill="#10b981" />
          </svg>

          <span className="text-xs font-mono font-extrabold tracking-widest text-slate-800 mt-1">
            VENKAT<span className="text-blue-600">.DEV</span>
          </span>
        </div>
      </div>
    </div>
  );
}
