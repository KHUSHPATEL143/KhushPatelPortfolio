import { useEffect } from 'react';
import Lenis from 'lenis';
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import JourneyPage from './pages/JourneyPage';
import StackPage from './pages/StackPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 py-32 text-white">
      <div className="max-w-2xl rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-10 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-3xl md:p-14">
        <p className="text-xs font-bold uppercase tracking-[0.32em] text-white/40">404</p>
        <h1 className="mt-5 font-serif text-5xl font-semibold tracking-tight md:text-7xl">
          This route wandered off.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/60">
          The page you tried to open does not exist yet, but the main portfolio,
          project archive, and contact route are ready to explore.
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

function AppLayout() {
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
      <ScrollRestoration />
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <main className="min-h-screen bg-background text-white">
        <CustomCursor />
        <Navbar />
        <div id="content">
          <Outlet />
        </div>
      </main>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'journey', element: <JourneyPage /> },
      { path: 'stack', element: <StackPage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
