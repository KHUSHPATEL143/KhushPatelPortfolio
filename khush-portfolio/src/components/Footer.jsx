import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();

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
        <div className="flex flex-wrap justify-between items-center gap-4 pt-6 border-t border-border">
          <span className="font-mono text-xs text-text-dim">© {year} Khush Patel. All rights reserved.</span>
          <span className="font-mono text-xs text-text-dim">
            Built with React · Deployed on <a href="https://khushpatel.online" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">khushpatel.online</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
