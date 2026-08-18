import React, { useEffect, useState, useRef } from 'react';

export default function CyberAvatar({ hoverState = 'default' }) {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [blinking, setBlinking] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) / (window.innerWidth / 2);
      const deltaY = (e.clientY - centerY) / (window.innerHeight / 2);

      // Clamp max offset values
      setMouseOffset({
        x: Math.max(-15, Math.min(15, deltaX * 15)),
        y: Math.max(-12, Math.min(12, deltaY * 12))
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Random eye blink timer
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      if (Math.random() > 0.4) {
        setBlinking(true);
        setTimeout(() => setBlinking(false), 160);
      }
    }, 4500);

    return () => clearInterval(blinkInterval);
  }, []);

  // Determine avatar visor glow color based on hover section
  let accentColor = '#00f0ff';
  let modeLabel = 'AI ASSISTANT // ONLINE';

  if (hoverState === 'projects') {
    accentColor = '#a855f7';
    modeLabel = 'INSPECTING_PROJECTS';
  } else if (hoverState === 'skills') {
    accentColor = '#22c55e';
    modeLabel = 'SCANNING_TECH_STACK';
  } else if (hoverState === 'contact') {
    accentColor = '#f59e0b';
    modeLabel = 'TRANSMITTING_COMMUNICATION';
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[380px] aspect-square mx-auto flex items-center justify-center select-none"
    >
      {/* Outer Rotating Cyber Ring */}
      <div className="absolute inset-0 border border-cyan-500/20 rounded-full animate-spin [animation-duration:25s] border-dashed pointer-events-none" />
      <div className="absolute inset-4 border border-purple-500/20 rounded-full animate-spin [animation-duration:35s] [animation-direction:reverse] pointer-events-none" />

      {/* Floating State Pills around Avatar */}
      <div className="absolute -top-2 left-0 cyber-glass border border-cyan-500/30 px-3 py-1 rounded-full text-[10px] font-mono text-cyan-400 shadow-[0_0_10px_rgba(0,240,255,0.2)] animate-float">
        ● {modeLabel}
      </div>

      <div className="absolute top-12 -right-4 cyber-glass border border-purple-500/30 px-3 py-1 rounded-full text-[10px] font-mono text-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.2)] animate-float [animation-delay:1.5s]">
        SCORE: 580/600 PCMB
      </div>

      <div className="absolute bottom-6 -left-4 cyber-glass border border-emerald-500/30 px-3 py-1 rounded-full text-[10px] font-mono text-emerald-400 shadow-[0_0_10px_rgba(34,197,94,0.2)] animate-float [animation-delay:3s]">
        BUILDING: REACT & JAVA
      </div>

      {/* 2.5D Digital Character Vector (SVG Canvas) */}
      <svg
        viewBox="0 0 300 300"
        className="w-full h-full drop-shadow-[0_0_25px_rgba(0,240,255,0.3)] transition-all duration-300"
      >
        <defs>
          <radialGradient id="visorGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={accentColor} stopOpacity="0.95" />
            <stop offset="60%" stopColor={accentColor} stopOpacity="0.4" />
            <stop offset="100%" stopColor="#07090e" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="armorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="50%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#07090e" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer Halo Core */}
        <circle
          cx="150"
          cy="150"
          r="130"
          fill="none"
          stroke={accentColor}
          strokeWidth="1"
          strokeDasharray="4 8"
          opacity="0.3"
        />

        {/* Shoulders / Cyber Armor Base */}
        <path
          d="M 60,250 C 60,200 110,190 150,190 C 190,190 240,200 240,250 L 250,290 L 50,290 Z"
          fill="url(#armorGradient)"
          stroke="#334155"
          strokeWidth="2"
        />
        {/* Shoulder Cyber Lines */}
        <path d="M 80,240 L 110,210" stroke={accentColor} strokeWidth="2" opacity="0.6" />
        <path d="M 220,240 L 190,210" stroke={accentColor} strokeWidth="2" opacity="0.6" />

        {/* Glowing Neural Core Arc Reactor on Chest */}
        <circle cx="150" cy="235" r="14" fill="#07090e" stroke={accentColor} strokeWidth="2" />
        <circle cx="150" cy="235" r="8" fill={accentColor} className="animate-pulse" filter="url(#glow)" />

        {/* Head Base Assembly (Follows Cursor Smoothly) */}
        <g style={{ transform: `translate(${mouseOffset.x * 0.6}px, ${mouseOffset.y * 0.6}px)` }}>
          {/* Cyber Neck */}
          <rect x="135" y="160" width="30" height="35" rx="4" fill="#0f172a" stroke="#334155" />

          {/* Helmet/Head Shell */}
          <path
            d="M 95,90 C 95,45 205,45 205,90 C 205,145 185,175 150,175 C 115,175 95,145 95,90 Z"
            fill="url(#armorGradient)"
            stroke="#475569"
            strokeWidth="2.5"
          />

          {/* Ear Cyber Sensors */}
          <rect x="86" y="85" width="10" height="25" rx="3" fill="#1e293b" stroke={accentColor} strokeWidth="1" />
          <rect x="204" y="85" width="10" height="25" rx="3" fill="#1e293b" stroke={accentColor} strokeWidth="1" />

          {/* Glowing Visor Frame (Tracking Mouse Pos) */}
          <g style={{ transform: `translate(${mouseOffset.x * 0.8}px, ${mouseOffset.y * 0.8}px)` }}>
            {/* Curved Cyber Visor Plate */}
            <path
              d="M 105,80 Q 150,70 195,80 C 202,110 185,120 150,120 C 115,120 98,110 105,80 Z"
              fill="#07090e"
              stroke={accentColor}
              strokeWidth="2"
              filter="url(#glow)"
            />

            {/* Glowing Visor Eye HUD Beam */}
            {!blinking ? (
              <path
                d="M 112,95 Q 150,88 188,95 C 182,105 168,110 150,110 C 132,110 118,105 112,95 Z"
                fill="url(#visorGradient)"
                filter="url(#glow)"
              />
            ) : (
              // Blink state horizontal thin line
              <line x1="115" y1="98" x2="185" y2="98" stroke={accentColor} strokeWidth="3" filter="url(#glow)" />
            )}

            {/* HUD Target Crosshairs */}
            <circle cx={150 + mouseOffset.x * 0.4} cy={97 + mouseOffset.y * 0.4} r="4" fill="none" stroke="#ffffff" strokeWidth="1.5" />
            <line x1={143 + mouseOffset.x * 0.4} y1={97 + mouseOffset.y * 0.4} x2={157 + mouseOffset.x * 0.4} y2={97 + mouseOffset.y * 0.4} stroke="#ffffff" strokeWidth="0.8" opacity="0.7" />
          </g>
        </g>
      </svg>
    </div>
  );
}
