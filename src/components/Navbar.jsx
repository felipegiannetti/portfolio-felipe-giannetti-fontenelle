import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaFileAlt, FaMoon, FaSun, FaSearch } from 'react-icons/fa';
import { NAV } from '../data/profile';

const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform);

const Navbar = ({ language, setLanguage, theme, toggleTheme, setShowCurriculo, openPalette }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scrollspy: highlight the section crossing the middle of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    ['home', ...NAV.map((item) => item.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const languageToggle = (
    <div className="inline-flex rounded-full border border-line/15 bg-surface2/60 p-0.5 text-xs font-semibold">
      {['en', 'pt'].map((code) => (
        <button
          key={code}
          onClick={() => setLanguage(code)}
          aria-pressed={language === code}
          className={`rounded-full px-3 py-1.5 uppercase transition-colors ${
            language === code ? 'bg-accent text-white shadow' : 'text-muted hover:text-ink'
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );

  const themeToggle = (
    <button
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      className="grid h-9 w-9 place-items-center rounded-full border border-line/15 bg-surface2/60 text-muted transition hover:text-ink hover:border-accent/60"
    >
      {theme === 'dark' ? <FaSun size={14} /> : <FaMoon size={14} />}
    </button>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? 'border-b border-line/10 bg-canvas/80 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#home" className="group flex items-center gap-3" aria-label="Felipe Giannetti Fontenelle">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-accent via-accent3 to-accent2 font-display text-sm font-bold text-white shadow-lg shadow-accent/30 transition-transform group-hover:rotate-6 group-hover:scale-110">
            FGF
          </span>
          <span className="hidden whitespace-nowrap font-display text-base font-semibold sm:block">Felipe Fontenelle</span>
        </a>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Main">
          {NAV.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                active === id ? 'text-ink' : 'text-muted hover:text-ink'
              }`}
            >
              {active === id && <span className="absolute inset-0 -z-10 rounded-full bg-accent/15 ring-1 ring-accent/30" />}
              {label[language]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={openPalette}
            aria-label={language === 'en' ? 'Open command menu' : 'Abrir menu de comandos'}
            className="hidden h-9 items-center gap-2 rounded-full border border-line/15 bg-surface2/60 px-3 text-xs text-muted transition hover:border-accent/60 hover:text-ink sm:inline-flex"
          >
            <FaSearch size={11} />
            <kbd className="whitespace-nowrap font-sans">{isMac ? '⌘' : 'Ctrl'} K</kbd>
          </button>
          <div className="hidden sm:block">{themeToggle}</div>
          <div className="hidden sm:block">{languageToggle}</div>
          <button
            onClick={() => setShowCurriculo(true)}
            className="hidden items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition hover:-translate-y-0.5 sm:inline-flex"
          >
            <FaFileAlt size={13} />
            CV
          </button>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border border-line/15 bg-surface2/60 xl:hidden"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {open && (
        <div className="animate-pop-in border-t border-line/10 bg-canvas/95 px-4 pb-6 pt-4 xl:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col">
            {NAV.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-3 py-3 text-lg font-medium ${
                    active === id ? 'bg-accent/15 text-ink' : 'text-muted'
                  }`}
                >
                  {label[language]}
                </a>
              </li>
            ))}
          </ul>
          <div className="mx-auto mt-4 flex max-w-6xl flex-wrap items-center gap-3">
            {languageToggle}
            {themeToggle}
            <button
              onClick={() => {
                setShowCurriculo(true);
                setOpen(false);
              }}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white"
            >
              <FaFileAlt size={13} />
              CV
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
