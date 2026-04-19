import React, { useState } from 'react';
import './Resume.css';

export default function Resume() {
  const [showViewer, setShowViewer] = useState(false);

  return (
    <section id="resume" className="section">
      <div className="container">
        <div className="section-label">07 — Resume</div>
        <h2 className="section-title">My Resume</h2>
        <p className="section-subtitle">
          A snapshot of my skills, projects, and experience. Click below to view it directly in the browser.
        </p>

        <div className="resume__card card">
          <div className="resume__card-left">
            <div className="resume__doc-icon">
              <span>📄</span>
            </div>
            <div>
              <div className="resume__doc-name">Khush_Patel_Resume.pdf</div>
              <div className="resume__doc-meta">Full Stack Developer · MERN Stack · Agency Founder</div>
            </div>
          </div>

          <div className="resume__actions">
            <button
              className="btn btn-primary"
              onClick={() => setShowViewer(!showViewer)}
            >
              {showViewer ? '✕ Close' : '👁 View Resume'}
            </button>
          </div>
        </div>

        {showViewer && (
          <div className="resume__viewer">
            <div className="resume__viewer-header">
              <span className="resume__viewer-label">Khush_Patel_Resume.pdf</span>
              <button
                className="resume__viewer-close"
                onClick={() => setShowViewer(false)}
              >
                ✕ Close
              </button>
            </div>
            <iframe
              src="/Khush_Patel_Resume.pdf"
              title="Khush Patel Resume"
              className="resume__iframe"
              frameBorder="0"
            />
          </div>
        )}

        <div className="resume__highlights">
          <div className="resume__highlight">
            <span className="resume__highlight-icon">⚡</span>
            <div>
              <div className="resume__highlight-title">Full Stack Developer</div>
              <div className="resume__highlight-sub">MERN Stack · TypeScript · REST APIs</div>
            </div>
          </div>
          <div className="resume__highlight">
            <span className="resume__highlight-icon">🏢</span>
            <div>
              <div className="resume__highlight-title">Agency Founder</div>
              <div className="resume__highlight-sub">Freelance web solutions for clients</div>
            </div>
          </div>
          <div className="resume__highlight">
            <span className="resume__highlight-icon">🎓</span>
            <div>
              <div className="resume__highlight-title">Computer Engineering</div>
              <div className="resume__highlight-sub">CodingGita · 2025–2029</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
