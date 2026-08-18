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
      setScrolled(window.scrollY > 30);
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
          className={`rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${
            scrolled
              ? 'bg-white/90 border border-slate-200 shadow-md backdrop-blur-md'
              : 'bg-white/70 border border-slate-200/80 backdrop-blur-sm'
          }`}
        >
          {/* Logo */}
          <a
            href="#"
            onClick={() => handleNavClick('hero')}
            className="flex items-center space-x-1.5 font-sans text-base font-extrabold tracking-tight text-slate-900 group"
            onMouseEnter={() => setCursorState({ type: 'hover', text: 'HOME' })}
            onMouseLeave={() => setCursorState({ type: 'default', text: '' })}
          >
            <span>VENKAT</span>
            <span className="text-blue-600 font-mono">.DEV</span>
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
                    isActive ? 'text-blue-600 font-extrabold' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Sound Toggle */}
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
                  ? 'border-blue-600 bg-blue-50 text-blue-600 shadow-xs'
                  : 'border-slate-200 text-slate-400 hover:text-slate-600 hover:border-slate-300'
              }`}
              title={soundEnabled ? 'Disable Audio' : 'Enable Audio'}
            >
              {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </button>

            {/* Mobile Hamburger Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-blue-600 transition"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 mx-6 p-6 bg-white border border-slate-200 shadow-xl rounded-2xl flex flex-col space-y-3 font-mono text-xs font-bold">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="text-left text-slate-700 hover:text-blue-600 transition py-2 border-b border-slate-100"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
