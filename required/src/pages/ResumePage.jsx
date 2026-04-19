import { useEffect } from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteMeta } from '../data/portfolio';
import SectionIntro from '../components/common/SectionIntro.jsx';

function ResumePage({ setActiveSection, onOpenResume }) {
  useEffect(() => {
    setActiveSection('');
  }, [setActiveSection]);

  return (
    <section className="route-page-shell">
      <div className="route-page-card">
        <SectionIntro
          eyebrow="Resume"
          title="Resume preview with clean and direct access"
          copy="This page keeps the resume easy to review while the modal viewer remains available from anywhere in the portfolio."
        />
        <div className="route-actions">
          <Link className="secondary-btn" to="/">
            <ArrowLeft size={16} />
            Back home
          </Link>
          <button className="primary-btn" type="button" onClick={onOpenResume}>
            Open modal viewer
          </button>
        </div>
      </div>

      <div className="resume-page-frame">
        <iframe src={siteMeta.resumePath} title={`${siteMeta.name} resume page`} />
      </div>

      <div className="route-actions">
        <a className="secondary-btn" href={siteMeta.resumePath} target="_blank" rel="noreferrer">
          Open PDF directly
          <ExternalLink size={16} />
        </a>
      </div>
    </section>
  );
}

export default ResumePage;
