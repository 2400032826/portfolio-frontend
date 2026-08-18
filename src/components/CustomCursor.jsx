import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor({ cursorState = { type: 'default', text: '' } }) {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const requestRef = useRef(null);

  useEffect(() => {
    // Check if touch device or reduced motion
    const touchMedia = window.matchMedia('(pointer: coarse)');
    const motionMedia = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (touchMedia.matches || motionMedia.matches) {
      setIsDisabled(true);
      return;
    }

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  // Smooth lerp for outer ring trailing effect
  useEffect(() => {
    if (isDisabled) return;
    const animate = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.18,
        y: prev.y + (pos.y - prev.y) * 0.18,
      }));
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [pos, isDisabled]);

  if (isDisabled || !isVisible) return null;

  const isExpanded = cursorState.type !== 'default' || cursorState.text;

  return (
    <div className="custom-cursor pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Central Glowing Dot */}
      <div
        className={`fixed top-0 left-0 w-2.5 h-2.5 bg-cyan-400 rounded-full shadow-[0_0_10px_#00f0ff] transition-transform duration-75 -translate-x-1/2 -translate-y-1/2 ${
          isClicking ? 'scale-150 bg-purple-400 shadow-[0_0_15px_#a855f7]' : ''
        }`}
        style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)` }}
      />

      {/* Trailing Outer Ring */}
      <div
        className={`fixed top-0 left-0 border rounded-full transition-all duration-200 ease-out flex items-center justify-center -translate-x-1/2 -translate-y-1/2 ${
          isExpanded
            ? 'w-14 h-14 border-cyan-400 bg-cyan-950/40 backdrop-blur-xs text-[10px] font-mono tracking-wider font-bold text-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.4)]'
            : isClicking
            ? 'w-10 h-10 border-purple-400 scale-90'
            : 'w-8 h-8 border-cyan-400/40 bg-cyan-500/5'
        }`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        {cursorState.text && (
          <span className="animate-pulse leading-none select-none uppercase">
            {cursorState.text}
          </span>
        )}
      </div>
    </div>
  );
}
