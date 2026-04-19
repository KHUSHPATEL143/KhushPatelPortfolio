import { useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectsSection from '../components/sections/ProjectsSection.jsx';
import SectionIntro from '../components/common/SectionIntro.jsx';

function ProjectsPage({ setActiveSection }) {
  useEffect(() => {
    setActiveSection('');
  }, [setActiveSection]);

  return (
    <section className="route-page-shell">
      <div className="route-page-card">
        <SectionIntro
          eyebrow="Projects"
          title="Selected work across frontend and full-stack builds"
          copy="A dedicated projects page makes the portfolio easier to scan while the homepage keeps the broader story and supporting sections."
        />
        <div className="route-actions">
          <Link className="secondary-btn" to="/">
            <ArrowLeft size={16} />
            Back home
          </Link>
          <Link className="primary-btn" to="/resume">
            Resume page
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
      <ProjectsSection compact />
    </section>
  );
}

export default ProjectsPage;
