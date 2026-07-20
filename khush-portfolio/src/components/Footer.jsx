import React, { useEffect, useState } from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  const [views, setViews] = useState(null);

  useEffect(() => {
    fetch('https://abacus.jasoncameron.dev/hit/khushpatel143/portfolio')
      .then(res => res.json())
      .then(data => {
        if (data && typeof data.value === 'number') {
          setViews(data.value);
        }
      })
      .catch(err => console.error('Error fetching view count:', err));
  }, []);

  return (
    <footer className="border-t border-border bg-bg-2">
      <div className="container-main py-12">
        <div className="flex flex-wrap justify-between items-start gap-8 mb-10">
          <div>
            <a href="#home" className="font-display text-xl font-extrabold text-text hover:text-accent transition-colors">
              KP<span className="text-accent">.</span>
            </a>
            <p className="text-text-muted text-sm mt-2 max-w-xs">Building scalable digital solutions — one commit at a time.</p>
          </div>
          <div className="flex flex-wrap gap-5">
            {['Skills','Projects','Certificates','Achievements','Resume','Contact'].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="font-mono text-xs text-text-dim hover:text-accent transition-colors tracking-widest uppercase">{l}</a>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center gap-6 pt-6 border-t border-border">
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-mono text-xs text-text-dim">© {year} Khush Patel. All rights reserved.</span>
            {views !== null && (
              <span className="font-mono text-[10px] text-accent bg-accent/5 px-2.5 py-0.5 border border-accent/20 rounded-full flex items-center gap-1.5" title="Total Views">
                <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                {views.toLocaleString()} views
              </span>
            )}
          </div>
          <span className="font-mono text-xs text-text-dim">
            Built with React · Deployed on <a href="https://khushpatel.online" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">khushpatel.online</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
