import { motion } from 'framer-motion';
import { BriefcaseBusiness, FileText, FolderGit2, Link as LinkIcon, Video } from 'lucide-react';
import { socialLinks } from '../../data/portfolio';
import SectionIntro from '../common/SectionIntro.jsx';

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const iconMap = {
  GitHub: FolderGit2,
  LinkedIn: BriefcaseBusiness,
  LeetCode: FileText,
  'Twitter (X)': LinkIcon,
  'YouTube Channel': Video,
};

function SocialSection() {
  return (
    <section className="section-shell" id="socials">
      <SectionIntro
        eyebrow="Social media"
        title="Required profile links in one visible section"
        copy="Verified links are clickable. Missing requirements are shown as pending so they are easy to complete before the final submission."
      />
      <div className="social-grid">
        {socialLinks.map((link, index) => {
          const Icon = iconMap[link.label] || LinkIcon;
          const content = (
            <>
              <div className="card-top">
                <h3>{link.label}</h3>
                <Icon size={18} />
              </div>
              <p className="social-value">{link.value}</p>
              <p className="social-status">
                {link.status === 'verified' ? 'Verified link available' : 'Pending verified URL'}
              </p>
            </>
          );

          return link.url ? (
            <motion.a
              key={link.label}
              className="panel-card social-card"
              href={link.url}
              target="_blank"
              rel="noreferrer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeInUp}
              transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.05 }}
            >
              {content}
            </motion.a>
          ) : (
            <motion.article
              key={link.label}
              className="panel-card social-card pending-social"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeInUp}
              transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.05 }}
            >
              {content}
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

export default SocialSection;
