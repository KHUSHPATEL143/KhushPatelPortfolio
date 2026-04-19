import { siteMeta } from '../../data/portfolio';
import SectionIntro from '../common/SectionIntro.jsx';

function ResumeSection({ onOpenResume }) {
  return (
    <section className="section-shell" id="resume">
      <SectionIntro
        eyebrow="Resume"
        title="Resume viewing without forced download"
        copy="The PDF opens in a modal viewer and can also be opened in a new tab. Auto-download has been intentionally avoided to match the brief."
      />
      <div className="resume-card">
        <div>
          <p className="resume-label">Current file</p>
          <h3>Khush-Patel-Resume.pdf</h3>
          <p>The PDF asset was copied from the existing workspace and connected to an in-browser viewer.</p>
        </div>
        <div className="resume-actions">
          <button className="primary-btn" type="button" onClick={onOpenResume}>
            View inside portfolio
          </button>
          <a className="secondary-btn" href={siteMeta.resumePath} target="_blank" rel="noreferrer">
            Open in new tab
          </a>
        </div>
      </div>
    </section>
  );
}

export default ResumeSection;
