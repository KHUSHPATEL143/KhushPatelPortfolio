import { useScrollReveal } from '../hooks/useScrollReveal.js'
import { projects } from '../data/index.js'

function Tag({ label }) {
  return (
    <span className="font-mono text-[0.72rem] bg-soft text-muted border border-border px-3 py-1 rounded-sm tracking-wide">
      {label}
    </span>
  )
}

export default function Projects() {
  const ref = useScrollReveal()

  return (
    <section id="projects" ref={ref} className="bg-surface px-8 md:px-20 py-28">
      <div className="reveal flex items-center gap-3 mb-4">
        <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-amber">03 — Projects</span>
        <span className="block w-8 h-px bg-amber/50" />
      </div>

      <h2 className="reveal reveal-d1 font-serif text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight mb-12">
        Things I've<br />
        <em className="text-amber not-italic">shipped.</em>
      </h2>

      <div className="grid md:grid-cols-2 gap-5">
        {projects.map(({ num, tag, title, desc, stack, link }, i) => (
          <a
            key={num}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`reveal reveal-d${i % 2 === 0 ? 1 : 2} group relative bg-bg border border-border rounded-md p-8 flex flex-col gap-4 transition-all duration-300 hover:border-amber hover:-translate-y-1 overflow-hidden no-underline`}
          >
            {/* Ghost number */}
            <span className="absolute top-4 right-5 font-serif text-[3rem] text-border leading-none select-none group-hover:text-soft transition-colors duration-300">
              {num}
            </span>

            <p className="font-mono text-[0.68rem] uppercase tracking-[0.15em] text-amber">{tag}</p>

            <h3 className="font-serif text-[1.5rem] leading-tight tracking-tight text-text">
              {title}
            </h3>

            <p className="text-muted text-[0.92rem] leading-[1.75] flex-1">{desc}</p>

            <div className="flex flex-wrap gap-2">
              {stack.map((t) => <Tag key={t} label={t} />)}
            </div>

            {/* Arrow on hover */}
            <span className="font-mono text-[0.7rem] text-amber opacity-0 group-hover:opacity-100 transition-opacity duration-200 -mb-1">
              View on GitHub →
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
