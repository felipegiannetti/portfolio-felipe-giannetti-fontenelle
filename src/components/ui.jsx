import React, { useRef } from 'react';
import { useInView } from '../hooks';

/** Fades and slides its children in when scrolled into view. */
export const Reveal = ({ children, delay = 0, className = '', as: Tag = 'div' }) => {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </Tag>
  );
};

export const SectionHeader = ({ eyebrow, title, subtitle }) => (
  <Reveal className="mb-12 max-w-2xl">
    <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent2">
      <span className="h-px w-8 bg-accent2" />
      {eyebrow}
    </span>
    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h2>
    {subtitle && <p className="mt-4 text-lg leading-relaxed text-muted">{subtitle}</p>}
  </Reveal>
);

/** Subtle 3D tilt that follows the pointer. Mouse only. */
export const Tilt = ({ children, className = '', max = 8 }) => {
  const ref = useRef(null);

  const handleMove = (e) => {
    if (e.pointerType !== 'mouse') return;
    const el = ref.current;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg)`;
  };

  const reset = () => {
    ref.current.style.transform = '';
  };

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      className={`transition-transform duration-200 ease-out will-change-transform ${className}`}
    >
      {children}
    </div>
  );
};

/** Localised month/year from a 'YYYY-MM' string. */
export const formatMonth = (yyyymm, language) => {
  const [year, month] = yyyymm.split('-').map(Number);
  return new Intl.DateTimeFormat(language === 'en' ? 'en-US' : 'pt-BR', {
    month: 'short',
    year: 'numeric',
  }).format(new Date(year, month - 1, 1));
};
