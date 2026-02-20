import React from 'react';
import { FaBriefcase, FaCode, FaUsers, FaTrophy } from 'react-icons/fa';

const Experience = ({ language = 'pt' }) => {
  const experiencesEN = [
    {
      id: 1,
      icon: <FaBriefcase />,
      company: 'Tech Solutions Ltd',
      role: 'Full-Stack Developer',
      period: 'Jan 2025 - Present',
      type: 'Internship',
      description:
        'Development of web applications using React and Node.js. Participation in all stages of the development cycle, from requirements gathering to production deployment.',
      color: 'bg-blue-500',
    },
    {
      id: 2,
      icon: <FaCode />,
      company: 'Freelancer',
      role: 'Web Developer',
      period: 'Mar 2024 - Dec 2024',
      type: 'Freelance',
      description:
        'Development of websites and landing pages for small businesses and autonomous professionals. Creation of customized solutions focused on performance and user experience.',
      color: 'bg-green-500',
    },
    {
      id: 3,
      icon: <FaUsers />,
      company: 'Open Source Project - DevTools',
      role: 'Contributor',
      period: 'Jun 2024 - Nov 2024',
      type: 'Open Source',
      description:
        'Active contribution to open source project with developer tools. Implementation of new features, bug fixes and documentation improvements.',
      color: 'bg-purple-500',
    },
    {
      id: 4,
      icon: <FaTrophy />,
      company: 'Hackathon Tech Innovation 2024',
      role: 'Participant',
      period: 'Oct 2024',
      type: 'Event',
      description:
        'Participation in a 48-hour hackathon developing a mobile solution to connect volunteers and NGOs. Finalist project among the top 10.',
      color: 'bg-yellow-500',
    },
  ];

  const experiencesPT = [
    {
      id: 1,
      icon: <FaBriefcase />,
      company: 'Tech Solutions Ltda',
      role: 'Desenvolvedor Full-Stack',
      period: 'Jan 2025 - Presente',
      type: 'Estágio',
      description:
        'Desenvolvimento de aplicações web utilizando React e Node.js. Participação em todas as etapas do ciclo de desenvolvimento, desde o levantamento de requisitos até o deploy em produção.',
      color: 'bg-blue-500',
    },
    {
      id: 2,
      icon: <FaCode />,
      company: 'Freelancer',
      role: 'Desenvolvedor Web',
      period: 'Mar 2024 - Dez 2024',
      type: 'Freelance',
      description:
        'Desenvolvimento de websites e landing pages para pequenas empresas e profissionais autônomos. Criação de soluções personalizadas com foco em performance e experiência do usuário.',
      color: 'bg-green-500',
    },
    {
      id: 3,
      icon: <FaUsers />,
      company: 'Projeto Open Source - DevTools',
      role: 'Contribuidor',
      period: 'Jun 2024 - Nov 2024',
      type: 'Open Source',
      description:
        'Contribuição ativa em projeto open source de ferramentas para desenvolvedores. Implementação de novas features, correção de bugs e melhoria de documentação.',
      color: 'bg-purple-500',
    },
    {
      id: 4,
      icon: <FaTrophy />,
      company: 'Hackathon Tech Innovation 2024',
      role: 'Participante',
      period: 'Out 2024',
      type: 'Evento',
      description:
        'Participação em hackathon de 48 horas desenvolvendo uma solução mobile para conectar voluntários e ONGs. Projeto finalista entre os 10 melhores.',
      color: 'bg-yellow-500',
    },
  ];

  const experiences = language === 'en' ? experiencesEN : experiencesPT;

  return (
    <section id="experience" className="min-h-screen bg-primary-dark py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-5xl font-bold text-center mb-8 text-white">{language === 'en' ? 'Experience' : 'Experiências'}</h2>
        <div className="w-24 h-1 bg-accent-green mx-auto mb-4"></div>
        <p className="text-center text-gray-300 mb-16 text-lg">
          {language === 'en' ? 'My professional journey and project participation' : 'Minha trajetória profissional e participações em projetos'}
        </p>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-primary-blue rounded-lg p-6 shadow-xl border-2 border-transparent hover:border-accent-green transition-all duration-300 hover:scale-105"
            >
              {/* Header */}
              <div className="flex items-start mb-4">
                <div className={`${exp.color} p-4 rounded-lg text-white text-3xl mr-4`}>
                  {exp.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                    <span className="bg-accent-green text-primary-dark px-3 py-1 rounded-full text-sm font-bold">
                      {language === 'en' && (exp.type === 'Estágio' || exp.type === 'Internship') ? 'Internship' : language === 'en' && exp.type === 'Evento' ? 'Event' : exp.type}
                    </span>
                  </div>
                  <p className="text-accent-green font-semibold text-lg mt-1">{exp.role}</p>
                  <p className="text-gray-400 text-sm mt-1">{exp.period}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-8 text-white">
            {language === 'en' ? 'Main Skills' : 'Principais Habilidades'}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'JavaScript',
              'TypeScript',
              'React',
              'Node.js',
              'Python',
              'Git',
              'Docker',
              'MongoDB',
              'PostgreSQL',
              'REST API',
              'Tailwind CSS',
              'Agile/Scrum',
            ].map((skill, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-primary-blue to-primary-dark text-white px-6 py-3 rounded-full text-lg font-semibold border-2 border-accent-green hover:bg-accent-green hover:text-primary-dark transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
