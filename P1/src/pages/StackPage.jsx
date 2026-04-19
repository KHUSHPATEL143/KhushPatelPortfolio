import { motion } from 'framer-motion';
import { technicalSkills } from '../content/profileContent';

const StackPage = () => {
  return (
    <section className="px-4 pb-24 pt-32 text-white sm:px-8 xl:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="rounded-[2.75rem] border border-white/10 bg-white/[0.03] p-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-3xl md:p-14"
        >
          <p className="text-xs font-bold uppercase tracking-[0.36em] text-white/40">Stack</p>
          <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.04] tracking-tight md:text-7xl">
            Technical stack, split into real routes.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/60">
            Frontend systems, backend logic, and workflow tooling now have their own
            page route instead of depending on home-page scroll positions.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {technicalSkills.map((stack, index) => (
            <motion.article
              key={stack.category}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              className="group rounded-[2rem] border border-white/8 bg-white/[0.03] p-8 backdrop-blur-2xl transition hover:bg-white/[0.05]"
            >
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">
                {stack.category}
              </p>
              <p className="mb-6 text-sm leading-relaxed text-white/[0.48]">{stack.summary}</p>
              <div className="flex flex-col gap-3">
                {stack.items.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="h-1 w-1 rounded-full bg-cyan-400/50"></span>
                    <span className="text-sm font-medium text-white/70">{item}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StackPage;
