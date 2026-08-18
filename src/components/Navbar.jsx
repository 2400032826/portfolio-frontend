import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Bot, Menu, X } from 'lucide-react';
import { playSound } from '../utils/audio';

export default function Navbar({
  activeSection,
  soundEnabled,
  setSoundEnabled,
  onOpenAI,
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
    { id: 'about', label: '01. ABOUT' },
    { id: 'education', label: '02. EDUCATION' },
    { id: 'skills', label: '03. SKILLS' },
    { id: 'projects', label: '04. PROJECTS' },
    { id: 'contact', label: '05. CONTACT' }
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
              ? 'bg-[#0b0f19]/90 border-cyan-500/30 shadow-[0_0_25px_rgba(0,240,255,0.15)] backdrop-blur-xl'
              : 'bg-[#0b0f19]/60 border-slate-800'
          }`}
        >
          {/* Logo */}
          <a
            href="#"
            onClick={() => handleNavClick('hero')}
            className="flex items-center space-x-2 font-mono text-lg font-bold tracking-wider group"
            onMouseEnter={() => setCursorState({ type: 'hover', text: 'HOME' })}
            onMouseLeave={() => setCursorState({ type: 'default', text: '' })}
          >
            <span className="text-white group-hover:text-cyan-400 transition">
              VENKAT<span className="text-cyan-400">.DEV</span>
            </span>
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#00f0ff] animate-pulse" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 text-xs font-mono tracking-widest">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  onMouseEnter={() => {
                    playSound('hover', soundEnabled);
                    setCursorState({ type: 'hover', text: link.id });
                  }}
                  onMouseLeave={() => setCursorState({ type: 'default', text: '' })}
                  className={`relative py-1 transition-colors duration-200 cursor-pointer ${
                    isActive ? 'text-cyan-400 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full shadow-[0_0_8px_#00f0ff]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons (Sound Toggle & AI Assistant Trigger) */}
          <div className="flex items-center space-x-3">
            {/* Audio Toggle Button */}
            <button
              onClick={() => {
                setSoundEnabled(!soundEnabled);
                playSound('click', !soundEnabled);
              }}
              onMouseEnter={() => setCursorState({ type: 'hover', text: 'AUDIO' })}
              onMouseLeave={() => setCursorState({ type: 'default', text: '' })}
              className={`p-2 rounded-full border transition flex items-center justify-center cursor-pointer ${
                soundEnabled
                  ? 'border-cyan-400 bg-cyan-500/10 text-cyan-400 shadow-[0_0_12px_rgba(0,240,255,0.3)]'
                  : 'border-slate-800 text-slate-500 hover:text-slate-300'
              }`}
              title={soundEnabled ? 'Disable UI Audio' : 'Enable UI Audio'}
            >
              {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </button>

            {/* AI Assistant Quick Trigger */}
            <button
              onClick={() => {
                playSound('click', soundEnabled);
                onOpenAI();
              }}
              onMouseEnter={() => setCursorState({ type: 'hover', text: 'ASK AI' })}
              onMouseLeave={() => setCursorState({ type: 'default', text: '' })}
              className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-slate-950 font-mono font-bold text-xs px-4 py-2 rounded-full shadow-[0_0_15px_rgba(0,240,255,0.4)] transition transform hover:scale-105 cursor-pointer"
            >
              <Bot size={14} className="animate-bounce" />
              <span>AI HUD</span>
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-cyan-400 transition"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-6 p-6 cyber-glass border border-cyan-500/30 rounded-2xl flex flex-col space-y-4 font-mono text-sm">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="text-left text-slate-300 hover:text-cyan-400 transition py-2 border-b border-slate-800"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenAI();
            }}
            className="flex items-center justify-center space-x-2 bg-cyan-400 text-slate-950 font-bold py-3 rounded-xl"
          >
            <Bot size={16} />
            <span>Launch AI Assistant</span>
          </button>
        </div>
      )}
    </header>
  );
}
