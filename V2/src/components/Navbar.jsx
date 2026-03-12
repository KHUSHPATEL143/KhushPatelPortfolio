import { useState, useEffect } from 'react'

const links = ['About', 'Stack', 'Projects', 'Journey', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 py-5 transition-all duration-300 ${
        scrolled ? 'border-b border-border backdrop-blur-xl bg-bg/80' : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <a
        href="#hero"
        className="font-serif text-amber text-lg tracking-wide hover:opacity-80 transition-opacity"
      >
        KP
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-8">
        {links.map((l) => (
          <li key={l}>
            <a
              href={`#${l.toLowerCase()}`}
              className="font-mono text-[0.7rem] uppercase tracking-widest text-muted hover:text-amber transition-colors duration-200"
            >
              {l}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-1"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-5 h-px bg-text transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-5 h-px bg-text transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-5 h-px bg-text transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile drawer */}
      {menuOpen && (
        <ul className="md:hidden absolute top-full left-0 right-0 bg-surface border-b border-border flex flex-col py-4">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block px-8 py-3 font-mono text-[0.7rem] uppercase tracking-widest text-muted hover:text-amber transition-colors"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
