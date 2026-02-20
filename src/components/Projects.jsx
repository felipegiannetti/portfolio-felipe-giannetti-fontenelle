import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Projects = ({ language = 'pt' }) => {
  const projectsEN = [
    {
      id: 1,
      name: 'Task Management System',
      description:
        'Web application for task management with creation, editing, deletion and filtering functionalities. Intuitive and responsive interface.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
      github: 'https://github.com/usuario/task-manager',
      image: 'https://via.placeholder.com/600x400/1e3a5f/00ff88?text=Task+Manager',
      date: '2024',
    },
    {
      id: 2,
      name: 'Digital Products E-commerce',
      description:
        'Complete e-commerce platform with shopping cart, payment integration and administrative panel for product management.',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Prisma'],
      github: 'https://github.com/usuario/ecommerce-digital',
      image: 'https://via.placeholder.com/600x400/1e3a5f/00ff88?text=E-commerce',
      date: '2025',
    },
    {
      id: 3,
      name: 'Fitness Monitoring Application',
      description:
        'Mobile app for tracking physical exercises, calorie counting and progress monitoring with graphs and statistics.',
      technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
      github: 'https://github.com/usuario/fitness-tracker',
      image: 'https://via.placeholder.com/600x400/1e3a5f/00ff88?text=Fitness+App',
      date: '2025',
    },
    {
      id: 4,
      name: 'Data Analytics Dashboard',
      description:
        'Interactive dashboard for real-time data visualization with dynamic charts, advanced filters and report export.',
      technologies: ['Vue.js', 'D3.js', 'Python', 'FastAPI', 'Docker'],
      github: 'https://github.com/usuario/analytics-dashboard',
      image: 'https://via.placeholder.com/600x400/1e3a5f/00ff88?text=Analytics+Dashboard',
      date: '2026',
    },
  ];

  const projectsPT = [
    {
      id: 1,
      name: 'Sistema de Gerenciamento de Tarefas',
      description:
        'Aplicação web para gerenciamento de tarefas com funcionalidades de criação, edição, exclusão e filtragem. Interface intuitiva e responsiva.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
      github: 'https://github.com/usuario/task-manager',
      image: 'https://via.placeholder.com/600x400/1e3a5f/00ff88?text=Task+Manager',
      date: '2024',
    },
    {
      id: 2,
      name: 'E-commerce de Produtos Digitais',
      description:
        'Plataforma de e-commerce completa com carrinho de compras, integração de pagamento e painel administrativo para gerenciamento de produtos.',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Prisma'],
      github: 'https://github.com/usuario/ecommerce-digital',
      image: 'https://via.placeholder.com/600x400/1e3a5f/00ff88?text=E-commerce',
      date: '2025',
    },
    {
      id: 3,
      name: 'Aplicativo de Monitoramento de Fitness',
      description:
        'App mobile para tracking de exercícios físicos, contagem de calorias e acompanhamento de progresso com gráficos e estatísticas.',
      technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
      github: 'https://github.com/usuario/fitness-tracker',
      image: 'https://via.placeholder.com/600x400/1e3a5f/00ff88?text=Fitness+App',
      date: '2025',
    },
    {
      id: 4,
      name: 'Dashboard de Análise de Dados',
      description:
        'Dashboard interativo para visualização de dados em tempo real com gráficos dinâmicos, filtros avançados e exportação de relatórios.',
      technologies: ['Vue.js', 'D3.js', 'Python', 'FastAPI', 'Docker'],
      github: 'https://github.com/usuario/analytics-dashboard',
      image: 'https://via.placeholder.com/600x400/1e3a5f/00ff88?text=Analytics+Dashboard',
      date: '2026',
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
            <div key={project.id} className="mb-8 relative">
              <div
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="w-full md:w-5/12 mb-8 md:mb-0">
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
                    <div className="flex gap-4">
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
