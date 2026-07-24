import React, { useState } from 'react';
// Brand icons imported from react-icons
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
// UI icons imported from lucide-react
import { 
  Mail, Phone, MapPin, Terminal, Sun, Moon, 
  Send, Award, GraduationCap, Code2, Sparkles, CheckCircle2 
} from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('All');
  
  // Terminal state
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalLogs, setTerminalLogs] = useState([
    { type: 'output', text: "Venkat's terminal v1.0 — type 'help' to begin." }
  ]);

  // Contact / OTP Form State
  const [step, setStep] = useState(1); // 1: Info, 2: OTP, 3: Questions, 4: Done
  const [formData, setFormData] = useState({ name: '', email: '', otp: '', q1: '', q2: '' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Handle Terminal Commands
  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    let newLogs = [...terminalLogs, { type: 'input', text: `$ ${terminalInput}` }];

    if (cmd === 'help') {
      newLogs.push({ type: 'output', text: "Available commands: 'about', 'skills', 'education', 'contact', 'clear'" });
    } else if (cmd === 'about') {
      newLogs.push({ type: 'output', text: "K Venkat Chowdary - CSE Student & Full-Stack Developer. PCMB Score: 580/600." });
    } else if (cmd === 'skills') {
      newLogs.push({ type: 'output', text: "Tech Stack: C, C++, Python, Java, JavaScript, React, Spring Boot, MySQL, Git" });
    } else if (cmd === 'education') {
      newLogs.push({ type: 'output', text: "B.Tech CSE | Sri Vidyaniketan PU College (580/600) | Blessed Alphonsa School" });
    } else if (cmd === 'contact') {
      newLogs.push({ type: 'output', text: "Email: chowdaryv955@gmail.com | Phone: +91 9353725494" });
    } else if (cmd === 'clear') {
      setTerminalLogs([]);
      setTerminalInput('');
      return;
    } else {
      newLogs.push({ type: 'output', text: `Command not recognized: '${cmd}'. Type 'help' for commands.` });
    }

    setTerminalLogs(newLogs);
    setTerminalInput('');
  };

  // OTP Backend Handlers (Connecting to Spring Boot on Render)
  const handleSendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const res = await fetch("https://portfolio-backend-qeoj.onrender.com/api/send-otp", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: formData.name, email: formData.email })
      });
      if (res.ok) {
        setStep(2);
        setMessage('OTP sent to your email from harikasina50@gmail.com!');
      } else {
        setMessage('Error sending OTP. Make sure Spring Boot backend is running.');
      }
    } catch (err) {
      setMessage('Backend offline or unreachable.');
    }
    setLoading(false);
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const res = await fetch("https://portfolio-backend-qeoj.onrender.com/api/verify-otp", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email, otp: formData.otp })
      });
      const isCorrect = await res.json();
      if (isCorrect) {
        setStep(3);
        setMessage('OTP Verified successfully! Please answer the questions below.');
      } else {
        setMessage('Invalid OTP code. Please check your email.');
      }
    } catch (err) {
      setMessage('Verification connection failed.');
    }
    setLoading(false);
  };

  const handleSubmitFinal = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const res = await fetch("https://portfolio-backend-qeoj.onrender.com/api/submit-answers", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          answerOne: formData.q1,
          answerTwo: formData.q2
        })
      });
      if (res.ok) {
        setStep(4);
        setMessage('Responses recorded and no-reply confirmation email sent!');
      } else {
        setMessage('Failed to record response.');
      }
    } catch (err) {
      setMessage('Submission connection failed.');
    }
    setLoading(false);
  };

  const skillsData = [
    { name: 'C', category: 'Languages', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { name: 'C++', category: 'Languages', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'Python', category: 'Languages', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'JavaScript', category: 'Languages', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'HTML5', category: 'Web Technologies', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', category: 'Web Technologies', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Tailwind CSS', category: 'Web Technologies', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'React', category: 'Web Technologies', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Spring Boot', category: 'Tools & Platforms', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'MySQL', category: 'Tools & Platforms', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Git', category: 'Tools & Platforms', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'VS Code', category: 'Tools & Platforms', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' }
  ];

  const filteredSkills = activeTab === 'All' ? skillsData : skillsData.filter(s => s.category === activeTab);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#0B0F19] text-slate-100' : 'bg-slate-50 text-slate-900'} transition-colors duration-300 font-sans`}>
      
      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0B0F19]/80 border-b border-slate-800/60 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold tracking-tight">
            <span className="text-cyan-400">Venkat</span>.dev
            <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 ml-1"></span>
          </a>

          <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#education" className="hover:text-cyan-400 transition">Education</a>
            <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full border border-slate-700 hover:bg-slate-800 transition"
            >
              {darkMode ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-slate-600" />}
            </button>
            <a 
              href="#contact" 
              className="flex items-center space-x-2 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold px-4 py-2 rounded-full text-sm shadow-[0_0_15px_rgba(0,240,255,0.4)] transition"
            >
              <Mail size={16} />
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Open to internships & collaborations</span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-4">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">K Venkat Chowdary</span> 👋
          </h1>
          <p className="text-xl text-cyan-400 font-mono mb-6">Computer Science & Engineering</p>
          <p className="text-slate-400 leading-relaxed mb-8">
            A Computer Science & Engineering student with a strong academic record (580/600 in PCMB) and a genuine passion for technology and software development. I enjoy turning ideas into clean, responsive, full-stack web applications.
          </p>

          <div className="flex flex-wrap gap-4">
            <a 
              href="https://github.com/2400032826" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center space-x-2 bg-cyan-400 text-slate-950 font-semibold px-6 py-3 rounded-xl shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:bg-cyan-300 transition"
            >
              <FaGithub size={18} />
              <span>View GitHub Projects</span>
            </a>
            <a 
              href="#contact" 
              className="flex items-center space-x-2 border border-slate-700 bg-slate-900/50 hover:bg-slate-800 px-6 py-3 rounded-xl font-medium transition"
            >
              <Mail size={18} />
              <span>Contact Me</span>
            </a>
          </div>
        </div>

        {/* HERO INTERACTIVE TERMINAL WIDGET */}
        <div className="bg-[#0F172A] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl font-mono text-sm">
          <div className="bg-slate-900/80 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-xs text-slate-500">venkat@dev: ~</span>
          </div>
          <div className="p-4 h-64 overflow-y-auto space-y-2">
            {terminalLogs.map((log, index) => (
              <p key={index} className={log.type === 'input' ? 'text-cyan-400' : 'text-slate-300'}>
                {log.text}
              </p>
            ))}
          </div>
          <form onSubmit={handleTerminalSubmit} className="border-t border-slate-800 px-4 py-2 flex items-center">
            <span className="text-cyan-400 mr-2">$</span>
            <input 
              type="text" 
              className="bg-transparent border-none outline-none text-slate-200 w-full"
              placeholder="Type 'help'..."
              value={terminalInput}
              onChange={(e) => setTerminalInput(e.target.value)}
            />
          </form>
        </div>
      </section>

      {/* 01 - ABOUT ME SECTION */}
      <section id="about" className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-xs font-mono text-cyan-400 mb-2">01 — About</div>
        <h2 className="text-3xl font-bold mb-8">Turning caffeine & curiosity into code</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-slate-900/40 border border-slate-800/80 p-8 rounded-2xl backdrop-blur-sm">
            <p className="text-slate-300 leading-relaxed mb-4">
              I'm K Venkat Chowdary, a Computer Science & Engineering student with a strong academic foundation — scoring <strong className="text-white">580/600</strong> in my PCMB pre-university studies. That discipline in mathematics and logical reasoning now fuels how I approach code.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              I'm especially drawn to <strong className="text-white">full-stack web development</strong> — building clean, responsive, and accessible interfaces backed by solid logic. I care about performance, thoughtful UX, and writing code that other humans enjoy reading.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-slate-800/80 text-xs rounded-full text-slate-300 border border-slate-700">Problem Solving</span>
              <span className="px-3 py-1 bg-slate-800/80 text-xs rounded-full text-slate-300 border border-slate-700">Full-Stack</span>
              <span className="px-3 py-1 bg-slate-800/80 text-xs rounded-full text-slate-300 border border-slate-700">Web Development</span>
              <span className="px-3 py-1 bg-slate-800/80 text-xs rounded-full text-slate-300 border border-slate-700">Clean Code</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl flex items-center space-x-4">
              <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl">
                <Award size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">580/600</div>
                <div className="text-xs text-slate-400">PCMB Score</div>
              </div>
            </div>

            <div className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl flex items-center space-x-4">
              <div className="p-3 bg-purple-500/10 text-purple-400 rounded-xl">
                <Code2 size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">4+</div>
                <div className="text-xs text-slate-400">Languages Known</div>
              </div>
            </div>

            <div className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl flex items-center space-x-4">
              <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl">
                <Sparkles size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">5+</div>
                <div className="text-xs text-slate-400">Projects Built</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 - EDUCATION SECTION */}
      <section id="education" className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-xs font-mono text-cyan-400 mb-2">02 — Education</div>
        <h2 className="text-3xl font-bold mb-8">Academic background</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl relative">
              <span className="text-xs font-mono text-cyan-400">2022 — 2026</span>
              <h3 className="text-xl font-bold mt-1 text-white">B.Tech in Computer Science & Engineering</h3>
              <p className="text-slate-400 text-sm mb-4">Undergraduate Degree Program</p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <span>Core coursework: Data Structures & Algorithms, Web Technologies, DBMS, Java, Spring Boot.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <span>Active team participant in hackathons (HackElite Team Lead).</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl relative">
              <span className="text-xs font-mono text-cyan-400">2020 — 2022</span>
              <h3 className="text-xl font-bold mt-1 text-white">Sri Vidyaniketan PU College, Sriramnagar</h3>
              <p className="text-slate-400 text-sm mb-2">Higher Secondary — Science (PCMB)</p>
              <div className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold text-sm rounded-lg">
                Score: 580 / 600 (High Distinction)
              </div>
            </div>

            <div className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl relative">
              <span className="text-xs font-mono text-cyan-400">Secondary Education</span>
              <h3 className="text-xl font-bold mt-1 text-white">Blessed Alphonsa Convent High School</h3>
              <p className="text-slate-400 text-sm">Raichur District</p>
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl">
            <h3 className="text-lg font-bold mb-4 text-white">Achievements & Badges</h3>
            <div className="space-y-3">
              <div className="p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl flex items-center space-x-3">
                <GraduationCap className="text-cyan-400" size={20} />
                <span className="text-sm font-medium">Academic Excellence (580/600)</span>
              </div>
              <div className="p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl flex items-center space-x-3">
                <Award className="text-purple-400" size={20} />
                <span className="text-sm font-medium">HackElite Team Leader</span>
              </div>
              <div className="p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl flex items-center space-x-3">
                <Code2 className="text-emerald-400" size={20} />
                <span className="text-sm font-medium">InAmigos AI Web Intern</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 - SKILLS SECTION */}
      <section id="skills" className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-xs font-mono text-cyan-400 mb-2">03 — Skills</div>
        <h2 className="text-3xl font-bold mb-2">My tech stack & toolbox</h2>
        <p className="text-slate-400 mb-8">Languages, frameworks, and database tools I reach for when building software.</p>

        <div className="flex space-x-2 mb-8">
          {['All', 'Languages', 'Web Technologies', 'Tools & Platforms'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
                activeTab === tab 
                  ? 'bg-cyan-400 text-slate-950 font-semibold' 
                  : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filteredSkills.map((skill, i) => (
            <div key={i} className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl flex flex-col items-center justify-center space-y-3 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.15)] transition">
              <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
              <span className="font-semibold text-slate-200">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 04 - PROJECTS SECTION */}
      <section id="projects" className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-xs font-mono text-cyan-400 mb-2">04 — Projects</div>
        <h2 className="text-3xl font-bold mb-2">Projects, synced from GitHub</h2>
        <p className="text-slate-400 mb-8">Live from my GitHub profile — the repositories I've been building and shipping.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Project Card 1 */}
          <div className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl flex flex-col justify-between hover:border-cyan-500/40 transition">
            <div>
              <div className="flex justify-between items-center text-xs text-slate-400 mb-3">
                <span className="flex items-center space-x-1"><FaGithub size={14}/> <span>2400032826</span></span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Billmitra</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                BillMitra is a streamlined web application built specifically for heavy machinery owners and fleet operators across India (JCB, Excavator, Tractor owners). It solves manual paperwork by generating accurate digital invoices.
              </p>
              <span className="px-2.5 py-1 bg-slate-800 text-xs rounded text-cyan-400 border border-slate-700">TypeScript</span>
            </div>
            <div className="mt-6 flex space-x-3">
              <a href="https://github.com/2400032826/Billmitra" target="_blank" rel="noreferrer" className="flex-1 bg-cyan-400 text-slate-950 text-xs font-bold py-2.5 rounded-lg flex items-center justify-center space-x-1 hover:bg-cyan-300 transition">
                <FaGithub size={14} />
                <span>View on GitHub</span>
              </a>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl flex flex-col justify-between hover:border-cyan-500/40 transition">
            <div>
              <div className="flex justify-between items-center text-xs text-slate-400 mb-3">
                <span className="flex items-center space-x-1"><FaGithub size={14}/> <span>2400032826</span></span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">SKILL END SEM EXAM BACKEND</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                A structured backend REST service repository built with Java and Spring Boot for managing exam evaluations, records, and database interactions.
              </p>
              <span className="px-2.5 py-1 bg-slate-800 text-xs rounded text-cyan-400 border border-slate-700">Java</span>
            </div>
            <div className="mt-6 flex space-x-3">
              <a href="https://github.com/2400032826" target="_blank" rel="noreferrer" className="flex-1 bg-cyan-400 text-slate-950 text-xs font-bold py-2.5 rounded-lg flex items-center justify-center space-x-1 hover:bg-cyan-300 transition">
                <FaGithub size={14} />
                <span>View on GitHub</span>
              </a>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl flex flex-col justify-between hover:border-cyan-500/40 transition">
            <div>
              <div className="flex justify-between items-center text-xs text-slate-400 mb-3">
                <span className="flex items-center space-x-1"><FaGithub size={14}/> <span>2400032826</span></span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Conference Fullstack Backend Project</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Full-stack conference management backend handling registration workflows, speaker schedules, and automated notification services.
              </p>
              <span className="px-2.5 py-1 bg-slate-800 text-xs rounded text-cyan-400 border border-slate-700">Java / Spring Boot</span>
            </div>
            <div className="mt-6 flex space-x-3">
              <a href="https://github.com/2400032826" target="_blank" rel="noreferrer" className="flex-1 bg-cyan-400 text-slate-950 text-xs font-bold py-2.5 rounded-lg flex items-center justify-center space-x-1 hover:bg-cyan-300 transition">
                <FaGithub size={14} />
                <span>View on GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 05 - CONTACT & OTP VERIFICATION SECTION */}
      <section id="contact" className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-xs font-mono text-cyan-400 mb-2">05 — Contact</div>
        <h2 className="text-3xl font-bold mb-2">Let's build something together</h2>
        <p className="text-slate-400 mb-10">Have a project, an opportunity, or just want to say hi? Drop me a message below.</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Info Panel */}
          <div className="space-y-4">
            <div className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl flex items-center space-x-4">
              <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl"><Mail size={20} /></div>
              <div>
                <div className="text-xs text-slate-400">EMAIL</div>
                <div className="font-medium text-white">chowdaryv955@gmail.com</div>
              </div>
            </div>

            <div className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl flex items-center space-x-4">
              <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl"><Phone size={20} /></div>
              <div>
                <div className="text-xs text-slate-400">PHONE</div>
                <div className="font-medium text-white">+91 93537 25494</div>
              </div>
            </div>

            <div className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl flex items-center space-x-4">
              <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl"><MapPin size={20} /></div>
              <div>
                <div className="text-xs text-slate-400">LOCATION</div>
                <div className="font-medium text-white">Raichur, Karnataka, India</div>
              </div>
            </div>

            <div className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl">
              <div className="text-xs text-slate-400 mb-3">FIND ME ONLINE</div>
              <div className="flex space-x-3">
                <a href="https://github.com/2400032826" target="_blank" rel="noreferrer" className="p-3 bg-slate-800 rounded-xl hover:text-cyan-400 transition"><FaGithub size={18} /></a>
                <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer" className="p-3 bg-slate-800 rounded-xl hover:text-cyan-400 transition"><FaLinkedin size={18} /></a>
              </div>
            </div>
          </div>

          {/* Right OTP Verification & Contact Form */}
          <div className="bg-slate-900/60 border border-slate-800/80 p-8 rounded-2xl backdrop-blur-sm relative">
            {message && (
              <div className="mb-6 p-3 bg-slate-800 border border-cyan-500/40 text-cyan-400 text-sm rounded-xl">
                {message}
              </div>
            )}

            {/* STEP 1: Enter Name and Email */}
            {step === 1 && (
              <form onSubmit={handleSendOtp} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-slate-300">Name</label>
                  <input
                    required
                    type="text"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-cyan-400"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-slate-300">Email</label>
                  <input
                    required
                    type="email"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-cyan-400"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <button
                  disabled={loading}
                  type="submit"
                  className="w-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold py-3 rounded-xl transition flex items-center justify-center space-x-2"
                >
                  <Send size={16} />
                  <span>{loading ? 'Sending OTP...' : 'Send OTP Verification'}</span>
                </button>
              </form>
            )}

            {/* STEP 2: Verify OTP */}
            {step === 2 && (
              <form onSubmit={handleVerifyOtp} className="space-y-4">
                <div className="text-xs text-slate-400 mb-2">
                  An OTP has been sent from <span className="text-cyan-400">harikasina50@gmail.com</span> to <span className="text-white">{formData.email}</span>.
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-slate-300">Enter 6-Digit OTP Code</label>
                  <input
                    required
                    type="text"
                    maxLength="6"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-center text-2xl font-mono text-cyan-400 tracking-widest focus:outline-none focus:border-cyan-400"
                    placeholder="123456"
                    value={formData.otp}
                    onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                  />
                </div>
                <button
                  disabled={loading}
                  type="submit"
                  className="w-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold py-3 rounded-xl transition"
                >
                  {loading ? 'Verifying...' : 'Verify OTP'}
                </button>
              </form>
            )}

            {/* STEP 3: Answer Questions */}
            {step === 3 && (
              <form onSubmit={handleSubmitFinal} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-slate-300">Subject / Project Topic</label>
                  <input
                    required
                    type="text"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-cyan-400"
                    placeholder="What project or offer are you reaching out about?"
                    value={formData.q1}
                    onChange={(e) => setFormData({ ...formData, q1: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-slate-300">Message / Details</label>
                  <textarea
                    required
                    rows="4"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-cyan-400"
                    placeholder="Tell me about your idea..."
                    value={formData.q2}
                    onChange={(e) => setFormData({ ...formData, q2: e.target.value })}
                  />
                </div>
                <button
                  disabled={loading}
                  type="submit"
                  className="w-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold py-3 rounded-xl transition"
                >
                  {loading ? 'Submitting...' : 'Send Message'}
                </button>
              </form>
            )}

            {/* STEP 4: Success Message */}
            {step === 4 && (
              <div className="text-center py-8">
                <CheckCircle2 className="mx-auto text-emerald-400 w-16 h-16 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Message Delivered!</h3>
                <p className="text-slate-400 text-sm">
                  An automated no-reply confirmation email has been dispatched to <span className="text-cyan-400">{formData.email}</span>.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 py-8 px-6 text-center text-slate-500 text-sm">
        <p>© 2026 K Venkat Chowdary. Built with React, Tailwind CSS, Spring Boot & MySQL.</p>
      </footer>
    </div>
  );
}