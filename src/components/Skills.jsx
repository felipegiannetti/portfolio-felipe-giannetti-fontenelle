import React, { useState } from 'react';
import {
  FaJava, FaDatabase, FaChartBar, FaShieldAlt, FaNetworkWired, FaLock, FaRobot, FaSitemap,
  FaPlug, FaBug, FaServer, FaUsers, FaPalette, FaChartLine, FaKey, FaSearch, FaUserShield, FaCogs, FaTerminal, FaLightbulb,
} from 'react-icons/fa';
import {
  SiJavascript, SiPython, SiReact, SiHtml5, SiCss3, SiBootstrap, SiTailwindcss, SiSpringboot, SiGithub,
  SiTypescript, SiPostgresql, SiMysql, SiDocker, SiNextdotjs, SiNestjs, SiGooglecloud,
} from 'react-icons/si';
import { Reveal, SectionHeader } from './ui';

const CATEGORIES = [
  { id: 'all', label: { pt: 'Todas', en: 'All' } },
  { id: 'frontend', label: { pt: 'Front-end', en: 'Front-end' } },
  { id: 'backend', label: { pt: 'Back-end', en: 'Back-end' } },
  { id: 'data', label: { pt: 'Dados & DevOps', en: 'Data & DevOps' } },
  { id: 'security', label: { pt: 'Cibersegurança', en: 'Cybersecurity' } },
  { id: 'practices', label: { pt: 'Práticas', en: 'Practices' } },
];

// `color: null` means "use the theme text color" (icons that are black/white in their brand).
const SKILLS = [
  { name: 'Java', icon: <FaJava />, color: '#F89820', level: 3, cats: ['backend'] },
  { name: 'Spring Boot', icon: <SiSpringboot />, color: '#6DB33F', level: 3, cats: ['backend'] },
  { name: 'Python', icon: <SiPython />, color: '#3776AB', level: 3, cats: ['backend', 'data', 'security'] },
  { name: 'NestJS', icon: <SiNestjs />, color: '#E0234E', level: 3, cats: ['backend'] },
  { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E', level: 3, cats: ['frontend', 'backend'] },
  { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6', level: 3, cats: ['frontend', 'backend'] },
  { name: 'React', icon: <SiReact />, color: '#61DAFB', level: 3, cats: ['frontend'] },
  { name: 'Next.js', icon: <SiNextdotjs />, color: null, level: 3, cats: ['frontend'] },
  { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26', level: 3, cats: ['frontend'] },
  { name: 'CSS3', icon: <SiCss3 />, color: '#1572B6', level: 3, cats: ['frontend'] },
  { name: 'Bootstrap', icon: <SiBootstrap />, color: '#7952B3', level: 3, cats: ['frontend'] },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4', level: 3, cats: ['frontend'] },
  { name: 'SQL', icon: <FaDatabase />, color: '#22d3ee', level: 3, cats: ['data', 'backend'] },
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1', level: 3, cats: ['data', 'backend'] },
  { name: 'MySQL', icon: <SiMysql />, color: '#4479A1', level: 3, cats: ['data', 'backend'] },
  { name: 'Git / GitHub', icon: <SiGithub />, color: null, level: 3, cats: ['data'] },
  { name: 'Docker', icon: <SiDocker />, color: '#2496ED', level: 3, cats: ['data'] },
  { name: 'Power BI', icon: <FaChartBar />, color: '#F2C811', level: 3, cats: ['data'] },
  { name: 'C', icon: <FaTerminal />, color: '#A8B9CC', level: 2, cats: ['backend'] },
  { name: 'Cloud Deployment', icon: <SiGooglecloud />, color: '#4285F4', level: 3, cats: ['data', 'practices'] },
  { name: 'SIEM', icon: <FaSearch />, color: '#7c5cff', level: 2, cats: ['security'] },
  { name: 'Microsoft Sentinel', icon: <FaShieldAlt />, color: '#0078D4', level: 2, cats: ['security'] },
  { name: 'Google SecOps', icon: <FaShieldAlt />, color: '#4285F4', level: 2, cats: ['security'] },
  { name: 'CrowdStrike', icon: <FaUserShield />, color: '#FC0000', level: 2, cats: ['security'] },
  { name: 'Claroty (OT)', icon: <FaCogs />, color: '#22d3ee', level: 3, cats: ['security'] },
  { name: 'Qualys', icon: <FaBug />, color: '#ED2E26', level: 2, cats: ['security'] },
  { name: 'Active Directory', icon: <FaKey />, color: '#0078D4', level: 2, cats: ['security'] },
  { name: 'Threat Detection', icon: <FaSearch />, color: '#f472b6', level: 2, cats: ['security'] },
  { name: 'Networking', icon: <FaNetworkWired />, color: '#22d3ee', level: 2, cats: ['security'] },
  { name: 'Cryptography', icon: <FaLock />, color: '#7c5cff', level: 2, cats: ['security'] },
  { name: 'Software Architecture', icon: <FaSitemap />, color: '#7c5cff', level: 3, cats: ['practices'] },
  { name: 'REST APIs', icon: <FaPlug />, color: '#22d3ee', level: 3, cats: ['practices', 'backend'] },
  { name: 'Full-Stack Dev', icon: <FaServer />, color: '#f472b6', level: 3, cats: ['practices'] },
  { name: 'AI Integration', icon: <FaRobot />, color: '#7c5cff', level: 3, cats: ['practices'] },
  { name: 'Business Intelligence', icon: <FaChartLine />, color: '#F2C811', level: 3, cats: ['practices', 'data'] },
  { name: 'UI/UX', icon: <FaPalette />, color: '#f472b6', level: 3, cats: ['practices', 'frontend'] },
  { name: 'Leadership', icon: <FaUsers />, color: '#22d3ee', level: 3, cats: ['practices'] },
  { name: 'Prompt Engineering', icon: <FaLightbulb />, color: '#F2C811', level: 3, cats: ['practices'] },
];

// Advanced first, then intermediate, then beginner (stable, so the order above is kept within a level).
SKILLS.sort((a, b) => b.level - a.level);

const MARQUEE = SKILLS.filter((skill) => skill.cats.includes('frontend') || skill.cats.includes('backend') || skill.name === 'Docker');

const Skills = ({ language }) => {
  const [category, setCategory] = useState('all');
  const t = (pt, en) => (language === 'en' ? en : pt);
  const levelLabel = { 3: t('Avançado', 'Advanced'), 2: t('Intermediário', 'Intermediate'), 1: t('Iniciante', 'Beginner') };
  const visible = SKILLS.filter((skill) => category === 'all' || skill.cats.includes(category));

  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Skills"
          title={t('Stack e competências', 'Stack & capabilities')}
          subtitle={t(
            'Das interfaces ao backend, dos dados à segurança — as ferramentas que uso no dia a dia.',
            'From interfaces to backend, from data to security — the tools I use every day.',
          )}
        />
      </div>

      <Reveal className="marquee-mask mb-14 overflow-hidden">
        <div className="marquee-track flex w-max animate-marquee gap-4">
          {[...MARQUEE, ...MARQUEE].map((skill, index) => (
            <span
              key={`${skill.name}-${index}`}
              className="glass flex items-center gap-3 rounded-2xl px-5 py-3 text-sm font-semibold"
              aria-hidden={index >= MARQUEE.length}
            >
              <span className="text-2xl" style={skill.color ? { color: skill.color } : undefined}>
                {skill.icon}
              </span>
              {skill.name}
            </span>
          ))}
        </div>
      </Reveal>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mb-8 flex flex-wrap gap-2">
          {CATEGORIES.map((item) => (
            <button
              key={item.id}
              onClick={() => setCategory(item.id)}
              aria-pressed={category === item.id}
              className={`chip !px-4 !py-2 !text-sm transition-all hover:border-accent/50 hover:text-ink ${category === item.id ? 'chip-active shadow-lg shadow-accent/20' : ''}`}
            >
              {item.label[language]}
            </button>
          ))}
        </Reveal>

        <div key={category} className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {visible.map((skill, index) => (
            <div
              key={skill.name}
              data-spotlight
              style={{ animationDelay: `${Math.min(index, 12) * 30}ms` }}
              className="glass group animate-fade-up rounded-2xl p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
            >
              <span className="mb-3 flex justify-center text-4xl transition-transform duration-300 group-hover:scale-110" style={skill.color ? { color: skill.color } : undefined}>
                {skill.icon}
              </span>
              <p className="text-sm font-semibold">{skill.name}</p>
              <div className="mt-3 flex items-center justify-center gap-1" title={levelLabel[skill.level]}>
                {[1, 2, 3].map((dot) => (
                  <span key={dot} className={`h-1.5 w-5 rounded-full ${dot <= skill.level ? 'bg-gradient-to-r from-accent to-accent2' : 'bg-line/15'}`} />
                ))}
              </div>
              <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-widest text-muted">{levelLabel[skill.level]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
