import { Link } from 'react-router-dom';
import { useScroll, useTransform, motion } from 'framer-motion';
import { collaborationPillars, journeySteps, technicalSkills } from '../content/profileContent';

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
        left: 'items-start text-left px-4 md:pl-12 lg:pl-20',
        right: 'items-end text-right px-4 md:pr-12 lg:pr-20',
        center: 'items-center text-center'
    };

    return (
        <motion.div
            style={{ opacity, y }}
            className={`absolute inset-0 flex flex-col justify-center pointer-events-none ${alignClasses[align]}`}
        >
            <div className="w-full max-w-6xl px-4 md:px-6">
                {children}
            </div>
        </motion.div>
    );
};

const Overlay = () => {
    return (
        <div className="absolute inset-0 z-10 pointer-events-none">
            {/* SECTION 1: INTRO */}
            <Section range={[0, 0.12, 0.28]} align="left" opacityOutput={[1, 1, 0]} yOutput={[0, 0, -40]}>
                <div className="max-w-2xl relative">
                    {/* Visual indicator lines */}
                    <div className="absolute -left-6 top-8 hidden h-32 w-px bg-gradient-to-b from-cyan-400 via-cyan-400/20 to-transparent md:block" />

                    <div className="flex flex-wrap items-center gap-3">
                        <span data-cursor="bubble" className="rounded-full border border-cyan-500/30 bg-cyan-950/40 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-cyan-300 backdrop-blur-3xl shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-all hover:bg-cyan-950/60">
                            Open To Work
                        </span>
                        <span data-cursor="bubble" className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-white/40 backdrop-blur-3xl shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                            Gujarat, India
                        </span>
                    </div>

                    <h1 className="mt-6 text-[clamp(3.5rem,7vw,6rem)] font-serif font-bold leading-[0.92] tracking-[-0.03em] text-white">
                        <span className="block drop-shadow-[0_0_80px_rgba(255,255,255,0.08)]">Khush Patel.</span>
                    </h1>

                    <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-white/70 md:text-xl">
                        Full-stack developer designing products that feel premium, perform reliably, and solve real user problems.
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2.5 text-[9px] uppercase tracking-[0.24em] text-white/40">
                        {collaborationPillars.map((item) => (
                            <span key={item} className="rounded-full border border-white/5 bg-white/[0.02] px-3.5 py-1.5 backdrop-blur-sm">
                                {item}
                            </span>
                        ))}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <Link to="/projects" data-cursor="bubble" className="pointer-events-auto rounded-full bg-white px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-black shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-transform duration-300 hover:scale-105 hover:bg-neutral-100">
                            View Projects
                        </Link>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=khushpatel9979@gmail.com" target="_blank" rel="noreferrer" data-cursor="bubble" className="pointer-events-auto rounded-full border border-white/10 bg-white/[0.03] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20">
                            Contact Me
                        </a>
                    </div>

                    {/* Stats & Focus merged beautifully to keep right side clear */}
                    <div className="mt-12 border-t border-white/10 pt-8 max-w-xl">
                        <div className="grid grid-cols-2 gap-8">
                            <div className="flex flex-col">
                                <p className="text-3xl font-serif text-white tracking-tight">27+</p>
                                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.22em] text-white/40">Experiments & Repos</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-3xl font-serif text-white tracking-tight">4</p>
                                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.22em] text-white/40">Featured Builds</p>
                            </div>
                        </div>
                        <p className="mt-6 text-xs leading-relaxed text-white/50 border-l-2 border-cyan-400/40 pl-4">
                            <span className="font-semibold text-white/80">Primary Focus:</span> Portfolio-grade interfaces with product depth. I care about how products feel in motion and how they hold up in the real world.
                        </p>
                    </div>
                </div>
            </Section>

            {/* SECTION 2: ABOUT */}
            <Section range={[0.24, 0.36, 0.48]} align="left">
                <div className="max-w-2xl relative">
                    <div className="absolute -left-6 top-8 hidden h-32 w-px bg-gradient-to-b from-cyan-400/80 via-white/10 to-transparent md:block" />

                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.4em] text-cyan-300/70 font-mono">ABOUT ME //01</p>
                    <h2 className="mb-6 font-serif text-4xl font-bold leading-[1.12] tracking-tight text-white md:text-5xl">
                        Designing systems people enjoy using.
                    </h2>
                    <div className="space-y-4 text-base leading-relaxed text-white/60">
                        <p>
                            I&apos;m a Computer Science student at Swaminarayan University, turning rough ideas into structured digital products with clearer UX, stronger performance, and cleaner visual language.
                        </p>
                    </div>

                    <div className="pointer-events-auto mt-8 rounded-3xl border border-white/8 bg-white/[0.02] p-6 backdrop-blur-2xl max-w-xl">
                        <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/40">What I Optimize For</p>
                        <ul className="mt-4 space-y-3.5 text-xs leading-relaxed text-white/50">
                            <li className="flex items-start gap-2.5">
                                <span className="text-cyan-400 mt-0.5">•</span>
                                <span>Fast first impressions without sacrificing usefulness.</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <span className="text-cyan-400 mt-0.5">•</span>
                                <span>Reusable UI patterns that still feel custom and alive.</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <span className="text-cyan-400 mt-0.5">•</span>
                                <span>Codebases that are easier to iterate on after launch.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Section>

            {/* SECTION 3: EXPERIENCE */}
            <Section range={[0.44, 0.58, 0.72]} align="left">
                <div className="max-w-2xl relative">
                    <div className="absolute -left-6 top-8 hidden h-32 w-px bg-gradient-to-b from-cyan-400/80 via-white/10 to-transparent md:block" />

                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.4em] text-cyan-300/70 font-mono">EXPERIENCE //02</p>
                    <h2 className="mb-6 font-serif text-4xl font-bold leading-[1.12] tracking-tight text-white md:text-5xl">
                        Momentum, not milestones.
                    </h2>
                    <div className="pointer-events-auto flex flex-col gap-4 max-w-xl">
                        {journeySteps.map((step) => (
                            <div key={step.title} className="rounded-3xl border border-white/8 bg-white/[0.02] p-5 backdrop-blur-2xl transition duration-300 hover:bg-white/[0.04]">
                                <div className="flex flex-wrap items-center justify-between gap-2">
                                    <p className="text-sm font-semibold text-white/90">{step.title}</p>
                                    <span className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-cyan-300/80">{step.period}</span>
                                </div>
                                <p className="mt-2 text-xs leading-relaxed text-white/50">{step.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* SECTION 4: ARSENAL */}
            <Section range={[0.68, 0.84, 1.0]} align="left">
                <div className="max-w-2xl relative">
                    <div className="absolute -left-6 top-8 hidden h-32 w-px bg-gradient-to-b from-cyan-400/80 via-white/10 to-transparent md:block" />

                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.4em] text-cyan-300/70 font-mono">ARSENAL //03</p>
                    <h2 className="mb-6 font-serif text-4xl font-bold leading-[1.12] tracking-tight text-white md:text-5xl">
                        Technical Stack.
                    </h2>
                    <div className="pointer-events-auto grid gap-4 sm:grid-cols-2 max-w-xl">
                        {technicalSkills.map((stack, idx) => (
                            <div key={stack.category} className={`group rounded-3xl border border-white/8 bg-white/[0.02] p-5 backdrop-blur-2xl transition duration-300 hover:bg-white/[0.04] ${idx === 2 ? 'sm:col-span-2' : ''}`}>
                                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/40">{stack.category}</p>
                                <p className="mt-1 text-xs leading-normal text-white/50">{stack.summary}</p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {stack.items.map((item) => (
                                        <span key={item} className="rounded-full border border-white/5 bg-white/[0.03] px-3 py-1 text-[10px] font-medium text-white/70">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Overlay;
