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
        text: "K Venkat Chowdary — CSE Student & Full-Stack Developer. PCMB Score: 580/600."
      });
    } else if (cmd === 'skills') {
      newLogs.push({
        type: 'output',
        text: "Tech Stack: C, C++, Python, Java, JavaScript, React, Spring Boot, MySQL, Git."
      });
    } else if (cmd === 'education') {
      newLogs.push({
        type: 'output',
        text: "B.Tech CSE (KL University) | Sri Vidyaniketan PU College (580/600) | Blessed Alphonsa (527/625)."
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
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs font-mono text-xs">
      {/* Top Window Bar */}
      <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-amber-400" />
          <div className="w-3 h-3 rounded-full bg-emerald-400" />
          <span className="text-slate-600 text-xs ml-2 flex items-center space-x-1 font-bold">
            <TerminalIcon size={13} className="text-blue-600" />
            <span>venkat@dev: ~</span>
          </span>
        </div>
        <div className="text-[10px] text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded font-bold">
          TERMINAL
        </div>
      </div>

      {/* Terminal Content */}
      <div className="p-4 h-56 overflow-y-auto space-y-2 bg-slate-900 text-slate-200 font-mono">
        {terminalLogs.map((log, index) => (
          <p
            key={index}
            className={log.type === 'input' ? 'text-blue-400 font-bold' : 'text-slate-300'}
          >
            {log.text}
          </p>
        ))}
      </div>

      {/* Input Prompt */}
      <form onSubmit={handleTerminalSubmit} className="border-t border-slate-200 px-4 py-2.5 flex items-center bg-white">
        <span className="text-blue-600 font-bold mr-2">$</span>
        <input
          type="text"
          className="bg-transparent border-none outline-none text-slate-800 w-full font-mono text-xs focus:ring-0 placeholder:text-slate-400"
          placeholder="Type 'help' for commands..."
          value={terminalInput}
          onChange={(e) => setTerminalInput(e.target.value)}
        />
        <button type="submit" className="text-xs text-blue-600 hover:text-blue-700 font-bold ml-2">
          RUN
        </button>
      </form>
    </div>
  );
}
