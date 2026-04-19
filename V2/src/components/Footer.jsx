import { personal } from '../data/index.js'

export default function Footer() {
  return (
    <footer className="border-t border-border px-8 md:px-20 py-6 flex flex-col md:flex-row justify-between items-center gap-2">
      <p className="font-mono text-[0.7rem] text-muted tracking-wide">
        {personal.name} — Full Stack Developer
      </p>
      <p className="font-mono text-[0.7rem] text-muted tracking-wide">
        {personal.location} · © 2026
      </p>
    </footer>
  )
}
