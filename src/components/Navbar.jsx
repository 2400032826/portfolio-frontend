import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X } from 'lucide-react';
import { playSound } from '../utils/audio';

export default function Navbar({
  activeSection,
  soundEnabled,
  setSoundEnabled
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
              ? 'bg-[#991b1b] border-red-800 shadow-lg text-white'
              : 'bg-[#7f1d1d]/95 border-red-800/80 shadow-md text-white'
          }`}
        >
          {/* Logo */}
          <a
            href="#"
            onClick={() => handleNavClick('hero')}
            className="flex items-center space-x-1 font-sans text-base font-extrabold tracking-tight text-white group"
          >
            <span>VENKAT</span>
            <span className="text-red-200 font-mono">.DEV</span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-6 text-xs font-mono font-bold tracking-wider text-white">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 transition-colors duration-200 cursor-pointer ${
                    isActive ? 'text-red-200 font-extrabold' : 'text-white hover:text-red-200'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full" />
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
              className={`p-2 rounded-full border transition flex items-center justify-center cursor-pointer ${
                soundEnabled
                  ? 'border-white bg-red-800 text-white'
                  : 'border-red-700 text-red-200 hover:text-white'
              }`}
              title={soundEnabled ? 'Disable Sound' : 'Enable Sound'}
            >
              {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </button>

            {/* Mobile Hamburger Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-red-200 transition"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 mx-6 p-6 bg-[#7f1d1d] border border-red-800 shadow-2xl rounded-2xl flex flex-col space-y-3 font-mono text-xs font-bold text-white">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="text-left text-white hover:text-red-200 transition py-2 border-b border-red-800/60"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
