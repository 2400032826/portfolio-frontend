import React, { useState, useEffect, useRef } from 'react';
import { skillsData } from '../data/portfolioData';

const categories = ['All', 'Languages', 'Frontend', 'Backend', 'Database', 'Tools'];

export default function SkillUniverse() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedSkill, setSelectedSkill] = useState(skillsData[0]);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('section-visible');
      },
      { threshold: 0.1 }
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
      className="section-hidden py-24 px-6"
      style={{ backgroundColor: '#ffffff' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center space-x-3 mb-3">
          <span className="text-xs font-mono font-bold" style={{ color: '#2563eb' }}>03</span>
          <span className="w-8 h-px" style={{ backgroundColor: '#bfdbfe' }} />
          <span className="text-xs font-mono font-bold" style={{ color: '#2563eb' }}>SKILLS</span>
        </div>

        <h2
          className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2"
          style={{ color: '#0f172a' }}
        >
          Technical <span style={{ color: '#2563eb' }}>Toolbox</span>
        </h2>
        <p className="text-sm mb-8" style={{ color: '#64748b' }}>
          Languages, frameworks, and tools I use to build software.
        </p>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 rounded-full text-xs font-bold font-mono transition-all duration-200 cursor-pointer"
              style={
                activeCategory === cat
                  ? { backgroundColor: '#2563eb', color: '#ffffff' }
                  : {
                      backgroundColor: '#ffffff',
                      color: '#0f172a',
                      border: '1px solid #e2e8f0',
                    }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Skill Grid */}
          <div className="lg:col-span-2">
            <div
              className="p-6 rounded-2xl"
              style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}
            >
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {filtered.map((skill, idx) => {
                  const isSelected = selectedSkill?.name === skill.name;
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedSkill(skill)}
                      className="flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-200 cursor-pointer hover:-translate-y-0.5"
                      style={
                        isSelected
                          ? {
                              backgroundColor: '#eaf2ff',
                              border: '1.5px solid #2563eb',
                            }
                          : {
                              backgroundColor: '#ffffff',
                              border: '1px solid #e2e8f0',
                            }
                      }
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-8 h-8 object-contain mb-2"
                        loading="lazy"
                      />
                      <span
                        className="text-[11px] font-bold font-mono text-center"
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

          {/* Selected Skill Info Panel */}
          <div className="lg:col-span-1">
            {selectedSkill ? (
              <div
                className="p-6 rounded-2xl h-full space-y-4"
                style={{ backgroundColor: '#eaf2ff', border: '1px solid #bfdbfe' }}
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={selectedSkill.icon}
                    alt={selectedSkill.name}
                    className="w-10 h-10 object-contain"
                  />
                  <div>
                    <h3 className="text-lg font-extrabold" style={{ color: '#0f172a' }}>
                      {selectedSkill.name}
                    </h3>
                    <span className="text-xs font-mono font-bold" style={{ color: '#2563eb' }}>
                      {selectedSkill.category}
                    </span>
                  </div>
                </div>

                <div
                  className="p-4 rounded-xl text-sm leading-relaxed"
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #bfdbfe',
                    color: '#475569',
                  }}
                >
                  {selectedSkill.desc}
                </div>
              </div>
            ) : (
              <div
                className="p-6 rounded-2xl h-full flex items-center justify-center"
                style={{ backgroundColor: '#eaf2ff', border: '1px solid #bfdbfe' }}
              >
                <p className="text-sm text-center" style={{ color: '#94a3b8' }}>
                  Click any skill to learn more
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
