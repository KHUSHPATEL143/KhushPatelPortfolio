import { useScrollReveal } from '../hooks/useScrollReveal.js'
import { journey } from '../data/index.js'

export default function Journey() {
  const ref = useScrollReveal()

  return (
    <section id="journey" ref={ref} className="px-8 md:px-20 py-28">
      <div className="reveal flex items-center gap-3 mb-4">
        <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-amber">04 — Journey</span>
        <span className="block w-8 h-px bg-amber/50" />
      </div>

      <h2 className="reveal reveal-d1 font-serif text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight mb-12">
        How I got<br />
        <em className="text-amber not-italic">here.</em>
      </h2>

      {/* Timeline */}
      <div className="relative pl-6 border-l border-gradient-to-b from-amber to-transparent"
        style={{ borderImage: 'linear-gradient(to bottom, #e8a838, transparent) 1' }}
      >
        {journey.map(({ date, title, where, desc }, i) => (
          <div
            key={title}
            className={`reveal reveal-d${i + 1} relative pl-8 pb-12 last:pb-0`}
          >
            {/* Dot */}
            <span className="absolute -left-[5px] top-[6px] w-2.5 h-2.5 rounded-full bg-amber border-2 border-bg" />

            <p className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-amber mb-1.5">
              {date}
            </p>
            <h3 className="font-serif text-[1.25rem] leading-snug mb-1 text-text">{title}</h3>
            <p className="font-mono text-[0.72rem] text-muted mb-3 tracking-wide">{where}</p>
            <p className="text-[#7a7470] text-[0.92rem] leading-[1.75] max-w-prose">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
