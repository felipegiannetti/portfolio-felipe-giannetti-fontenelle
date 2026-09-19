import React, { useRef } from 'react';
import { FaAward, FaLinkedin, FaChevronLeft, FaChevronRight, FaHeart, FaCommentDots, FaExternalLinkAlt } from 'react-icons/fa';
import { Reveal, SectionHeader, Tilt, formatMonth } from './ui';

const RECOGNITION = [
  {
    id: 'mckinsey',
    date: '2026-09',
    title: { pt: 'McKinsey.org Forward Program', en: 'McKinsey.org Forward Program' },
    issuer: 'McKinsey & Company',
    text: {
      pt: 'Aprovado no programa, que desenvolve resolução estruturada de problemas, comunicação, adaptabilidade, competências digitais e liderança na interseção entre tecnologia, negócios e estratégia.',
      en: 'Accepted into the program, focused on structured problem solving, communication, adaptability, digital capabilities and leadership at the intersection of technology, business and strategy.',
    },
    badge: { pt: 'Em andamento', en: 'In progress' },
  },
  {
    id: 'outstanding',
    date: '2024-10',
    title: { pt: 'Certificado de Trabalho de Destaque – Engenharia da Computação', en: 'Outstanding Work – Computer Engineering Program' },
    issuer: 'PUC Minas',
    text: {
      pt: 'Projeto final do Laboratório de Engenharia da Computação — dois robôs que interagem entre si, controlados por uma máquina de arcade programada e montada pela equipe — eleito o projeto de destaque do semestre.',
      en: 'Final project of the Computer Engineering Laboratory — two robots interacting with each other, driven by an arcade machine programmed and assembled by the team — selected as the semester’s outstanding project.',
    },
    badge: { pt: 'Prêmio', en: 'Award' },
  },
];

const BASE_URL = 'https://www.linkedin.com/feed/update/urn:li:activity:';

const POSTS = [
  {
    id: '7505691124624396289',
    date: '2026-09',
    reactions: 23,
    comments: 12,
    title: { pt: 'Aprovado no McKinsey.org Forward', en: 'Accepted into McKinsey.org Forward' },
    text: {
      pt: 'Compartilhei a aprovação no programa e o que espero desenvolver nas próximas semanas.',
      en: 'Shared the acceptance into the program and what I plan to develop over the coming weeks.',
    },
  },
  {
    id: '7481027705254309888',
    date: '2026-07',
    reactions: 55,
    comments: 4,
    title: { pt: 'Visita à operação de Conceição do Mato Dentro', en: 'Visiting the Conceição do Mato Dentro operation' },
    text: {
      pt: 'Uma semana conhecendo a operação da Anglo American, reuniões estratégicas e a mina para entender de perto onde o negócio acontece.',
      en: 'A week learning how the Anglo American operation runs — strategic meetings and a visit to the mine to see where the business happens.',
    },
  },
  {
    id: '7434044398859997184',
    date: '2026-03',
    reactions: 104,
    comments: 7,
    title: { pt: 'Semana ao lado do CISO', en: 'A week alongside our CISO' },
    text: {
      pt: 'Aprendizado direto com uma das principais referências globais em cibersegurança da companhia.',
      en: 'Hands-on learning directly from one of the leading global references in cybersecurity.',
    },
  },
  {
    id: '7432555019519967232',
    date: '2026-02',
    reactions: 19,
    comments: 1,
    title: { pt: 'Curso Adversary Perspectives: Active Directory', en: 'Adversary Perspectives: Active Directory course' },
    text: {
      pt: 'Dois dias de curso da SpecterOps mostrando como pequenas configurações incorretas viram grandes riscos de segurança.',
      en: 'Two days with SpecterOps showing how small misconfigurations can lead to major security risks.',
    },
  },
  {
    id: '7418397154710278144',
    date: '2026-01',
    reactions: 66,
    comments: 11,
    title: { pt: 'Troca cultural no escritório de Belo Horizonte', en: 'Cultural exchange at the Belo Horizonte office' },
    text: {
      pt: 'Uma semana presencial com colegas do time global, indo além das telas do dia a dia remoto.',
      en: 'An in-person week with global teammates, going beyond the screens of the remote day-to-day.',
    },
  },
  {
    id: '7406794227017273345',
    date: '2025-12',
    reactions: 77,
    comments: 28,
    title: { pt: 'Início da carreira na Anglo American', en: 'Starting my career at Anglo American' },
    text: {
      pt: 'A primeira experiência profissional em tecnologia, no time Global Cybersecurity de uma multinacional.',
      en: 'My first professional experience in technology, on the Global Cybersecurity team of a multinational.',
    },
  },
];

const Highlights = ({ language }) => {
  const trackRef = useRef(null);
  const t = (pt, en) => (language === 'en' ? en : pt);

  const scrollTrack = (direction) => {
    const track = trackRef.current;
    track?.scrollBy({ left: direction * Math.min(track.clientWidth * 0.8, 420), behavior: 'smooth' });
  };

  return (
    <section id="highlights" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow={t('Destaques', 'Highlights')}
          title={t('Reconhecimentos e atividade', 'Recognition & activity')}
          subtitle={t(
            'Prêmios, programas e os momentos que marcaram minha trajetória recente.',
            'Awards, programs and the moments that shaped my recent journey.',
          )}
        />

        <div className="grid gap-6 md:grid-cols-2">
          {RECOGNITION.map((item, index) => (
            <Reveal key={item.id} delay={index * 100}>
              <Tilt max={4} className="h-full">
                <div data-spotlight className="glass relative h-full overflow-hidden rounded-3xl p-7">
                  <span className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-accent to-accent3 opacity-30 blur-3xl" />
                  <div className="relative flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-accent to-accent3 text-xl text-white shadow-lg shadow-accent/30">
                      <FaAward />
                    </span>
                    <span className="chip chip-active">{item.badge[language]}</span>
                  </div>
                  <h3 className="relative mt-5 text-xl font-bold leading-snug">{item.title[language]}</h3>
                  <p className="relative mt-1 text-sm font-semibold text-accent2">
                    {item.issuer} · {formatMonth(item.date, language)}
                  </p>
                  <p className="relative mt-4 leading-relaxed text-muted">{item.text[language]}</p>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 flex items-end justify-between gap-4">
          <div>
            <h3 className="flex items-center gap-2 text-2xl font-bold">
              <FaLinkedin className="text-[#0A66C2]" />
              {t('Direto do LinkedIn', 'From LinkedIn')}
            </h3>
            <p className="mt-1 text-sm text-muted">{t('Publicações recentes', 'Recent posts')}</p>
          </div>
          <div className="flex gap-2">
            <button onClick={() => scrollTrack(-1)} aria-label={t('Anterior', 'Previous')} className="grid h-10 w-10 place-items-center rounded-full border border-line/15 bg-surface/50 transition hover:border-accent/60">
              <FaChevronLeft size={12} />
            </button>
            <button onClick={() => scrollTrack(1)} aria-label={t('Próximo', 'Next')} className="grid h-10 w-10 place-items-center rounded-full border border-line/15 bg-surface/50 transition hover:border-accent/60">
              <FaChevronRight size={12} />
            </button>
          </div>
        </Reveal>

        <div ref={trackRef} className="no-scrollbar -mx-4 mt-6 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:scroll-px-6 sm:px-6">
          {POSTS.map((post) => (
            <a
              key={post.id}
              href={`${BASE_URL}${post.id}/`}
              target="_blank"
              rel="noopener noreferrer"
              data-spotlight
              className="glass group flex w-[300px] shrink-0 snap-start flex-col rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 sm:w-[340px]"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-accent2">{formatMonth(post.date, language)}</span>
              <h4 className="mt-3 text-lg font-bold leading-snug">{post.title[language]}</h4>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{post.text[language]}</p>
              <div className="mt-5 flex items-center justify-between border-t border-line/10 pt-4 text-xs text-muted">
                <span className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <FaHeart className="text-accent3" /> {post.reactions}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FaCommentDots /> {post.comments}
                  </span>
                </span>
                <span className="flex items-center gap-1.5 font-semibold text-ink transition-colors group-hover:text-accent2">
                  {t('Ver post', 'View post')} <FaExternalLinkAlt size={10} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
