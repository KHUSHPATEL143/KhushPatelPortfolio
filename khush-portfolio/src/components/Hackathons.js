import React, { useState } from 'react';
import './Hackathons.css';

const hackathons = [
  {
    id: 1,
    name: 'Hackathon Participation',
    organiser: 'Competitive Event',
    date: '2026',
    problem: 'Participated in a competitive hackathon building innovative solutions under time constraints.',
    solution: 'Built a full-stack solution leveraging modern web technologies and collaborative teamwork.',
    outcome: 'Participant',
    tags: ['React', 'Node.js', 'Team Collaboration'],
    image: 'https://res.cloudinary.com/dgz5jcnzj/image/upload/q_auto/f_auto/v1776533676/IMG_20260418_230215.jpg_fzdqxz.jpg',
  },
];

export default function Hackathons() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="hackathons" className="section">
      <div className="container">
        <div className="section-label">05 — Hackathons</div>
        <h2 className="section-title">Hackathons</h2>
        <p className="section-subtitle">
          Competitive coding events where I've built solutions under pressure and collaborated with teams.
        </p>

        <div className="hackathons__list">
          {hackathons.map((h) => (
            <div key={h.id} className="card hackathon-card">
              <div className="hackathon-card__left">
                <div className="hackathon-card__number">
                  {String(h.id).padStart(2, '0')}
                </div>
                <div className="hackathon-card__timeline-line" />
              </div>

              <div className="hackathon-card__content">
                <div className="hackathon-card__header">
                  <div>
                    <h3 className="hackathon-card__name">{h.name}</h3>
                    <span className="hackathon-card__meta">{h.organiser} · {h.date}</span>
                  </div>
                  <span className="tag hackathon-card__outcome">{h.outcome}</span>
                </div>

                {h.image && (
                  <div
                    className="hackathon-card__photo"
                    onClick={() => setLightbox(h.image)}
                    role="button"
                    tabIndex={0}
                    aria-label="View hackathon photo"
                  >
                    <img src={h.image} alt={`${h.name} photo`} loading="lazy" />
                    <div className="hackathon-card__photo-overlay">
                      <span>🔍 Click to view</span>
                    </div>
                  </div>
                )}

                <div className="hackathon-card__section">
                  <div className="hackathon-card__section-label">Problem</div>
                  <p>{h.problem}</p>
                </div>

                <div className="hackathon-card__section">
                  <div className="hackathon-card__section-label">Solution</div>
                  <p>{h.solution}</p>
                </div>

                <div className="hackathon-card__tags">
                  {h.tags.map(t => (
                    <span key={t} className="project-card__tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="hack-lightbox" onClick={() => setLightbox(null)}>
          <button className="hack-lightbox__close" onClick={() => setLightbox(null)} aria-label="Close">✕</button>
          <img src={lightbox} alt="Hackathon full view" className="hack-lightbox__img" />
        </div>
      )}
    </section>
  );
}
