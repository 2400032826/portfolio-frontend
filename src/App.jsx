import React, { useState, useEffect } from 'react';
import IntroLoader from './components/IntroLoader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import EducationTimeline from './components/EducationTimeline';
import SkillUniverse from './components/SkillUniverse';
import CertificationsSection from './components/CertificationsSection';
import ProjectShowcase from './components/ProjectShowcase';
import ProjectDetailView from './components/ProjectDetailView';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollJourneyIndicator from './components/ScrollJourneyIndicator';

export default function App() {
  const [introDone, setIntroDone] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [currentView, setCurrentView] = useState('home'); // 'home' or 'slv-fashion-studio'

  // IntersectionObserver to highlight active navbar section
  useEffect(() => {
    if (!introDone || currentView !== 'home') return;

    const sections = ['hero', 'about', 'education', 'skills', 'certifications', 'projects', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-35% 0px -35% 0px',
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
  }, [introDone, currentView]);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] font-sans selection:bg-[#2563eb]/15 relative overflow-x-hidden">
      {/* Intro Sequence */}
      {!introDone && <IntroLoader onComplete={() => setIntroDone(true)} />}

      {/* Minimal Scroll Journey Indicator */}
      {currentView === 'home' && (
        <ScrollJourneyIndicator activeSection={activeSection} />
      )}

      {/* Red Navbar */}
      <Navbar
        activeSection={activeSection}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
      />

      {/* Main Content Router */}
      {currentView === 'slv-fashion-studio' ? (
        <ProjectDetailView onBack={() => setCurrentView('home')} />
      ) : (
        <main className="relative z-10">
          <Hero soundEnabled={soundEnabled} />

          <AboutSection soundEnabled={soundEnabled} />

          <EducationTimeline />

          <SkillUniverse soundEnabled={soundEnabled} />

          <CertificationsSection soundEnabled={soundEnabled} />

          <ProjectShowcase
            soundEnabled={soundEnabled}
            onViewDetail={(projectId) => setCurrentView(projectId)}
          />

          <ContactSection soundEnabled={soundEnabled} />
        </main>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}