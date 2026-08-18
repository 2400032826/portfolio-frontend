import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X } from 'lucide-react';
import { playSound } from '../utils/audio';

export default function Navbar({
  activeSection,
  soundEnabled,
  setSoundEnabled,
  setCursorState
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'ABOUT' },
    { id: 'education', label: 'EDUCATION' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'certifications', label: 'CERTIFICATIONS' },
    { id: 'projects', label: 'PROJECT' },
    { id: 'contact', label: 'CONTACT' }
  ];

  const handleNavClick = (id) => {
    playSound('click', soundEnabled);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`cyber-glass rounded-full px-6 py-3 flex items-center justify-between border transition-all duration-300 ${
            scrolled
              ? 'bg-[#07090e]/90 border-cyan-500/30 shadow-[0_0_20px_rgba(0,240,255,0.15)] backdrop-blur-xl'
              : 'bg-[#07090e]/60 border-slate-800'
          }`}
        >
          {/* Logo */}
          <a
            href="#"
            onClick={() => handleNavClick('hero')}
            className="flex items-center space-x-2 font-mono text-base font-bold tracking-wider group"
            onMouseEnter={() => setCursorState({ type: 'hover', text: 'HOME' })}
            onMouseLeave={() => setCursorState({ type: 'default', text: '' })}
          >
            <span className="text-white group-hover:text-cyan-400 transition">
              VENKAT<span className="text-cyan-400">.DEV</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-6 text-xs font-mono font-bold tracking-wider">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  onMouseEnter={() => {
                    playSound('hover', soundEnabled);
                    setCursorState({ type: 'hover', text: link.label });
                  }}
                  onMouseLeave={() => setCursorState({ type: 'default', text: '' })}
                  className={`relative py-1 transition-colors duration-200 cursor-pointer ${
                    isActive ? 'text-cyan-400 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 rounded-full shadow-[0_0_8px_#00f0ff]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons (Sound Toggle) */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => {
                setSoundEnabled(!soundEnabled);
                playSound('click', !soundEnabled);
              }}
              onMouseEnter={() => setCursorState({ type: 'hover', text: 'AUDIO' })}
              onMouseLeave={() => setCursorState({ type: 'default', text: '' })}
              className={`p-2 rounded-full border transition flex items-center justify-center cursor-pointer ${
                soundEnabled
                  ? 'border-cyan-400 bg-cyan-500/10 text-cyan-400 shadow-[0_0_10px_rgba(0,240,255,0.3)]'
                  : 'border-slate-800 text-slate-500 hover:text-slate-300'
              }`}
              title={soundEnabled ? 'Disable Sound' : 'Enable Sound'}
            >
              {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </button>

            {/* Mobile Drawer Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-cyan-400 transition"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 mx-6 p-6 cyber-glass border border-cyan-500/30 rounded-2xl flex flex-col space-y-4 font-mono text-xs font-bold">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="text-left text-slate-300 hover:text-cyan-400 transition py-2 border-b border-slate-800"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
