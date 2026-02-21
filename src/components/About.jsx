import React, { useState } from 'react';
import { FaGraduationCap, FaCode, FaRocket, FaDownload, FaTimes } from 'react-icons/fa';

const About = ({ language, showCurriculo, setShowCurriculo }) => {

  const content = {
    pt: {
      title: 'Sobre Mim',
      intro: 'Olá! Sou um desenvolvedor de software apaixonado por tecnologia e inovação.',
      description:
        'Estudante de Engenharia de Software com foco em desenvolvimento full-stack. Busco constantemente aprender novas tecnologias e aplicá-las em projetos que fazem a diferença. Tenho interesse especial em desenvolvimento web, arquitetura de software e boas práticas de programação.',
      cards: [
        {
          icon: <FaGraduationCap />,
          title: 'Formação',
          text: 'Graduando em Engenharia de Software',
        },
        {
          icon: <FaCode />,
          title: 'Área de Atuação',
          text: 'Desenvolvimento Full-Stack e Web',
        },
        {
          icon: <FaRocket />,
          title: 'Objetivo',
          text: 'Criar soluções inovadoras e impactantes',
        },
      ],
    },
    en: {
      title: 'About Me',
      intro: 'Hello! I am a software developer passionate about technology and innovation.',
      description:
        'Software Engineering student focused on full-stack development. I constantly seek to learn new technologies and apply them to projects that make a difference. I have a special interest in web development, software architecture, and programming best practices.',
      cards: [
        {
          icon: <FaGraduationCap />,
          title: 'Education',
          text: 'Software Engineering Undergraduate',
        },
        {
          icon: <FaCode />,
          title: 'Field of Work',
          text: 'Full-Stack and Web Development',
        },
        {
          icon: <FaRocket />,
          title: 'Goal',
          text: 'Create innovative and impactful solutions',
        },
      ],
    },
  };

  const currentContent = content[language];

  return (
    <section id="about" className="min-h-screen pt-20 bg-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Title */}
        <h2 className="text-5xl font-bold text-center mb-8">
          <span className="text-white">{currentContent.title}</span>
        </h2>
        <div className="w-24 h-1 bg-accent-green mx-auto mb-12"></div>

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
              <FaDownload size={24} />
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
              <div className="flex-1 overflow-auto">
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
