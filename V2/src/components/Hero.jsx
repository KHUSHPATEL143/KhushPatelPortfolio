import { useEffect, useRef } from 'react'
import { personal } from '../data/index.js'

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.reveal') ?? []
    const timer = setTimeout(() => els.forEach((el) => el.classList.add('visible')), 120)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen grid md:grid-cols-2 items-center gap-12 px-8 md:px-20 pt-24 pb-12"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber/5 rounded-full blur-3xl pointer-events-none" />

      {/* Left — copy */}
      <div className="relative z-10">
        <div className="reveal flex items-center gap-3 mb-5">
          <span className="block w-8 h-px bg-amber" />
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-amber">
            Full Stack Developer
          </span>
        </div>

        <h1 className="reveal reveal-d1 font-serif text-[clamp(3rem,6vw,5.5rem)] leading-[1.05] tracking-tight mb-6">
          Building<br />things for<br />
          <em className="text-amber not-italic">the web.</em>
        </h1>

        <p className="reveal reveal-d2 text-muted text-base leading-relaxed max-w-sm mb-8">
          Hi, I'm <span className="text-text font-medium">{personal.name}</span> — a CS student &
          developer crafting scalable full-stack apps, from MERN web apps to Flutter desktop solutions.
        </p>

        <div className="reveal reveal-d3 flex gap-3 flex-wrap">
          <a
            href="#projects"
            className="font-mono text-[0.72rem] uppercase tracking-widest px-6 py-3 bg-amber text-bg font-medium rounded-sm hover:bg-amber-dim transition-colors duration-200 hover:-translate-y-0.5 transform"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="font-mono text-[0.72rem] uppercase tracking-widest px-6 py-3 border border-border text-text rounded-sm hover:border-amber hover:text-amber transition-all duration-200 hover:-translate-y-0.5 transform"
          >
            Say Hello
          </a>
        </div>
      </div>

      {/* Right — terminal card */}
      <div className="reveal reveal-d2 relative z-10 hidden md:block">
        <div className="bg-surface border border-border rounded-lg overflow-hidden font-mono text-sm">
          {/* Terminal bar */}
          <div className="bg-[#1a1a1a] border-b border-border px-4 py-3 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
            <span className="ml-auto text-[0.65rem] text-muted tracking-wide">khush.config.js</span>
          </div>

          {/* Terminal body */}
          <div className="p-6 leading-8 text-[0.8rem]">
            <p>
              <span className="text-amber">→ </span>
              <span className="text-[#7eb8c9]">const </span>
              <span className="text-[#9dc98a]">dev </span>
              <span className="text-muted">= {'{'}</span>
            </p>
            {[
              ['name',       `"${personal.name}"`],
              ['role',       '"Full Stack Dev"'],
              ['location',   `"${personal.location}"`],
              ['university', '"Silver Oak"'],
              ['stack',      null],
            ].map(([key, val]) =>
              val ? (
                <p key={key} className="pl-4">
                  <span className="text-[#7eb8c9]">{key}:</span>{' '}
                  <span className="text-[#c9a97e]">{val}</span>
                  <span className="text-muted">,</span>
                </p>
              ) : (
                <p key={key} className="pl-4">
                  <span className="text-[#7eb8c9]">stack:</span>{' '}
                  <span className="text-muted">['React', 'Node.js',</span>
                  <br />
                  <span className="pl-12 text-muted">'MongoDB', 'Flutter'],</span>
                </p>
              )
            )}
            <p className="pl-4">
              <span className="text-[#7eb8c9]">openToWork:</span>{' '}
              <span className="text-[#9dc98a]">true</span>
            </p>
            <p><span className="text-muted">{'};'}</span></p>
            <br />
            <p className="text-[#3a3630]">{'// currently building cool stuff 🚀'}</p>
          </div>
        </div>

        {/* Floating badge */}
        <div className="absolute -bottom-4 -right-4 bg-amber text-bg font-mono text-[0.65rem] uppercase tracking-widest px-3 py-1.5 rounded-sm font-medium">
          Open to Work
        </div>
      </div>
    </section>
  )
}
