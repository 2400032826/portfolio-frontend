export const personalInfo = {
  name: "K Venkat Chowdary",
  shortName: "Venkat",
  handle: "venkat.dev",
  title: "Computer Science Student & Full-Stack Developer",
  roleHeadline: "Developer • Data • AI • Builder",
  statusTag: "Open to internships & collaborations",
  pcmbScore: "580/600",
  pcmbPercentage: "96.6%",
  location: "Vijayawada, Andhra Pradesh, India",
  email: "chowdaryv955@gmail.com",
  phone: "+91 93537 25494",
  github: "https://github.com/2400032826",
  linkedin: "https://www.linkedin.com/feed/",
  formspreeEndpoint: "https://formspree.io/f/mkodpvnn",
  bio: [
    "I'm K Venkat Chowdary, a Computer Science & Engineering student with a strong academic foundation — scoring 580/600 in my PCMB pre-university studies. That discipline in mathematics and logical reasoning now fuels how I approach software design.",
    "I specialize in full-stack web development — building clean, responsive, and accessible interfaces backed by robust Java & Spring Boot backends, Python scripts, and modern databases."
  ],
  stats: [
    { label: "PCMB Score", value: "580/600", highlight: "96.6% High Distinction" },
    { label: "Languages & Tools", value: "8+", highlight: "C, C++, Python, Java, React..." },
    { label: "Projects Built", value: "5+", highlight: "Full-Stack & Backend Systems" }
  ]
};

export const skillsData = [
  { name: 'C', category: 'Languages', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', desc: 'Low-level memory control, pointers, and foundational algorithms.' },
  { name: 'C++', category: 'Languages', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', desc: 'Object-oriented programming, STL, and data structures optimization.' },
  { name: 'Python', category: 'Languages', level: 88, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', desc: 'Data processing, backend scripting, automation, and AI logic.' },
  { name: 'JavaScript', category: 'Languages', level: 92, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', desc: 'ES6+, async architecture, dynamic web logic, and DOM manipulation.' },
  { name: 'HTML5', category: 'Web Technologies', level: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', desc: 'Semantic HTML markup, web accessibility standards, and SEO.' },
  { name: 'CSS3', category: 'Web Technologies', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', desc: 'Flexbox, CSS Grid, custom animations, and responsive UI layouts.' },
  { name: 'Tailwind CSS', category: 'Web Technologies', level: 92, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', desc: 'Utility-first rapid styling, design tokens, and glassmorphism styling.' },
  { name: 'React', category: 'Web Technologies', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', desc: 'Component architecture, state hooks, high-performance interactive interfaces.' },
  { name: 'Spring Boot', category: 'Tools & Platforms', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', desc: 'Java RESTful API development, enterprise backend architecture, and microservices.' },
  { name: 'MySQL', category: 'Tools & Platforms', level: 86, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', desc: 'Relational database design, complex SQL queries, index optimization.' },
  { name: 'Git', category: 'Tools & Platforms', level: 88, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', desc: 'Version control, branch management, collaborative workflows.' },
  { name: 'VS Code', category: 'Tools & Platforms', level: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', desc: 'IDE environment, extensions workflow, debugging and terminal tools.' }
];

export const educationData = [
  {
    period: "2022 — 2026",
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Undergraduate Degree Program",
    location: "Vijayawada, India",
    details: [
      "Core coursework: Data Structures & Algorithms, Web Technologies, DBMS, Java, Spring Boot.",
      "Active team participant and leader in competitive hackathons (HackElite Team Lead).",
      "Focused on full-stack application architecture and backend REST microservices."
    ]
  },
  {
    period: "2020 — 2022",
    degree: "Higher Secondary — Science (PCMB)",
    institution: "Sri Vidyaniketan PU College, Sriramnagar",
    location: "Karnataka / AP",
    highlight: "Score: 580 / 600 (High Distinction - 96.6%)",
    details: [
      "Secured 580 out of 600 in Physics, Chemistry, Mathematics, and Biology.",
      "Excellence award in advanced mathematics and logical analytical reasoning."
    ]
  },
  {
    period: "Secondary",
    degree: "High School Certification",
    institution: "Blessed Alphonsa Convent High School",
    location: "Guntur District",
    details: [
      "Strong foundational academics with distinction in Science and Mathematics."
    ]
  }
];

export const achievements = [
  { title: "Academic Excellence", detail: "580/600 PCMB Score", icon: "GraduationCap" },
  { title: "HackElite Team Leader", detail: "Hackathon Leadership & Project Delivery", icon: "Award" },
  { title: "InAmigos AI Web Intern", detail: "Web Development Internship Experience", icon: "Code2" }
];

export const projectsData = [
  {
    id: "billmitra",
    number: "01",
    title: "Billmitra",
    category: "Full-Stack Web App",
    tagline: "Digital Invoicing & Fleet Billing Platform for Heavy Machinery Operators",
    description: "BillMitra is a streamlined web application built specifically for heavy machinery owners and fleet operators across India (JCB, Excavator, Tractor owners). It replaces manual paperwork with instant, precise digital invoices.",
    tech: ["TypeScript", "React", "Node.js", "Tailwind CSS"],
    github: "https://github.com/2400032826/Billmitra",
    demo: null,
    featured: true,
    highlights: [
      "Solves manual billing delays for fleet and equipment operators across India.",
      "Instant PDF invoice generation with local tax and machinery hour calculations.",
      "Clean TypeScript architecture ensuring strict type safety and zero runtime billing errors."
    ],
    architecture: "Frontend built with React & TypeScript using modular invoice calculation engines, coupled with dynamic PDF layout renderers for mobile-first utility in field operations."
  },
  {
    id: "exam-backend",
    number: "02",
    title: "Skill End Sem Exam Backend",
    category: "Backend REST Microservice",
    tagline: "Enterprise Grade Evaluation & Exam Record Management System",
    description: "A structured backend REST service repository built with Java and Spring Boot for managing university end-semester exam evaluations, grade records, and relational database transactions.",
    tech: ["Java", "Spring Boot", "MySQL", "REST API"],
    github: "https://github.com/2400032826",
    demo: null,
    featured: true,
    highlights: [
      "Robust Spring Security authorization layers for faculty vs administrator access.",
      "Optimized MySQL relational schema for high-concurrency exam score submissions.",
      "Clean layered architecture (Controller -> Service -> Repository pattern)."
    ],
    architecture: "Spring Boot Java microservice leveraging Spring Data JPA for ORM persistence with MySQL, secured with JWT and role-based permissions."
  },
  {
    id: "conference-backend",
    number: "03",
    title: "Conference Fullstack Backend",
    category: "Backend REST Microservice",
    tagline: "Automated Conference & Event Operations System",
    description: "Full-stack conference management backend handling delegate registration workflows, speaker schedule matrixes, venue seat allocation, and automated notification services.",
    tech: ["Java", "Spring Boot", "MySQL", "Notification API"],
    github: "https://github.com/2400032826",
    demo: null,
    featured: true,
    highlights: [
      "Automated email notification triggers upon successful seat reservation.",
      "Dynamic speaker & session scheduling endpoints with collision avoidance.",
      "Scalable REST API endpoints designed for rapid frontend integration."
    ],
    architecture: "Enterprise Java backend utilizing Spring Boot framework, asynchronous event listeners for email notifications, and structured JSON endpoints."
  }
];

export const aiKnowledgeBase = [
  {
    keywords: ["who", "venkat", "about", "identity", "bio"],
    answer: "K Venkat Chowdary is a Computer Science & Engineering student and Full-Stack Developer. He scored 580/600 in PCMB (96.6%) and builds high-performance web applications using React, Java, Spring Boot, Python, and MySQL."
  },
  {
    keywords: ["pcmb", "score", "grade", "marks", "education", "college"],
    answer: "Venkat achieved an impressive 580/600 score (High Distinction) in PCMB at Sri Vidyaniketan PU College. He is currently pursuing B.Tech in CSE (2022-2026)."
  },
  {
    keywords: ["skills", "tech", "stack", "languages", "java", "react", "python"],
    answer: "Venkat's core tech stack includes C, C++, Python, Java, JavaScript, HTML5/CSS3, Tailwind CSS, React, Spring Boot, MySQL, Git, and VS Code."
  },
  {
    keywords: ["projects", "billmitra", "exam", "conference", "work"],
    answer: "Venkat's key projects include: 1) Billmitra (Digital billing for heavy machinery operators built with TypeScript), 2) Skill End Sem Exam Backend (Java Spring Boot REST service), and 3) Conference Backend (Spring Boot registration system)."
  },
  {
    keywords: ["contact", "email", "phone", "reach", "hire", "internship"],
    answer: "You can reach Venkat via email at chowdaryv955@gmail.com, phone at +91 93537 25494, or GitHub at github.com/2400032826. He is currently open to internships and collaborations!"
  }
];
