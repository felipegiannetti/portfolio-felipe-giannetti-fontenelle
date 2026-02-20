import React from 'react';
import { FaCertificate } from 'react-icons/fa';

const Certifications = ({ language }) => {
  const certifications = [
    {
      id: 1,
      titlePT: 'Certificado em Desenvolvimento Web Full Stack',
      titleEN: 'Full Stack Web Development Certificate',
      issuePT: 'Emitido por',
      issueEN: 'Issued by',
      organization: 'Tech Academy Brasil',
      date: '2024',
      descriptionPT: 'Formação completa em desenvolvimento web com React, Node.js e databases',
      descriptionEN: 'Complete web development training with React, Node.js and databases',
    },
    {
      id: 2,
      titlePT: 'Certificado em React Avançado',
      titleEN: 'Advanced React Certificate',
      issuePT: 'Emitido por',
      issueEN: 'Issued by',
      organization: 'Frontend Masters',
      date: '2024',
      descriptionPT: 'Desenvolvimento avançado de aplicações React com patterns e best practices',
      descriptionEN: 'Advanced React application development with patterns and best practices',
    },
    {
      id: 3,
      titlePT: 'Certificado em JavaScript ES6+',
      titleEN: 'JavaScript ES6+ Certificate',
      issuePT: 'Emitido por',
      issueEN: 'Issued by',
      organization: 'Udemy',
      date: '2023',
      descriptionPT: 'Domínio de JavaScript moderno com ES6+ features e funcionalidades avançadas',
      descriptionEN: 'Mastery of modern JavaScript with ES6+ features and advanced functionality',
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">
        {language === 'en' ? 'Certifications' : 'Certificações'}
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="bg-primary-blue rounded-lg p-6 hover:shadow-lg hover:shadow-accent-green transition-all duration-300 transform hover:scale-105"
          >
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="bg-accent-green text-primary-dark p-4 rounded-full">
                <FaCertificate size={28} />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-2 text-accent-green text-center">
              {language === 'en' ? cert.titleEN : cert.titlePT}
            </h3>

            {/* Organization & Date */}
            <div className="text-center mb-3 border-b border-gray-600 pb-3">
              <p className="text-sm text-gray-300">
                <span className="text-gray-400">
                  {language === 'en' ? cert.issueEN : cert.issuePT}
                </span>
                <span className="text-white font-semibold"> {cert.organization}</span>
              </p>
              <p className="text-xs text-gray-400 mt-1">{cert.date}</p>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-center text-sm leading-relaxed">
              {language === 'en' ? cert.descriptionEN : cert.descriptionPT}
            </p>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-12 text-center">
        <p className="text-gray-400 text-sm">
          {language === 'en'
            ? 'Certifications obtained through continuous learning and professional development'
            : 'Certificações obtidas através de aprendizado contínuo e desenvolvimento profissional'}
        </p>
      </div>
    </section>
  );
};

export default Certifications;
