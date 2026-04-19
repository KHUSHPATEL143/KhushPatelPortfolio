import React, { useState } from 'react';

const CATEGORIES = ['All', 'Full Stack', 'Frontend', 'Clone', 'Games', 'CLI / Tools'];

const projects = [
  { id: 1, title: 'Daily Ride', description: 'A modern ride-sharing web application with real-time booking flow, route management, and responsive React UI backed by Node.js, Express, and MongoDB.', category: 'Full Stack', tags: ['React','Node.js','Express','MongoDB','REST API'], github: 'https://github.com/KHUSHPATEL143', live: null, youtube: 'https://www.youtube.com/@KHUSHPATEL-pu7dc', featured: true },
  { id: 2, title: 'Vrundavan – Restaurant Platform', description: 'Full-featured restaurant web platform with menu management, online ordering, and UPI payment gateway integration.', category: 'Full Stack', tags: ['React','Node.js','MongoDB','UPI Integration','Figma'], github: 'https://github.com/KHUSHPATEL143', live: null, youtube: 'https://www.youtube.com/@KHUSHPATEL-pu7dc', featured: true },
  { id: 3, title: 'Gamified To-Do App', description: 'A high-stakes productivity app with health bars, streaks, and consequence-based punishments. Full-stack MERN with authentication.', category: 'Full Stack', tags: ['React','Node.js','MongoDB','Gamification','Auth'], github: 'https://github.com/KHUSHPATEL143', live: null, youtube: 'https://www.youtube.com/@KHUSHPATEL-pu7dc', featured: true },
  { id: 4, title: 'Swiggy Clone', description: 'A frontend clone of the Swiggy food delivery platform, replicating the UI and user flow.', category: 'Clone', tags: ['HTML','CSS','JavaScript'], github: 'https://github.com/KHUSHPATEL143/swiggy', live: null, youtube: null, featured: false },
  { id: 5, title: 'Journalling App', description: 'A personal journalling app with rich text entry, tagging, and a full CRUD backend.', category: 'Full Stack', tags: ['React','Node.js','MongoDB'], github: 'https://github.com/KHUSHPATEL143/journalling-app', live: null, youtube: null, featured: false },
  { id: 6, title: 'Dash CGA I Studio', description: 'A TypeScript-based studio dashboard with strongly-typed component architecture.', category: 'Frontend', tags: ['TypeScript','React','Dashboard'], github: 'https://github.com/KHUSHPATEL143/dashcgaistudio', live: null, youtube: null, featured: false },
  { id: 7, title: 'ECC-CLI', description: 'A cross-platform CLI tool built in TypeScript for developer workflow automation.', category: 'CLI / Tools', tags: ['TypeScript','Node.js','CLI','Automation'], github: 'https://github.com/KHUSHPATEL143/ECC-cli', live: null, youtube: null, featured: false },
  { id: 8, title: 'Node Express Assignment', description: 'REST API design, routing, middleware, and backend architecture patterns.', category: 'Full Stack', tags: ['Node.js','Express.js','REST API'], github: 'https://github.com/KHUSHPATEL143/NodeExpressAssignment', live: null, youtube: null, featured: false },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = projects.filter(p => activeCategory === 'All' || p.category === activeCategory);

  return (
    <section id="projects" className="section-shell">
      <div className="container-main">
        <div className="font-mono text-xs tracking-widest uppercase text-text-dim mb-3">03 — Projects</div>
        <h2 className="font-display text-4xl font-extrabold text-text mb-3">Things I've Built</h2>
        <p className="text-text-muted max-w-xl mb-10">Production-grade MERN apps, clones, TypeScript tools, and full-stack platforms.</p>

        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`font-mono text-xs tracking-wider px-4 py-2 rounded-full border transition-all duration-300 ${activeCategory === cat ? 'bg-accent text-bg border-accent' : 'border-border text-text-muted hover:border-accent/50 hover:text-accent'}`}
            >{cat}</button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {filtered.map(p => (
            <div key={p.id} className={`card-base p-6 ${p.featured ? 'border-accent/20 bg-accent/[0.02]' : ''}`}>
              {p.featured && <div className="text-xs font-mono text-accent mb-3">⭐ Featured</div>}
              <span className="tag-base mb-3 inline-block">{p.category}</span>
              <h3 className="font-display text-xl font-bold text-text mb-2">{p.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.tags.map(t => <span key={t} className="tag-base">{t}</span>)}
              </div>
              <div className="flex gap-4">
                {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-text-muted hover:text-accent transition-colors">⌥ GitHub</a>}
                {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-accent hover:text-accent-2 transition-colors">↗ Live Demo</a>}
                {p.youtube && <a href={p.youtube} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-text-muted hover:text-accent transition-colors">▶ Demo Video</a>}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-text-muted text-sm mb-4">Want to see more? Check out all my repositories on GitHub.</p>
          <a href="https://github.com/KHUSHPATEL143" target="_blank" rel="noopener noreferrer" className="btn-outline">⌥ View GitHub Profile</a>
        </div>
      </div>
    </section>
  );
}
