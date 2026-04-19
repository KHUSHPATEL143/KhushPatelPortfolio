import React, { useState } from 'react';
import './Projects.css';

const CATEGORIES = ['All', 'Full Stack', 'Frontend', 'Clone', 'Games', 'CLI / Tools'];

const projects = [
  {
    id: 1,
    title: 'Daily Ride',
    description: 'A modern ride-sharing web application built for efficiency and seamless UX. Features real-time booking flow, route management, and a responsive React UI backed by a scalable REST API with Node.js, Express, and MongoDB.',
    category: 'Full Stack',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API'],
    github: 'https://github.com/KHUSHPATEL143',
    live: null,
    youtube: 'https://www.youtube.com/@KHUSHPATEL-pu7dc',
    featured: true,
  },
  {
    id: 2,
    title: 'Vrundavan – Restaurant Platform',
    description: 'Full-featured restaurant web platform with menu management, online ordering, and UPI payment gateway integration. Figma-designed layouts translated into pixel-perfect React components.',
    category: 'Full Stack',
    tags: ['React', 'Node.js', 'MongoDB', 'UPI Integration', 'Figma'],
    github: 'https://github.com/KHUSHPATEL143',
    live: null,
    youtube: 'https://www.youtube.com/@KHUSHPATEL-pu7dc',
    featured: true,
  },
  {
    id: 3,
    title: 'Gamified To-Do App',
    description: 'A high-stakes productivity app with health bars, streaks, and consequence-based punishments to combat procrastination. Full-stack MERN with user authentication and persistent task state.',
    category: 'Full Stack',
    tags: ['React', 'Node.js', 'MongoDB', 'Gamification', 'Auth'],
    github: 'https://github.com/KHUSHPATEL143',
    live: null,
    youtube: 'https://www.youtube.com/@KHUSHPATEL-pu7dc',
    featured: true,
  },
  {
    id: 4,
    title: 'Swiggy Clone',
    description: 'A frontend clone of the Swiggy food delivery platform, replicating the UI and user flow including restaurant listings, menus, and cart functionality.',
    category: 'Clone',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/KHUSHPATEL143/swiggy',
    live: null,
    youtube: null,
    featured: false,
  },
  {
    id: 5,
    title: 'Journalling App',
    description: 'A personal journalling app with rich text entry, tagging, and a full CRUD backend. Built to encourage mindful writing with a clean, distraction-free interface.',
    category: 'Full Stack',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/KHUSHPATEL143/journalling-app',
    live: null,
    youtube: null,
    featured: false,
  },
  {
    id: 6,
    title: 'Dash CGA I Studio',
    description: 'A TypeScript-based studio dashboard with a strongly-typed component architecture, designed for creative workflows with a clean and organised UI.',
    category: 'Frontend',
    tags: ['TypeScript', 'React', 'Dashboard'],
    github: 'https://github.com/KHUSHPATEL143/dashcgaistudio',
    live: null,
    youtube: null,
    featured: false,
  },
  {
    id: 7,
    title: 'ECC-CLI',
    description: 'A cross-platform CLI tool built in TypeScript for developer workflow automation. Streamlines repetitive developer tasks from the command line.',
    category: 'CLI / Tools',
    tags: ['TypeScript', 'Node.js', 'CLI', 'Automation'],
    github: 'https://github.com/KHUSHPATEL143/ECC-cli',
    live: null,
    youtube: null,
    featured: false,
  },
  {
    id: 8,
    title: 'Node Express Assignment',
    description: 'A structured Node.js and Express.js assignment project demonstrating REST API design, routing, middleware, and backend architecture patterns.',
    category: 'Full Stack',
    tags: ['Node.js', 'Express.js', 'REST API'],
    github: 'https://github.com/KHUSHPATEL143/NodeExpressAssignment',
    live: null,
    youtube: null,
    featured: false,
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = projects.filter(
    p => activeCategory === 'All' || p.category === activeCategory
  );

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-label">03 — Projects</div>
        <h2 className="section-title">Things I've Built</h2>
        <p className="section-subtitle">
          Production-grade MERN apps, clones, TypeScript tools, and full-stack platforms — built with real users in mind.
        </p>

        <div className="projects__filters">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`projects__filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {filtered.map((project) => (
            <div
              key={project.id}
              className={`card project-card ${project.featured ? 'project-card--featured' : ''}`}
            >
              {project.featured && (
                <div className="project-card__featured-badge">⭐ Featured</div>
              )}
              <div className="project-card__header">
                <span className="project-card__category tag">{project.category}</span>
              </div>
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>
              <div className="project-card__tags">
                {project.tags.map(t => (
                  <span key={t} className="project-card__tag">{t}</span>
                ))}
              </div>
              <div className="project-card__links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-card__link">
                    <span>⌥</span> GitHub
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-card__link project-card__link--primary">
                    <span>↗</span> Live Demo
                  </a>
                )}
                {project.youtube && (
                  <a href={project.youtube} target="_blank" rel="noopener noreferrer" className="project-card__link">
                    <span>▶</span> Demo Video
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="projects__github-cta">
          <p>Want to see more? Check out all my repositories on GitHub.</p>
          <a href="https://github.com/KHUSHPATEL143" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            ⌥ View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
