import React, { useState } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { playSound } from '../utils/audio';

export default function TerminalWidget({ soundEnabled }) {
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalLogs, setTerminalLogs] = useState([
    { type: 'output', text: "Venkat's terminal v2.6 — type 'help' to begin." }
  ]);

  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    playSound('terminal', soundEnabled);
    let newLogs = [...terminalLogs, { type: 'input', text: `$ ${terminalInput}` }];

    if (cmd === 'help') {
      newLogs.push({
        type: 'output',
        text: "Available commands: 'about', 'skills', 'education', 'contact', 'clear'"
      });
    } else if (cmd === 'about') {
      newLogs.push({
        type: 'output',
        text: "K Venkat Chowdary — CSE Student & Full-Stack Developer. PCMB Score: 580/600 (High Distinction)."
      });
    } else if (cmd === 'skills') {
      newLogs.push({
        type: 'output',
        text: "Tech Stack: C, C++, Python, Java, JavaScript, React, Spring Boot, MySQL, Git, Tailwind CSS."
      });
    } else if (cmd === 'education') {
      newLogs.push({
        type: 'output',
        text: "B.Tech CSE (2022-2026) | Sri Vidyaniketan PU College (580/600) | Blessed Alphonsa High School."
      });
    } else if (cmd === 'contact') {
      newLogs.push({
        type: 'output',
        text: "Email: chowdaryv955@gmail.com | Phone: +91 93537 25494 | GitHub: github.com/2400032826"
      });
    } else if (cmd === 'clear') {
      setTerminalLogs([]);
      setTerminalInput('');
      return;
    } else {
      newLogs.push({
        type: 'output',
        text: `Command not recognized: '${cmd}'. Type 'help' for available commands.`
      });
    }

    setTerminalLogs(newLogs);
    setTerminalInput('');
  };

  return (
    <div className="cyber-glass border border-cyan-500/30 rounded-2xl overflow-hidden shadow-2xl font-mono text-xs sm:text-sm">
      {/* Top Window Bar */}
      <div className="bg-[#0b0f19] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="text-slate-400 text-xs ml-2 flex items-center space-x-1">
            <TerminalIcon size={12} className="text-cyan-400" />
            <span>venkat@command-center: ~</span>
          </span>
        </div>
        <div className="text-[10px] text-cyan-400 border border-cyan-500/30 px-2 py-0.5 rounded">
          INTERACTIVE_SHELL
        </div>
      </div>

      {/* Terminal Content Log */}
      <div className="p-4 h-56 overflow-y-auto space-y-2 bg-[#07090e]/90 font-mono">
        {terminalLogs.map((log, index) => (
          <p
            key={index}
            className={log.type === 'input' ? 'text-cyan-400 font-bold' : 'text-slate-300'}
          >
            {log.text}
          </p>
        ))}
      </div>

      {/* Input Prompt Form */}
      <form onSubmit={handleTerminalSubmit} className="border-t border-slate-800 px-4 py-2.5 flex items-center bg-[#0b0f19]">
        <span className="text-cyan-400 font-bold mr-2">$</span>
        <input
          type="text"
          className="bg-transparent border-none outline-none text-slate-100 w-full font-mono text-xs focus:ring-0 placeholder:text-slate-600"
          placeholder="Type 'help' for commands..."
          value={terminalInput}
          onChange={(e) => setTerminalInput(e.target.value)}
        />
        <button type="submit" className="text-xs text-cyan-400 hover:text-cyan-300 font-bold ml-2">
          EXECUTE
        </button>
      </form>
    </div>
  );
}
