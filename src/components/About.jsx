import React from 'react';
import { FaGraduationCap, FaGlobe, FaMapMarkerAlt } from 'react-icons/fa';
import { useCountUp, useInView } from '../hooks';
import { Reveal, SectionHeader, Tilt } from './ui';

const CONTENT = {
  pt: {
    eyebrow: 'Sobre mim',
    title: 'Tecnologia com propósito e impacto',
    paragraphs: [
      'Sou estudante de Engenharia de Software na PUC Minas, apaixonado por tecnologia, desenvolvimento de software, inteligência artificial e cibersegurança. Já contribuí com iniciativas internacionais e projetos de tecnologia em larga escala, desenvolvendo soluções de software, plataformas de automação, aplicações com IA, sistemas de análise de dados e produtos em nuvem usados em ambientes globais.',
      'Gosto de projetar e construir soluções do zero, transformando desafios técnicos e de negócio complexos em sistemas escaláveis, eficientes e de impacto. Minha experiência passa por arquitetura de software, backend, integração de sistemas, automação inteligente, tecnologias de cibersegurança e decisões orientadas por dados.',
      'Além da parte técnica, desenvolvi liderança e colaboração ao liderar times de alta performance, mentorar universitários e trabalhar com stakeholders multidisciplinares de diferentes regiões e culturas.',
    ],
    goal: 'Meu objetivo é construir produtos inovadores e sistemas de larga escala que gerem valor mensurável e resultados relevantes para o negócio.',
    interestsTitle: 'Áreas de interesse',
    interests: ['Engenharia de Software', 'Inteligência Artificial', 'Cloud Computing', 'Arquitetura de Software', 'Cibersegurança', 'Desenvolvimento Backend', 'Transformação Digital'],
    educationTitle: 'Formação',
    education: [
      { school: 'PUC Minas', degree: 'Bacharelado em Engenharia de Software', period: '2024 – 2028 (previsto)', current: true },
      { school: 'Colégio Santo Antônio (CSA)', degree: 'Ensino Fundamental', period: '' },
    ],
    languagesTitle: 'Idiomas',
    languages: [
      { name: 'Português', level: 'Nativo' },
      { name: 'Inglês', level: 'C2 · EF SET 75/100' },
    ],
    stats: [
      { value: 41, suffix: '', label: 'certificações' },
      { value: 20, suffix: '+', label: 'alunos mentorados' },
      { value: 100, suffix: '+', label: 'APIs integradas' },
      { value: 15, suffix: '', label: 'pessoas lideradas' },
    ],
  },
  en: {
    eyebrow: 'About me',
    title: 'Technology with purpose and impact',
    paragraphs: [
      "I'm a Software Engineering student at PUC Minas with a strong passion for technology, software development, artificial intelligence, and cybersecurity. I've contributed to international initiatives and large-scale technology projects, building software solutions, automation platforms, AI-powered applications, data analytics systems, and cloud-based products used across global environments.",
      'I enjoy designing and building solutions from the ground up, turning complex business and technical challenges into scalable, efficient, and impactful systems. My experience spans software architecture, backend development, system integrations, intelligent automation, cybersecurity technologies, and data-driven decision-making.',
      "Beyond the technical side, I've developed leadership and collaboration skills by leading high-performing teams, mentoring university students, and working with multidisciplinary stakeholders across regions and cultures.",
    ],
    goal: 'My goal is to build innovative products and large-scale systems that create measurable value and drive meaningful business outcomes.',
    interestsTitle: 'Areas of interest',
    interests: ['Software Engineering', 'Artificial Intelligence', 'Cloud Computing', 'Software Architecture', 'Cybersecurity', 'Backend Development', 'Digital Transformation'],
    educationTitle: 'Education',
    education: [
      { school: 'PUC Minas', degree: "Bachelor's in Software Engineering", period: '2024 – 2028 (expected)', current: true },
      { school: 'Colégio Santo Antônio (CSA)', degree: 'Primary & Middle School', period: '' },
    ],
    languagesTitle: 'Languages',
    languages: [
      { name: 'Portuguese', level: 'Native' },
      { name: 'English', level: 'C2 · EF SET 75/100' },
    ],
    stats: [
      { value: 41, suffix: '', label: 'certifications' },
      { value: 20, suffix: '+', label: 'students mentored' },
      { value: 100, suffix: '+', label: 'APIs integrated' },
      { value: 15, suffix: '', label: 'people led' },
    ],
  },
};

const Stat = ({ value, suffix, label }) => {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const count = useCountUp(value, inView);
  return (
    <div ref={ref} className="text-center">
      <p className="gradient-text font-display text-4xl font-bold sm:text-5xl">
        {count}
        {suffix}
      </p>
      <p className="mt-1 text-sm text-muted">{label}</p>
    </div>
  );
};

const About = ({ language }) => {
  const c = CONTENT[language];

  return (
    <section id="about" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow={c.eyebrow} title={c.title} />

        <div className="grid gap-10 lg:grid-cols-5">
          <Reveal className="space-y-5 lg:col-span-3">
            {c.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-lg leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
            <p className="border-l-2 border-accent pl-4 text-lg font-medium leading-relaxed">{c.goal}</p>

            <div className="pt-4">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-muted">{c.interestsTitle}</h3>
              <div className="flex flex-wrap gap-2">
                {c.interests.map((interest) => (
                  <span key={interest} className="chip transition hover:-translate-y-0.5 hover:border-accent/60 hover:text-ink">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="space-y-6 lg:col-span-2">
            <Reveal delay={100}>
              <div data-spotlight className="glass rounded-2xl p-6">
                <h3 className="mb-5 flex items-center gap-2 text-lg font-bold">
                  <FaGraduationCap className="text-accent2" />
                  {c.educationTitle}
                </h3>
                <ol className="relative space-y-6 border-l border-line/15 pl-6">
                  {c.education.map((item) => (
                    <li key={item.school} className="relative">
                      <span
                        className={`absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full ${
                          item.current ? 'bg-accent2 ring-4 ring-accent2/25' : 'bg-line/40'
                        }`}
                      />
                      <p className="font-semibold">{item.school}</p>
                      <p className="text-sm text-muted">{item.degree}</p>
                      {item.period && <p className="mt-1 text-xs text-accent2">{item.period}</p>}
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div data-spotlight className="glass rounded-2xl p-6">
                <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
                  <FaGlobe className="text-accent2" />
                  {c.languagesTitle}
                </h3>
                <ul className="space-y-3">
                  {c.languages.map((item) => (
                    <li key={item.name} className="flex items-center justify-between gap-4 text-sm">
                      <span className="font-medium">{item.name}</span>
                      <span className="chip">{item.level}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 flex items-center gap-2 text-xs text-muted">
                  <FaMapMarkerAlt />
                  Belo Horizonte, MG · Brasil
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal className="mt-16">
          <Tilt max={3}>
            <div data-spotlight className="glass grid grid-cols-2 gap-8 rounded-3xl px-6 py-10 sm:grid-cols-4">
              {c.stats.map((stat) => (
                <Stat key={stat.label} {...stat} />
              ))}
            </div>
          </Tilt>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
