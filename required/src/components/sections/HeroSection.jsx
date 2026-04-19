import { motion } from 'framer-motion';
import {
  ArrowRight,
  Briefcase,
  BriefcaseBusiness,
  FileText,
  GraduationCap,
  Link as LinkIcon,
  MonitorSmartphone,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import profilePhoto from '../../assets/profile-frame.png';
import { heroStats, siteMeta } from '../../data/portfolio';

const MotionLink = motion(Link);

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function HeroSection({ onOpenResume }) {
  return (
    <section className="hero-shell" id="hero">
      <motion.div
        className="hero-copy"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <p className="eyebrow">Portfolio</p>
        <h1>
          {siteMeta.name}
          <span>{siteMeta.role}</span>
        </h1>
        <p className="hero-text">
          {siteMeta.intro} {siteMeta.shortBio}
        </p>

        <motion.div
          className="hero-pills"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12, ease: 'easeOut' }}
        >
          <motion.span className="hero-pill" whileHover={{ y: -3, scale: 1.02 }}>
            <GraduationCap size={16} />
            {siteMeta.degree}
          </motion.span>
          <motion.span className="hero-pill" whileHover={{ y: -3, scale: 1.02 }}>
            <Briefcase size={16} />
            {siteMeta.community}
          </motion.span>
          <motion.span className="hero-pill" whileHover={{ y: -3, scale: 1.02 }}>
            <MonitorSmartphone size={16} />
            Domain target: khushpatel.online
          </motion.span>
        </motion.div>

        <motion.div
          className="hero-actions-row"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18, ease: 'easeOut' }}
        >
          <MotionLink className="primary-btn" to="/projects" whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            Explore projects
            <ArrowRight size={16} />
          </MotionLink>
          <motion.button
            className="secondary-btn"
            type="button"
            onClick={onOpenResume}
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View resume PDF
          </motion.button>
        </motion.div>

        <div className="stats-grid">
          {heroStats.map((stat, index) => (
            <motion.article
              key={stat.label}
              className="stat-card"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.24 + index * 0.06, ease: 'easeOut' }}
              whileHover={{ y: -5, scale: 1.015 }}
            >
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </motion.article>
          ))}
        </div>
      </motion.div>

      <motion.aside
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.96, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.75, ease: 'easeOut', delay: 0.1 }}
      >
        <div className="portrait-wrap">
          <img src={profilePhoto} alt="Khush Patel portrait from portfolio asset sequence" />
          <motion.div
            className="photo-badge photo-badge-top"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            Khush Patel
          </motion.div>
          <motion.div
            className="photo-badge photo-badge-bottom"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            React, Flutter, Node.js
          </motion.div>
        </div>
        <div className="visual-copy">
          <div className="visual-head">
            <p className="visual-label">Profile</p>
            <motion.span
              className="availability-pill"
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              Available
            </motion.span>
          </div>
          <h2>Designing modern interfaces and building practical full-stack products.</h2>
          <p>
            Computer Science student focused on responsive interfaces, dependable application
            logic, and product experiences that feel clean and intentional.
          </p>
          <ul className="fact-list hero-fact-list">
            <li>
              <BriefcaseBusiness size={16} />
              Full Stack Developer with frontend-first product instincts
            </li>
            <li>
              <FileText size={16} />
              Resume opens in a viewer without forced download
            </li>
            <li>
              <LinkIcon size={16} />
              Explore work, skills, achievements, and contact details below
            </li>
          </ul>
        </div>
      </motion.aside>
    </section>
  );
}

export default HeroSection;
