import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import LogoMark from './LogoMark';

const navTabs = [
  { label: 'ABOUT />', to: '/about' },
  { label: 'JOURNEY />', to: '/journey' },
  { label: 'STACK />', to: '/stack' },
  { label: 'PROJECTS />', to: '/projects' },
  { label: 'CONTACT />', to: '/contact' },
];

const desktopNavClass = ({ isActive }) =>
  [
    'rounded-full px-4 py-2 text-[10px] font-mono font-bold uppercase tracking-[0.2em] transition-all duration-300',
    isActive
      ? 'bg-white/[0.08] text-white'
      : 'text-white/[0.52] hover:bg-white/[0.06] hover:text-white',
  ].join(' ');

const mobileNavClass = ({ isActive }) =>
  [
    'text-lg font-mono font-bold uppercase tracking-[0.24em] transition-colors',
    isActive ? 'text-white' : 'text-white/[0.72] hover:text-white',
  ].join(' ');

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-5 md:px-8">
      <div className="pointer-events-auto mx-auto flex max-w-7xl items-center justify-between rounded-[2rem] border border-white/10 bg-[rgba(5,7,13,0.62)] px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_80px_rgba(0,0,0,0.42)] backdrop-blur-3xl md:px-7">
        <Link
          to="/"
          onClick={closeMenu}
          data-cursor="bubble"
          aria-label="Go to home page"
          className="flex items-center gap-4 text-white transition-opacity hover:opacity-85"
        >
          <span className="inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            <LogoMark className="h-full w-full object-cover" />
          </span>
          <span className="hidden md:block">
            <span className="block text-sm font-bold uppercase tracking-[0.18em] text-white/95">
              Khush Patel
            </span>
            <span className="mt-0.5 block text-[9px] font-bold uppercase tracking-[0.35em] text-white/[0.35]">
              Full-Stack Developer
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navTabs.map((tab) => (
            <NavLink
              key={tab.to}
              to={tab.to}
              onClick={closeMenu}
              data-cursor="bubble"
              className={desktopNavClass}
            >
              {tab.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-3 md:flex">
            <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-200">
              Available for internships
            </span>
            <NavLink
              to="/contact"
              onClick={closeMenu}
              data-cursor="bubble"
              className={({ isActive }) =>
                [
                  'rounded-full px-5 py-3 text-[11px] font-bold uppercase tracking-[0.22em] transition-transform duration-300',
                  isActive
                    ? 'bg-white text-black'
                    : 'bg-white text-black hover:scale-[1.03]',
                ].join(' ')
              }
            >
              Let&apos;s Talk
            </NavLink>
          </div>
          <button
            data-cursor="bubble"
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="pointer-events-auto p-2 text-white/60 transition-colors hover:text-white md:hidden"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          id="mobile-menu"
          className="pointer-events-auto absolute inset-x-4 top-[92px] rounded-[2rem] border border-white/10 bg-[rgba(5,7,13,0.95)] p-7 shadow-2xl backdrop-blur-3xl md:hidden"
        >
          <div className="mb-6 rounded-[1.5rem] border border-white/8 bg-white/[0.04] p-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/40">Navigation</p>
            <p className="mt-3 text-sm leading-relaxed text-white/[0.72]">
              Every primary section now has its own route, so mobile navigation lands on
              dedicated pages instead of scroll anchors.
            </p>
          </div>
          <nav className="flex flex-col gap-6">
            {navTabs.map((tab) => (
              <NavLink key={tab.to} to={tab.to} onClick={closeMenu} className={mobileNavClass}>
                {tab.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className="mt-4 rounded-full bg-white px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.2em] text-black transition-transform hover:scale-105"
            >
              Start a Conversation
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
