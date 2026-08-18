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
        scrolled ? 'py-2.5' : 'py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`rounded-full px-6 py-3 flex items-center justify-between border transition-all duration-300 ${
            scrolled
              ? 'bg-[#f0f6ff]/95 border-blue-200 shadow-sm backdrop-blur-md'
              : 'bg-[#f0f6ff]/80 border-blue-200/60 backdrop-blur-xs'
          }`}
        >
          {/* Logo */}
          <a
            href="#"
            onClick={() => handleNavClick('hero')}
            className="flex items-center space-x-1 font-sans text-base font-extrabold tracking-tight text-[#0f172a] group"
            onMouseEnter={() => setCursorState({ type: 'hover', text: 'HOME' })}
            onMouseLeave={() => setCursorState({ type: 'default', text: '' })}
          >
            <span>VENKAT</span>
            <span className="text-[#2563eb] font-mono">.DEV</span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-6 text-xs font-mono font-bold tracking-wider text-[#0f172a]">
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
                    isActive ? 'text-[#2563eb] font-extrabold' : 'text-[#0f172a] hover:text-[#2563eb]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2563eb] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Controls */}
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
                  ? 'border-[#2563eb] bg-blue-100 text-[#2563eb]'
                  : 'border-blue-200 text-slate-500 hover:text-[#0f172a]'
              }`}
              title={soundEnabled ? 'Disable Sound' : 'Enable Sound'}
            >
              {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </button>

            {/* Mobile Hamburger Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#0f172a] hover:text-[#2563eb] transition"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 mx-6 p-6 bg-[#f0f6ff] border border-blue-200 shadow-xl rounded-2xl flex flex-col space-y-3 font-mono text-xs font-bold">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="text-left text-[#0f172a] hover:text-[#2563eb] transition py-2 border-b border-blue-100"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
