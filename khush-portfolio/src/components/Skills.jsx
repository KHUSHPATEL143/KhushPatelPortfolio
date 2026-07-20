import React, { useEffect, useRef, useState } from 'react';

const skillGroups = [
  {
    category: 'Languages & Frameworks',
    icon: '💻',
    skills: [
      { name: 'JavaScript (ES6+)', level: 88 },
      { name: 'TypeScript', level: 78 },
      { name: 'React.js', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'Node.js', level: 85 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'C++', level: 80 },
      { name: 'HTML5 & CSS3', level: 90 }
    ]
  },
  {
    category: 'Databases & Backend',
    icon: '🗄️',
    skills: [
      { name: 'MongoDB', level: 82 },
      { name: 'Supabase', level: 75 },
      { name: 'REST APIs', level: 85 },
      { name: 'Express.js', level: 83 }
    ]
  },
  {
    category: 'Deployment',
    icon: '🚀',
    skills: [
      { name: 'Vercel', level: 85 },
      { name: 'Netlify', level: 80 },
      { name: 'Render', level: 80 }
    ]
  },
  {
    category: 'Tools & Platforms',
    icon: '🛠️',
    skills: [
      { name: 'Git & GitHub', level: 88 },
      { name: 'Postman', level: 82 },
      { name: 'Figma', level: 75 },
      { name: 'VS Code & npm', level: 90 }
    ]
  },
  {
    category: 'AI & Automation',
    icon: '🤖',
    skills: [
      { name: 'Gemini API', level: 80 },
      { name: 'N8N Workflow Automation', level: 82 }
    ]
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

function SkillBar({ name, level, animate }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between mb-2">
        <span className="text-text text-sm">{name}</span>
        <span className="font-mono text-xs text-text-dim">{level}%</span>
      </div>
      <div className="h-1.5 bg-bg rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-accent to-accent-2 rounded-full transition-all duration-1000 ease-out" style={{ width: animate ? `${level}%` : '0%' }} />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section-shell bg-bg-2" ref={ref}>
      <div className="container-main">
        <div className="font-mono text-xs tracking-widest uppercase text-text-dim mb-3">02 — Skills</div>
        <h2 className="font-display text-4xl font-extrabold text-text mb-3">Technical Arsenal</h2>
        <p className="text-text-muted max-w-xl mb-12">A mix of languages, frameworks, and tools I've worked with during my studies and projects.</p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillGroups.map(g => (
            <div key={g.category} className="card-base p-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{g.icon}</span>
                <h3 className="font-display text-lg font-bold text-text">{g.category}</h3>
              </div>
              {g.skills.map(s => <SkillBar key={s.name} {...s} animate={visible} />)}
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
