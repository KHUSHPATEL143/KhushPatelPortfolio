import { motion } from 'framer-motion';

const projects = [
    {
        title: "Neon Horizon",
        category: "WebGL Experience",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
    },
    {
        title: "Quantum Pay",
        category: "Fintech App",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "Echo Space",
        category: "Architecture Portfolio",
        image: "https://images.unsplash.com/photo-1481026469463-66327c86e544?q=80&w=2608&auto=format&fit=crop"
    },
    {
        title: "Cyber Dust",
        category: "NFT Marketplace",
        image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop"
    }
];

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative h-[400px] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10"
        >
            <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 w-full p-8">
                <p className="mb-2 text-sm font-medium uppercase tracking-wider text-purple-400">
                    {project.category}
                </p>
                <h3 className="text-3xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                </h3>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section className="relative min-h-screen w-full bg-background px-6 py-24">
            <div className="mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-5xl font-bold text-white mb-4">Selected Work</h2>
                    <div className="h-1 w-20 bg-purple-500 rounded-full" />
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>

            <footer className="mt-32 border-t border-white/10 py-12 text-center text-gray-500">
                <p>© 2026 Creative Developer Portfolio. Built with React & Framer Motion.</p>
            </footer>
        </section>
    );
};

export default Projects;
