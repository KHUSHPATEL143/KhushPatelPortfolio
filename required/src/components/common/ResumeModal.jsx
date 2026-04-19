import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { siteMeta } from '../../data/portfolio';

function ResumeModal({ onClose }) {
  return (
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="resume-modal"
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 20 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        <div className="modal-header">
          <div>
            <p className="eyebrow">Resume preview</p>
            <h3>{siteMeta.name}</h3>
          </div>
          <button className="icon-btn" type="button" aria-label="Close resume viewer" onClick={onClose}>
            <X size={18} />
          </button>
        </div>
        <div className="resume-frame-wrap">
          <iframe src={siteMeta.resumePath} title={`${siteMeta.name} resume PDF`} />
        </div>
        <div className="modal-actions">
          <a className="secondary-btn" href={siteMeta.resumePath} target="_blank" rel="noreferrer">
            Open in new tab
          </a>
          <button className="primary-btn" type="button" onClick={onClose}>
            Close viewer
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ResumeModal;
