import React, { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import CyberBackground from './components/CyberBackground';
import IntroLoader from './components/IntroLoader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import EducationTimeline from './components/EducationTimeline';
import SkillUniverse from './components/SkillUniverse';
import CertificationsSection from './components/CertificationsSection';
import ProjectShowcase from './components/ProjectShowcase';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [introDone, setIntroDone] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [cursorState, setCursorState] = useState({ type: 'default', text: '' });

  // IntersectionObserver to highlight active navbar section
  useEffect(() => {
    if (!introDone) return;

    const sections = ['hero', 'about', 'education', 'skills', 'certifications', 'projects', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [introDone]);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-blue-600/15 relative overflow-x-hidden">
      {/* Intro Sequence */}
      {!introDone && <IntroLoader onComplete={() => setIntroDone(true)} />}

      {/* Light Theme Custom Pointer */}
      <CustomCursor cursorState={cursorState} />

      {/* Light Theme Dynamic Background */}
      <CyberBackground />

      {/* White SaaS Header Navbar */}
      <Navbar
        activeSection={activeSection}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        setCursorState={setCursorState}
      />

      {/* Main Page Narrative Flow */}
      <main className="relative z-10 space-y-6">
        <Hero
          soundEnabled={soundEnabled}
          setCursorState={setCursorState}
        />

        <AboutSection
          soundEnabled={soundEnabled}
        />

        <EducationTimeline />

        <SkillUniverse
          soundEnabled={soundEnabled}
          setCursorState={setCursorState}
        />

        <CertificationsSection
          soundEnabled={soundEnabled}
          setCursorState={setCursorState}
        />

        <ProjectShowcase
          soundEnabled={soundEnabled}
          setCursorState={setCursorState}
        />

        <ContactSection
          soundEnabled={soundEnabled}
          setCursorState={setCursorState}
        />
      </main>

      {/* Clean Light Footer */}
      <Footer setCursorState={setCursorState} />
    </div>
  );
}