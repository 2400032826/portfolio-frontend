import React, { useState, useEffect, useRef } from 'react';
import { skillsData } from '../data/portfolioData';

const categories = ['All', 'Languages', 'Frontend', 'Backend', 'Database', 'Tools'];

export default function SkillUniverse() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedSkill, setSelectedSkill] = useState(skillsData[0]);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('section-visible'); },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const filtered =
    activeCategory === 'All'
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section
      id="skills"
      ref={ref}
      className="section-hidden py-16 sm:py-20 md:py-24 px-4 sm:px-6"
      style={{ backgroundColor: '#ffffff' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <div className="flex items-center space-x-3 mb-3">
          <span className="text-xs font-mono font-bold" style={{ color: '#2563eb' }}>03</span>
          <span className="w-8 h-px" style={{ backgroundColor: '#bfdbfe' }} />
          <span className="text-xs font-mono font-bold" style={{ color: '#2563eb' }}>SKILLS</span>
        </div>

        <h2 className="section-heading mb-2">
          Technical <span style={{ color: '#2563eb' }}>Toolbox</span>
        </h2>
        <p className="text-sm mb-6 sm:mb-8" style={{ color: '#64748b' }}>
          Languages, frameworks, and tools I use to build software.
        </p>

        {/* Category filter — horizontally scrollable on mobile, no page overflow */}
        <div className="category-scroll mb-6 sm:mb-8 pb-1">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="shrink-0 px-3 sm:px-4 py-2 rounded-full text-xs font-bold font-mono cursor-pointer"
                style={{
                  backgroundColor: isActive ? '#2563eb' : '#ffffff',
                  color: isActive ? '#ffffff' : '#0f172a',
                  border: isActive ? '1px solid #2563eb' : '1px solid #e2e8f0',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive ? '0 2px 8px -2px rgba(37,99,235,0.3)' : 'none',
                  whiteSpace: 'nowrap',
                  minHeight: '36px',
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Skill Grid */}
          <div className="lg:col-span-2">
            <div
              className="p-3 sm:p-5 rounded-2xl"
              style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}
            >
              {/* 3 cols on smallest, 4 on sm+, 5 on md+ */}
              <div
                className="grid gap-2 sm:gap-3"
                style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))' }}
              >
                {filtered.map((skill, idx) => {
                  const isSelected = selectedSkill?.name === skill.name;
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedSkill(skill)}
                      className="skill-card flex flex-col items-center justify-center p-2 sm:p-3 rounded-xl cursor-pointer"
                      style={{
                        backgroundColor: isSelected ? '#eaf2ff' : '#ffffff',
                        border: isSelected ? '1.5px solid #2563eb' : '1px solid #e2e8f0',
                        boxShadow: isSelected ? '0 4px 12px -4px rgba(37,99,235,0.15)' : 'none',
                        minHeight: '72px',
                      }}
                      aria-label={skill.name}
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="skill-icon w-7 h-7 sm:w-8 sm:h-8 object-contain mb-1.5"
                        loading="lazy"
                        style={{ transition: 'transform 0.2s ease' }}
                      />
                      <span
                        className="text-[10px] sm:text-[11px] font-bold font-mono text-center leading-tight"
                        style={{ color: '#0f172a' }}
                      >
                        {skill.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Info panel — full width on mobile, sidebar on lg */}
          <div className="lg:col-span-1">
            {selectedSkill ? (
              <div
                className="p-4 sm:p-6 rounded-2xl space-y-3 sm:space-y-4 scale-in"
                style={{ backgroundColor: '#eaf2ff', border: '1px solid #bfdbfe' }}
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={selectedSkill.icon}
                    alt={selectedSkill.name}
                    className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
                  />
                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold" style={{ color: '#0f172a' }}>
                      {selectedSkill.name}
                    </h3>
                    <span className="text-xs font-mono font-bold" style={{ color: '#2563eb' }}>
                      {selectedSkill.category}
                    </span>
                  </div>
                </div>
                <div
                  className="p-3 sm:p-4 rounded-xl text-xs sm:text-sm leading-relaxed"
                  style={{ backgroundColor: '#ffffff', border: '1px solid #bfdbfe', color: '#475569' }}
                >
                  {selectedSkill.desc}
                </div>
              </div>
            ) : (
              <div
                className="p-5 rounded-2xl flex items-center justify-center min-h-[100px]"
                style={{ backgroundColor: '#eaf2ff', border: '1px solid #bfdbfe' }}
              >
                <p className="text-sm text-center" style={{ color: '#94a3b8' }}>
                  Tap any skill to learn more
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
