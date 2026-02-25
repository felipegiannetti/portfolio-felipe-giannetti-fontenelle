import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Projects = ({ language = 'pt' }) => {
  const projectsEN = [
    {
      id: 1,
      name: 'Robot Battle – Arcade Controller',
      description:
        'Physical robot battle game controlled by humans via an arcade joystick and a smartphone app over Bluetooth. Each robot carries a balloon, and the goal is to pop the opponent\'s balloon first. Built with Arduino, C++ and MIT App Inventor. Highlighted project from the 1st semester of Computer Engineering at PUC Minas.',
      technologies: ['C++', 'Arduino', 'Bluetooth', 'MIT App Inventor'],
      github: 'https://github.com/felipegiannetti/projeto-interacao-robos-destaque-primeiro-periodo',
      live: null,
      image: 'https://via.placeholder.com/600x400/1e3a5f/00ff88?text=Robot+Battle',
      date: '2024',
    },
    {
      id: 2,
      name: 'TDR Consultoria',
      description:
        'Interdisciplinary front-end project developed for the Web Interface Development course at PUC Minas. A consultancy website with interactive forms allowing users to submit their requirements, enabling the team to deliver tailored results.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/felipegiannetti/TI-Front-end-PUC',
      live: 'https://plf-es-2025-1-ti1-0385100-tdr-consu.vercel.app/',
      image: 'https://via.placeholder.com/600x400/1e3a5f/00ff88?text=TDR+Consultoria',
      date: '2025',
    },
    {
      id: 3,
      name: 'DTI Drone Delivery System',
      description:
        'Complete drone delivery management system built for an urban logistics startup. Features an intelligent planning algorithm combining knapsack and nearest-neighbour heuristics to optimise routes by priority (HIGH → MEDIUM → LOW). Full RESTful backend with Spring Boot 3 and a modern Next.js 15 dashboard.',
      technologies: ['Java 24', 'Spring Boot 3', 'Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Docker', 'Maven'],
      github: 'https://github.com/felipegiannetti/drone-delivery-system',
      live: null,
      image: 'https://via.placeholder.com/600x400/1e3a5f/00ff88?text=Drone+Delivery',
      date: '2025',
    },
    {
      id: 4,
      name: 'n8n Random Number Connector',
      description:
        'Custom n8n node that wraps the Random.org API to generate truly random integers (not pseudo-random). Includes a Docker Compose environment with n8n and PostgreSQL pre-configured to load the node automatically. Built with TypeScript and published as a local npm package.',
      technologies: ['TypeScript', 'Node.js', 'n8n', 'Docker', 'PostgreSQL', 'Random.org API'],
      github: 'https://github.com/felipegiannetti/n8n-random-number',
      live: null,
      image: 'https://via.placeholder.com/600x400/1e3a5f/00ff88?text=n8n+Connector',
      date: '2025',
    },
  ];

  const projectsPT = [
    {
      id: 1,
      name: 'Briga de Robôs – Controle Arcade',
      description:
        'Jogo físico de batalha de robôs controlados por humanos via controle arcade e aplicativo para smartphone por Bluetooth. Cada robô possui um balão acoplado e o objetivo é estourar o balão do adversário. Desenvolvido com Arduino, C++ e MIT App Inventor. Projeto destaque do 1º semestre de Engenharia de Computação na PUC Minas.',
      technologies: ['C++', 'Arduino', 'Bluetooth', 'MIT App Inventor'],
      github: 'https://github.com/felipegiannetti/projeto-interacao-robos-destaque-primeiro-periodo',
      live: null,
      image: 'https://via.placeholder.com/600x400/1e3a5f/00ff88?text=Briga+de+Robos',
      date: '2024',
    },
    {
      id: 2,
      name: 'TDR Consultoria',
      description:
        'Projeto interdisciplinar de front-end desenvolvido na disciplina de Desenvolvimento de Interfaces Web da PUC Minas. Site de consultoria com formulários interativos que permitem ao usuário descrever suas necessidades, possibilitando à equipe entregar um resultado personalizado.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/felipegiannetti/TI-Front-end-PUC',
      live: 'https://plf-es-2025-1-ti1-0385100-tdr-consu.vercel.app/',
      image: 'https://via.placeholder.com/600x400/1e3a5f/00ff88?text=TDR+Consultoria',
      date: '2025',
    },
    {
      id: 3,
      name: 'DTI Drone Delivery System',
      description:
        'Sistema completo de gerenciamento de entregas por drones para uma startup de logística urbana. Possui algoritmo inteligente de planejamento combinando heurísticas de knapsack e nearest-neighbour para otimizar rotas por prioridade (HIGH → MEDIUM → LOW). Backend RESTful com Spring Boot 3 e dashboard moderno em Next.js 15.',
      technologies: ['Java 24', 'Spring Boot 3', 'Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Docker', 'Maven'],
      github: 'https://github.com/felipegiannetti/drone-delivery-system',
      live: null,
      image: 'https://via.placeholder.com/600x400/1e3a5f/00ff88?text=Drone+Delivery',
      date: '2025',
    },
    {
      id: 4,
      name: 'Conector Random para n8n',
      description:
        'Node customizado para n8n que encapsula a API do Random.org para gerar inteiros verdadeiramente aleatórios (não pseudo-aleatórios). Inclui ambiente Docker Compose com n8n e PostgreSQL já configurados para carregar o node automaticamente. Desenvolvido em TypeScript e publicado como pacote npm local.',
      technologies: ['TypeScript', 'Node.js', 'n8n', 'Docker', 'PostgreSQL', 'Random.org API'],
      github: 'https://github.com/felipegiannetti/n8n-random-number',
      live: null,
      image: 'https://via.placeholder.com/600x400/1e3a5f/00ff88?text=n8n+Conector',
      date: '2025',
    },
  ];

  const projects = language === 'en' ? projectsEN : projectsPT;

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-b from-primary-dark to-primary-blue py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-5xl font-bold text-center mb-8 text-white">{language === 'en' ? 'Projects' : 'Projetos'}</h2>
        <div className="w-24 h-1 bg-accent-green mx-auto mb-4"></div>
        <p className="text-center text-gray-300 mb-16 text-lg">
          {language === 'en' ? 'Timeline of my projects, from oldest to newest' : 'Linha do tempo dos meus projetos, do mais antigo ao mais recente'}
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent-green"></div>

          {/* Projects */}
          {projects.map((project, index) => (
            <div key={project.id} className="mb-0 relative">
              <div
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="w-full md:w-5/12 mb-1 md:mb-0">
                  <div className="bg-primary-dark p-6 rounded-lg shadow-xl border-2 border-primary-blue hover:border-accent-green transition-all duration-300">
                    {/* Image */}
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />

                    {/* Date */}
                    <span className="inline-block bg-accent-green text-primary-dark px-3 py-1 rounded-full text-sm font-bold mb-3">
                      {project.date}
                    </span>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-3">{project.name}</h3>

                    {/* Description */}
                    <p className="text-gray-300 mb-4">{project.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-primary-blue text-accent-green px-3 py-1 rounded-full text-sm font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 flex-wrap">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-accent-green text-primary-dark px-4 py-2 rounded-lg font-semibold hover:bg-white transition-colors duration-300"
                      >
                        <FaGithub size={20} />
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className="w-6 h-6 bg-accent-green rounded-full border-4 border-primary-dark z-10"></div>
                </div>

                {/* Spacer */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
