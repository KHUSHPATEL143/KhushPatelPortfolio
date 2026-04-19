import React from 'react';

const achievements = [
  { id: 1, icon: '🏆', title: 'GitHub: Quickdraw Badge', description: 'Earned the Quickdraw achievement on GitHub for closing issues and pull requests at speed.', category: 'GitHub', color: '#6e40c9' },
  { id: 2, icon: '🎯', title: 'GitHub: YOLO Badge', description: 'Earned the YOLO achievement for merging pull requests without review.', category: 'GitHub', color: '#6e40c9' },
  { id: 3, icon: '🦈', title: 'GitHub: Pull Shark Badge', description: 'Awarded Pull Shark for opening pull requests that were successfully merged.', category: 'GitHub', color: '#6e40c9' },
  { id: 4, icon: '🏢', title: 'Freelance Digital Agency Founder', description: 'Founded a freelance digital agency delivering MERN-based web solutions to real clients.', category: 'Entrepreneurship', color: '#ff6b35' },
  { id: 5, icon: '💡', title: 'Active LeetCoder', description: 'Consistently solving algorithmic problems on LeetCode.', category: 'Problem Solving', color: '#22c55e' },
  { id: 6, icon: '📚', title: 'SoloLearn Continuous Learner', description: 'Actively completing courses on SoloLearn.', category: 'Learning', color: '#3b82f6' },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section-shell bg-bg-2">
      <div className="container-main">
        <div className="font-mono text-xs tracking-widest uppercase text-text-dim mb-3">06 — Achievements</div>
        <h2 className="font-display text-4xl font-extrabold text-text mb-3">Awards & Milestones</h2>
        <p className="text-text-muted max-w-xl mb-12">Recognitions, badges, and personal milestones from my journey.</p>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {achievements.map(a => (
            <div key={a.id} className="card-base p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">{a.icon}</span>
                <span className="font-mono text-[0.65rem] tracking-widest uppercase" style={{ color: a.color }}>{a.category}</span>
              </div>
              <h3 className="font-display text-base font-bold text-text mb-2">{a.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
