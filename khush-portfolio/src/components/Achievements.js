import React from 'react';
import './Achievements.css';

const achievements = [
  {
    id: 1,
    icon: '🏆',
    title: 'GitHub: Quickdraw Badge',
    description: 'Earned the Quickdraw achievement on GitHub for closing issues and pull requests at speed.',
    category: 'GitHub',
  },
  {
    id: 2,
    icon: '🎯',
    title: 'GitHub: YOLO Badge',
    description: 'Earned the YOLO achievement for merging pull requests without review — a badge for the bold.',
    category: 'GitHub',
  },
  {
    id: 3,
    icon: '🦈',
    title: 'GitHub: Pull Shark Badge',
    description: 'Awarded Pull Shark for opening pull requests that were successfully merged multiple times.',
    category: 'GitHub',
  },
  {
    id: 4,
    icon: '🏢',
    title: 'Freelance Digital Agency Founder',
    description: 'Founded a freelance digital agency delivering MERN-based web solutions to real clients, managing projects end-to-end.',
    category: 'Entrepreneurship',
  },
  {
    id: 5,
    icon: '💡',
    title: 'Active LeetCoder',
    description: 'Consistently solving algorithmic problems on LeetCode to sharpen data structures and problem-solving skills.',
    category: 'Problem Solving',
  },
  {
    id: 6,
    icon: '📚',
    title: 'SoloLearn Continuous Learner',
    description: 'Actively learning and completing courses on SoloLearn to stay updated with modern development practices.',
    category: 'Learning',
  },
];

const categoryColors = {
  GitHub: '#6e40c9',
  Entrepreneurship: '#ff6b35',
  'Problem Solving': '#22c55e',
  Learning: '#3b82f6',
};

export default function Achievements() {
  return (
    <section id="achievements" className="section section--alt">
      <div className="container">
        <div className="section-label">06 — Achievements</div>
        <h2 className="section-title">Awards & Milestones</h2>
        <p className="section-subtitle">
          Recognitions, badges, and personal milestones from my journey as a developer and entrepreneur.
        </p>

        <div className="achievements__grid">
          {achievements.map((a) => (
            <div key={a.id} className="card achievement-card">
              <div className="achievement-card__top">
                <span className="achievement-card__icon">{a.icon}</span>
                <span
                  className="achievement-card__category"
                  style={{ color: categoryColors[a.category] || 'var(--accent)' }}
                >
                  {a.category}
                </span>
              </div>
              <h3 className="achievement-card__title">{a.title}</h3>
              <p className="achievement-card__desc">{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
