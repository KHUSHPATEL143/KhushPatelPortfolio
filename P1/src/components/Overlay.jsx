import { useScroll, useTransform, motion } from 'framer-motion';

const technicalSkills = [
    {
        category: "Frontend Systems",
        summary: "Interfaces that feel intentional, fast, and expressive on both web and mobile.",
        items: ["React", "JavaScript", "CSS3", "Tailwind", "Flutter", "Framer Motion"],
    },
    {
        category: "Backend Logic",
        summary: "Application flows built around clean APIs, reliable data handling, and practical deployment.",
        items: ["Node.js", "Express", "Python", "REST APIs", "Supabase", "Firebase"],
    },
    {
        category: "Workflow & Data",
        summary: "Tooling for shipping, debugging, collaborating, and keeping product work maintainable.",
        items: ["MongoDB", "SQLite", "Git", "Figma", "Linux", "n8n"],
    }
];

const collaborationPillars = [
    "Motion-led UI that still feels usable",
    "Practical product thinking over visual noise",
    "Full-stack execution from concept to deployment",
];

const journeySteps = [
    {
        period: "2025 - Present",
        title: "B.Tech in Computer Science",
        body: "Growing a strong engineering foundation while building real products outside the classroom at the same time.",
    },
    {
        period: "Current Focus",
        title: "Shipping at CodingGita",
        body: "Using iteration as leverage: prototype, test, refine, and keep raising the quality bar with each release.",
    },
    {
        period: "Client Work",
        title: "Freelance Development at VayuWebs",
        body: "Contributing to production-facing tools and dashboards where performance, reliability, and usability all matter.",
    },
];

const Section = ({
    range,
    children,
    align = "center",
    opacityOutput = [0, 1, 0],
    yOutput = [50, 0, -50],
}) => {
    const { scrollYProgress } = useScroll();

    const opacity = useTransform(scrollYProgress, range, opacityOutput);
    const y = useTransform(scrollYProgress, range, yOutput);

    const alignClasses = {
        left: 'items-start text-left px-4 md:pl-10',
        right: 'items-end text-right px-4 md:pr-10',
        center: 'items-center text-center'
    };

    return (
        <motion.div
            style={{ opacity, y }}
            className={`absolute inset-0 flex flex-col justify-center pointer-events-none ${alignClasses[align]}`}
        >
            <div className="w-full max-w-6xl px-6">
                {children}
            </div>
        </motion.div>
    );
};

const Overlay = () => {
    return (
        <div className="absolute inset-0 z-10 pointer-events-none">
            <Section range={[0, 0.12, 0.28]} align="left" opacityOutput={[1, 1, 0]} yOutput={[0, 0, -40]}>
                <div className="grid max-w-6xl gap-12 xl:grid-cols-[1.45fr_0.85fr]">
                    <div className="relative max-w-3xl">
                        <div className="absolute -left-7 top-8 hidden h-32 w-px bg-gradient-to-b from-cyan-300/80 via-white/20 to-transparent md:block" />

                        <div className="flex flex-wrap items-center gap-3">
                            <span data-cursor="bubble" className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-[10px] uppercase tracking-[0.4em] text-white/50 backdrop-blur-3xl shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-all hover:bg-white/[0.05]">
                                Open To Work
                            </span>
                            <span data-cursor="bubble" className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-[10px] uppercase tracking-[0.4em] text-white/30 backdrop-blur-3xl shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                                Gujarat, India
                            </span>
                        </div>

                        <h1 className="mt-8 text-[clamp(4.5rem,12vw,9rem)] font-serif font-bold leading-[0.88] tracking-[-0.04em] text-white">
                            <span className="block drop-shadow-[0_0_80px_rgba(255,255,255,0.1)]">Khush Patel.</span>
                        </h1>

                        <p className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-white/[0.56] md:text-2xl md:tracking-tight">
                            Full-stack developer designing products that feel premium, perform reliably, and solve real user problems without extra noise.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.26em] text-white/[0.42]">
                            {collaborationPillars.map((item) => (
                                <span key={item} className="rounded-full border border-white/8 bg-white/[0.03] px-4 py-2">
                                    {item}
                                </span>
                            ))}
                        </div>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <a href="#selected-work" data-cursor="bubble" className="pointer-events-auto rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-black shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-transform duration-300 hover:scale-105">
                                View Projects
                            </a>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=khushpatel9979@gmail.com" target="_blank" rel="noreferrer" data-cursor="bubble" className="pointer-events-auto rounded-full border border-white/10 bg-white/[0.02] px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.08]">
                                Contact Me
                            </a>
                        </div>
                    </div>

                    <div className="pointer-events-auto grid gap-4 self-end">
                        <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-2xl transition hover:bg-white/[0.06]">
                            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/[0.35]">Primary Focus</p>
                            <p className="mt-4 font-serif text-3xl leading-tight text-white">Portfolio-grade interfaces with product depth.</p>
                            <p className="mt-4 text-sm leading-relaxed text-white/[0.58]">
                                I care about how products feel in motion, how they communicate value, and how smoothly they hold up in the real world.
                            </p>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="flex flex-col justify-between rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-2xl transition hover:bg-white/[0.06]">
                                <p className="text-3xl font-serif text-white">27+</p>
                                <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.24em] text-white/40">Experiments & Repos</p>
                            </div>
                            <div className="flex flex-col justify-between rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-2xl transition hover:bg-white/[0.06]">
                                <p className="text-3xl font-serif text-white">4</p>
                                <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.24em] text-white/40">Featured Builds</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <Section range={[0.24, 0.36, 0.48]} align="left">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-white/30">About Me</p>
                <h2 className="mb-8 text-5xl font-serif font-bold leading-[1.1] tracking-tight text-white md:text-7xl">
                    Designing systems<br />people actually enjoy using.
                </h2>
                <div className="grid max-w-5xl gap-5 lg:grid-cols-[1.2fr_0.8fr]">
                    <p className="max-w-2xl text-lg font-medium leading-relaxed tracking-tight text-white/[0.54] md:text-2xl">
                        I&apos;m a Computer Science student at Swaminarayan University, and I spend most of my time turning rough ideas into structured digital products with clearer UX, stronger performance, and cleaner visual language.
                    </p>
                    <div className="pointer-events-auto rounded-[2rem] border border-white/8 bg-white/[0.035] p-7 backdrop-blur-2xl">
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/[0.35]">What I Optimize For</p>
                        <ul className="mt-5 space-y-4 text-sm leading-relaxed text-white/[0.64]">
                            <li>Fast first impressions without sacrificing usefulness.</li>
                            <li>Reusable UI patterns that still feel custom and alive.</li>
                            <li>Codebases that are easier to iterate on after launch.</li>
                        </ul>
                    </div>
                </div>
            </Section>

            <Section range={[0.44, 0.58, 0.72]} align="left">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-white/30">Experience</p>
                <h2 className="mb-8 text-5xl font-serif font-bold leading-[1.1] tracking-tight text-white md:text-7xl">
                    Momentum, not just milestones.
                </h2>
                <div className="grid max-w-4xl gap-4 pointer-events-auto">
                    {journeySteps.map((step) => (
                        <div key={step.title} className="grid gap-5 rounded-[2rem] border border-white/8 bg-white/[0.03] p-7 backdrop-blur-2xl transition hover:bg-white/[0.05] md:grid-cols-[180px_1fr]">
                            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-200/75">{step.period}</p>
                            <div>
                                <p className="text-xl font-medium text-white">{step.title}</p>
                                <p className="mt-2 text-sm leading-relaxed text-white/[0.48]">{step.body}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            <Section range={[0.68, 0.84, 1.0]} align="left">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-white/30">Arsenal</p>
                <h2 className="mb-8 text-5xl font-serif font-bold leading-[1.1] tracking-tight text-white md:text-7xl">
                    Technical Stack.
                </h2>
                <div className="grid max-w-5xl gap-4 pointer-events-auto md:grid-cols-3">
                    {technicalSkills.map((stack) => (
                        <div key={stack.category} className="group rounded-[2rem] border border-white/8 bg-white/[0.03] p-8 backdrop-blur-2xl transition hover:bg-white/[0.05]">
                            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">{stack.category}</p>
                            <p className="mb-6 text-sm leading-relaxed text-white/[0.48]">{stack.summary}</p>
                            <div className="flex flex-col gap-3">
                                {stack.items.map((item) => (
                                    <div key={item} className="flex items-center gap-3">
                                        <span className="h-1 w-1 rounded-full bg-cyan-400/50"></span>
                                        <span className="text-sm font-medium text-white/70">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Overlay;
