import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'projects', label: 'Project' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-lg' : ''
      }`}
      style={{ backgroundColor: '#0f172a' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? 'py-3' : 'py-4'
          }`}
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}
            className="flex items-center space-x-0.5 font-sans text-lg font-extrabold tracking-tight"
          >
            <span className="text-white">VENKAT</span>
            <span style={{ color: '#2563eb' }}>.DEV</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer pb-0.5 ${
                    isActive ? 'text-white' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                      style={{ backgroundColor: '#2563eb' }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white transition cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden border-t border-slate-800 px-6 py-4 flex flex-col space-y-1"
          style={{ backgroundColor: '#0f172a' }}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left py-2.5 px-3 rounded-lg text-sm font-medium transition cursor-pointer ${
                  isActive
                    ? 'text-white bg-slate-800'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
