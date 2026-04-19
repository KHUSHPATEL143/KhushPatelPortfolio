import { useEffect, useMemo, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import SiteHeader from './components/layout/SiteHeader.jsx';
import SiteFooter from './components/layout/SiteFooter.jsx';
import ResumeModal from './components/common/ResumeModal.jsx';
import ScrollManager from './router/ScrollManager.jsx';
import HomePage from './pages/HomePage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import ResumePage from './pages/ResumePage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

function AppShell() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  useEffect(() => {
    document.body.classList.toggle('modal-open', resumeOpen);
    return () => document.body.classList.remove('modal-open');
  }, [resumeOpen]);

  const pageProps = useMemo(
    () => ({
      setActiveSection,
      onOpenResume: () => setResumeOpen(true),
    }),
    [],
  );

  return (
    <>
      <div className="page-noise" aria-hidden="true" />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <SiteHeader
        activeSection={activeSection}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onOpenResume={() => setResumeOpen(true)}
      />

      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage {...pageProps} />} />
          <Route path="/projects" element={<ProjectsPage {...pageProps} />} />
          <Route path="/resume" element={<ResumePage {...pageProps} />} />
          <Route path="*" element={<NotFoundPage setActiveSection={setActiveSection} />} />
        </Routes>
      </main>

      <SiteFooter />

      <AnimatePresence>
        {resumeOpen ? <ResumeModal onClose={() => setResumeOpen(false)} /> : null}
      </AnimatePresence>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <AppShell />
    </BrowserRouter>
  );
}

export default App;
