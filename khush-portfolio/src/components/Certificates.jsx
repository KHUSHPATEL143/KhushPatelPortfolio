import React, { useState } from 'react';

const certificates = [
  { id: 1, title: 'CodingGita Hackathon Certificate', issuer: 'CodingGita', date: '2026', image: '/Codinggita.jpg' },
  { id: 2, title: 'Electrosphere Hackathon Certificate', issuer: 'Swaminarayan University', date: '2026', image: '/electrosphere.jpg' },
  { id: 3, title: 'Charusat Hackathon Certificate', issuer: 'Charusat', date: '2026', image: '/Charusat.webp' },
  { id: 4, title: 'Talentra - DAIICT Hackathon Certificate', issuer: 'DAIICT', date: '2026', image: '/Daiict.jpg' },
];

export default function Certificates() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="certificates" className="section-shell bg-bg-2">
      <div className="container-main">
        <div className="font-mono text-xs tracking-widest uppercase text-text-dim mb-3">04 - Certifications</div>
        <h2 className="font-display text-4xl font-extrabold text-text mb-3">Certificates</h2>
        <p className="text-text-muted max-w-xl mb-12">Hackathon certificates and recognitions that document the events I have participated in.</p>

        <div className="grid md:grid-cols-2 gap-7">
          {certificates.map((certificate) => (
            <div key={certificate.id} className="card-base p-0 overflow-hidden">
              <div className="relative aspect-video cursor-pointer group" onClick={() => setLightbox(certificate.image)}>
                <img src={certificate.image} alt={certificate.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 font-mono text-xs text-white/90 tracking-widest uppercase">
                  <span className="text-2xl">View</span>
                  <span>Click to open</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-base font-bold text-text mb-1">{certificate.title}</h3>
                <div className="flex justify-between gap-3">
                  <span className="font-mono text-xs text-accent tracking-wide">{certificate.issuer}</span>
                  <span className="font-mono text-xs text-text-dim">{certificate.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="cert-lightbox" onClick={() => setLightbox(null)}>
          <button
            className="absolute top-6 right-8 w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition z-10"
            onClick={() => setLightbox(null)}
          >
            Close
          </button>
          <img src={lightbox} alt="Certificate full view" />
        </div>
      )}
    </section>
  );
}
