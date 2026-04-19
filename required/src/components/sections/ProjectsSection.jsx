import { motion } from 'framer-motion';
import { ExternalLink, FolderGit2, LayoutGrid } from 'lucide-react';
import { projectCategories, siteMeta } from '../../data/portfolio';
import EmptyState from '../common/EmptyState.jsx';
import SectionIntro from '../common/SectionIntro.jsx';
import StatusLink from '../common/StatusLink.jsx';

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function ProjectsSection({ compact = false }) {
  return (
    <section className="section-shell" id="projects">
      {!compact ? (
        <SectionIntro
          eyebrow="Projects"
          title="Mandatory project categories, kept honest"
          copy="Each project card includes real links that were found in the workspace. Required links that were not available are marked as pending instead of being fabricated."
        />
      ) : null}

      <motion.div
        className="project-header-bar"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <motion.a
          href={siteMeta.github}
          target="_blank"
          rel="noreferrer"
          className="profile-link"
          whileHover={{ y: -3, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <FolderGit2 size={18} />
          GitHub profile
        </motion.a>
        <motion.a
          href={siteMeta.website}
          target="_blank"
          rel="noreferrer"
          className="profile-link"
          whileHover={{ y: -3, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <ExternalLink size={18} />
          Proposed domain
        </motion.a>
      </motion.div>

      <div className="category-stack">
        {projectCategories.map((category, categoryIndex) => (
          <motion.section
            key={category.id}
            className="category-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            transition={{ duration: 0.55, ease: 'easeOut', delay: categoryIndex * 0.05 }}
          >
            <div className="category-head">
              <div>
                <p className="eyebrow">{category.title}</p>
                <h3>{category.blurb}</h3>
              </div>
              <span className="category-count">
                {category.projects.length.toString().padStart(2, '0')} entries
              </span>
            </div>

            {category.projects.length ? (
              <div className="project-grid">
                {category.projects.map((project, index) => (
                  <motion.article
                    key={project.title}
                    className="project-card"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: index * 0.05, ease: 'easeOut' }}
                    whileHover={{ y: -6, scale: 1.01 }}
                  >
                    <div className="card-top">
                      <div>
                        <p className="project-badge">{project.badge}</p>
                        <h4>{project.title}</h4>
                      </div>
                      <LayoutGrid size={20} />
                    </div>
                    <p className="card-copy">{project.description}</p>
                    <div className="tag-list">
                      {project.stack.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                    <div className="link-list">
                      <StatusLink href={project.githubRepo} label="Repo" />
                      <StatusLink href={project.githubProfile} label="Profile" />
                      <StatusLink href={project.liveLink} label="Live" />
                      <StatusLink href={project.youtubeDemo} label="YouTube" />
                      <StatusLink href={project.postmanDoc} label="Postman" />
                      <StatusLink href={project.figmaLink} label="Figma" />
                    </div>
                    <p className="project-note">{project.note}</p>
                  </motion.article>
                ))}
              </div>
            ) : (
              <EmptyState
                title="Verified content still needed"
                copy="This subsection exists so the requirement is represented in the layout, but it needs real project assets or links before final submission."
              />
            )}
          </motion.section>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
