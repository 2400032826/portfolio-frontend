import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { playSound } from '../utils/audio';

export default function SkillUniverse({ soundEnabled, setCursorState, setHoverSection }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedSkill, setSelectedSkill] = useState(skillsData[0]);

  const categories = ['All', 'Languages', 'Web Technologies', 'Tools & Platforms'];

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter((s) => s.category === activeCategory);

  const handleSelectSkill = (skill) => {
    playSound('click', soundEnabled);
    setSelectedSkill(skill);
  };

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center space-x-3 mb-2 font-mono text-xs text-cyan-400">
        <span>03</span>
        <span className="w-8 h-px bg-cyan-400/50" />
        <span>TECH_STACK // UNIVERSE</span>
      </div>

      <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">
        Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400">Skill Galaxy</span>
      </h2>
      <p className="text-slate-400 text-sm max-w-xl mb-8">
        Languages, frameworks, databases, and developer tooling mapped into an interactive node galaxy.
      </p>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2 mb-10">
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
              setHoverSection('skills');
            }}
            onMouseLeave={() => {
              setCursorState({ type: 'default', text: '' });
              setHoverSection('default');
            }}
            className={`px-4 py-2 rounded-full font-mono text-xs font-bold transition-all duration-200 cursor-pointer ${
              activeCategory === cat
                ? 'bg-cyan-400 text-slate-950 shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Interactive Node Galaxy / Grid */}
        <div className="lg:col-span-8 cyber-glass p-6 sm:p-8 rounded-2xl border border-cyan-500/20 relative min-h-[380px] flex flex-col justify-between overflow-hidden">
          {/* Subtle Background SVG Energy Lines connecting nodes */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
            <line x1="15%" y1="20%" x2="50%" y2="50%" stroke="#00f0ff" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="85%" y1="20%" x2="50%" y2="50%" stroke="#a855f7" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="30%" y1="80%" x2="50%" y2="50%" stroke="#22c55e" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="70%" y1="80%" x2="50%" y2="50%" stroke="#00f0ff" strokeWidth="1" strokeDasharray="3 3" />
          </svg>

          {/* Skill Nodes Matrix Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 z-10">
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
                  className={`cyber-card p-4 rounded-xl flex flex-col items-center justify-center space-y-3 cursor-pointer transition transform hover:scale-105 ${
                    isSelected
                      ? 'border-cyan-400 bg-cyan-950/40 shadow-[0_0_20px_rgba(0,240,255,0.3)] ring-1 ring-cyan-400'
                      : ''
                  }`}
                >
                  <img src={skill.icon} alt={skill.name} className="w-10 h-10 object-contain drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]" />
                  <span className="font-mono text-xs font-bold text-slate-200">{skill.name}</span>
                </div>
              );
            })}
          </div>

          <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>ACTIVE_NODES: {filteredSkills.length}</span>
            <span className="text-cyan-400 flex items-center space-x-1">
              <Sparkles size={12} />
              <span>CLICK NODE TO INSPECT SPEC</span>
            </span>
          </div>
        </div>

        {/* Right Node Spec HUD Panel */}
        <div className="lg:col-span-4 space-y-4">
          {selectedSkill ? (
            <div className="cyber-glass p-6 rounded-2xl border border-cyan-500/30 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-xl">
                  <img src={selectedSkill.icon} alt={selectedSkill.name} className="w-10 h-10 object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-mono">{selectedSkill.name}</h3>
                  <span className="text-xs font-mono text-cyan-400">{selectedSkill.category}</span>
                </div>
              </div>

              {/* Competency Meter */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">COMPETENCY_INDEX</span>
                  <span className="text-cyan-400 font-bold">{selectedSkill.level}%</span>
                </div>
                <div className="w-full h-2 bg-slate-900 rounded-full border border-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full shadow-[0_0_10px_#00f0ff] transition-all duration-300"
                    style={{ width: `${selectedSkill.level}%` }}
                  />
                </div>
              </div>

              {/* Technical Description */}
              <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-300 leading-relaxed font-mono">
                <p className="text-slate-400 text-[10px] uppercase mb-1">// USAGE_CONTEXT</p>
                {selectedSkill.desc}
              </div>
            </div>
          ) : (
            <div className="cyber-glass p-8 rounded-2xl text-center text-slate-500 font-mono text-xs">
              Select a node in the galaxy to view specification.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
