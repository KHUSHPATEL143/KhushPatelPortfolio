import { useScroll, useTransform, motion } from 'framer-motion';

const Section = ({ range, children, align = "center" }) => {
    const { scrollYProgress } = useScroll();

    // Fade in/out based on range [start, peak, end]
    // e.g. [0.2, 0.3, 0.4] -> fade in from 0.2-0.3, fade out 0.3-0.4
    const opacity = useTransform(scrollYProgress, range, [0, 1, 0]);
    const y = useTransform(scrollYProgress, range, [50, 0, -50]);

    const alignClasses = {
        left: 'items-start text-left pl-10',
        right: 'items-end text-right pr-10',
        center: 'items-center text-center'
    };

    return (
        <motion.div
            style={{ opacity, y, display: opacity.get() === 0 ? 'none' : 'flex' }} // Optimization to avoid clicking hidden elements? motion style handles display? No, opacity 0 is still clickable. pointer-events-none is better.
            className={`absolute inset-0 flex flex-col justify-center pointer-events-none ${alignClasses[align]}`}
        >
            <div className="max-w-4xl w-full px-6">
                {children}
            </div>
        </motion.div>
    );
};

// Simplified approach: Render all sections, transform visibility based on scroll
const Overlay = () => {
    return (
        <div className="absolute inset-0 z-10 pointer-events-none">
            {/* Section 1: 0% - 15% - 25% */}
            <Section range={[0, 0.05, 0.25]} align="center">
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-4">
                    Name Surname
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 font-light">
                    Creative Developer
                </p>
            </Section>

            {/* Section 2: 20% - 30% - 40% */}
            <Section range={[0.20, 0.30, 0.45]} align="left">
                <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    I build <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        digital experiences.
                    </span>
                </h2>
            </Section>

            {/* Section 3: 50% - 60% - 75% */}
            <Section range={[0.50, 0.60, 0.75]} align="right">
                <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    Bridging design <br />
                    and engineering.
                </h2>
            </Section>
        </div>
    );
};

export default Overlay;
