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

function RadialSkill({ name, level, animate }) {
  const radius = 26;
  const circumference = 2 * Math.PI * radius; // ~163.36
  const strokeOffset = circumference - (circumference * level) / 100;

  return (
    <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-surface-2/15 border border-border hover:border-accent/15 transition-all duration-300 hover:bg-surface-2/30 hover:scale-[1.03] group select-none">
      <div className="relative w-14 h-14 mb-2 flex items-center justify-center">
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
        {/* Centered Percentage */}
        <span className="font-mono text-[10px] font-bold text-text-muted group-hover:text-accent transition-colors duration-300">
          {level}%
        </span>
      </div>
      <span className="text-[10px] font-mono tracking-wide text-text-muted text-center truncate max-w-[80px] group-hover:text-text transition-colors duration-300">
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
