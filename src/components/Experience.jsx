import React from 'react';
import { FaBriefcase, FaCode, FaUsers, FaTrophy, FaJava } from 'react-icons/fa';
import {
  SiJavascript, SiPython, SiReact,
  SiHtml5, SiCss3, SiBootstrap, SiTailwindcss, SiSpringboot, SiGithub,
} from 'react-icons/si';

const Experience = ({ language = 'pt' }) => {
  const experiencesEN = [
    {
      id: 1,
      icon: <FaBriefcase />,
      company: 'Anglo American',
      role: 'Global Cybersecurity Intern – SOC / OT',
      period: 'Dec 2025 – Present',
      type: 'Internship',
      description:
        'Part of the Global Cybersecurity team within the SOC, focused on Operational Technology (OT) environments. Supporting detection, prevention, and mitigation of threats targeting critical OT assets, leveraging specialised tools such as Claroty to enhance visibility and protection.',
      color: 'bg-blue-500',
    },
    {
      id: 2,
      icon: <FaUsers />,
      company: 'PUC Minas',
      role: 'Teaching Assistant – Web Interface Development',
      period: 'Aug 2025 – Dec 2025',
      type: 'Part-time',
      description:
        'Worked as a teaching assistant for the Web Interface Development (DIW) course, helping students build web interfaces, clarifying questions about HTML, CSS, and JavaScript, and contributing to their practical understanding of the concepts taught.',
      color: 'bg-purple-500',
    },
    {
      id: 3,
      icon: <FaTrophy />,
      company: 'Clube Chalezinho',
      role: 'Team Manager',
      period: 'Mar 2024 – Dec 2025',
      type: 'Freelance',
      description:
        'Led a 15-member group recognised as a top-performing team for several consecutive months. Provided guidance and support to team members, resolved day-to-day challenges, distributed tasks effectively, and ensured a collaborative, results-driven work environment.',
      color: 'bg-yellow-500',
    },
    {
      id: 4,
      icon: <FaCode />,
      company: 'Clube Chalezinho',
      role: 'Event Coordinator',
      period: 'Oct 2023 – Dec 2025',
      type: 'Freelance',
      description:
        'Worked in event organisation, assisting with event planning and execution, maintaining daily communication with dozens of clients, presenting products, and leading negotiations to successfully close sales.',
      color: 'bg-green-500',
    },
  ];

  const experiencesPT = [
    {
      id: 1,
      icon: <FaBriefcase />,
      company: 'Anglo American',
      role: 'Estagiário Global de Cibersegurança – SOC / OT',
      period: 'Dez 2025 – Presente',
      type: 'Estágio',
      description:
        'Integrante da equipe global de Cibersegurança, atuando no SOC com foco em ambientes de Tecnologia Operacional (OT). Apoiando a detecção, prevenção e mitigação de ameaças a ativos críticos de OT, utilizando ferramentas especializadas como Claroty para aumentar a visibilidade e a proteção.',
      color: 'bg-blue-500',
    },
    {
      id: 2,
      icon: <FaUsers />,
      company: 'PUC Minas',
      role: 'Monitor – Desenvolvimento de Interfaces Web',
      period: 'Ago 2025 – Dez 2025',
      type: 'Aprendiz',
      description:
        'Atuou como monitor da disciplina de Desenvolvimento de Interfaces Web (DIW), auxiliando alunos na construção de interfaces, esclarecendo dúvidas sobre HTML, CSS e JavaScript e contribuindo para o entendimento prático dos conceitos ensinados.',
      color: 'bg-purple-500',
    },
    {
      id: 3,
      icon: <FaTrophy />,
      company: 'Clube Chalezinho',
      role: 'Gerente de Equipe',
      period: 'Mar 2024 – Dez 2025',
      type: 'Freelance',
      description:
        'Liderou um grupo de 15 pessoas reconhecido como equipe de alto desempenho por vários meses consecutivos. Orientou os membros da equipe, resolveu desafios do dia a dia, distribuiu tarefas com eficiência e garantiu um ambiente colaborativo e orientado a resultados.',
      color: 'bg-yellow-500',
    },
    {
      id: 4,
      icon: <FaCode />,
      company: 'Clube Chalezinho',
      role: 'Coordenador de Eventos',
      period: 'Out 2023 – Dez 2025',
      type: 'Freelance',
      description:
        'Atuou na organização de eventos, auxiliando no planejamento e execução, mantendo comunicação diária com dezenas de clientes, apresentando produtos e conduzindo negociações para fechar vendas com sucesso.',
      color: 'bg-green-500',
    },
  ];

  const experiences = language === 'en' ? experiencesEN : experiencesPT;

  return (
    <section id="experience" className="min-h-screen bg-primary-dark py-14">
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
          <h3 className="text-3xl font-bold text-center mb-4 text-white">
            {language === 'en' ? 'Main Skills' : 'Principais Habilidades'}
          </h3>
          <div className="w-16 h-1 bg-accent-green mx-auto mb-12"></div>

          {/* Programming Languages */}
          <h4 className="text-lg font-bold text-accent-green uppercase tracking-widest text-center mb-6">
            {language === 'en' ? 'Programming Languages & Frameworks' : 'Linguagens & Frameworks'}
          </h4>
          {(() => {
            const levels = {
              pt: { avancado: 'Avançado', intermediario: 'Intermediário', iniciante: 'Iniciante' },
              en: { avancado: 'Advanced', intermediario: 'Intermediate', iniciante: 'Beginner' },
            };
            const l = levels[language];
            const langs = [
              { icon: <FaJava size={40} />, color: '#F89820', name: 'Java', level: l.avancado, pct: 90 },
              { icon: <SiSpringboot size={40} />, color: '#6DB33F', name: 'Spring Boot', level: l.avancado, pct: 88 },
              { icon: <SiJavascript size={40} />, color: '#F7DF1E', name: 'JavaScript', level: l.avancado, pct: 85 },
              { icon: <SiHtml5 size={40} />, color: '#E34F26', name: 'HTML5', level: l.avancado, pct: 85 },
              { icon: <SiCss3 size={40} />, color: '#1572B6', name: 'CSS3', level: l.avancado, pct: 85 },
              { icon: <SiBootstrap size={40} />, color: '#7952B3', name: 'Bootstrap', level: l.avancado, pct: 85 },
              { icon: <SiTailwindcss size={40} />, color: '#06B6D4', name: 'Tailwind CSS', level: l.avancado, pct: 85 },
              { icon: <SiGithub size={40} />, color: '#FFFFFF', name: 'GitHub', level: l.avancado, pct: 85 },
              { icon: <SiReact size={40} />, color: '#61DAFB', name: 'React', level: l.intermediario, pct: 60 },
              { icon: <span className="font-black text-4xl leading-none" style={{ color: '#A8B9CC' }}>C</span>, color: '#A8B9CC', name: 'C', level: l.intermediario, pct: 55 },
              { icon: <SiPython size={40} />, color: '#3776AB', name: 'Python', level: l.iniciante, pct: 30 },
            ];
            return (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-14">
                {langs.map((lang, i) => (
                  <div
                    key={i}
                    className="bg-primary-blue border border-gray-700 hover:border-accent-green transition-all duration-300 rounded-xl p-4 flex flex-col items-center gap-2"
                  >
                    <span style={{ color: lang.color }}>{lang.icon}</span>
                    <span className="text-white font-bold text-sm text-center">{lang.name}</span>
                    <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${lang.pct}%`, background: 'linear-gradient(to right, #00e5ff, #0b6fff)' }}
                      ></div>
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400">{lang.level}</span>
                  </div>
                ))}
              </div>
            );
          })()}

          {/* Other Skills */}
          <h4 className="text-lg font-bold text-accent-green uppercase tracking-widest text-center mb-6">
            {language === 'en' ? 'Other Skills' : 'Outras Habilidades'}
          </h4>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Cybersecurity',
              'SOC / OT Security',
              'Active Directory',
              'Claroty',
              'Networking',
              'Cryptography',
              'UI/UX',
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
