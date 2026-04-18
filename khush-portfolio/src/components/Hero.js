import React, { useEffect, useRef } from 'react';
import './Hero.css';

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
        if (charIdx === current.length) {
          deleting = true;
          setTimeout(type, 1600);
          return;
        }
      } else {
        el.textContent = current.slice(0, charIdx - 1);
        charIdx--;
        if (charIdx === 0) {
          deleting = false;
          idx = (idx + 1) % ROLES.length;
          current = ROLES[idx];
        }
      }
      setTimeout(type, deleting ? 50 : 90);
    };

    const timer = setTimeout(type, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero__grid-bg" aria-hidden="true" />
      <div className="hero__glow hero__glow--1" aria-hidden="true" />
      <div className="hero__glow hero__glow--2" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Available for Internships
          </div>

          <h1 className="hero__name">
            Hi, I'm<br />
            <span className="hero__name-accent">Khush Patel</span>
          </h1>

          <div className="hero__role">
            <span className="hero__role-prefix">—</span>
            <span ref={roleRef} className="hero__role-text" />
            <span className="hero__cursor">|</span>
          </div>

          <p className="hero__bio">
            Motivated Computer Engineering student and Full-Stack Developer with hands-on experience building 
            production-grade <strong>MERN Stack</strong> applications. Founder of a freelance digital agency 
            delivering scalable web solutions across Gujarat, India.
          </p>

          <div className="hero__info-grid">
            <div className="hero__info-item">
              <span className="hero__info-label">Location</span>
              <span>Gujarat, India 🇮🇳</span>
            </div>
            <div className="hero__info-item">
              <span className="hero__info-label">Education</span>
              <span>Coding Gita (2023–2026)</span>
            </div>
            <div className="hero__info-item">
              <span className="hero__info-label">Email</span>
              <span>khushpatel9979@gmail.com</span>
            </div>
          </div>

          <div className="hero__cta">
            <a href="#projects" className="btn btn-primary">View My Work ↓</a>
            <a href="#contact" className="btn btn-outline">Get In Touch</a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__avatar-wrap">
            <div className="hero__avatar-ring" />
            <div className="hero__avatar">
              <img
                src="/profile.png"
                alt="Khush Patel"
                className="hero__avatar-img"
              />
            </div>
            <div className="hero__avatar-orbit">
              {['React', 'Node', 'Mongo', 'TS'].map((tech, i) => (
                <div key={tech} className="hero__orbit-item" style={{ '--i': i }}>
                  {tech}
                </div>
              ))}
            </div>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-num">6+</span>
              <span className="hero__stat-label">Projects Built</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-num">MERN</span>
              <span className="hero__stat-label">Stack Expert</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-num">1</span>
              <span className="hero__stat-label">Agency Founded</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll-hint">
        <div className="hero__scroll-line" />
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
