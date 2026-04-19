import React from 'react';
import './FigmaDesigns.css';

const figmaDesigns = [
  {
    id: 1,
    title: 'Vrundavan Restaurant UI',
    description: 'Complete restaurant platform UI/UX design with menu browsing, ordering flow, and UPI payment screens. Pixel-perfect mobile and desktop layouts.',
    tags: ['UI/UX', 'Restaurant', 'Mobile + Desktop'],
    figmaLink: 'https://www.figma.com/',
    previewColor: '#ff6b35',
  },
  {
    id: 2,
    title: 'Daily Ride App Mockups',
    description: 'Wireframes and high-fidelity mockups for the ride-sharing platform including booking flow, route maps, and driver dashboard.',
    tags: ['Wireframes', 'Mobile App', 'Dashboard'],
    figmaLink: 'https://www.figma.com/',
    previewColor: '#6366f1',
  },
  {
    id: 3,
    title: 'Portfolio Design System',
    description: 'Full design system with color tokens, typography scales, component library, and responsive grid documentation used across portfolio versions.',
    tags: ['Design System', 'Components', 'Tokens'],
    figmaLink: 'https://www.figma.com/',
    previewColor: '#ffaa00',
  },
];

export default function FigmaDesigns() {
  return (
    <section id="figma" className="section section--alt">
      <div className="container">
        <div className="section-label">04 — Figma Designs</div>
        <h2 className="section-title">UI/UX Designs</h2>
        <p className="section-subtitle">
          Designs crafted in Figma — from wireframes to polished interfaces for web and mobile applications.
        </p>

        <div className="figma__grid">
          {figmaDesigns.map((d) => (
            <a
              key={d.id}
              href={d.figmaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="card figma-card"
            >
              <div
                className="figma-card__preview"
                style={{ '--preview-color': d.previewColor }}
              >
                <div className="figma-card__preview-icon">
                  <svg viewBox="0 0 38 57" fill="none" width="32" height="48">
                    <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE" />
                    <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 0 1-19 0z" fill="#0ACF83" />
                    <path d="M19 0v19h9.5a9.5 9.5 0 0 0 0-19H19z" fill="#FF7262" />
                    <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
                    <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
                  </svg>
                </div>
              </div>
              <div className="figma-card__body">
                <h3 className="figma-card__title">{d.title}</h3>
                <p className="figma-card__desc">{d.description}</p>
                <div className="figma-card__tags">
                  {d.tags.map((t) => (
                    <span key={t} className="project-card__tag">{t}</span>
                  ))}
                </div>
                <span className="figma-card__link">↗ View on Figma</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
