import React, { useState } from 'react';
import { FaShieldAlt, FaCode, FaChalkboardTeacher, FaTrophy, FaMapMarkerAlt } from 'react-icons/fa';
import { Reveal, SectionHeader } from './ui';

const EXPERIENCES = [
  {
    id: 'anglo',
    company: 'Anglo American',
    icon: <FaShieldAlt />,
    current: true,
    type: { pt: 'Estágio', en: 'Internship' },
    location: { pt: 'Belo Horizonte, MG · Presencial', en: 'Belo Horizonte, MG · On-site' },
    tags: ['Claroty', 'CrowdStrike', 'Qualys', 'Microsoft Sentinel', 'Google SecOps', 'Power BI', 'Python'],
    roles: [
      {
        title: { pt: 'Global Cybersecurity – Security Operations Center (SOC)', en: 'Global Cybersecurity – Security Operations Center (SOC)' },
        period: { pt: 'Dez 2025 – Presente', en: 'Dec 2025 – Present' },
        bullets: {
          pt: [
            'Responsável pelas operações de cibersegurança do ambiente de Tecnologia Operacional (OT) no Brasil: monitoramento contínuo, triagem de incidentes, gestão de vulnerabilidades e relatórios executivos.',
            'Investigou, priorizou e resolveu alertas de segurança, contribuindo para um processo de monitoramento mais eficaz e sustentável.',
            'Monitorou e fez a triagem de eventos de segurança em ambientes OT, garantindo detecção, investigação e escalonamento oportunos de possíveis ameaças.',
            'Otimizou o inventário de ativos de cibersegurança, melhorando a qualidade dos metadados, a visibilidade dos ativos e a confiabilidade dos dados usados em decisões operacionais.',
            'Projetou, arquitetou e desenvolveu uma plataforma global de treinamento em cibersegurança, na nuvem, para estagiários e aprendizes, com aprendizado gamificado, quizzes interativos e desafios práticos.',
            'Utilizou Claroty, CrowdStrike, Qualys, Microsoft Sentinel e Google SecOps para monitorar sistemas de controle industrial, investigar eventos e identificar vulnerabilidades.',
            'Criou relatórios executivos, KPIs operacionais, dashboards em Power BI e visualizações de dados para apoiar a liderança na tomada de decisão.',
          ],
          en: [
            "Responsible for cybersecurity operations across the Brazilian Operational Technology (OT) environment: continuous monitoring, incident triage, vulnerability management and executive reporting.",
            'Investigated, prioritized and resolved security alerts, contributing to a more effective and sustainable monitoring process.',
            'Monitored and triaged security events across OT environments, ensuring timely detection, investigation and escalation of potential threats.',
            'Optimized the cybersecurity asset inventory by improving metadata quality, asset visibility and the reliability of data used in operational decisions.',
            'Designed, architected and developed a global cloud-based cybersecurity training platform for interns and apprentices, with gamified learning, interactive quizzes and challenge-based exercises.',
            'Leveraged Claroty, CrowdStrike, Qualys, Microsoft Sentinel and Google SecOps to monitor industrial control systems, investigate events and identify vulnerabilities.',
            'Built executive reports, operational KPIs, Power BI dashboards and data visualizations to support leadership decision-making.',
          ],
        },
      },
    ],
  },
  {
    id: 'fg',
    company: 'FG Consultoria',
    icon: <FaCode />,
    current: true,
    type: { pt: 'Contrato', en: 'Contract' },
    location: { pt: 'Remoto', en: 'Remote' },
    tags: ['Java', 'Spring Boot', 'Python', 'TypeScript', 'React', 'PostgreSQL', 'JWT', 'OAuth 2.0', 'Docker', 'Power BI'],
    roles: [
      {
        title: { pt: 'Engenheiro de Software Full Stack Júnior', en: 'Full Stack Software Engineer I' },
        period: { pt: 'Set 2025 – Presente', en: 'Sep 2025 – Present' },
        bullets: {
          pt: [
            'Liderou o desenvolvimento completo da plataforma interna de consultoria financeira e estratégica baseada em IA: arquitetura, backend, integrações de API, testes, implantação e melhoria contínua.',
            'Projetou funcionalidades inteligentes para reestruturação empresarial, valuation, análise de risco de investimento e custo de capital, usando IA para automatizar fluxos analíticos complexos.',
            'Integrou mais de 100 APIs externas para agregação de dados, processamento inteligente e geração automática de relatórios.',
            'Desenvolveu serviços de backend escaláveis e soluções de automação focados em desempenho, manutenibilidade e eficiência.',
            'Lidera a arquitetura, o desenvolvimento, a implantação e a manutenção do site corporativo.',
            'Atua com clientes e stakeholders no levantamento de requisitos, no desenho de soluções técnicas e na identificação de melhorias de processo.',
            'Aplica boas práticas: arquitetura limpa, design de APIs RESTful, versionamento com Git e code review.',
          ],
          en: [
            "Led the end-to-end development of the internal AI-powered financial and strategic consulting platform: architecture, backend, API integrations, testing, deployment and continuous improvement.",
            'Designed intelligent features for business restructuring, company valuation, investment risk analysis and cost-of-capital calculations, using AI to automate complex analytical workflows.',
            'Integrated 100+ external APIs for data aggregation, intelligent processing and automated report generation.',
            'Built scalable backend services and automation solutions focused on performance, maintainability and business efficiency.',
            "Leads the architecture, development, deployment and maintenance of the company's corporate website.",
            'Partners with clients and stakeholders to gather requirements, design technical solutions and identify process improvements.',
            'Applies clean architecture, RESTful API design, Git version control and code reviews.',
          ],
        },
      },
    ],
  },
  {
    id: 'puc',
    company: 'PUC Minas',
    icon: <FaChalkboardTeacher />,
    current: false,
    type: { pt: 'Aprendiz', en: 'Apprentice' },
    location: { pt: 'Belo Horizonte, MG · Presencial', en: 'Belo Horizonte, MG · On-site' },
    tags: ['Java', 'Spring Boot', 'HTML', 'CSS', 'JavaScript'],
    roles: [
      {
        title: { pt: 'Monitor – Desenvolvimento de Interfaces Web', en: 'Teaching Assistant – Web Interface Development' },
        period: { pt: 'Ago 2025 – Dez 2025', en: 'Aug 2025 – Dec 2025' },
        bullets: {
          pt: [
            'Mentorou mais de 20 estudantes em Java, Spring Boot, HTML, CSS, JavaScript, desenvolvimento web responsivo e fundamentos de Engenharia de Software, com projetos práticos e atividades em laboratório.',
            'Realizou revisões de código, apoiou a depuração e orientou sobre estrutura de aplicações, implementação de interfaces e resolução de problemas.',
            'Deu feedback individualizado em trabalhos de desenvolvimento web, ajudando a melhorar qualidade de código, usabilidade e domínio dos princípios de front-end.',
          ],
          en: [
            'Mentored 20+ students in Java, Spring Boot, HTML, CSS, JavaScript, responsive web development and software engineering fundamentals through practical projects and lab sessions.',
            'Reviewed code, supported debugging and gave technical guidance on application structure, interface implementation and problem-solving.',
            'Delivered individual feedback on web development assignments, helping students improve code quality, usability and frontend fundamentals.',
          ],
        },
      },
    ],
  },
  {
    id: 'chalezinho',
    company: 'Clube Chalezinho',
    icon: <FaTrophy />,
    current: false,
    type: { pt: 'Freelance', en: 'Freelance' },
    location: { pt: 'Belo Horizonte, MG · Híbrido', en: 'Belo Horizonte, MG · Hybrid' },
    tags: [],
    roles: [
      {
        title: { pt: 'Sócio de Eventos', en: 'Event Partner' },
        period: { pt: 'Dez 2024 – Jun 2026', en: 'Dec 2024 – Jun 2026' },
        bullets: {
          pt: [
            'Atuou em todo o ciclo de produção de eventos, do conceito e desenho do projeto à execução e entrega, estruturando a estratégia de negócio de cada evento: marketing, vendas e gestão operacional.',
            'Sócio em mais de 10 eventos, liderando uma equipe de 15+ pessoas e entregando experiências de alta qualidade com forte desempenho comercial.',
          ],
          en: [
            'Worked across the full lifecycle of event production, from concept and project design to execution and delivery, structuring the business strategy behind each event: marketing, sales and operations.',
            'Partner in 10+ events, leading a team of 15+ people and delivering high-quality experiences with strong commercial performance.',
          ],
        },
      },
      {
        title: { pt: 'Gerente de Equipe', en: 'Team Manager' },
        period: { pt: 'Out 2023 – Jun 2026', en: 'Oct 2023 – Jun 2026' },
        bullets: {
          pt: [
            'Liderou uma equipe de 15 pessoas reconhecida como a de melhor desempenho por nove meses consecutivos, com distribuição de tarefas, gestão de desempenho e otimização contínua de processos.',
            'Desenvolveu dashboards e relatórios operacionais que melhoraram a tomada de decisão, a visibilidade da carga de trabalho e o acompanhamento do desempenho.',
            'Gerenciou operações diárias, resolveu desafios operacionais e promoveu uma cultura colaborativa e orientada a resultados.',
            'Planejou e executou eventos, conduzindo comunicação e negociação com clientes e a experiência do cliente ao longo de todo o evento; apoiou iniciativas comerciais e coordenou entregas entre áreas.',
          ],
          en: [
            'Led a 15-member team recognized as the top-performing team for nine consecutive months through task distribution, performance management and continuous process optimization.',
            'Developed operational dashboards and performance reports that improved decision-making, workload visibility and performance monitoring.',
            'Managed daily operations, resolved operational challenges and fostered a collaborative, results-driven culture.',
            'Planned and executed events, managing client communication, negotiations and customer experience throughout the event; supported sales initiatives and coordinated cross-functional efforts.',
          ],
        },
      },
    ],
  },
];

const Experience = ({ language }) => {
  const [activeId, setActiveId] = useState(EXPERIENCES[0].id);
  const t = (pt, en) => (language === 'en' ? en : pt);
  const active = EXPERIENCES.find((exp) => exp.id === activeId);

  return (
    <section id="experience" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow={t('Experiência', 'Experience')}
          title={t('Minha trajetória profissional', 'My professional journey')}
          subtitle={t(
            'Da liderança de equipes e eventos ao SOC de uma multinacional e ao desenvolvimento de produtos com IA.',
            'From leading teams and events to a multinational SOC and building AI-powered products.',
          )}
        />

        <Reveal className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <div role="tablist" aria-label={t('Experiências', 'Experiences')} className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0">
            {EXPERIENCES.map((exp) => {
              const selected = exp.id === activeId;
              return (
                <button
                  key={exp.id}
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveId(exp.id)}
                  className={`group flex shrink-0 items-center gap-3 rounded-2xl border px-4 py-3 text-left transition-all duration-300 ${
                    selected
                      ? 'border-accent/50 bg-accent/10 shadow-lg shadow-accent/10'
                      : 'border-line/10 bg-surface/40 hover:border-line/25'
                  }`}
                >
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl text-lg transition-colors ${
                      selected ? 'bg-accent text-white' : 'bg-surface2 text-muted group-hover:text-ink'
                    }`}
                  >
                    {exp.icon}
                  </span>
                  <span className="min-w-0">
                    <span className="flex items-center gap-2 font-semibold">
                      {exp.company}
                      {exp.current && <span className="h-1.5 w-1.5 rounded-full bg-accent2" title={t('Atual', 'Current')} />}
                    </span>
                    <span className="block whitespace-nowrap text-xs text-muted">{exp.roles[0].period[language]}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div key={activeId} role="tabpanel" data-spotlight className="glass animate-fade-up rounded-3xl p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-2xl font-bold sm:text-3xl">{active.company}</h3>
              <span className="chip chip-active">{active.type[language]}</span>
              {active.current && <span className="chip border-accent2/40 text-accent2">{t('Atual', 'Current')}</span>}
            </div>
            <p className="mt-2 flex items-center gap-2 text-sm text-muted">
              <FaMapMarkerAlt />
              {active.location[language]}
            </p>

            <div className="mt-8 space-y-10">
              {active.roles.map((role) => (
                <div key={role.title.en}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h4 className="text-lg font-semibold text-accent2">{role.title[language]}</h4>
                    <span className="text-sm text-muted">{role.period[language]}</span>
                  </div>
                  <ul className="mt-4 space-y-3">
                    {role.bullets[language].map((bullet) => (
                      <li key={bullet.slice(0, 32)} className="flex gap-3 leading-relaxed text-muted">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {active.tags.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-2 border-t border-line/10 pt-6">
                {active.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Experience;
