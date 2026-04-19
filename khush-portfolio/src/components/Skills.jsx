import React, { useEffect, useRef, useState } from 'react';

const skillGroups = [
  { category: 'Frontend', icon: '⚡', skills: [{ name: 'React.js', level: 90 }, { name: 'JavaScript (ES6+)', level: 88 }, { name: 'HTML5', level: 90 }, { name: 'CSS3', level: 85 }] },
  { category: 'Backend & Database', icon: '🔧', skills: [{ name: 'Node.js', level: 85 }, { name: 'Express.js', level: 83 }, { name: 'MongoDB', level: 82 }, { name: 'Supabase', level: 75 }] },
  { category: 'Languages & Tools', icon: '🛠', skills: [{ name: 'TypeScript', level: 78 }, { name: 'C++', level: 80 }, { name: 'Java', level: 75 }, { name: 'Git & GitHub', level: 88 }] },
];

const techBadges = ['React.js','Node.js','Express.js','MongoDB','Supabase','JavaScript','TypeScript','C++','Java','HTML5','CSS3','Git','GitHub','Figma','N8N','REST API'];

function SkillBar({ name, level, animate }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1.5">
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

        <div className="grid md:grid-cols-3 gap-6 mb-16">
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
