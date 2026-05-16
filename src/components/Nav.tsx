import { useEffect, useState } from 'react';
import { profile } from '../data';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'translate-y-0' : '-translate-y-0'
      }`}
    >
      <div className="wrap flex items-center justify-between py-4">
        <a
          href="#top"
          className="flex items-center gap-3 font-display text-xl tracking-tight"
        >
          <span
            className={`grid h-10 w-10 place-items-center brutal-border bg-zap font-display`}
          >
            HS
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <nav className="hidden gap-6 font-display text-sm tracking-wider md:flex">
          <a href="#work" className="hover:bg-ink hover:text-paper px-2 py-1">
            WORK
          </a>
          <a href="#projects" className="hover:bg-ink hover:text-paper px-2 py-1">
            PROJECTS
          </a>
          <a href="#skills" className="hover:bg-ink hover:text-paper px-2 py-1">
            SKILLS
          </a>
          <a href="#contact" className="hover:bg-ink hover:text-paper px-2 py-1">
            CONTACT
          </a>
        </nav>

        <a
          href={profile.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="brutal-border brutal-shadow bg-zap px-4 py-2 font-display text-sm tracking-wide transition-transform hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
        >
          RESUME ↗
        </a>
      </div>
    </header>
  );
}
