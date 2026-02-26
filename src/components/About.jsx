import React, { useState, useEffect } from 'react';
import { FaGraduationCap, FaCode, FaRocket, FaDownload, FaTimes, FaBuilding, FaInfoCircle, FaEye } from 'react-icons/fa';

const TypewriterName = () => {
  const fullName = 'Felipe Giannetti Fontenelle';
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    setDisplayed('');
    setDone(false);
    const interval = setInterval(() => {
      i++;
      setDisplayed(fullName.slice(0, i));
      if (i >= fullName.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 70);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center mb-2">
      <span className="text-4xl md:text-5xl font-extrabold text-accent-green tracking-wide">
        {displayed}
        {!done && (
          <span className="inline-block w-0.5 h-10 bg-accent-green align-middle ml-1 animate-pulse" />
        )}
      </span>
    </div>
  );
};

const AngloTooltip = ({ language }) => {
  const [show, setShow] = useState(false);
  const content = {
    pt: {
      badge: '🏆 Uma das maiores mineradoras do mundo',
      text: 'Empresa global presente em mais de 40 países, líder em mineração de diamantes, platina, cobre e minério de ferro. Com sede em Londres, figura entre as maiores mineradoras do planeta.',
    },
    en: {
      badge: '🏆 One of the world\'s largest mining companies',
      text: 'Global company operating in over 40 countries, leader in diamonds, platinum, copper and iron ore. Headquartered in London, it ranks among the largest mining companies on the planet.',
    },
  };
  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <span className={`inline-flex items-center gap-1 text-accent-green font-bold cursor-help transition-all duration-200 border-b-2 ${show ? 'border-accent-green drop-shadow-[0_0_6px_rgba(0,229,255,0.7)]' : 'border-dashed border-accent-green/60 hover:border-accent-green hover:drop-shadow-[0_0_6px_rgba(0,229,255,0.6)]'}`}>
        Anglo American
        <FaInfoCircle size={11} className={`transition-transform duration-200 ${show ? 'scale-125' : 'animate-pulse'}`} />
      </span>
      {show && (
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 w-80 bg-primary-blue border border-accent-green/50 rounded-lg p-3 shadow-xl pointer-events-none">
          <span className="flex items-center gap-2 mb-2">
            <FaBuilding className="text-accent-green flex-shrink-0" size={13} />
            <span className="text-accent-green font-bold text-xs uppercase tracking-wider">Anglo American</span>
          </span>
          <span className="block bg-accent-green/10 border border-accent-green/30 rounded-md px-2.5 py-1.5 text-accent-green font-semibold text-[11px] text-center mb-2 leading-snug">
            {content[language].badge}
          </span>
          <span className="text-gray-300 text-xs leading-relaxed">{content[language].text}</span>
          {/* Arrow */}
          <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-accent-green/50"></span>
        </span>
      )}
    </span>
  );
};

const About = ({ language, showCurriculo, setShowCurriculo }) => {

  const content = {
    pt: {
      title: 'Sobre Mim',
      intro: (
        <>
          Olá! Sou estudante de Engenharia de Software na PUC Minas e Estagiário Global de Cibersegurança na <AngloTooltip language="pt" />.
        </>
      ),
      description:
        'Faço parte da equipe global de Cibersegurança da Anglo American, atuando no Centro de Operações de Segurança (SOC) com foco em Tecnologia Operacional (OT). Contribuo para a detecção, análise e mitigação de ameaças cibernéticas em ativos críticos, utilizando ferramentas como Claroty. Fluente em português (nativo) e inglês (C2 – EF SET Certificado), valorizo trabalho em equipe, aprendizado contínuo e resolução prática de problemas.',
      cards: [
        {
          icon: <FaGraduationCap />,
          title: 'Formação',
          text: 'Engenharia de Software – PUC Minas (2024–2028)',
        },
        {
          icon: <FaCode />,
          title: 'Área de Atuação',
          text: 'Cibersegurança & Desenvolvimento de Software',
        },
        {
          icon: <FaRocket />,
          title: 'Objetivo',
          text: 'Criar soluções tecnológicas seguras, inovadoras e de alto impacto',
        },
      ],
    },
    en: {
      title: 'About Me',
      intro: (
        <>
          Hello! I am a Software Engineering student at PUC Minas and Global Cybersecurity Intern at <AngloTooltip language="en" />.
        </>
      ),
      description:
        'I am part of the Global Cybersecurity team at Anglo American, working as a Security Operations Center (SOC) Intern focused on Operational Technology (OT) environments. I contribute to the detection, analysis, and mitigation of cybersecurity threats targeting critical OT assets, leveraging tools such as Claroty. Fluent in Portuguese (native) and English (C2 – EF SET Certified), I value teamwork, continuous learning, and practical problem-solving.',
      cards: [
        {
          icon: <FaGraduationCap />,
          title: 'Education',
          text: 'Software Engineering – PUC Minas (2024–2028)',
        },
        {
          icon: <FaCode />,
          title: 'Field of Work',
          text: 'Cybersecurity & Software Development',
        },
        {
          icon: <FaRocket />,
          title: 'Goal',
          text: 'Build secure, innovative, high-impact technology solutions',
        },
      ],
    },
  };

  const currentContent = content[language];

  return (
    <section id="about" className="min-h-screen pt-20 bg-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Title */}
        <h2 className="text-5xl font-bold text-center mb-6">
          <span className="text-white">{currentContent.title}</span>
        </h2>
        <div className="w-24 h-1 bg-accent-green mx-auto mb-6"></div>

        {/* Typewriter Name */}
        <TypewriterName />

        <div className="w-24 h-1 bg-accent-green/30 mx-auto mb-10"></div>

        <div className="flex justify-center mb-10">
          <div className="relative z-10 rounded-full bg-primary-dark/90 p-2 shadow-2xl shadow-accent-green/30">
            <img
              src="/foto-perfil.jpg"
              alt="Felipe Giannetti Fontenelle"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-accent-green"
            />
          </div>
        </div>

        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-xl text-center text-gray-300 mb-6">{currentContent.intro}</p>
          <p className="text-lg text-gray-400 leading-relaxed text-center">
            {currentContent.description}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {currentContent.cards.map((card, index) => (
            <div
              key={index}
              className="bg-primary-blue p-8 rounded-lg hover:scale-105 transition-transform duration-300 border-2 border-transparent hover:border-accent-green"
            >
              <div className="text-accent-green text-5xl mb-4 flex justify-center">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 text-center">{card.title}</h3>
              <p className="text-gray-300 text-center">{card.text}</p>
            </div>
          ))}
        </div>

        {/* Currículo Download */}
        <div className="bg-accent-green text-primary-dark p-8 rounded-lg shadow-2xl max-w-2xl mx-auto border-4 border-accent-green hover:shadow-none transition-shadow duration-300">
          <h3 className="text-2xl font-bold mb-3 text-center">{language === 'en' ? 'My Resume' : 'Meu Currículo'}</h3>
          <p className="text-center mb-6 font-semibold">
            {language === 'en' ? 'Check my complete resume in PDF' : 'Confira meu currículo completo em PDF'}
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => setShowCurriculo(true)}
              className="flex items-center gap-3 bg-primary-dark text-accent-green px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-blue transition-all duration-300 border-2 border-primary-dark hover:border-white"
            >
              <FaEye size={24} />
              {language === 'en' ? 'View Resume' : 'Visualizar CV'}
            </button>
          </div>
        </div>

        {/* Modal do Currículo */}
        {showCurriculo && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
              {/* Header do Modal */}
              <div className="bg-primary-blue text-white p-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold">{language === 'en' ? 'My Resume' : 'Meu Currículo'}</h2>
                <button
                  onClick={() => setShowCurriculo(false)}
                  className="text-accent-green hover:text-white text-3xl transition-colors"
                >
                  <FaTimes />
                </button>
              </div>

              {/* PDF Viewer */}
              <div className="flex-1 overflow-hidden">
                <iframe
                  src={language === 'pt' ? '/curriculo.pdf' : '/curriculo-en.pdf'}
                  width="100%"
                  height="600"
                  style={{ border: 'none', minHeight: '600px' }}
                  title="Currículo PDF"
                />
              </div>

              {/* Footer do Modal */}
              <div className="bg-gray-100 p-4 flex justify-end gap-4">
                <a
                  href={language === 'pt' ? '/curriculo.pdf' : '/curriculo-en.pdf'}
                  download={language === 'pt' ? 'Curriculo_Felipe.pdf' : 'CV_Felipe.pdf'}
                  className="flex items-center gap-2 bg-accent-green text-primary-dark px-6 py-2 rounded-lg font-bold hover:bg-gray-300 transition-colors"
                >
                  <FaDownload size={16} />
                  {language === 'en' ? 'Download' : 'Download'}
                </a>
                <button
                  onClick={() => setShowCurriculo(false)}
                  className="bg-gray-300 text-primary-dark px-6 py-2 rounded-lg font-bold hover:bg-gray-400 transition-colors"
                >
                  {language === 'en' ? 'Close' : 'Fechar'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
