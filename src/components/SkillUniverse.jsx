import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { playSound } from '../utils/audio';

export default function SkillUniverse({ soundEnabled, setCursorState }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedSkill, setSelectedSkill] = useState(skillsData[0]);

  const categories = ['All', 'Languages', 'Frontend', 'Backend', 'Database', 'Tools'];

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter((s) => s.category === activeCategory);

  const handleSelectSkill = (skill) => {
    playSound('click', soundEnabled);
    setSelectedSkill(skill);
  };

  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto bg-white">
      {/* Section Header */}
      <div className="flex items-center space-x-3 mb-2 font-mono text-xs text-[#2563eb] font-bold">
        <span>03</span>
        <span className="w-8 h-px bg-blue-200" />
        <span>SKILLS</span>
      </div>

      <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] mb-2 tracking-tight">
        Technical <span className="text-[#2563eb]">Toolbox</span>
      </h2>
      <p className="text-slate-600 text-sm max-w-xl mb-8">
        Languages, frameworks, and databases I use to build software solutions.
      </p>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              playSound('click', soundEnabled);
              setActiveCategory(cat);
            }}
            onMouseEnter={() => {
              playSound('hover', soundEnabled);
              setCursorState({ type: 'hover', text: cat });
            }}
            onMouseLeave={() => setCursorState({ type: 'default', text: '' })}
            className={`px-4 py-2 rounded-full font-mono text-xs font-bold transition cursor-pointer ${
              activeCategory === cat
                ? 'bg-[#2563eb] text-white shadow-xs'
                : 'bg-white border border-slate-200 text-[#0f172a] hover:text-[#2563eb] hover:border-blue-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Skill Nodes Grid */}
        <div className="lg:col-span-8 bg-[#f8fafc] p-6 rounded-2xl border border-slate-200 shadow-xs">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {filteredSkills.map((skill, idx) => {
              const isSelected = selectedSkill?.name === skill.name;
              return (
                <div
                  key={idx}
                  onClick={() => handleSelectSkill(skill)}
                  onMouseEnter={() => {
                    playSound('hover', soundEnabled);
                    setCursorState({ type: 'hover', text: skill.name });
                  }}
                  onMouseLeave={() => setCursorState({ type: 'default', text: '' })}
                  className={`p-4 rounded-xl border flex flex-col items-center justify-center space-y-2 cursor-pointer transition transform hover:scale-105 ${
                    isSelected
                      ? 'border-[#2563eb] bg-[#f0f6ff] shadow-xs ring-1 ring-[#2563eb]'
                      : 'border-slate-200 bg-white hover:border-blue-300'
                  }`}
                >
                  <img src={skill.icon} alt={skill.name} className="w-9 h-9 object-contain" />
                  <span className="font-mono text-xs font-bold text-[#0f172a]">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Floating Skill Info Panel */}
        <div className="lg:col-span-4 space-y-4">
          {selectedSkill && (
            <div className="bg-[#f0f6ff] p-6 rounded-2xl border border-blue-200 shadow-xs space-y-4">
              <div className="flex items-center space-x-3">
                <img src={selectedSkill.icon} alt={selectedSkill.name} className="w-10 h-10 object-contain" />
                <div>
                  <h3 className="text-xl font-bold text-[#0f172a] font-mono">{selectedSkill.name}</h3>
                  <span className="text-xs font-mono font-bold text-[#2563eb]">{selectedSkill.category}</span>
                </div>
              </div>

              <div className="p-3.5 bg-white border border-blue-200 rounded-xl text-xs text-[#0f172a] leading-relaxed font-sans font-medium">
                {selectedSkill.desc}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
