import React, { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import CyberBackground from './components/CyberBackground';
import IntroLoader from './components/IntroLoader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import EducationTimeline from './components/EducationTimeline';
import SkillUniverse from './components/SkillUniverse';
import ProjectShowcase from './components/ProjectShowcase';
import ContactSection from './components/ContactSection';
import AIAssistantModal from './components/AIAssistantModal';
import Footer from './components/Footer';
import { Bot } from 'lucide-react';

export default function App() {
  const [introDone, setIntroDone] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [cursorState, setCursorState] = useState({ type: 'default', text: '' });
  const [hoverSection, setHoverSection] = useState('default');
  const [aiModalOpen, setAiModalOpen] = useState(false);

  // IntersectionObserver to dynamically highlight active navbar section
  useEffect(() => {
    if (!introDone) return;

    const sections = ['hero', 'about', 'education', 'skills', 'projects', 'contact'];
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
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans selection:bg-cyan-500/30 relative overflow-x-hidden">
      {/* Intro Boot Loader */}
      {!introDone && <IntroLoader onComplete={() => setIntroDone(true)} />}

      {/* Interactive Custom Cursor */}
      <CustomCursor cursorState={cursorState} />

      {/* Canvas Dynamic Background */}
      <CyberBackground />

      {/* Floating Glass Navbar */}
      <Navbar
        activeSection={activeSection}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        onOpenAI={() => setAiModalOpen(true)}
        setCursorState={setCursorState}
      />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-12">
        <Hero
          soundEnabled={soundEnabled}
          setCursorState={setCursorState}
          hoverSection={hoverSection}
          setHoverSection={setHoverSection}
          onOpenAI={() => setAiModalOpen(true)}
        />

        <AboutSection
          soundEnabled={soundEnabled}
          setCursorState={setCursorState}
        />

        <EducationTimeline
          setCursorState={setCursorState}
        />

        <SkillUniverse
          soundEnabled={soundEnabled}
          setCursorState={setCursorState}
          setHoverSection={setHoverSection}
        />

        <ProjectShowcase
          soundEnabled={soundEnabled}
          setCursorState={setCursorState}
          setHoverSection={setHoverSection}
        />

        <ContactSection
          soundEnabled={soundEnabled}
          setCursorState={setCursorState}
        />
      </main>

      {/* Floating AI Assistant Action Trigger (Bottom-Right) */}
      <button
        onClick={() => setAiModalOpen(true)}
        onMouseEnter={() => setCursorState({ type: 'hover', text: 'ASK AI' })}
        onMouseLeave={() => setCursorState({ type: 'default', text: '' })}
        className="fixed bottom-6 right-6 z-40 flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-slate-950 font-mono font-bold text-xs px-4 py-3 rounded-full shadow-[0_0_25px_rgba(0,240,255,0.5)] border border-cyan-300/40 transition transform hover:scale-110 cursor-pointer"
        title="Open AI Assistant"
      >
        <Bot size={18} className="animate-bounce" />
        <span className="hidden sm:inline">ASK VENKAT-AI</span>
      </button>

      {/* AI Assistant Modal */}
      <AIAssistantModal
        isOpen={aiModalOpen}
        onClose={() => setAiModalOpen(false)}
        soundEnabled={soundEnabled}
        setCursorState={setCursorState}
      />

      {/* Cyberpunk Footer */}
      <Footer
        soundEnabled={soundEnabled}
        setCursorState={setCursorState}
      />
    </div>
  );
}