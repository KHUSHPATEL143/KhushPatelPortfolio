import { useScrollReveal } from '../hooks/useScrollReveal.js'
import { personal, stats } from '../data/index.js'

export default function About() {
  const ref = useScrollReveal()

  return (
    <section id="about" ref={ref} className="bg-surface px-8 md:px-20 py-28">
      {/* Section label */}
      <div className="reveal flex items-center gap-3 mb-4">
        <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-amber">01 — About</span>
        <span className="block w-8 h-px bg-amber/50" />
      </div>

      <h2 className="reveal reveal-d1 font-serif text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight mb-12">
        The person<br />
        <em className="text-amber not-italic">behind the code.</em>
      </h2>

      <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-16 items-start">
        {/* Text */}
        <div className="reveal reveal-d2 space-y-5 text-[#a09a92] text-[0.97rem] leading-[1.85]">
          <p>
            I'm <span className="text-text font-medium">{personal.name}</span>, a B.Tech Computer Science
            student at <span className="text-text font-medium">{personal.university}</span> (2025–2029)
            and an active builder at{' '}
            <span className="text-text font-medium">{personal.community}</span>. I enjoy working
            across the entire stack — from pixel-perfect frontends to robust backend architectures.
          </p>
          <p>
            My work spans production Flutter desktop apps with Riverpod state management, Node.js
            backends, React frontends, and Python APIs. I believe good software is both{' '}
            <span className="text-text font-medium">technically sound</span> and{' '}
            <span className="text-text font-medium">beautifully designed</span>.
          </p>
          <p>
            Outside of code, I explore gamification in productivity, participate in hackathons,
            and collaborate with the CodingGita developer community in Gujarat.
          </p>
        </div>

        {/* Stats */}
        <div className="reveal reveal-d3 flex flex-col gap-4 mt-1">
          {stats.map(({ num, label }) => (
            <div
              key={label}
              className="relative border border-border rounded-sm px-5 py-4 overflow-hidden"
            >
              {/* Left accent bar */}
              <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-amber" />
              <p className="font-serif text-[2.2rem] text-amber leading-none mb-1">{num}</p>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.08em] text-muted">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
