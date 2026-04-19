import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { collaborationPillars } from '../content/profileContent';

const AboutPage = () => {
  return (
    <section className="px-4 pb-20 pt-32 text-white sm:px-8 xl:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]"
        >
          <div className="rounded-[2.75rem] border border-white/10 bg-white/[0.03] p-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-3xl md:p-14">
            <p className="text-xs font-bold uppercase tracking-[0.36em] text-white/40">About</p>
            <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
              Designing systems people actually enjoy using.
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/62 md:text-2xl">
              I&apos;m a Computer Science student at Swaminarayan University, and I spend
              most of my time turning rough ideas into structured digital products with
              clearer UX, stronger performance, and cleaner visual language.
            </p>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/50">
              My focus is simple: build interfaces that feel premium, stay practical,
              and are easier to evolve after launch. That usually means balancing motion,
              hierarchy, usability, and maintainable code instead of optimizing for only
              one of those things.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="rounded-full bg-white px-7 py-4 text-sm font-bold uppercase tracking-[0.2em] text-black transition-transform duration-300 hover:scale-105"
              >
                See Projects
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-white/10 bg-white/[0.02] px-7 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-white/[0.08]"
              >
                Contact Route
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-3xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">What I Optimize For</p>
              <ul className="mt-6 space-y-4 text-sm leading-relaxed text-white/64">
                <li>Fast first impressions without sacrificing usefulness.</li>
                <li>Reusable UI patterns that still feel custom and alive.</li>
                <li>Codebases that are easier to iterate on after launch.</li>
              </ul>
            </div>
            <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-3xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Working Style</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {collaborationPillars.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/8 bg-white/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white/64"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
