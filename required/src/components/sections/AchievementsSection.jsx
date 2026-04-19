import { motion } from 'framer-motion';
import { ExternalLink, Trophy } from 'lucide-react';
import { achievements } from '../../data/portfolio';
import SectionIntro from '../common/SectionIntro.jsx';

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function AchievementsSection() {
  return (
    <section className="section-shell" id="achievements">
      <SectionIntro
        eyebrow="Achievements"
        title="Verified milestones and credibility signals"
        copy="These are phrased as milestones because no formal awards data was found in the workspace."
      />
      <div className="achievement-grid">
        {achievements.map((item, index) => (
          <motion.article
            key={item.title}
            className="panel-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeInUp}
            transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.07 }}
          >
            <div className="card-top">
              <h3>{item.title}</h3>
              <Trophy size={18} />
            </div>
            <p className="card-copy">{item.detail}</p>
            <a className="inline-link" href={item.proofUrl} target="_blank" rel="noreferrer">
              {item.proofLabel}
              <ExternalLink size={14} />
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default AchievementsSection;
