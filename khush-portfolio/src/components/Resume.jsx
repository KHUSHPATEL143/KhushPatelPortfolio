import React, { useState } from 'react';

export default function Resume() {
  const [showViewer, setShowViewer] = useState(false);

  return (
    <section id="resume" className="section-shell">
      <div className="container-main">
        <div className="font-mono text-xs tracking-widest uppercase text-text-dim mb-3">07 — Resume</div>
        <h2 className="font-display text-4xl font-extrabold text-text mb-3">My Resume</h2>
        <p className="text-text-muted max-w-xl mb-12">A snapshot of my skills, projects, and experience. Click below to view it directly in the browser.</p>

        <div className="card-base p-6 flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-xl">📄</div>
            <div>
              <div className="font-display font-bold text-text text-sm">Khush_Patel_Resume.pdf</div>
              <div className="font-mono text-xs text-text-dim">Full Stack Developer · MERN Stack · Agency Founder</div>
            </div>
          </div>
          <button className="btn-primary" onClick={() => setShowViewer(!showViewer)}>
            {showViewer ? '✕ Close' : '👁 View Resume'}
          </button>
        </div>

        {showViewer && (
          <div className="card-base p-0 overflow-hidden mb-8">
            <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-surface-2">
              <span className="font-mono text-xs text-text-muted">Khush_Patel_Resume.pdf</span>
              <button onClick={() => setShowViewer(false)} className="font-mono text-xs text-text-dim hover:text-accent transition-colors">✕ Close</button>
            </div>
            <iframe src="/Khush_Patel_Resume.pdf" title="Khush Patel Resume" className="w-full h-[80vh] border-0" />
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-4">
          {[
            ['⚡', 'Full Stack Developer', 'MERN Stack · TypeScript · REST APIs'],
            ['🏢', 'Agency Founder', 'Freelance web solutions for clients'],
            ['🎓', 'Computer Engineering', 'CodingGita · 2025–2029'],
          ].map(([icon, title, sub]) => (
            <div key={title} className="card-base p-5 flex items-center gap-4">
              <span className="text-xl">{icon}</span>
              <div>
                <div className="font-display text-sm font-bold text-text">{title}</div>
                <div className="font-mono text-xs text-text-dim">{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
