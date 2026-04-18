import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';

const skillGroups = [
  {
    category: 'Frontend',
    icon: '⚡',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'JavaScript (ES6+)', level: 88 },
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
    ],
  },
  {
    category: 'Backend & Database',
    icon: '🔧',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 83 },
      { name: 'MongoDB', level: 82 },
      { name: 'Supabase', level: 75 },
    ],
  },
  {
    category: 'Languages & Tools',
    icon: '🛠',
    skills: [
      { name: 'TypeScript', level: 78 },
      { name: 'C++', level: 80 },
      { name: 'Java', level: 75 },
      { name: 'Git & GitHub', level: 88 },
    ],
  },
];

const techBadges = [
  'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Supabase',
  'JavaScript', 'TypeScript', 'C++', 'Java', 'HTML5', 'CSS3',
  'Git', 'GitHub', 'Figma', 'N8N', 'REST API',
];

function SkillBar({ name, level, animate }) {
  return (
    <div className="skill-bar">
      <div className="skill-bar__header">
        <span className="skill-bar__name">{name}</span>
        <span className="skill-bar__level">{level}%</span>
      </div>
      <div className="skill-bar__track">
        <div
          className="skill-bar__fill"
          style={{ width: animate ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section section--alt" ref={ref}>
      <div className="container">
        <div className="section-label">02 — Skills</div>
        <h2 className="section-title">Technical Arsenal</h2>
        <p className="section-subtitle">
          A mix of languages, frameworks, and tools I've worked with during my studies and projects.
        </p>

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <div key={group.category} className="card skills__card">
              <div className="skills__card-header">
                <span className="skills__icon">{group.icon}</span>
                <h3 className="skills__category">{group.category}</h3>
              </div>
              <div className="skills__bars">
                {group.skills.map((skill) => (
                  <SkillBar key={skill.name} {...skill} animate={visible} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills__badges">
          <div className="section-label" style={{ marginBottom: '20px' }}>All Technologies</div>
          <div className="skills__badge-cloud">
            {techBadges.map((tech) => (
              <span key={tech} className="tag skills__badge">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
