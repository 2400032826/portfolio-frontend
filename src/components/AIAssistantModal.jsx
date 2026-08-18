import React, { useState } from 'react';
import { Bot, X, Send } from 'lucide-react';
import { aiKnowledgeBase } from '../data/portfolioData';
import { playSound } from '../utils/audio';

export default function AIAssistantModal({ isOpen, onClose, soundEnabled }) {
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: "Greetings! I am Venkat's AI Assistant HUD. Ask me anything about Venkat's skills, PCMB academic score, projects, or background!"
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');

  if (!isOpen) return null;

  const quickPrompts = [
    "Who is Venkat?",
    "What technologies do you use?",
    "Show me your projects",
    "What is your PCMB score?",
    "How can I contact you?"
  ];

  const handleSend = (textToSend) => {
    const query = (textToSend || inputQuery).trim();
    if (!query) return;

    playSound('terminal', soundEnabled);

    // Append User Message
    const updatedMessages = [...messages, { sender: 'user', text: query }];
    setMessages(updatedMessages);
    setInputQuery('');

    // Search Knowledge Base
    const lowerQuery = query.toLowerCase();
    let bestMatch = aiKnowledgeBase.find((kb) =>
      kb.keywords.some((kw) => lowerQuery.includes(kw))
    );

    const replyText = bestMatch
      ? bestMatch.answer
      : "I am trained on K Venkat Chowdary's real portfolio data. Feel free to ask about his PCMB score (580/600), projects like Billmitra, or tech stack!";

    // Simulate typing delay
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: 'ai', text: replyText }]);
      playSound('click', soundEnabled);
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn font-mono">
      <div
        className="cyber-glass w-full max-w-lg rounded-2xl border border-cyan-500/40 shadow-[0_0_40px_rgba(0,240,255,0.25)] flex flex-col h-[520px] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0b0f19] px-5 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="p-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-400">
              <Bot size={18} />
            </div>
            <div>
              <div className="text-xs font-bold text-white flex items-center space-x-1">
                <span>VENKAT_AI // HUD</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              </div>
              <div className="text-[10px] text-slate-400">LOCAL_KNOWLEDGE_ENGINE</div>
            </div>
          </div>

          <button
            onClick={() => {
              playSound('click', soundEnabled);
              onClose();
            }}
            className="p-1.5 text-slate-400 hover:text-cyan-400 transition cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Message History Container */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#07090e]/90 text-xs">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] p-3 rounded-xl leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-cyan-500/20 border border-cyan-500/40 text-cyan-200'
                    : 'bg-slate-900/90 border border-slate-800 text-slate-200 shadow-sm'
                }`}
              >
                {msg.sender === 'ai' && (
                  <div className="text-[10px] text-cyan-400 mb-1 font-bold">● VENKAT-AI</div>
                )}
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Suggestion Chips */}
        <div className="p-2 border-t border-slate-800 bg-[#0b0f19] flex flex-nowrap overflow-x-auto gap-1.5 no-scrollbar">
          {quickPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(prompt)}
              className="px-2.5 py-1 bg-slate-900 border border-slate-800 hover:border-cyan-400 text-[10px] text-slate-300 rounded-full whitespace-nowrap transition cursor-pointer"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Controls */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="border-t border-slate-800 p-3 bg-[#0b0f19] flex items-center space-x-2"
        >
          <input
            type="text"
            className="flex-1 bg-[#07090e] border border-slate-800 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-cyan-400"
            placeholder="Ask AI Assistant..."
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
          />
          <button
            type="submit"
            className="p-2 bg-cyan-400 hover:bg-cyan-300 text-slate-950 rounded-xl transition font-bold cursor-pointer"
          >
            <Send size={14} />
          </button>
        </form>
      </div>
    </div>
  );
}
