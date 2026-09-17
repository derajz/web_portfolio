import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { profile } from '../data/profile.js';

const links = [
  { href: '#top',         label: 'Home' },
  { href: '#projects',    label: 'Projects' },
  { href: '#how-i-build', label: 'How I Build' },
  { href: '#about',       label: 'About' },
  { href: '#resume',      label: 'Resume' },
  { href: '#contact',     label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 ${
        scrolled
          ? 'bg-bg/80 backdrop-blur-md border-b border-bg-line'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container-wide flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="grid place-items-center h-8 w-8 rounded-md bg-accent text-bg font-bold text-sm">
            {profile.initials.charAt(0)}
          </span>
          <span className="font-semibold tracking-tight text-ink group-hover:text-accent transition-colors duration-150">
            {profile.shortName}
            <span className="text-ink-mute">.dev</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1" aria-label="primary">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm text-ink-dim hover:text-ink transition-colors duration-150"
            >
              {l.label}
            </a>
          ))}
          <a
            href={profile.socials.find(s => s.label === 'Email')?.href || '#contact'}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary ml-2 !py-2"
          >
            Contact Me
          </a>
        </nav>

        <button
          className="md:hidden h-9 w-9 grid place-items-center rounded-md border border-bg-line text-ink"
          onClick={() => setOpen(o => !o)}
          aria-label="toggle menu"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-bg-line bg-bg/95 backdrop-blur-md">
          <nav className="container-wide py-3 flex flex-col" aria-label="mobile">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-ink-dim hover:text-ink"
              >
                {l.label}
              </a>
            ))}
            <a
              href={profile.socials.find(s => s.label === 'Email')?.href || '#contact'}
              onClick={() => setOpen(false)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-3 self-start"
            >
              Contact Me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
