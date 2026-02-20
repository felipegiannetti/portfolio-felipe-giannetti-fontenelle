import React from 'react';
import { FaCertificate } from 'react-icons/fa';

const Certifications = ({ language }) => {

  const certifications = [
    {
      id: 1,
      titlePT: 'Desenvolvimento Web Full Stack',
      titleEN: 'Full Stack Web Development',
      organization: 'Tech Academy Brasil',
      date: '2024',
    },
    {
      id: 2,
      titlePT: 'React Avançado',
      titleEN: 'Advanced React',
      organization: 'Frontend Masters',
      date: '2024',
    },
    {
      id: 3,
      titlePT: 'JavaScript ES6+',
      titleEN: 'JavaScript ES6+',
      organization: 'Udemy',
      date: '2023',
    },
    {
      id: 4,
      titlePT: 'Node.js Backend',
      titleEN: 'Node.js Backend',
      organization: 'Coursera',
      date: '2023',
    },
    {
      id: 5,
      titlePT: 'Tailwind CSS',
      titleEN: 'Tailwind CSS',
      organization: 'egghead.io',
      date: '2024',
    },
    {
      id: 6,
      titlePT: 'Git & GitHub',
      titleEN: 'Git & GitHub',
      organization: 'Codecademy',
      date: '2023',
    },
  ];

  return (
    <section id="certifications" className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-center">
        {language === 'en' ? 'Certifications' : 'Certificações'}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="group relative bg-primary-blue rounded-lg p-4 border border-gray-700 hover:border-accent-green transition-all duration-300 cursor-pointer h-24 flex items-center"
          >
            {/* Minimal Badge */}
            <div className="flex items-start gap-2 w-full">
              <FaCertificate size={16} className="text-accent-green flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-white leading-tight group-hover:text-accent-green transition-colors line-clamp-2">
                  {language === 'en' ? cert.titleEN : cert.titlePT}
                </h3>
                <p className="text-xs text-gray-400 mt-1 line-clamp-1">{cert.organization}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-12 text-center">
        <p className="text-gray-400 text-sm">
          {language === 'en'
            ? 'Complete list of professional certifications and continuous learning'
            : 'Listagem completa de certificações profissionais e aprendizado contínuo'}
        </p>
      </div>
    </section>
  );
};

export default Certifications;
