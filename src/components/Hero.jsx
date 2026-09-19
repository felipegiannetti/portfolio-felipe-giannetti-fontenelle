import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp, FaAngleDown, FaFileAlt } from 'react-icons/fa';
import { useRotatingText } from '../hooks';
import { PROFILE } from '../data/profile';

const ROLES = {
  en: ['Software Engineer', 'Full Stack Developer', 'Cybersecurity Analyst', 'Data & AI Builder'],
  pt: ['Engenheiro de Software', 'Desenvolvedor Full Stack', 'Analista de Cibersegurança', 'Dados & IA'],
};

const FLOATING_CHIPS = [
  { label: 'React', position: 'top-6 -left-3 sm:-left-10', delay: '0s' },
  { label: 'Java · Spring', position: 'top-1/3 -right-3 sm:-right-12', delay: '1.2s' },
  { label: 'AI', position: 'bottom-16 -left-4 sm:-left-14', delay: '2.1s' },
  { label: 'Cloud', position: 'bottom-4 right-6 sm:-right-4', delay: '0.6s' },
  { label: 'Security', position: '-top-3 right-10', delay: '1.7s' },
];

const Hero = ({ language, setShowCurriculo }) => {
  const t = (pt, en) => (language === 'en' ? en : pt);
  const role = useRotatingText(ROLES[language]);

  return (
    <section id="home" className="relative flex min-h-screen items-center px-4 pb-20 pt-28 sm:px-6">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <span className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-xs font-medium text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent2 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent2" />
            </span>
            Anglo American · Global Cybersecurity
          </span>

          <p className="mt-8 text-lg text-muted">{t('Olá, eu sou', "Hi, I'm")}</p>
          <h1 className="mt-1 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="gradient-text">Felipe</span> Giannetti Fontenelle
          </h1>

          <p className="mt-5 h-10 font-display text-2xl text-ink sm:text-3xl" aria-live="off">
            {role}
            <span className="ml-1 inline-block h-7 w-0.5 translate-y-1 animate-caret bg-accent2" />
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {t(
              'Estudante de Engenharia de Software na PUC Minas e integrante do time de Global Cybersecurity da Anglo American. Projeto e construo software escalável, produtos com IA e soluções de dados — da primeira linha de código ao deploy em nuvem.',
              "Software Engineering student at PUC Minas and member of Anglo American's Global Cybersecurity team. I design and build scalable software, AI-powered products and data solutions — from the first line of code to cloud deployment.",
            )}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              {t('Ver projetos', 'See my work')}
              <FaAngleDown />
            </a>
            <button onClick={() => setShowCurriculo(true)} className="btn-ghost">
              <FaFileAlt />
              {t('Currículo', 'Resume')}
            </button>
            <a href="#contact" className="btn-ghost">
              {t('Vamos conversar', "Let's talk")}
            </a>
          </div>

          <div className="mt-9 flex items-center gap-3 text-muted">
            {[
              { href: PROFILE.linkedin, icon: <FaLinkedin />, label: 'LinkedIn' },
              { href: PROFILE.github, icon: <FaGithub />, label: 'GitHub' },
              { href: `mailto:${PROFILE.email}`, icon: <FaEnvelope />, label: 'E-mail' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="grid h-11 w-11 place-items-center rounded-full border border-line/15 bg-surface/50 text-lg transition hover:-translate-y-1 hover:border-accent/60 hover:text-ink"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="relative mx-auto h-72 w-72 sm:h-96 sm:w-96">
          <div className="absolute inset-0 animate-blob rounded-[2.5rem] bg-gradient-to-br from-accent via-accent3 to-accent2 opacity-60 blur-2xl" />
          <div className="absolute -inset-1 rotate-3 rounded-[2.5rem] bg-gradient-to-br from-accent/70 to-accent2/70" />
          <img
            src="/foto-perfil.jpg"
            alt="Felipe Giannetti Fontenelle"
            className="relative h-full w-full rounded-[2.5rem] border border-line/20 object-cover shadow-2xl"
          />
          {FLOATING_CHIPS.map((chip) => (
            <span
              key={chip.label}
              style={{ animationDelay: chip.delay }}
              className={`glass absolute ${chip.position} animate-float rounded-2xl px-3.5 py-2 text-xs font-semibold shadow-xl`}
            >
              {chip.label}
            </span>
          ))}
        </div>
      </div>

      <a
        href="#about"
        aria-label={t('Rolar para baixo', 'Scroll down')}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-float text-muted transition hover:text-ink sm:block"
      >
        <FaArrowUp className="rotate-180" />
      </a>
    </section>
  );
};

export default Hero;
