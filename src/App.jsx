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
  const [activeSection, setActiveSection] = useState('hero');
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'slv-fashion-studio'

  // IntersectionObserver for active nav section tracking
  useEffect(() => {
    if (!introDone || currentView !== 'home') return;

    const sectionIds = ['hero', 'about', 'education', 'skills', 'certifications', 'projects', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { root: null, rootMargin: '-35% 0px -35% 0px', threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [introDone, currentView]);

  return (
    <div
      className="min-h-screen font-sans overflow-x-hidden"
      style={{ backgroundColor: '#f7fafc', color: '#0f172a' }}
    >
      {/* Intro Screen — max 1.1s */}
      {!introDone && <IntroLoader onComplete={() => setIntroDone(true)} />}

      {/* Scroll Journey Progress Indicator */}
      {introDone && currentView === 'home' && (
        <ScrollJourneyIndicator activeSection={activeSection} />
      )}

      {/* Top Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content */}
      {currentView === 'slv-fashion-studio' ? (
        <ProjectDetailView onBack={() => { setCurrentView('home'); }} />
      ) : (
        <main>
          {/* HERO — #f7fafc */}
          <Hero />

          {/* ABOUT — #ffffff */}
          <AboutSection />

          {/* EDUCATION — #eaf2ff */}
          <EducationTimeline />

          {/* SKILLS — #ffffff */}
          <SkillUniverse />

          {/* CERTIFICATIONS — #eaf2ff */}
          <CertificationsSection />

          {/* PROJECT — #ffffff */}
          <ProjectShowcase onViewDetail={(id) => setCurrentView(id)} />

          {/* CONTACT — #0f172a */}
          <ContactSection />
        </main>
      )}

      {/* FOOTER — #0f172a */}
      <Footer />
    </div>
  );
}