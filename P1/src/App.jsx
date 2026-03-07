import ScrollyCanvas from './components/ScrollyCanvas';
import Projects from './components/Projects';
import Lenis from 'lenis';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      // clean up lenis if needed
    };
  }, []);

  return (
    <main>
      <ScrollyCanvas />
      <Projects />
    </main>
  );
}

export default App;
