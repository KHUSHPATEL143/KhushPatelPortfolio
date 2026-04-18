import React from 'react';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <a href="#home" className="footer__logo">
            KP<span className="footer__logo-dot">.</span>
          </a>
          <p className="footer__tagline">
            Building scalable digital solutions — one commit at a time.
          </p>
        </div>

        <div className="footer__links">
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
          <a href="#achievements">Achievements</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer__bottom">
          <span>© {year} Khush Patel. All rights reserved.</span>
          <span className="footer__made">
            Built with React · Deployed on <a href="https://khushpatel.online" target="_blank" rel="noopener noreferrer">khushpatel.online</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
