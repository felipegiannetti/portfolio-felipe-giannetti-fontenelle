import React, { useState, useEffect, useCallback } from 'react';
import { FaFileAlt, FaMoon, FaGlobe, FaCopy, FaLinkedin, FaGithub, FaArrowUp, FaAngleRight } from 'react-icons/fa';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Highlights from './components/Highlights';
import Contact from './components/Contact';
import CvModal from './components/CvModal';
import CommandPalette from './components/CommandPalette';
import { NAV, PROFILE } from './data/profile';
import { readStorage, writeStorage } from './hooks';

const initialTheme = () => {
  const saved = readStorage('theme');
  if (saved === 'light' || saved === 'dark') return saved;
  return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

function App() {
  const [language, setLanguage] = useState(() => (readStorage('language') === 'pt' ? 'pt' : 'en'));
  const [theme, setTheme] = useState(initialTheme);
  const [showCurriculo, setShowCurriculo] = useState(false);
  const [showPalette, setShowPalette] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  const t = (pt, en) => (language === 'en' ? en : pt);
  const toggleTheme = useCallback(() => setTheme((current) => (current === 'dark' ? 'light' : 'dark')), []);
  const closeCurriculo = useCallback(() => setShowCurriculo(false), []);
  const closePalette = useCallback(() => setShowPalette(false), []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    writeStorage('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
    writeStorage('language', language);
  }, [language]);

  // Scroll progress bar + back-to-top visibility.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
      setShowTop(window.scrollY > 700);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Cursor spotlight: feed pointer position to any [data-spotlight] element under the cursor.
  useEffect(() => {
    const onMove = (e) => {
      const card = e.target.closest?.('[data-spotlight]');
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      card.style.setProperty('--my', `${e.clientY - rect.top}px`);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  // Ctrl/⌘ + K opens the command palette.
  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setShowPalette((open) => !open);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const paletteActions = [
    ...NAV.map(({ id, label }) => ({
      id: `go-${id}`,
      label: `${t('Ir para', 'Go to')} ${label[language]}`,
      group: t('Navegar', 'Navigate'),
      icon: <FaAngleRight />,
      run: () => goTo(id),
    })),
    { id: 'cv', label: t('Abrir currículo', 'Open resume'), group: t('Ação', 'Action'), icon: <FaFileAlt />, run: () => setShowCurriculo(true) },
    { id: 'theme', label: t('Alternar tema claro/escuro', 'Toggle light/dark theme'), group: t('Ação', 'Action'), icon: <FaMoon />, run: toggleTheme },
    {
      id: 'lang',
      label: t('Mudar idioma para English', 'Switch language to Português'),
      group: t('Ação', 'Action'),
      icon: <FaGlobe />,
      run: () => setLanguage(language === 'en' ? 'pt' : 'en'),
    },
    {
      id: 'copy-email',
      label: t('Copiar e-mail', 'Copy email'),
      group: t('Contato', 'Contact'),
      icon: <FaCopy />,
      run: () => navigator.clipboard?.writeText(PROFILE.email).catch(() => {}),
    },
    { id: 'linkedin', label: 'LinkedIn', group: t('Contato', 'Contact'), icon: <FaLinkedin />, run: () => window.open(PROFILE.linkedin, '_blank', 'noopener') },
    { id: 'github', label: 'GitHub', group: t('Contato', 'Contact'), icon: <FaGithub />, run: () => window.open(PROFILE.github, '_blank', 'noopener') },
  ];

  return (
    <>
      <div className="ambient" aria-hidden="true">
        <div className="ambient-blob left-[-10%] top-[-10%] h-[55vw] w-[55vw] animate-blob" style={{ '--blob': 'var(--accent)' }} />
        <div className="ambient-blob right-[-12%] top-[25%] h-[50vw] w-[50vw] animate-blob" style={{ '--blob': 'var(--accent-2)', animationDelay: '-6s' }} />
        <div className="ambient-blob bottom-[-15%] left-[20%] h-[50vw] w-[50vw] animate-blob" style={{ '--blob': 'var(--accent-3)', animationDelay: '-12s' }} />
      </div>

      <div className="fixed inset-x-0 top-0 z-50 h-0.5" aria-hidden="true">
        <div className="h-full origin-left bg-gradient-to-r from-accent via-accent3 to-accent2" style={{ transform: `scaleX(${progress})` }} />
      </div>

      <Navbar
        language={language}
        setLanguage={setLanguage}
        theme={theme}
        toggleTheme={toggleTheme}
        setShowCurriculo={setShowCurriculo}
        openPalette={() => setShowPalette(true)}
      />

      <main className="overflow-x-clip">
        <Hero language={language} setShowCurriculo={setShowCurriculo} />
        <About language={language} />
        <Experience language={language} />
        <Projects language={language} />
        <Skills language={language} />
        <Certifications language={language} />
        <Highlights language={language} />
        <Contact language={language} />
      </main>

      <footer className="border-t border-line/10 px-4 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-muted sm:flex-row">
          <p>© 2026 Felipe Giannetti Fontenelle · {t('Todos os direitos reservados', 'All rights reserved')}</p>
          <p>{t('Feito com React, Vite e Tailwind CSS', 'Built with React, Vite & Tailwind CSS')}</p>
        </div>
      </footer>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label={t('Voltar ao topo', 'Back to top')}
        className={`fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center rounded-full bg-accent text-white shadow-lg shadow-accent/40 transition-all duration-300 hover:-translate-y-1 ${
          showTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        <FaArrowUp />
      </button>

      {showCurriculo && <CvModal language={language} onClose={closeCurriculo} />}
      <CommandPalette open={showPalette} onClose={closePalette} actions={paletteActions} language={language} />
    </>
  );
}

export default App;
