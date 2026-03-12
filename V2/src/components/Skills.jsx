import { useScrollReveal } from '../hooks/useScrollReveal.js'
import { skills } from '../data/index.js'

function Tag({ label }) {
  return (
    <span className="font-mono text-[0.72rem] bg-soft text-muted border border-border px-3 py-1 rounded-sm tracking-wide">
      {label}
    </span>
  )
}

export default function Skills() {
  const ref = useScrollReveal()

  return (
    <section id="stack" ref={ref} className="px-8 md:px-20 py-28">
      <div className="reveal flex items-center gap-3 mb-4">
        <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-amber">02 — Stack</span>
        <span className="block w-8 h-px bg-amber/50" />
      </div>

      <h2 className="reveal reveal-d1 font-serif text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight mb-12">
        Tools I build<br />
        <em className="text-amber not-italic">with.</em>
      </h2>

      <div className="grid md:grid-cols-3 gap-5">
        {skills.map(({ category, tags }, i) => (
          <div
            key={category}
            className={`reveal reveal-d${i + 1} group border border-border rounded-md p-7 relative overflow-hidden transition-all duration-300 hover:border-amber hover:-translate-y-1`}
          >
            {/* Top gradient line on hover */}
            <span className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-amber mb-5">
              {category}
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map((t) => <Tag key={t} label={t} />)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
