import { useEffect } from 'react';
import { Award, PenTool, Rocket } from 'lucide-react';
import HeroSection from '../components/sections/HeroSection.jsx';
import SkillsSection from '../components/sections/SkillsSection.jsx';
import ProjectsSection from '../components/sections/ProjectsSection.jsx';
import InfoSection from '../components/sections/InfoSection.jsx';
import AchievementsSection from '../components/sections/AchievementsSection.jsx';
import ResumeSection from '../components/sections/ResumeSection.jsx';
import ContactSection from '../components/sections/ContactSection.jsx';
import SocialSection from '../components/sections/SocialSection.jsx';

function HomePage({ setActiveSection, onOpenResume }) {
  useEffect(() => {
    const sectionIds = [
      'hero',
      'skills',
      'projects',
      'figma',
      'certificates',
      'hackathons',
      'achievements',
      'resume',
      'contact',
      'socials',
    ];

    const elements = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: 0.2 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      setActiveSection('hero');
    };
  }, [setActiveSection]);

  return (
    <>
      <HeroSection onOpenResume={onOpenResume} />
      <SkillsSection />
      <ProjectsSection />
      <InfoSection
        id="figma"
        eyebrow="Figma Designs"
        title="UI and UX design section is ready for real previews"
        copy="Figma is part of the verified tool stack, but no public design previews or share links were found in the current workspace."
        emptyTitle="No verified Figma share links found"
        emptyCopy="Add preview images and public Figma file links here once they are available."
        icon={PenTool}
      />
      <InfoSection
        id="certificates"
        eyebrow="Certificates"
        title="Certificate showcase with space for proof links"
        copy="The section is included to satisfy the structure requirement, but certificate titles and proof assets must be filled with verified material."
        emptyTitle="Certificate proof still missing"
        emptyCopy="Add certificate title, issuing organization, and proof image or URL before submission."
        icon={Award}
      />
      <InfoSection
        id="hackathons"
        eyebrow="Hackathons"
        title="Hackathon documentation should include problem, solution, and outcome"
        copy="Existing drafts mention hackathon participation, but specific event names and proof links were not found locally."
        emptyTitle="Hackathon entries need verified details"
        emptyCopy="Add event names, problem statements, solution summary, outcome, repo, and demo proof for full marks."
        icon={Rocket}
      />
      <AchievementsSection />
      <ResumeSection onOpenResume={onOpenResume} />
      <ContactSection />
      <SocialSection />
    </>
  );
}

export default HomePage;
