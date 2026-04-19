import React, { useState } from 'react';

const certificates = [
  { id: 1, title: 'Certificate of Achievement', issuer: 'Professional Certification', date: '2024', image: 'https://res.cloudinary.com/dgz5jcnzj/image/upload/q_auto/f_auto/v1776533672/64_drzwmg.jpg' },
  { id: 2, title: 'Hackathon & Event Certificate', issuer: 'Competition Recognition', date: '2026', image: 'https://res.cloudinary.com/dgz5jcnzj/image/upload/q_auto/f_auto/v1776533676/IMG_20260418_230215.jpg_fzdqxz.jpg' },
];

export default function Certificates() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="certificates" className="section-shell bg-bg-2">
      <div className="container-main">
        <div className="font-mono text-xs tracking-widest uppercase text-text-dim mb-3">04 — Certifications</div>
        <h2 className="font-display text-4xl font-extrabold text-text mb-3">Certificates</h2>
        <p className="text-text-muted max-w-xl mb-12">Certifications and credentials that validate my skills and continuous learning journey.</p>

        <div className="grid md:grid-cols-2 gap-7">
          {certificates.map(cert => (
            <div key={cert.id} className="card-base p-0 overflow-hidden">
              <div className="relative aspect-video cursor-pointer group" onClick={() => setLightbox(cert.image)}>
                <img src={cert.image} alt={cert.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 font-mono text-xs text-white/90 tracking-widest uppercase">
                  <span className="text-2xl">🔍</span>
                  <span>Click to view</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-base font-bold text-text mb-1">{cert.title}</h3>
                <div className="flex justify-between">
                  <span className="font-mono text-xs text-accent tracking-wide">{cert.issuer}</span>
                  <span className="font-mono text-xs text-text-dim">{cert.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="cert-lightbox" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-8 w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition z-10" onClick={() => setLightbox(null)}>✕</button>
          <img src={lightbox} alt="Certificate full view" />
        </div>
      )}
    </section>
  );
}
