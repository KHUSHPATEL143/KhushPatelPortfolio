import { useScrollReveal } from '../hooks/useScrollReveal.js'
import { personal } from '../data/index.js'

const links = [
  { label: 'Email',    href: `mailto:${personal.email}`,  display: personal.email },
  { label: 'GitHub',   href: personal.github,              display: 'github.com/KHUSHPATEL143' },
  { label: 'LinkedIn', href: personal.linkedin,            display: 'linkedin.com/in/khushpatel9979' },
  { label: 'X',        href: personal.twitter,             display: '@KHUSHPATEL667' },
]

export default function Contact() {
  const ref = useScrollReveal()

  return (
    <section id="contact" ref={ref} className="bg-surface px-8 md:px-20 py-28">
      <div className="reveal flex items-center gap-3 mb-4">
        <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-amber">05 — Contact</span>
        <span className="block w-8 h-px bg-amber/50" />
      </div>

      <div className="max-w-2xl">
        <h2 className="reveal reveal-d1 font-serif text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight mb-6">
          Let's build<br />
          <em className="text-amber not-italic">something.</em>
        </h2>

        <p className="reveal reveal-d2 text-muted text-[1.02rem] leading-relaxed mb-10">
          Whether it's a freelance project, a collaboration, or just a chat about code —
          my inbox is always open.
        </p>

        <div className="reveal reveal-d3 flex flex-col gap-3">
          {links.map(({ label, href, display }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="flex items-center gap-5 border border-border rounded-sm px-5 py-4 text-text hover:border-amber hover:text-amber transition-all duration-200 hover:translate-x-1.5 group"
            >
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-amber min-w-[6rem] border-r border-border pr-5 group-hover:border-amber/50 transition-colors">
                {label}
              </span>
              <span className="text-[0.95rem]">{display}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
