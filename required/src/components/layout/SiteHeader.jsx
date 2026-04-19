import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { navItems, siteMeta } from '../../data/portfolio';

const MotionLink = motion(Link);

function SiteHeader({ activeSection, menuOpen, setMenuOpen, onOpenResume }) {
  const location = useLocation();

  const isHome = location.pathname === '/';

  const sectionTarget = (id) => ({
    pathname: '/',
    hash: `#${id}`,
  });

  return (
    <>
      <motion.header
        className="site-header"
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <motion.div whileHover={{ y: -1 }} transition={{ duration: 0.18 }}>
          <Link className="brand-lockup" to="/">
            <span className="brand-mark">KP</span>
            <div>
              <p className="brand-name">{siteMeta.name}</p>
              <p className="brand-role">{siteMeta.role}</p>
            </div>
          </Link>
        </motion.div>

        <motion.div
          className="nav-shell"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08, ease: 'easeOut' }}
        >
          <nav className="desktop-nav" aria-label="Primary">
            {navItems.map((item, index) => (
              <MotionLink
                key={item.id}
                to={sectionTarget(item.id)}
                className={isHome && activeSection === item.id ? 'is-active' : ''}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28, delay: 0.08 + index * 0.03, ease: 'easeOut' }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.label}
              </MotionLink>
            ))}
          </nav>
        </motion.div>

        <motion.div
          className="header-actions"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.14, ease: 'easeOut' }}
        >
          <MotionLink
            className="status-pill desktop-status"
            to="/projects"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Selected Work
          </MotionLink>
          <motion.button
            className="outline-btn"
            type="button"
            onClick={onOpenResume}
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Resume
          </motion.button>
          <button
            className="icon-btn mobile-only"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.div>
      </motion.header>

      {menuOpen ? (
        <motion.div
          className="mobile-panel"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={sectionTarget(item.id)}
              className={isHome && activeSection === item.id ? 'is-active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/projects" onClick={() => setMenuOpen(false)}>
            Selected Work
          </Link>
          <Link to="/resume" onClick={() => setMenuOpen(false)}>
            Resume
          </Link>
        </motion.div>
      ) : null}
    </>
  );
}

export default SiteHeader;
