import { motion } from 'framer-motion';
import { skills } from '../../data/portfolio';
import SectionIntro from '../common/SectionIntro.jsx';

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function SkillsSection() {
  return (
    <section className="section-shell" id="skills">
      <SectionIntro
        eyebrow="Skills"
        title="Technical strengths with clear visual grouping"
        copy="The requirement asked for visual representation of technical skills. This layout uses structured cards and tags instead of made-up proficiency percentages."
      />
      <div className="skills-grid">
        {skills.map((skillGroup, index) => (
          <motion.article
            key={skillGroup.title}
            className="panel-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeInUp}
            transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.06 }}
          >
            <div className="card-top">
              <h3>{skillGroup.title}</h3>
              <span>{skillGroup.items.length} tools</span>
            </div>
            <p className="card-copy">{skillGroup.summary}</p>
            <div className="tag-list">
              {skillGroup.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
