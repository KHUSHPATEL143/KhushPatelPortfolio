import { motion } from 'framer-motion';

const contactItems = [
  {
    label: 'Email',
    value: 'khushpatel9979@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=khushpatel9979@gmail.com',
  },
  {
    label: 'GitHub',
    value: 'KHUSHPATEL143',
    href: 'https://github.com/KHUSHPATEL143',
  },
  {
    label: 'LinkedIn',
    value: 'khushpatel9979',
    href: 'https://www.linkedin.com/in/khushpatel9979/',
  },
];

const ContactPage = () => {
  return (
    <section className="px-4 pb-24 pt-32 text-white sm:px-8 xl:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="rounded-[2.75rem] border border-white/10 bg-white/[0.03] p-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-3xl md:p-14"
        >
          <p className="text-xs font-bold uppercase tracking-[0.36em] text-white/40">Contact</p>
          <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.04] tracking-tight md:text-7xl">
            Let&apos;s connect through a proper route.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/60">
            This page gives the navbar a real destination for contact instead of sending
            users back into the scrolling home layout.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {contactItems.map((item, index) => (
            <motion.a
              key={item.label}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              data-cursor="bubble"
              className="group flex min-h-[240px] flex-col justify-between rounded-[2rem] border border-white/8 bg-white/[0.03] p-8 backdrop-blur-2xl transition-all hover:-translate-y-1 hover:bg-white/[0.06]"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 group-hover:text-white/75">
                {item.label}
              </span>
              <span className="mt-10 text-2xl font-medium text-white">{item.value}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
