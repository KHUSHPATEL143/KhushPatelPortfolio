import React, { useState } from 'react';
import './Certificates.css';

const certificates = [
  {
    id: 1,
    title: 'Certificate of Achievement',
    issuer: 'Professional Certification',
    date: '2024',
    image: 'https://res.cloudinary.com/dgz5jcnzj/image/upload/q_auto/f_auto/v1776533672/64_drzwmg.jpg',
  },
  {
    id: 2,
    title: 'Hackathon & Event Certificate',
    issuer: 'Competition Recognition',
    date: '2026',
    image: 'https://res.cloudinary.com/dgz5jcnzj/image/upload/q_auto/f_auto/v1776533676/IMG_20260418_230215.jpg_fzdqxz.jpg',
  },
];

export default function Certificates() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="certificates" className="section section--alt">
      <div className="container">
        <div className="section-label">05 — Certifications</div>
        <h2 className="section-title">Certificates</h2>
        <p className="section-subtitle">
          Certifications and credentials that validate my skills and continuous learning journey.
        </p>

        <div className="certs__grid">
          {certificates.map((cert) => (
            <div key={cert.id} className="card cert-card cert-card--image">
              <div
                className="cert-card__img-wrap"
                onClick={() => setLightbox(cert.image)}
                role="button"
                tabIndex={0}
                aria-label={`View ${cert.title}`}
              >
                <img src={cert.image} alt={cert.title} className="cert-card__img" loading="lazy" />
                <div className="cert-card__img-overlay">
                  <span className="cert-card__zoom-icon">🔍</span>
                  <span>Click to view</span>
                </div>
              </div>
              <div className="cert-card__body">
                <h3 className="cert-card__title">{cert.title}</h3>
                <div className="cert-card__meta">
                  <span className="cert-card__issuer">{cert.issuer}</span>
                  <span className="cert-card__date">{cert.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="cert-lightbox" onClick={() => setLightbox(null)}>
          <button className="cert-lightbox__close" onClick={() => setLightbox(null)} aria-label="Close">✕</button>
          <img src={lightbox} alt="Certificate full view" className="cert-lightbox__img" />
        </div>
      )}
    </section>
  );
}
