import { motion } from 'framer-motion';

const projects = [
    {
        number: "01",
        title: "ECC Frontend",
        category: "Web App",
        description: "Frontend system for ECC focused on clean interaction flows, responsive layouts, and a polished product feel.",
        stack: ["React", "JavaScript", "CSS", "Frontend"],
        highlights: ["Reusable UI patterns", "Motion-rich interactions", "Responsive page structure"],
        link: "https://github.com/KHUSHPATEL143/ECC-frontend",
        liveLink: "https://ecc-frontend-demo.vercel.app",
        featured: true,
        year: "2026",
    },
    {
        number: "02",
        title: "CodeHub",
        category: "Collaborative Coding Platform",
        description: "Platform for developers to discover, share, and collaborate on code snippets and larger builds in one place.",
        stack: ["JavaScript", "HTML", "CSS", "Node.js"],
        highlights: ["Community sharing", "Lightweight collaboration", "Project discovery"],
        link: "https://github.com/KHUSHPATEL143/codehub",
        liveLink: "https://khushpatel143.github.io/codehub",
        year: "2025",
    },
    {
        number: "03",
        title: "CodeHub AI",
        category: "AI Coding Assistant",
        description: "Conversational coding assistant experiment for generating, debugging, and explaining code through natural language.",
        stack: ["AI Studio", "JavaScript", "API"],
        highlights: ["Prompt-based workflows", "Debug guidance", "Developer productivity"],
        link: "https://github.com/KHUSHPATEL143/codehubAI",
        liveLink: "https://khushpatel143.github.io/codehubAI",
        year: "2025",
    },
    {
        number: "04",
        title: "Restaurant App",
        category: "Full Stack Web App",
        description: "Restaurant management application with menu control, order handling, and customer-facing ordering flows.",
        stack: ["Node.js", "Express", "MongoDB", "JavaScript"],
        highlights: ["Admin workflows", "Order processing", "Menu management"],
        link: "https://github.com/KHUSHPATEL143/restaurant",
        liveLink: "https://restromanager.vercel.app",
        year: "2025",
    }
];

const ProjectCard = ({ project, index }) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            viewport={{ once: true, margin: "-100px" }}
            data-cursor="bubble"
            className={`group relative overflow-hidden rounded-[2.5rem] bg-white/[0.02] p-10 backdrop-blur-3xl transition-all duration-500 ease-out hover:-translate-y-2 hover:bg-white/[0.04] ${
                project.featured
                    ? 'col-span-1 min-h-[400px] shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_24px_80px_rgba(0,0,0,0.4)] md:col-span-2'
                    : 'col-span-1 min-h-[350px] shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_24px_80px_rgba(0,0,0,0.22)]'
            }`}
        >
            <div className="absolute inset-0 opacity-[0.03] transition-opacity duration-500 group-hover:opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.8), transparent 70%)' }} />
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

            <div className="relative z-10 flex h-full flex-col">
                <div className="mb-7 flex items-center justify-between gap-3">
                    <p className={`text-xs font-medium uppercase tracking-[0.4em] ${project.featured ? 'text-white/90' : 'text-white/50'}`}>
                        {project.category}
                    </p>
                    <span className="rounded-full border border-white/8 bg-white/[0.05] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-white/[0.42]">
                        {project.year}
                    </span>
                </div>

                <span className="pointer-events-none absolute right-4 top-2 text-[6rem] font-serif font-bold leading-none tracking-tighter text-white/[0.03] transition-colors group-hover:text-white/[0.06]">
                    {project.number}
                </span>

                <h3 className="max-w-xl font-serif text-4xl font-semibold leading-tight text-white/90 transition-colors duration-300 group-hover:text-white md:text-5xl">
                    {project.title}
                </h3>

                <p className="mt-7 max-w-3xl text-[1.02rem] leading-9 text-white/60">
                    {project.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                        <span
                            key={item}
                            className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] text-white/70 backdrop-blur-md transition-colors hover:bg-white/10 hover:text-white sm:text-xs"
                        >
                            {item}
                        </span>
                    ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                    {project.highlights.map((item) => (
                        <span
                            key={item}
                            className="rounded-full border border-cyan-300/10 bg-cyan-300/[0.06] px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] text-cyan-100/[0.72]"
                        >
                            {item}
                        </span>
                    ))}
                </div>

                <div className="pointer-events-auto mt-auto flex items-center justify-between pt-8">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium uppercase tracking-[0.18em] text-white/50 transition-colors hover:text-white"
                    >
                        GitHub Link
                    </a>
                    {project.liveLink && (
                        <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full bg-white px-6 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-black transition-transform duration-300 hover:scale-105"
                        >
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </motion.article>
    );
};

const Projects = () => {
    return (
        <section id="selected-work" className="relative min-h-screen w-full bg-[#050505] px-4 py-32 text-white sm:px-8 xl:px-12">
            <div className="mx-auto max-w-[1400px]">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="mb-24 grid gap-4 lg:grid-cols-[1.5fr_1fr]"
                >
                    <div className="flex flex-col justify-center rounded-[2.5rem] bg-white/[0.02] p-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-3xl sm:p-14">
                        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-white/50">Selected Work</p>
                        <h2 className="mb-6 font-serif text-5xl font-semibold leading-[1.1] tracking-tight md:text-7xl">
                            Projects shaped<br />with intent.
                        </h2>
                        <p className="max-w-2xl text-lg leading-relaxed text-white/60">
                            A focused mix of frontend systems, product experiments, and full-stack builds designed to feel
                            intentional, polished, and genuinely useful once someone starts using them.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pointer-events-auto">
                        <div className="col-span-2 flex flex-col justify-between rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition hover:bg-white/[0.04] hover:border-white/10 sm:p-10">
                            <p className="text-5xl font-serif font-bold tracking-tight text-white">27+</p>
                            <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-white/40">Repositories<br />Deployed & Counting</p>
                        </div>
                        <div className="flex min-h-[180px] flex-col justify-end rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition hover:bg-white/[0.04] hover:border-white/10">
                            <p className="text-4xl font-serif font-bold text-white">6</p>
                            <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Tech Stacks</p>
                        </div>
                        <div className="flex min-h-[180px] flex-col justify-end rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition hover:bg-white/[0.04] hover:border-white/10">
                            <p className="text-4xl font-serif font-bold text-white">4</p>
                            <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Featured</p>
                        </div>
                    </div>
                </motion.div>

                <div className="mb-12 flex flex-col gap-4 px-2 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <h2 className="font-serif text-6xl font-semibold tracking-tight text-white">Archive</h2>
                        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/[0.46]">
                            Each build below sharpened a different part of my process: interface systems, product thinking,
                            backend wiring, or iteration speed.
                        </p>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.28em] text-white/[0.38]">
                        Built with curiosity, refined through iteration
                    </div>
                </div>

                <div className="grid auto-rows-min gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>

                <motion.div
                    id="contact"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="mt-32 rounded-[2.5rem] bg-white/[0.02] p-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-3xl sm:p-14"
                >
                    <h2 className="mb-10 text-center font-serif text-6xl font-semibold tracking-tight text-white md:text-8xl">Let&apos;s Connect.</h2>
                    <div className="grid gap-4 md:grid-cols-3 pointer-events-auto">
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=khushpatel9979@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                            data-cursor="bubble"
                            className="group flex flex-col justify-between rounded-3xl border border-white/5 bg-white/[0.04] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] transition-all hover:-translate-y-1 hover:border-white/10 hover:bg-white/[0.08]"
                        >
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 group-hover:text-white">Email</span>
                            <span className="mt-8 break-words text-xl font-medium text-white">khushpatel9979<br />@gmail.com</span>
                        </a>
                        <a
                            href="https://github.com/KHUSHPATEL143"
                            target="_blank"
                            rel="noreferrer"
                            data-cursor="bubble"
                            className="group flex flex-col justify-between rounded-3xl border border-white/5 bg-white/[0.04] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] transition-all hover:-translate-y-1 hover:border-white/10 hover:bg-white/[0.08]"
                        >
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 group-hover:text-white">GitHub</span>
                            <span className="mt-8 text-xl font-medium text-white">KHUSHPATEL143</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/khushpatel9979/"
                            target="_blank"
                            rel="noreferrer"
                            data-cursor="bubble"
                            className="group flex flex-col justify-between rounded-3xl border border-white/5 bg-white/[0.04] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] transition-all hover:-translate-y-1 hover:border-white/10 hover:bg-white/[0.08]"
                        >
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 group-hover:text-white">LinkedIn</span>
                            <span className="mt-8 text-xl font-medium text-white">khushpatel9979</span>
                        </a>
                    </div>
                </motion.div>
            </div>

            <footer className="mt-32 border-t border-white/10 py-12 text-center text-gray-500">
                <p>Copyright 2026 Khush Patel. Built with React and Framer Motion.</p>
            </footer>
        </section>
    );
};

export default Projects;
