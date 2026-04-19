import React, { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Hackathons', href: '#hackathons' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
  { label: 'Social', href: '#social' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-bg/90 backdrop-blur-xl border-b border-border shadow-lg' : 'bg-transparent'}`}>
      <div className="container-main flex items-center justify-between h-16">
        <a href="#home" className="font-display text-xl font-extrabold text-text hover:text-accent transition-colors">
          KP<span className="text-accent">.</span>
        </a>

        <ul className={`md:flex items-center gap-1 ${menuOpen ? 'flex flex-col absolute top-16 left-0 w-full bg-bg/95 backdrop-blur-xl border-b border-border py-4 px-6 gap-2' : 'hidden'}`}>
          {navLinks.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-mono text-xs tracking-widest uppercase text-text-muted hover:text-accent transition-colors px-3 py-2 block"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden flex flex-col gap-1.5 w-6"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-full bg-text transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`h-0.5 w-full bg-text transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-full bg-text transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>
    </nav>
  );
}
