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
    { id: 'about',          label: 'About' },
    { id: 'education',      label: 'Education' },
    { id: 'skills',         label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'projects',       label: 'Project' },
    { id: 'contact',        label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: '#0f172a',
        transition: 'padding 0.3s ease, box-shadow 0.3s ease',
        boxShadow: scrolled ? '0 4px 24px -4px rgba(0,0,0,0.35)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: scrolled ? '12px 0' : '18px 0',
            transition: 'padding 0.3s ease',
          }}
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}
            className="flex items-center space-x-0.5 font-sans text-lg font-extrabold tracking-tight"
            style={{ textDecoration: 'none' }}
          >
            <span style={{ color: '#ffffff' }}>VENKAT</span>
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
                  className="relative text-sm font-medium tracking-wide cursor-pointer pb-1"
                  style={{
                    color: isActive ? '#ffffff' : '#94a3b8',
                    transition: 'color 0.2s ease',
                    background: 'none',
                    border: 'none',
                  }}
                  onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = '#cbd5e1'; }}
                  onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = '#94a3b8'; }}
                >
                  {link.label}
                  {/* Animated blue underline for active section */}
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      borderRadius: '2px',
                      backgroundColor: '#2563eb',
                      transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                      transformOrigin: 'left',
                      transition: 'transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                  />
                </button>
              );
            })}
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 cursor-pointer"
            style={{
              color: '#94a3b8',
              background: 'none',
              border: 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        style={{
          backgroundColor: '#0f172a',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          overflow: 'hidden',
          maxHeight: mobileMenuOpen ? '400px' : '0',
          transition: 'max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div className="px-6 py-4 flex flex-col space-y-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-left py-2.5 px-3 rounded-lg text-sm font-medium transition cursor-pointer"
                style={{
                  color: isActive ? '#ffffff' : '#94a3b8',
                  backgroundColor: isActive ? 'rgba(255,255,255,0.07)' : 'transparent',
                  border: 'none',
                  transition: 'all 0.2s ease',
                }}
              >
                {link.label}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
