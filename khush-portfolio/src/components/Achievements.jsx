import React from 'react';

const achievements = [
  {
    id: 1,
    icon: 'WIN',
    title: 'Winner - CodingGita Hackathon',
    description: 'Won the CodingGita Hackathon with Lakshya, an AI browser companion focused on smarter web interaction and productivity.',
    category: 'Hackathon',
    color: '#f59e0b',
  },
  {
    id: 2,
    icon: 'GH',
    title: 'GitHub Quickdraw Badge',
    description: 'Earned the Quickdraw achievement on GitHub for closing issues and pull requests quickly.',
    category: 'GitHub',
    color: '#6e40c9',
  },
  {
    id: 3,
    icon: 'GH',
    title: 'GitHub YOLO Badge',
    description: 'Earned the YOLO achievement for merging pull requests without review.',
    category: 'GitHub',
    color: '#6e40c9',
  },
  {
    id: 4,
    icon: 'GH',
    title: 'GitHub Pull Shark Badge',
    description: 'Awarded Pull Shark for opening pull requests that were successfully merged.',
    category: 'GitHub',
    color: '#6e40c9',
  },
  {
    id: 5,
    icon: 'FL',
    title: 'Active Freelance Developer',
    description: 'Delivering custom MERN-based web solutions and automation tools directly to clients.',
    category: 'Freelance',
    color: '#ff6b35',
  },
  {
    id: 6,
    icon: 'LC',
    title: 'Active LeetCoder',
    description: 'Consistently solving algorithmic problems on LeetCode.',
    category: 'Problem Solving',
    color: '#22c55e',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section-shell bg-bg-2">
      <div className="container-main">
        <div className="font-mono text-xs tracking-widest uppercase text-text-dim mb-3">06 - Achievements</div>
        <h2 className="font-display text-4xl font-extrabold text-text mb-3">Awards and Milestones</h2>
        <p className="text-text-muted max-w-xl mb-12">Recognitions, badges, and personal milestones from my journey.</p>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="card-base p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-sm text-text">{achievement.icon}</span>
                <span className="font-mono text-[0.65rem] tracking-widest uppercase" style={{ color: achievement.color }}>
                  {achievement.category}
                </span>
              </div>
              <h3 className="font-display text-base font-bold text-text mb-2">{achievement.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
