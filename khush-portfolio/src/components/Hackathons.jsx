import React, { useState } from 'react';

const hackathons = [
  { id: 1, name: 'Hackathon Participation', organiser: 'Competitive Event', date: '2026', problem: 'Participated in a competitive hackathon building innovative solutions under time constraints.', solution: 'Built a full-stack solution leveraging modern web technologies and collaborative teamwork.', outcome: 'Participant', tags: ['React','Node.js','Team Collaboration'], image: 'https://res.cloudinary.com/dgz5jcnzj/image/upload/q_auto/f_auto/v1776533676/IMG_20260418_230215.jpg_fzdqxz.jpg' },
];

export default function Hackathons() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="hackathons" className="section-shell">
      <div className="container-main">
        <div className="font-mono text-xs tracking-widest uppercase text-text-dim mb-3">05 — Hackathons</div>
        <h2 className="font-display text-4xl font-extrabold text-text mb-3">Hackathons</h2>
        <p className="text-text-muted max-w-xl mb-12">Competitive coding events where I've built solutions under pressure and collaborated with teams.</p>

        <div className="flex flex-col gap-6">
          {hackathons.map(h => (
            <div key={h.id} className="card-base p-8 flex gap-7 max-sm:flex-col">
              <div className="flex flex-col items-center gap-2 shrink-0">
                <div className="w-9 h-9 border border-accent/25 rounded-full flex items-center justify-center font-mono text-xs font-bold text-accent tracking-widest">
                  {String(h.id).padStart(2, '0')}
                </div>
                <div className="w-px flex-1 bg-border min-h-5" />
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-start gap-4 mb-5 flex-wrap">
                  <div>
                    <h3 className="font-display text-xl font-bold text-text mb-1">{h.name}</h3>
                    <span className="font-mono text-xs text-text-dim tracking-wide">{h.organiser} · {h.date}</span>
                  </div>
                  <span className="tag-base text-accent">{h.outcome}</span>
                </div>

                {h.image && (
                  <div className="relative rounded-xl overflow-hidden border border-border mb-5 max-h-[360px] cursor-pointer group" onClick={() => setLightbox(h.image)}>
                    <img src={h.image} alt={h.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center font-mono text-sm text-white/90 tracking-widest">
                      🔍 Click to view
                    </div>
                  </div>
                )}

                <div className="mb-4">
                  <div className="font-mono text-[0.65rem] uppercase tracking-widest text-accent mb-1.5">Problem</div>
                  <p className="text-text-muted text-sm leading-relaxed">{h.problem}</p>
                </div>
                <div className="mb-4">
                  <div className="font-mono text-[0.65rem] uppercase tracking-widest text-accent mb-1.5">Solution</div>
                  <p className="text-text-muted text-sm leading-relaxed">{h.solution}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {h.tags.map(t => <span key={t} className="tag-base">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="hack-lightbox" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-8 w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition z-10" onClick={() => setLightbox(null)}>✕</button>
          <img src={lightbox} alt="Hackathon full view" />
        </div>
      )}
    </section>
  );
}
