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
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center space-x-3 mb-2 font-mono text-xs text-cyan-400">
        <span>03</span>
        <span className="w-8 h-px bg-cyan-400/50" />
        <span>SKILLS</span>
      </div>

      <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 tracking-tight">
        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Toolbox</span>
      </h2>
      <p className="text-slate-400 text-sm max-w-xl mb-8">
        Languages, frameworks, and databases I use to architect software solutions.
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
                ? 'bg-cyan-400 text-slate-950 shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Skill Nodes Grid */}
        <div className="lg:col-span-8 cyber-glass p-6 rounded-2xl border border-cyan-500/20">
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
                  className={`cyber-card p-4 rounded-xl flex flex-col items-center justify-center space-y-2 cursor-pointer transition transform hover:scale-105 ${
                    isSelected
                      ? 'border-cyan-400 bg-cyan-950/40 shadow-[0_0_15px_rgba(0,240,255,0.3)] ring-1 ring-cyan-400'
                      : ''
                  }`}
                >
                  <img src={skill.icon} alt={skill.name} className="w-9 h-9 object-contain" />
                  <span className="font-mono text-xs font-bold text-slate-200">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Single Floating Info Panel */}
        <div className="lg:col-span-4 space-y-4">
          {selectedSkill && (
            <div className="cyber-glass p-6 rounded-2xl border border-cyan-500/30 space-y-5">
              <div className="flex items-center space-x-3">
                <img src={selectedSkill.icon} alt={selectedSkill.name} className="w-10 h-10 object-contain" />
                <div>
                  <h3 className="text-xl font-bold text-white font-mono">{selectedSkill.name}</h3>
                  <span className="text-xs font-mono text-cyan-400">{selectedSkill.category}</span>
                </div>
              </div>

              <div className="p-3.5 bg-slate-900/80 border border-slate-800 rounded-xl text-xs text-slate-300 font-mono leading-relaxed">
                {selectedSkill.desc}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
