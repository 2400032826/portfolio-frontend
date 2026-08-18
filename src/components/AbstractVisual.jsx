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
        x: Math.max(-10, Math.min(10, deltaX * 10)),
        y: Math.max(-8, Math.min(8, deltaY * 8))
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
      {/* Soft Blue Radial Background Light */}
      <div className="absolute inset-0 rounded-full bg-[#eaf2ff]/80 blur-3xl" />

      {/* Abstract Flat Graphic Composition (NO CARD, NO SHADOW CONTAINER) */}
      <div
        className="relative w-72 h-72 flex items-center justify-center transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`
        }}
      >
        {/* Soft Blue Geometric Layers */}
        <div className="absolute w-56 h-56 rounded-3xl bg-gradient-to-tr from-[#eaf2ff] to-[#f0f6ff] border border-blue-200/80 transform rotate-6" />
        <div className="absolute w-56 h-56 rounded-3xl border-2 border-blue-300/40 transform -rotate-3" />

        {/* Controlled Crimson Red Accent Geometrics */}
        <div className="absolute -top-2 right-8 w-4 h-4 rounded-full bg-[#ef4444]" />
        <div className="absolute -bottom-2 left-8 w-3 h-3 bg-[#ef4444] transform rotate-45" />

        {/* Faint Structural Line Grid */}
        <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#2563eb" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#2563eb" strokeWidth="1" strokeDasharray="4 4" />
        </svg>

        {/* Oversized Graphic VK Monogram Visual */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-36 h-36 drop-shadow-sm">
            <defs>
              <linearGradient id="vkGraphicGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>
            </defs>

            {/* Translucent Backdrop Monogram */}
            <path
              d="M 20,25 L 38,75 M 38,75 L 56,25 M 60,25 L 60,75 M 60,50 L 80,25 M 60,50 L 80,75"
              fill="none"
              stroke="#2563eb"
              strokeWidth="12"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.12"
            />

            {/* Crisp Foreground Monogram Lines */}
            <path
              d="M 20,25 L 38,75 M 38,75 L 56,25"
              fill="none"
              stroke="url(#vkGraphicGrad)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 60,25 L 60,75 M 60,50 L 80,25 M 60,50 L 80,75"
              fill="none"
              stroke="url(#vkGraphicGrad)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Minimal Nodes */}
            <circle cx="20" cy="25" r="3.5" fill="#2563eb" />
            <circle cx="38" cy="75" r="3.5" fill="#ef4444" />
            <circle cx="56" cy="25" r="3.5" fill="#2563eb" />
            <circle cx="60" cy="25" r="3.5" fill="#2563eb" />
            <circle cx="80" cy="25" r="3.5" fill="#ef4444" />
            <circle cx="80" cy="75" r="3.5" fill="#2563eb" />
          </svg>

          <span className="text-xs font-mono font-extrabold tracking-widest text-[#0f172a] mt-2">
            VENKAT<span className="text-[#2563eb]">.DEV</span>
          </span>
        </div>
      </div>
    </div>
  );
}
