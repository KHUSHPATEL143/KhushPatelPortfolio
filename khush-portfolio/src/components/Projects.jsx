import React from 'react';

const projects = [
  {
    id: 1,
    title: 'ECC Frontend',
    description: 'Frontend application focused on polished UI flows, responsive layouts, and a clean user experience built for a larger product ecosystem.',
    category: 'Frontend',
    tags: ['React', 'Frontend', 'Responsive UI'],
    github: 'https://github.com/KHUSHPATEL143/ECC-frontend',
    live: 'https://ecc-gamma.vercel.app/',
  },
  {
    id: 2,
    title: 'IdeaForge',
    description: 'A MERN SaaS productivity workspace for projects, tasks, teams, meetings, analytics, reports, global search, and Google productivity integrations.',
    category: 'Hackathon',
    tags: ['MERN', 'SaaS', 'Productivity Workspace'],
    github: 'https://github.com/KHUSHPATEL143/ideaForge',
    live: 'https://crmideaforge.onrender.com',
  },
  {
    id: 3,
    title: 'Talentra',
    description: 'A multi-agent resume intelligence platform that parses resumes, normalizes skills, and performs candidate-to-job matching through an AI-assisted pipeline.',
    category: 'Hackathon',
    tags: ['FastAPI', 'LangGraph', 'Resume Intelligence'],
    github: 'https://github.com/KHUSHPATEL143/Talentra',
    live: null,
  },
  {
    id: 4,
    title: 'Lakshya',
    description: 'An AI browser companion that brings contextual assistance directly into the browsing experience for summarization, analysis, study support, and code understanding.',
    category: 'Hackathon',
    tags: ['AI', 'Browser Extension', 'Winner'],
    github: 'https://github.com/codinggita/team_lakshya',
    live: null,
  },
  {
    id: 5,
    title: 'Attendify',
    description: 'Attendance-focused project aimed at simplifying tracking, organization, and day-to-day management through a streamlined interface.',
    category: 'Full Stack',
    tags: ['Attendance', 'Management', 'Web App'],
    github: 'https://github.com/khushpatel143/attendify',
    live: null,
  },
  {
    id: 6,
    title: 'Vrestro',
    description: 'Restaurant-oriented web project built to showcase product design, ordering or management workflows, and a modern digital experience.',
    category: 'Full Stack',
    tags: ['Restaurant', 'Web Platform', 'UI and UX'],
    github: 'https://github.com/KHUSHPATEL143/Vrestro',
    live: 'https://restaurant-oc42.vercel.app/',
  },
  {
    id: 7,
    title: 'Projects and Clones in HTML, CSS, JS',
    description: 'A collection of frontend practice projects and interface clones built with core web technologies to strengthen fundamentals and visual implementation.',
    category: 'Frontend',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/KHUSHPATEL143/Projects_and-_CloneinHTML-CSS-JS',
    live: 'https://projectsandclone.vercel.app/',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="container-main">
        <div className="font-mono text-xs tracking-widest uppercase text-text-dim mb-3">03 - Projects</div>
        <h2 className="font-display text-4xl font-extrabold text-text mb-3">Things I Have Built</h2>
        <p className="text-text-muted max-w-xl mb-10">A curated set of hackathon builds, frontend work, and product experiments from my recent work.</p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {projects.map((project) => (
            <div key={project.id} className="card-base p-6 border-accent/10">
              <div className="font-mono text-xs text-accent mb-3">Project {String(project.id).padStart(2, '0')}</div>
              <span className="tag-base mb-3 inline-block">{project.category}</span>
              <h3 className="font-display text-xl font-bold text-text mb-2">{project.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag-base">{tag}</span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-text-muted hover:text-accent transition-colors"
                >
                  Open GitHub Repo
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-accent hover:text-accent-2 transition-colors"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-text-muted text-sm mb-4">You can also explore the rest of my work on GitHub.</p>
          <a href="https://github.com/KHUSHPATEL143" target="_blank" rel="noopener noreferrer" className="btn-outline">View GitHub Profile</a>
        </div>
      </div>
    </section>
  );
}
