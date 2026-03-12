import { personal } from '../data/index.js'

export default function Footer() {
  return (
    <footer className="border-t border-border px-8 md:px-20 py-6 flex flex-col md:flex-row justify-between items-center gap-2">
      <div className="flex flex-col md:flex-row items-center gap-2">
        <p className="font-mono text-[0.7rem] text-muted tracking-wide">
          {personal.name} — Full Stack Developer
        </p>
        <p className="font-mono text-[0.7rem] text-muted tracking-wide">
          {personal.location} · © 2025
        </p>
      </div>

      <a
        href="#contact"
        className="font-mono text-[0.7rem] text-amber hover:opacity-80 transition-opacity"
      >
        Contact me
      </a>
    </footer>
  )
}
