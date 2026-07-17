import React, { useState } from 'react';

const hackathons = [
  {
    id: 1,
    name: 'Lakshya',
    organiser: 'CodingGita Hackathon',
    date: '2026',
    problem: 'Users reading documentation, articles, PDFs, shopping pages, and videos still have to switch tabs, copy content, and re-explain context to AI tools, which breaks focus and slows down learning.',
    solution: 'Built Lakshya as an AI browser companion that works directly inside the browsing flow to chat with the current page, summarize content, analyze PDFs and images, explain code, and reduce context switching.',
    outcome: 'Winner',
    tags: ['Winner', 'AI Browser Companion', 'Hackathon'],
    image: '/Codinggita.jpg',
    repo: 'https://github.com/codinggita/team_lakshya',
  },
  {
    id: 2,
    name: 'Talentra',
    organiser: 'DAIICT Hackathon',
    date: '2026',
    problem: 'Hiring workflows often rely on manual resume review, inconsistent skill interpretation, and weak candidate-to-job matching, which makes screening slow and hard to scale.',
    solution: 'Built a multi-agent resume intelligence platform that parses resumes, normalizes skills, and matches candidates to job descriptions through a structured FastAPI, React, LangGraph, PostgreSQL, Redis, and ChromaDB pipeline.',
    outcome: 'Hackathon Project',
    tags: ['Hackathon', 'Resume Intelligence', 'Multi-Agent'],
    image: '/Daiict.jpg',
    repo: 'https://github.com/KHUSHPATEL143/Talentra',
  },
  {
    id: 3,
    name: 'Electrosphere Backend',
    organiser: 'Swaminarayan University - Electrosphere',
    date: '2026',
    problem: 'The hackathon project needed a backend service that could detect faces, generate embeddings, and verify whether two captured faces matched reliably.',
    solution: 'Implemented a Flask-based face recognition API using DeepFace and Facenet512 with endpoints for face detection, embedding generation, verification, and health monitoring for integration into the larger project.',
    outcome: 'Backend Submission',
    tags: ['Python', 'DeepFace', 'Face Recognition'],
    image: '/electrosphere.jpg',
    repo: 'https://github.com/KHUSHPATEL143/hackathon_backend_python',
  },
  {
    id: 4,
    name: 'IdeaForge',
    organiser: 'Charusat Hackathon',
    date: '2026',
    problem: 'Startup teams and student project teams often manage ideas, tasks, meetings, updates, and collaboration tools across disconnected platforms, making ownership and progress tracking difficult.',
    solution: 'Built IdeaForge as a single MERN SaaS workspace for project management, task assignment, team collaboration, meetings, notifications, analytics, global search, and Google productivity integrations.',
    outcome: 'Hackathon Project',
    tags: ['MERN', 'SaaS Workspace', 'Hackathon'],
    image: '/Charusat.webp',
    repo: 'https://github.com/KHUSHPATEL143/IdeaForge_charusat',
  },
];

export default function Hackathons() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="hackathons" className="section-shell">
      <div className="container-main">
        <div className="font-mono text-xs tracking-widest uppercase text-text-dim mb-3">05 - Hackathons</div>
        <h2 className="font-display text-4xl font-extrabold text-text mb-3">Hackathons</h2>
        <p className="text-text-muted max-w-xl mb-12">Competitive coding events where I built products under pressure and collaborated with teams.</p>

        <div className="flex flex-col gap-6">
          {hackathons.map((hackathon) => (
            <div key={hackathon.id} className="card-base p-8 flex gap-7 max-sm:flex-col">
              <div className="flex flex-col items-center gap-2 shrink-0">
                <div className="w-9 h-9 border border-accent/25 rounded-full flex items-center justify-center font-mono text-xs font-bold text-accent tracking-widest">
                  {String(hackathon.id).padStart(2, '0')}
                </div>
                <div className="w-px flex-1 bg-border min-h-5" />
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-start gap-4 mb-5 flex-wrap">
                  <div>
                    <h3 className="font-display text-xl font-bold text-text mb-1">{hackathon.name}</h3>
                    <span className="font-mono text-xs text-text-dim tracking-wide">{hackathon.organiser} - {hackathon.date}</span>
                  </div>
                  <span className="tag-base text-accent">{hackathon.outcome}</span>
                </div>

                {hackathon.image && (
                  <div
                    className="relative rounded-xl overflow-hidden border border-border mb-5 max-h-[360px] cursor-pointer group"
                    onClick={() => setLightbox(hackathon.image)}
                  >
                    <img src={hackathon.image} alt={hackathon.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center font-mono text-sm text-white/90 tracking-widest">
                      Click to view
                    </div>
                  </div>
                )}

                <div className="mb-4">
                  <div className="font-mono text-[0.65rem] uppercase tracking-widest text-accent mb-1.5">Problem</div>
                  <p className="text-text-muted text-sm leading-relaxed">{hackathon.problem}</p>
                </div>
                <div className="mb-4">
                  <div className="font-mono text-[0.65rem] uppercase tracking-widest text-accent mb-1.5">Solution</div>
                  <p className="text-text-muted text-sm leading-relaxed">{hackathon.solution}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {hackathon.tags.map((tag) => (
                    <span key={tag} className="tag-base">{tag}</span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-4 mt-5">
                  <a
                    href={hackathon.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-text-muted hover:text-accent transition-colors"
                  >
                    Open GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="hack-lightbox" onClick={() => setLightbox(null)}>
          <button
            className="absolute top-6 right-8 w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition z-10"
            onClick={() => setLightbox(null)}
          >
            Close
          </button>
          <img src={lightbox} alt="Hackathon full view" />
        </div>
      )}
    </section>
  );
}
