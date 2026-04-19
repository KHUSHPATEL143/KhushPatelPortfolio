import React, { useEffect, useRef } from 'react';

const ROLES = ['Full Stack Developer', 'MERN Stack Developer', 'Agency Founder', 'Computer Engineering Student'];

export default function Hero() {
  const roleRef = useRef(null);
  let idx = 0;

  useEffect(() => {
    const el = roleRef.current;
    if (!el) return;
    let charIdx = 0;
    let deleting = false;
    let current = ROLES[idx];

    const type = () => {
      if (!deleting) {
        el.textContent = current.slice(0, charIdx + 1);
        charIdx++;
        if (charIdx === current.length) { deleting = true; setTimeout(type, 1600); return; }
      } else {
        el.textContent = current.slice(0, charIdx - 1);
        charIdx--;
        if (charIdx === 0) { deleting = false; idx = (idx + 1) % ROLES.length; current = ROLES[idx]; }
      }
      setTimeout(type, deleting ? 50 : 90);
    };
    const timer = setTimeout(type, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      {/* Grid Background */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(rgba(255,170,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,170,0,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
      }} />
      {/* Glows */}
      <div className="absolute -top-48 -right-24 w-[600px] h-[600px] rounded-full blur-[120px] bg-gradient-radial from-accent/10 to-transparent pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full blur-[120px] bg-gradient-radial from-accent-2/8 to-transparent pointer-events-none" />

      <div className="container-main grid md:grid-cols-[1fr_420px] gap-20 items-center relative z-10">
        {/* Content */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-accent/25 rounded-full font-mono text-xs tracking-widest text-accent mb-6 bg-accent/5">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse-dot" />
            Available for Internships
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-extrabold leading-none mb-4">
            Hi, I'm<br />
            <span className="bg-gradient-to-br from-accent to-accent-2 bg-clip-text text-transparent">Khush Patel</span>
          </h1>

          <div className="flex items-center gap-2.5 mb-7 font-mono text-lg text-text-muted">
            <span className="text-accent">—</span>
            <span ref={roleRef} className="text-text font-medium" />
            <span className="text-accent animate-blink">|</span>
          </div>

          <p className="text-text-muted text-base leading-7 max-w-lg mb-8">
            Motivated Computer Engineering student and Full-Stack Developer with hands-on experience building
            production-grade <strong className="text-text font-medium">MERN Stack</strong> applications. Founder of a freelance digital agency
            delivering scalable web solutions across Gujarat, India.
          </p>

          <div className="grid grid-cols-3 gap-4 mb-9 p-5 bg-surface border border-border rounded-2xl max-sm:grid-cols-1">
            {[
              ['Location', 'Gujarat, India 🇮🇳'],
              ['Education', 'CodingGita (2025–2029)'],
              ['Email', 'khushpatel9979@gmail.com'],
            ].map(([label, value]) => (
              <div key={label} className="flex flex-col gap-1 text-sm">
                <span className="font-mono text-[0.65rem] uppercase tracking-widest text-text-dim">{label}</span>
                <span className="text-text">{value}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-4 flex-wrap">
            <a href="#projects" className="btn-primary">View My Work ↓</a>
            <a href="#contact" className="btn-outline">Get In Touch</a>
          </div>
        </div>

        {/* Visual */}
        <div className="flex flex-col items-center gap-8 max-md:order-first">
          <div className="relative w-64 h-64 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-accent/20 animate-spin-slow" />
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-surface-2 to-surface border-[3px] border-accent/30 flex items-center justify-center animate-float shadow-[0_0_60px_rgba(255,170,0,0.15)] overflow-hidden">
              <img src="/profile.png" alt="Khush Patel" className="w-full h-full object-cover rounded-full" />
            </div>
            {['React', 'Node', 'Mongo', 'TS'].map((tech, i) => {
              const positions = [
                'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2',
                'top-1/2 right-0 translate-x-1/2 -translate-y-1/2',
                'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2',
                'top-1/2 left-0 -translate-x-1/2 -translate-y-1/2',
              ];
              return (
                <div key={tech} className={`absolute ${positions[i]} w-11 h-11 bg-surface border border-border rounded-full flex items-center justify-center font-mono text-[0.65rem] text-accent`}>
                  {tech}
                </div>
              );
            })}
          </div>

          <div className="flex gap-8">
            {[['6+', 'Projects Built'], ['MERN', 'Stack Expert'], ['1', 'Agency Founded']].map(([num, label]) => (
              <div key={label} className="text-center">
                <span className="block font-display text-3xl font-extrabold text-accent leading-none">{num}</span>
                <span className="font-mono text-[0.65rem] tracking-widest uppercase text-text-dim">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-[0.65rem] tracking-widest uppercase text-text-dim max-md:hidden">
        <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent animate-scroll-pulse" />
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
