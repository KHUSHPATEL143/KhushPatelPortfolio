import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function NotFoundPage({ setActiveSection }) {
  useEffect(() => {
    setActiveSection('');
  }, [setActiveSection]);

  return (
    <section className="not-found-shell">
      <div className="not-found-card">
        <p className="eyebrow">404</p>
        <h1>This route does not exist yet.</h1>
        <p>
          The page you tried to open is not available right now. Use the button below to return to
          the main portfolio.
        </p>
        <Link className="primary-btn" to="/">
          <ArrowLeft size={16} />
          Back to portfolio
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;
