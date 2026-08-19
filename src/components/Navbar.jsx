import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { id: 'about',          label: 'About' },
  { id: 'education',      label: 'Education' },
  { id: 'skills',         label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'projects',       label: 'Project' },
  { id: 'contact',        label: 'Contact' },
];

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const scrollTo = (id) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: '#0f172a',
          boxShadow: scrolled ? '0 4px 24px -4px rgba(0,0,0,0.4)' : 'none',
          transition: 'box-shadow 0.3s ease',
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div
            className="flex items-center justify-between"
            style={{
              padding: scrolled ? '10px 0' : '16px 0',
              transition: 'padding 0.3s ease',
            }}
          >
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}
              className="text-base sm:text-lg font-extrabold tracking-tight"
              style={{ textDecoration: 'none', lineHeight: 1 }}
              aria-label="Home"
            >
              <span style={{ color: '#ffffff' }}>VENKAT</span>
              <span style={{ color: '#2563eb' }}>.DEV</span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-7" aria-label="Main navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    aria-label={`Navigate to ${link.label}`}
                    className="relative text-sm font-medium tracking-wide cursor-pointer pb-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded"
                    style={{
                      color: isActive ? '#ffffff' : '#94a3b8',
                      background: 'none',
                      border: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = '#cbd5e1'; }}
                    onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = '#94a3b8'; }}
                  >
                    {link.label}
                    {/* Animated blue underline */}
                    <span
                      aria-hidden="true"
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

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              style={{
                color: '#94a3b8',
                background: 'none',
                border: 'none',
                minWidth: '44px',
                minHeight: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40"
          style={{ backgroundColor: 'rgba(15,23,42,0.6)', backdropFilter: 'blur(4px)' }}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className="fixed top-0 right-0 bottom-0 z-50 md:hidden flex flex-col"
        style={{
          width: 'min(280px, 80vw)',
          backgroundColor: '#0f172a',
          borderLeft: '1px solid rgba(255,255,255,0.08)',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
          boxShadow: menuOpen ? '-8px 0 32px rgba(0,0,0,0.4)' : 'none',
        }}
        aria-label="Mobile navigation"
        role="dialog"
        aria-modal="true"
      >
        {/* Drawer header */}
        <div
          className="flex items-center justify-between px-6 py-5"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
        >
          <span className="font-extrabold text-base" style={{ color: '#ffffff' }}>
            VENKAT<span style={{ color: '#2563eb' }}>.DEV</span>
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 rounded-lg cursor-pointer"
            style={{
              color: '#94a3b8',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              minWidth: '40px',
              minHeight: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Close navigation"
          >
            <X size={20} />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col px-4 py-4 flex-1 space-y-1" aria-label="Mobile navigation links">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-left py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer w-full"
                style={{
                  color: isActive ? '#ffffff' : '#94a3b8',
                  backgroundColor: isActive ? 'rgba(37,99,235,0.15)' : 'transparent',
                  border: isActive ? '1px solid rgba(37,99,235,0.3)' : '1px solid transparent',
                }}
              >
                <span
                  className="inline-block w-6 text-xs font-mono"
                  style={{ color: '#2563eb' }}
                >
                  {navLinks.indexOf(link) + 1 < 10 ? `0${navLinks.indexOf(link) + 1}` : navLinks.indexOf(link) + 1}
                </span>
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Footer in drawer */}
        <div
          className="px-6 py-5"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <p className="text-xs font-mono" style={{ color: '#475569' }}>K Venkat Chowdary</p>
          <p className="text-[10px] font-mono mt-0.5" style={{ color: '#334155' }}>B.Tech CSE · Data Science</p>
        </div>
      </div>
    </>
  );
}
