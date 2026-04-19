import { motion } from 'framer-motion';
import SectionIntro from '../common/SectionIntro.jsx';

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function InfoSection({ id, eyebrow, title, copy, emptyTitle, emptyCopy, icon: Icon }) {
  return (
    <section className="section-shell" id={id}>
      <SectionIntro eyebrow={eyebrow} title={title} copy={copy} />
      <motion.div
        className="panel-card empty-shell"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeInUp}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <div className="empty-title-row">
          <Icon size={18} />
          <h3>{emptyTitle}</h3>
        </div>
        <p>{emptyCopy}</p>
      </motion.div>
    </section>
  );
}

export default InfoSection;
