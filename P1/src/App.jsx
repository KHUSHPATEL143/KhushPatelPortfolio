import { useEffect } from 'react';
import { BrowserRouter as Router, Link, Route, Routes, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import ScrollyCanvas from './components/ScrollyCanvas';

function Home() {
  return (
    <>
      <ScrollyCanvas />
      <Projects />
    </>
  );
}

function RouteEffects() {
  const location = useLocation();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const frameId = requestAnimationFrame(() => {
      const runScroll = () => {
        if (location.hash) {
          const target = document.querySelector(location.hash);
          if (target) {
            target.scrollIntoView({
              behavior: prefersReducedMotion ? 'auto' : 'smooth',
              block: 'start',
            });
            return;
          }
        }

        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      };

      requestAnimationFrame(runScroll);
    });

    return () => cancelAnimationFrame(frameId);
  }, [location.hash, location.pathname]);

  return null;
}

function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 py-32 text-white">
      <div className="max-w-2xl rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-10 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-3xl md:p-14">
        <p className="text-xs font-bold uppercase tracking-[0.32em] text-white/40">404</p>
        <h1 className="mt-5 font-serif text-5xl font-semibold tracking-tight md:text-7xl">
          This route wandered off.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/60">
          The page you tried to open does not exist yet, but the portfolio home and project archive are ready to explore.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="rounded-full bg-white px-7 py-4 text-sm font-bold uppercase tracking-[0.2em] text-black transition-transform duration-300 hover:scale-105"
          >
            Go Home
          </Link>
          <Link
            to="/projects"
            className="rounded-full border border-white/10 bg-white/[0.02] px-7 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-white/[0.08]"
          >
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

function AppShell() {
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      return undefined;
    }

    const lenis = new Lenis({
      duration: 1.08,
      smoothWheel: true,
      touchMultiplier: 1.1,
    });

    let frameId = 0;

    const raf = (time) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <RouteEffects />
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <main className="min-h-screen bg-background text-white">
        <CustomCursor />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div id="content">
                <Home />
              </div>
            }
          />
          <Route
            path="/projects"
            element={
              <div id="content" className="pt-32">
                <Projects />
              </div>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}

export default App;
