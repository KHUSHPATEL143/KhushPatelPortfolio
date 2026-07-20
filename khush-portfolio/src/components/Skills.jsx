import React, { useEffect, useRef, useState } from 'react';

const skillGroups = [
  {
    category: 'Languages & Frameworks',
    icon: '💻',
    skills: [
      { name: 'JavaScript', level: 88 },
      { name: 'TypeScript', level: 78 },
      { name: 'React.js', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'Node.js', level: 85 },
      { name: 'Tailwind', level: 88 },
      { name: 'C++', level: 80 },
      { name: 'HTML/CSS', level: 90 }
    ],
    className: 'md:col-span-2'
  },
  {
    category: 'Databases & Backend',
    icon: '🗄️',
    skills: [
      { name: 'MongoDB', level: 82 },
      { name: 'Supabase', level: 75 },
      { name: 'REST APIs', level: 85 },
      { name: 'Express.js', level: 83 }
    ],
    className: 'md:col-span-1'
  },
  {
    category: 'Deployment',
    icon: '🚀',
    skills: [
      { name: 'Vercel', level: 85 },
      { name: 'Netlify', level: 80 },
      { name: 'Render', level: 80 }
    ],
    className: 'md:col-span-1'
  },
  {
    category: 'Tools & Platforms',
    icon: '🛠️',
    skills: [
      { name: 'Git & GitHub', level: 88 },
      { name: 'Postman', level: 82 },
      { name: 'Figma', level: 75 },
      { name: 'VS Code & npm', level: 90 }
    ],
    className: 'md:col-span-1'
  },
  {
    category: 'AI & Automation',
    icon: '🤖',
    skills: [
      { name: 'Gemini API', level: 80 },
      { name: 'N8N Automation', level: 82 }
    ],
    className: 'md:col-span-1'
  }
];

const techBadges = [
  'JavaScript (ES6+)',
  'TypeScript',
  'C++',
  'React.js',
  'Next.js',
  'Node.js',
  'Tailwind CSS',
  'HTML5',
  'CSS3',
  'MongoDB',
  'Supabase',
  'REST APIs',
  'Express.js',
  'Vercel',
  'Netlify',
  'Render',
  'Postman',
  'Figma',
  'N8N',
  'VS Code',
  'npm',
  'Git',
  'GitHub',
  'Gemini API',
  'N8N Workflow Automation'
];

function SkillIcon({ name }) {
  const normName = name.toLowerCase();

  // Custom SVGs for skills not in Devicon or needing custom look
  if (normName.includes('supabase')) {
    return (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#3ECF8E]">
        <path d="M12 2L2 12h8v10l10-10h-8z"/>
      </svg>
    );
  }
  if (normName.includes('rest api')) {
    return (
      <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-accent fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    );
  }
  if (normName.includes('render')) {
    return (
      <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-accent-2 fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    );
  }
  if (normName.includes('gemini')) {
    return (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-accent animate-pulse">
        <path d="M12 2L14.7 9.3L22 12L14.7 14.7L12 22L9.3 14.7L2 12L9.3 9.3L12 2Z" />
      </svg>
    );
  }
  if (normName.includes('n8n')) {
    return (
      <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] fill-none stroke-[#e24c70]" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="4" cy="12" r="2.5" />
        <circle cx="11" cy="12" r="2.5" />
        <line x1="6.5" y1="12" x2="8.5" y2="12" />
        <path d="M13.5 12h2c1.5 0 2-3.5 3.5-3.5h1.5" />
        <path d="M13.5 12h2c1.5 0 2 3.5 3.5 3.5h0.5" />
        <circle cx="20.5" cy="8.5" r="2.5" />
        <circle cx="19.5" cy="15.5" r="2.5" />
      </svg>
    );
  }
  if (normName.includes('next')) {
    return (
      <svg viewBox="0 0 180 180" className="w-5 h-5 fill-none">
        <circle cx="90" cy="90" r="90" className="fill-black" />
        <path d="M140 142L72 55v87H57V38h15l68 87V38h15v104z" className="fill-white" />
        <path d="M125 125l-45-58v58h-8V65l53 68v-8z" fill="url(#next-linear)" />
        <defs>
          <linearGradient id="next-linear" x1="109" y1="116.5" x2="144.5" y2="160" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // Devicon mappings
  let iconClass = '';
  if (normName.includes('javascript')) iconClass = 'devicon-javascript-plain colored';
  else if (normName.includes('typescript')) iconClass = 'devicon-typescript-plain colored';
  else if (normName.includes('react')) iconClass = 'devicon-react-original colored';
  else if (normName.includes('node')) iconClass = 'devicon-nodejs-plain colored';
  else if (normName.includes('tailwind')) iconClass = 'devicon-tailwindcss-plain colored';
  else if (normName.includes('c++')) iconClass = 'devicon-cplusplus-plain colored';
  else if (normName.includes('html/css')) iconClass = 'devicon-html5-plain colored';
  else if (normName.includes('mongodb')) iconClass = 'devicon-mongodb-plain colored';
  else if (normName.includes('express')) iconClass = 'devicon-express-original';
  else if (normName.includes('vercel')) iconClass = 'devicon-vercel-original';
  else if (normName.includes('netlify')) iconClass = 'devicon-netlify-plain colored';
  else if (normName.includes('git')) iconClass = 'devicon-git-plain colored';
  else if (normName.includes('postman')) iconClass = 'devicon-postman-plain colored';
  else if (normName.includes('figma')) iconClass = 'devicon-figma-plain colored';
  else if (normName.includes('vscode') || normName.includes('vs code')) iconClass = 'devicon-vscode-plain colored';

  if (iconClass) {
    return <i className={`${iconClass} text-2xl transition-transform duration-300 group-hover:scale-110`} />;
  }

  // Generic fallback code icon
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-text-muted fill-none" strokeWidth="2">
      <path d="M16 18l6-6-6-6M8 6L2 12l6 6" />
    </svg>
  );
}

function RadialSkill({ name, level, animate }) {
  const radius = 26;
  const circumference = 2 * Math.PI * radius; // ~163.36
  const strokeOffset = circumference - (circumference * level) / 100;

  return (
    <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-surface-2/15 border border-border hover:border-accent/15 transition-all duration-300 hover:bg-surface-2/30 hover:scale-[1.03] group select-none">
      <div className="relative w-14 h-14 mb-3 flex items-center justify-center">
        {/* Track Circle */}
        <svg className="w-full h-full transform -rotate-90 absolute" viewBox="0 0 64 64">
          <circle
            cx="32"
            cy="32"
            r={radius}
            className="stroke-border/10 fill-none"
            strokeWidth="3.5"
          />
          {/* Animated Progress Circle */}
          <circle
            cx="32"
            cy="32"
            r={radius}
            className="fill-none transition-all duration-1000 ease-out"
            stroke="url(#accent-grad)"
            strokeWidth="4"
            strokeDasharray={circumference}
            strokeDashoffset={animate ? strokeOffset : circumference}
            strokeLinecap="round"
          />
        </svg>
        {/* Centered Logo inside the circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <SkillIcon name={name} />
        </div>
      </div>
      <span className="text-[11px] font-mono tracking-wide text-text-muted text-center truncate max-w-[85px] group-hover:text-text transition-colors duration-300">
        {name}
      </span>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section-shell bg-bg-2" ref={ref}>
      {/* Global SVG Gradients for skills */}
      <svg width="0" height="0" className="absolute pointer-events-none">
        <defs>
          <linearGradient id="accent-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffaa00" />
            <stop offset="100%" stopColor="#ff6b35" />
          </linearGradient>
        </defs>
      </svg>

      <div className="container-main">
        <div className="font-mono text-xs tracking-widest uppercase text-text-dim mb-3">02 — Skills</div>
        <h2 className="font-display text-4xl font-extrabold text-text mb-3">Technical Arsenal</h2>
        <p className="text-text-muted max-w-xl mb-12">A mix of languages, frameworks, and tools I've worked with during my studies and projects.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {skillGroups.map(g => (
            <div
              key={g.category}
              className={`card-base p-6 hover:shadow-[0_0_30px_rgba(255,170,0,0.02)] ${g.className || ''}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{g.icon}</span>
                <h3 className="font-display text-md font-bold text-text tracking-wide">{g.category}</h3>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {g.skills.map(s => (
                  <RadialSkill key={s.name} {...s} animate={visible} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="font-mono text-xs tracking-widest uppercase text-text-dim mb-5">All Technologies</div>
          <div className="flex flex-wrap gap-2">
            {techBadges.map(t => <span key={t} className="tag-base">{t}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
