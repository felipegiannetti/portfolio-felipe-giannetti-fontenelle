import React, { useState } from 'react';
import { FaSearch, FaStar, FaAward } from 'react-icons/fa';
import { Reveal, SectionHeader, Tilt, formatMonth } from './ui';

const CATEGORIES = [
  { id: 'all', label: { pt: 'Todas', en: 'All' } },
  { id: 'security', label: { pt: 'Cibersegurança', en: 'Cybersecurity' } },
  { id: 'software', label: { pt: 'Software & Web', en: 'Software & Web' } },
  { id: 'other', label: { pt: 'Outras', en: 'Other' } },
];

const INITIAL_VISIBLE = 12;

// Source: LinkedIn "Licenses & certifications" (41 items). Dates are 'YYYY-MM'.
const CERTIFICATIONS = [
  // Skillsoft — CompTIA Security+
  { title: 'CompTIA Security+: Security Compliance & Third-Party Risk', org: 'Skillsoft', date: '2026-09', cat: 'security' },
  { title: 'CompTIA Security+: Risk Management', org: 'Skillsoft', date: '2026-09', cat: 'security' },
  { title: 'CompTIA Security+: Identity and Access Management', org: 'Skillsoft', date: '2026-08', cat: 'security' },
  { title: 'CompTIA Security+: Enterprise Security Capabilities', org: 'Skillsoft', date: '2026-08', cat: 'security' },
  { title: 'CompTIA Security+: Effective Security Governance', org: 'Skillsoft', date: '2026-08', cat: 'security' },
  { title: 'CompTIA Security+: Automation, Orchestration, & Incident Response', org: 'Skillsoft', date: '2026-08', cat: 'security' },
  { title: 'CompTIA Security+: Vulnerability Management', org: 'Skillsoft', date: '2026-07', cat: 'security' },
  { title: 'CompTIA Security+: Security Monitoring & Alerting', org: 'Skillsoft', date: '2026-07', cat: 'security' },
  { title: 'CompTIA Security+: Resilience & Recovery', org: 'Skillsoft', date: '2026-06', cat: 'security' },
  { title: 'CompTIA Security+: Computing Resources Security Techniques', org: 'Skillsoft', date: '2026-06', cat: 'security' },
  { title: 'CompTIA Security+: Data Protection Concepts & Strategies', org: 'Skillsoft', date: '2026-05', cat: 'security' },
  { title: 'CompTIA Security+: Enterprise Infrastructure Security Principles', org: 'Skillsoft', date: '2026-05', cat: 'security' },
  { title: 'CompTIA Security+: Architecture & Infrastructure Concepts', org: 'Skillsoft', date: '2026-04', cat: 'security' },
  { title: 'CompTIA Security+: Mitigation Techniques', org: 'Skillsoft', date: '2026-03', cat: 'security' },
  { title: 'CompTIA Security+: Survey of Malicious Activities', org: 'Skillsoft', date: '2026-03', cat: 'security' },
  { title: 'CompTIA Security+: Threat Actors & Vectors', org: 'Skillsoft', date: '2026-02', cat: 'security' },
  { title: 'CompTIA Security+: Practical Cryptography', org: 'Skillsoft', date: '2026-01', cat: 'security' },
  { title: 'CompTIA Security+: Security Goals & Controls', org: 'Skillsoft', date: '2026-01', cat: 'security' },
  // Cybrary
  { title: 'Data Classification', org: 'Cybrary', date: '2026-06', cat: 'security' },
  { title: 'Firewall Basics', org: 'Cybrary', date: '2026-05', cat: 'security' },
  { title: 'Secure Network Architecture', org: 'Cybrary', date: '2026-04', cat: 'security' },
  { title: 'Lateral Movement: Remote Desktop Protocol (RDP)', org: 'Cybrary', date: '2026-03', cat: 'security' },
  { title: 'Cryptography Basics', org: 'Cybrary', date: '2026-02', cat: 'security' },
  { title: 'Network Basics', org: 'Cybrary', date: '2025-12', cat: 'security' },
  // Security — other issuers
  {
    title: 'Adversary Perspectives: Active Directory',
    org: 'SpecterOps',
    date: '2026-02',
    cat: 'security',
    featured: { pt: 'Active Directory', en: 'Active Directory' },
  },
  {
    title: 'Claroty Cybersecurity Analyst',
    org: 'Claroty',
    date: '2026-01',
    cat: 'security',
    featured: { pt: 'Analista de Segurança OT', en: 'OT Security Analyst' },
    expires: '2028-01',
  },
  { title: 'Discovering Cybersecurity', org: 'Udacity', date: '2026-01', cat: 'security' },
  // Software & Web
  {
    title: 'Full Stack Web Development',
    org: 'Amazon',
    date: '2025-07',
    cat: 'software',
    featured: { pt: 'Full Stack', en: 'Full Stack' },
  },
  { title: 'Programming with Java', org: 'Amazon', date: '2025-06', cat: 'software' },
  { title: 'Getting Started with Git and GitHub', org: 'IBM', date: '2025-04', cat: 'software' },
  { title: 'Developing Websites and Front-Ends with Bootstrap', org: 'IBM', date: '2025-04', cat: 'software' },
  { title: 'Interactivity with JavaScript', org: 'University of Michigan', date: '2025-03', cat: 'software' },
  { title: 'Introduction to HTML, CSS, & JavaScript', org: 'IBM', date: '2025-02', cat: 'software' },
  { title: 'Designing User Interfaces and Experiences (UI/UX)', org: 'IBM', date: '2025-02', cat: 'software' },
  { title: 'Exploring C', org: 'University of Michigan', date: '2025-02', cat: 'software' },
  { title: 'Programming in C', org: 'University of Michigan', date: '2025-02', cat: 'software' },
  { title: 'Introduction to Software Engineering', org: 'IBM', date: '2025-02', cat: 'software' },
  { title: 'Getting Started with Front-End and Web Development', org: 'IBM', date: '2025-01', cat: 'software' },
  // Other
  {
    title: 'EF SET English Certificate 75/100 (C2 Proficient)',
    org: 'EF SET',
    date: '2025-09',
    cat: 'other',
    featured: { pt: 'Proficiência em Inglês', en: 'Language Proficiency' },
  },
  { title: 'Behavioral Finance', org: 'Duke University', date: '2025-01', cat: 'other' },
  { title: 'HUAWEI ICT ROADSHOW — IoT Equipment & Applications', titlePT: 'HUAWEI ICT ROADSHOW — Equipamentos e Aplicações de IoT', org: 'Universidade Estadual do Ceará', date: '2024-04', cat: 'other' },
];

// Newest first (Array.prototype.sort is stable, so same-month items keep their order above).
CERTIFICATIONS.sort((a, b) => b.date.localeCompare(a.date));

const hueFor = (text) => [...text].reduce((sum, char) => sum + char.charCodeAt(0) * 7, 0) % 360;

const IssuerBadge = ({ name }) => (
  <span
    className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-sm font-bold text-white shadow-md"
    style={{ background: `linear-gradient(135deg, hsl(${hueFor(name)} 70% 55%), hsl(${(hueFor(name) + 50) % 360} 70% 45%))` }}
  >
    {name.replace(/^(Universidade|University)\s+(Estadual\s+)?(do|of)\s+/i, '').charAt(0)}
  </span>
);

const Certifications = ({ language }) => {
  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');
  const [showAll, setShowAll] = useState(false);
  const t = (pt, en) => (language === 'en' ? en : pt);

  const titleOf = (cert) => (language === 'pt' && cert.titlePT) || cert.title;
  const featured = CERTIFICATIONS.filter((cert) => cert.featured);
  const normalizedQuery = query.trim().toLowerCase();
  const filtered = CERTIFICATIONS.filter(
    (cert) =>
      (category === 'all' || cert.cat === category) &&
      (!normalizedQuery || `${titleOf(cert)} ${cert.org}`.toLowerCase().includes(normalizedQuery)),
  );
  const searching = normalizedQuery !== '' || category !== 'all';
  const visible = searching || showAll ? filtered : filtered.slice(0, INITIAL_VISIBLE);
  const countFor = (id) => CERTIFICATIONS.filter((cert) => id === 'all' || cert.cat === id).length;

  return (
    <section id="certifications" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow={t('Certificações', 'Certifications')}
          title={t(`${CERTIFICATIONS.length} certificações e aprendizado contínuo`, `${CERTIFICATIONS.length} certifications & continuous learning`)}
          subtitle={t(
            'Cibersegurança, engenharia de software, dados e negócios — sempre estudando algo novo.',
            'Cybersecurity, software engineering, data and business — always learning something new.',
          )}
        />

        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((cert, index) => (
            <Reveal key={cert.title} delay={index * 80}>
              <Tilt>
                <div data-spotlight className="relative h-full overflow-hidden rounded-2xl border border-accent/40 bg-gradient-to-br from-accent/15 via-surface/70 to-accent2/10 p-5">
                  <span className="inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    <FaStar size={9} />
                    {cert.featured[language]}
                  </span>
                  <h3 className="mt-4 text-base font-bold leading-snug">{titleOf(cert)}</h3>
                  <p className="mt-2 text-sm font-semibold text-accent2">{cert.org}</p>
                  <p className="mt-1 text-xs text-muted">
                    {formatMonth(cert.date, language)}
                    {cert.expires && ` · ${t('expira em', 'expires')} ${formatMonth(cert.expires, language)}`}
                  </p>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>

        <Reveal className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((item) => (
              <button
                key={item.id}
                onClick={() => setCategory(item.id)}
                aria-pressed={category === item.id}
                className={`chip !px-4 !py-2 !text-sm transition-all hover:border-accent/50 hover:text-ink ${category === item.id ? 'chip-active shadow-lg shadow-accent/20' : ''}`}
              >
                {item.label[language]}
                <span className="opacity-60">{countFor(item.id)}</span>
              </button>
            ))}
          </div>
          <label className="glass flex items-center gap-2 rounded-xl px-4 py-2.5 focus-within:border-accent/60 md:w-72">
            <FaSearch className="text-muted" size={13} />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t('Buscar certificação ou emissor…', 'Search certification or issuer…')}
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted"
            />
          </label>
        </Reveal>

        {visible.length === 0 ? (
          <p className="py-12 text-center text-muted">{t('Nenhuma certificação encontrada.', 'No certifications found.')}</p>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((cert, index) => (
              <div
                key={cert.title}
                data-spotlight
                style={{ animationDelay: `${Math.min(index, 12) * 25}ms` }}
                className="glass group flex animate-fade-up items-center gap-4 rounded-xl p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40"
              >
                <IssuerBadge name={cert.org} />
                <div className="min-w-0">
                  <h4 className="text-sm font-semibold leading-snug transition-colors group-hover:text-accent2">{titleOf(cert)}</h4>
                  <p className="mt-0.5 truncate text-xs text-muted">
                    {cert.org} · {formatMonth(cert.date, language)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {!searching && filtered.length > INITIAL_VISIBLE && (
          <div className="mt-8 text-center">
            <button onClick={() => setShowAll(!showAll)} className="btn-ghost">
              <FaAward />
              {showAll
                ? t('Mostrar menos', 'Show less')
                : t(`Ver todas as ${filtered.length} certificações`, `Show all ${filtered.length} certifications`)}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
