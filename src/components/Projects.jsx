import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaLock, FaBrain, FaGraduationCap, FaShieldAlt, FaChartLine, FaRobot, FaStar } from 'react-icons/fa';
import { Reveal, SectionHeader } from './ui';

const CATEGORIES = [
  { id: 'all', label: { pt: 'Todos', en: 'All' } },
  { id: 'web', label: { pt: 'Web & Software', en: 'Web & Software' } },
  { id: 'ai', label: { pt: 'IA & Dados', en: 'AI & Data' } },
  { id: 'security', label: { pt: 'Cibersegurança', en: 'Cybersecurity' } },
  { id: 'hardware', label: { pt: 'Robótica', en: 'Robotics' } },
];

const PROJECTS = [
  {
    id: 'ai-platform',
    name: { pt: 'Plataforma de Automação para Consultoria Financeira e Estratégica com IA', en: 'AI-Powered Financial & Strategic Consulting Platform' },
    description: {
      pt: 'Plataforma corporativa completa que automatiza fluxos de consultoria financeira e estratégica. A solução contempla reestruturação empresarial, valuation, análise de riscos de investimento e cálculos de custo de capital, integrando mais de 10 APIs externas para agregação de dados e geração automática de relatórios. Recursos baseados em IA produzem recomendações contextualizadas e adaptam as análises a cada projeto, enquanto uma arquitetura Full Stack escalável sustenta testes, implantação em nuvem e evolução contínua do produto.',
      en: 'End-to-end enterprise platform that automates financial and strategic consulting workflows. The solution supports corporate restructuring, business valuation, investment risk analysis, and cost-of-capital calculations, integrating more than 10 external APIs for data aggregation and automated reporting. AI-powered capabilities generate contextual recommendations and adapt analyses to each project, while a scalable full-stack architecture supports testing, cloud deployment, and continuous product evolution.',
    },
    tech: ['Java', 'Spring Boot', 'Python', 'React', 'TypeScript', 'PostgreSQL', 'REST APIs', 'AI Integration', 'Docker', 'Cloud'],
    cats: ['ai', 'web'],
    date: '2025–2026',
    icon: <FaBrain />,
    gradient: 'from-accent to-accent3',
    internal: true,
    featured: true,
  },
  {
    id: 'training-platform',
    name: { pt: 'Plataforma Global de Treinamento em Cibersegurança', en: 'Global Cybersecurity Training Platform' },
    description: {
      pt: 'Plataforma global de treinamento em nuvem projetada, arquitetada, desenvolvida, testada, implantada e colocada em produção de forma independente para profissionais de cibersegurança em início de carreira. Construída do backend e frontend à implantação em nuvem, reúne trilhas gamificadas, questionários interativos, desafios práticos e recursos educacionais assistidos por IA para padronizar a conscientização em cibersegurança em diferentes regiões.',
      en: 'Global cloud-based training platform independently designed, architected, developed, tested, deployed, and launched for early-career cybersecurity professionals. Built from backend and frontend through cloud deployment, it combines gamified learning paths, interactive quizzes, practical challenges, and AI-assisted educational resources to create a consistent cybersecurity awareness experience across multiple regions.',
    },
    tech: ['Full Stack', 'Software Architecture', 'AI Integration', 'REST APIs', 'Cloud Deployment', 'Gamification'],
    cats: ['security', 'web'],
    date: '2026',
    icon: <FaGraduationCap />,
    gradient: 'from-accent2 to-accent',
    internal: true,
    featured: true,
  },
  {
    id: 'security-automation',
    name: { pt: 'Soluções de Automação e Integração para Cibersegurança', en: 'Cybersecurity Automation & Integration Solutions' },
    description: {
      pt: 'Ferramentas de automação em Python, integrações de APIs e soluções de processamento de dados desenvolvidas sobre plataformas corporativas de cibersegurança. As soluções automatizam fluxos repetitivos, enriquecem dados de segurança, consolidam múltiplas fontes e aceleram investigações, relatórios e decisões operacionais. O trabalho também aprimorou a gestão de ativos de OT, aumentando a visibilidade dos metadados em 15,5% e reduzindo registros incorretos em 23,4%.',
      en: 'Python automation tools, API integrations, and data-processing solutions built on top of enterprise cybersecurity platforms. These solutions automate repetitive workflows, enrich security data, consolidate multiple sources, and accelerate investigations, reporting, and operational decisions. The work also improved OT asset management, increasing metadata visibility by 15.5% and reducing inaccurate records by 23.4%.',
    },
    tech: ['Python', 'REST APIs', 'Data Processing', 'Cybersecurity', 'OT / ICS', 'Automation'],
    cats: ['security'],
    date: '2026',
    icon: <FaShieldAlt />,
    gradient: 'from-accent3 to-accent2',
    internal: true,
    featured: true,
  },
  {
    id: 'security-analytics',
    name: { pt: 'Soluções de Análise de Dados e Relatórios para Cibersegurança', en: 'Cybersecurity Data Analytics & Reporting Solutions' },
    description: {
      pt: 'Pipelines automatizados de dados, relatórios executivos e dashboards de KPIs que consolidam informações de múltiplas plataformas de cibersegurança em insights acionáveis. Desenvolvidas com Power BI e técnicas de processamento de dados, as soluções ampliam a visibilidade operacional, a inteligência sobre ativos, o acompanhamento de desempenho e a tomada de decisão orientada por dados em operações globais de cibersegurança.',
      en: 'Automated data pipelines, executive reports, and KPI dashboards that consolidate information from multiple cybersecurity platforms into actionable insights. Built with Power BI and data-processing techniques, the solutions improve operational visibility, asset intelligence, performance monitoring, and data-driven decision-making for global cybersecurity operations.',
    },
    tech: ['Power BI', 'Python', 'Data Analytics', 'KPI Pipelines', 'Business Intelligence'],
    cats: ['ai', 'security'],
    date: '2026',
    icon: <FaChartLine />,
    gradient: 'from-accent to-accent2',
    internal: true,
    featured: true,
  },
  {
    id: 'drone',
    name: { pt: 'DTI Drone Delivery System', en: 'DTI Drone Delivery System' },
    description: {
      pt: 'Sistema completo de gerenciamento de entregas por drones para uma startup de logística urbana. Possui algoritmo inteligente de planejamento combinando heurísticas de knapsack e nearest-neighbour para otimizar rotas por prioridade (HIGH → MEDIUM → LOW). Backend RESTful com Spring Boot 3 e dashboard moderno em Next.js 15.',
      en: 'Complete drone delivery management system built for an urban logistics startup. Features an intelligent planning algorithm combining knapsack and nearest-neighbour heuristics to optimise routes by priority (HIGH → MEDIUM → LOW). Full RESTful backend with Spring Boot 3 and a modern Next.js 15 dashboard.',
    },
    tech: ['Java 24', 'Spring Boot 3', 'Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Docker', 'Maven'],
    cats: ['web'],
    date: '2025',
    image: '/projects/drone.png',
    github: 'https://github.com/felipegiannetti/drone-delivery-system',
  },
  {
    id: 'tdr',
    name: { pt: 'TDR Consultoria', en: 'TDR Consultoria' },
    description: {
      pt: 'Projeto interdisciplinar de front-end desenvolvido na disciplina de Desenvolvimento de Interfaces Web da PUC Minas. Site de consultoria com formulários interativos que permitem ao usuário descrever suas necessidades, possibilitando à equipe entregar um resultado personalizado.',
      en: 'Interdisciplinary front-end project developed for the Web Interface Development course at PUC Minas. A consultancy website with interactive forms allowing users to submit their requirements, enabling the team to deliver tailored results.',
    },
    tech: ['HTML', 'CSS', 'JavaScript'],
    cats: ['web'],
    date: '2025',
    image: 'https://opengraph.githubassets.com/1/felipegiannetti/TI-Front-end-PUC',
    gradient: 'from-accent3 to-accent',
    icon: <FaGithub />,
    github: 'https://github.com/felipegiannetti/TI-Front-end-PUC',
    live: 'https://plf-es-2025-1-ti1-0385100-tdr-consu.vercel.app/',
  },
  {
    id: 'n8n',
    name: { pt: 'Conector Random para n8n', en: 'n8n Random Number Connector' },
    description: {
      pt: 'Node customizado para n8n que encapsula a API do Random.org para gerar inteiros verdadeiramente aleatórios (não pseudo-aleatórios). Inclui ambiente Docker Compose com n8n e PostgreSQL já configurados para carregar o node automaticamente. Desenvolvido em TypeScript e publicado como pacote npm local.',
      en: 'Custom n8n node that wraps the Random.org API to generate truly random integers (not pseudo-random). Includes a Docker Compose environment with n8n and PostgreSQL pre-configured to load the node automatically. Built with TypeScript and published as a local npm package.',
    },
    tech: ['TypeScript', 'Node.js', 'n8n', 'Docker', 'PostgreSQL', 'Random.org API'],
    cats: ['web'],
    date: '2025',
    image: '/projects/n8n.png',
    github: 'https://github.com/felipegiannetti/n8n-random-number',
  },
  {
    id: 'robots',
    name: { pt: 'Briga de Robôs – Controle Arcade', en: 'Robot Battle – Arcade Controller' },
    description: {
      pt: 'Sistema integrado de robótica premiado, composto por dois robôs que interagem em tempo real por meio de um controle arcade desenvolvido especialmente para o projeto e de um aplicativo conectado por Bluetooth. Foram desenvolvidos o software embarcado em C++, os circuitos eletrônicos, os protocolos de comunicação e a lógica de controle responsáveis pela movimentação e pela dinâmica física de batalha com balões. O projeto recebeu um Certificado de Trabalho de Destaque no programa de Engenharia da Computação da PUC Minas.',
      en: 'Award-winning integrated robotics system featuring two robots that interact in real time through a custom-built arcade controller and a smartphone app over Bluetooth. Developed the embedded C++ software, electronic circuits, communication protocols, and control logic used to coordinate movement and the physical balloon-battle mechanic. The project received an Outstanding Work Certificate in the Computer Engineering program at PUC Minas.',
    },
    tech: ['C++', 'Arduino', 'Bluetooth', 'MIT App Inventor'],
    cats: ['hardware'],
    date: '2024',
    image: '/projects/robo.png',
    icon: <FaRobot />,
    gradient: 'from-accent2 to-accent3',
    github: 'https://github.com/felipegiannetti/projeto-interacao-robos-destaque-primeiro-periodo',
    award: true,
  },
];

const ProjectVisual = ({ project }) => {
  const [failed, setFailed] = useState(false);

  if (project.image && !failed) {
    return (
      <img
        src={project.image}
        alt={project.name.en}
        loading="lazy"
        onError={() => setFailed(true)}
        className="h-44 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />
    );
  }

  return (
    <div className={`relative grid h-44 place-items-center overflow-hidden bg-gradient-to-br ${project.gradient || 'from-accent to-accent2'}`}>
      <span className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-white/15 blur-2xl" />
      <span className="text-6xl text-white/90 drop-shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
        {project.icon || <FaBrain />}
      </span>
    </div>
  );
};

const ProjectCard = ({ project, language }) => {
  const [expanded, setExpanded] = useState(false);
  const t = (pt, en) => (language === 'en' ? en : pt);
  const description = project.description[language];
  const isLong = description.length > 220;

  return (
    <article data-spotlight className="glass group flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10">
      <div className="relative overflow-hidden">
        <ProjectVisual project={project} />
        <span className="absolute right-3 top-3 rounded-full bg-canvas/80 px-3 py-1 text-xs font-semibold backdrop-blur">{project.date}</span>
        {project.featured && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
            <FaStar size={9} />
            {t('Destaque', 'Featured')}
          </span>
        )}
        {project.award && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-accent3 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
            <FaStar size={9} />
            {t('Premiado', 'Award-winning')}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold leading-snug">{project.name[language]}</h3>
        <p className={`mt-3 text-sm leading-relaxed text-muted ${expanded ? '' : 'line-clamp-4'}`}>{description}</p>
        {isLong && (
          <button onClick={() => setExpanded(!expanded)} className="mt-2 self-start text-xs font-semibold text-accent2 hover:underline">
            {expanded ? t('Ver menos', 'Show less') : t('Ler mais', 'Read more')}
          </button>
        )}

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span key={tech} className="chip !px-2.5 !py-0.5 !text-[11px]">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-ghost !px-4 !py-2 !text-xs">
              <FaGithub />
              GitHub
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-primary !px-4 !py-2 !text-xs">
              <FaExternalLinkAlt size={10} />
              Live
            </a>
          )}
          {project.internal && (
            <span className="chip !px-3 !py-1.5">
              <FaLock size={10} />
              {t('Projeto corporativo interno', 'Internal corporate project')}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

const Projects = ({ language }) => {
  const [category, setCategory] = useState('all');
  const t = (pt, en) => (language === 'en' ? en : pt);
  const visible = PROJECTS.filter((project) => category === 'all' || project.cats.includes(category));

  return (
    <section id="projects" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow={t('Projetos', 'Projects')}
          title={t('O que eu construí', "What I've built")}
          subtitle={t(
            'Produtos corporativos em destaque, projetos acadêmicos e experimentos — filtre por área.',
            'Featured corporate products, academic projects and experiments — filter by area.',
          )}
        />

        <Reveal className="mb-10 flex flex-wrap gap-2" >
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

        <div key={category} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, index) => (
            <div key={project.id} className="animate-fade-up" style={{ animationDelay: `${index * 60}ms` }}>
              <ProjectCard project={project} language={language} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
