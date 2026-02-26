import React from 'react';
import { FaCertificate, FaStar } from 'react-icons/fa';

const Certifications = ({ language }) => {

  const certifications = [
    // IBM
    {
      id: 1,
      titlePT: 'Getting Started with Git and GitHub',
      titleEN: 'Getting Started with Git and GitHub',
      organization: 'IBM',
      date: 'Abr 2025',
    },
    {
      id: 2,
      titlePT: 'Developing Websites and Front-Ends with Bootstrap',
      titleEN: 'Developing Websites and Front-Ends with Bootstrap',
      organization: 'IBM',
      date: 'Abr 2025',
    },
    {
      id: 3,
      titlePT: 'Introduction to HTML, CSS, & JavaScript',
      titleEN: 'Introduction to HTML, CSS, & JavaScript',
      organization: 'IBM',
      date: 'Fev 2025',
    },
    {
      id: 4,
      titlePT: 'Designing User Interfaces and Experiences (UI/UX)',
      titleEN: 'Designing User Interfaces and Experiences (UI/UX)',
      organization: 'IBM',
      date: 'Fev 2025',
    },
    {
      id: 5,
      titlePT: 'Introduction to Software Engineering',
      titleEN: 'Introduction to Software Engineering',
      organization: 'IBM',
      date: 'Fev 2025',
    },
    {
      id: 6,
      titlePT: 'Getting Started with Front-End and Web Development',
      titleEN: 'Getting Started with Front-End and Web Development',
      organization: 'IBM',
      date: 'Jan 2025',
    },
    // Amazon
    {
      id: 7,
      titlePT: 'Full Stack Web Development',
      titleEN: 'Full Stack Web Development',
      organization: 'Amazon',
      date: 'Jul 2025',
    },
    {
      id: 8,
      titlePT: 'Programming with Java',
      titleEN: 'Programming with Java',
      organization: 'Amazon',
      date: 'Jun 2025',
    },
    // University of Michigan
    {
      id: 9,
      titlePT: 'Interactivity with JavaScript',
      titleEN: 'Interactivity with JavaScript',
      organization: 'University of Michigan',
      date: 'Mar 2025',
    },
    {
      id: 10,
      titlePT: 'Exploring C',
      titleEN: 'Exploring C',
      organization: 'University of Michigan',
      date: 'Fev 2025',
    },
    {
      id: 11,
      titlePT: 'Programming in C',
      titleEN: 'Programming in C',
      organization: 'University of Michigan',
      date: 'Fev 2025',
    },
    // Duke University
    {
      id: 12,
      titlePT: 'Behavioral Finance',
      titleEN: 'Behavioral Finance',
      organization: 'Duke University',
      date: 'Jan 2025',
    },
    // SpecterOps
    {
      id: 13,
      titlePT: 'Adversary Perspectives: Active Directory',
      titleEN: 'Adversary Perspectives: Active Directory',
      organization: 'SpecterOps',
      date: 'Fev 2026',
    },
    // Claroty
    {
      id: 14,
      titlePT: 'Claroty Cybersecurity Analyst',
      titleEN: 'Claroty Cybersecurity Analyst',
      organization: 'Claroty',
      date: 'Jan 2026',
      featured: true,
      featuredLabel: { pt: 'OT Security Analyst', en: 'OT Security Analyst' },
    },
    // Skillsoft / CompTIA
    {
      id: 15,
      titlePT: 'CompTIA Security+: Threat Actors & Vectors',
      titleEN: 'CompTIA Security+: Threat Actors & Vectors',
      organization: 'Skillsoft',
      date: 'Fev 2026',
    },
    {
      id: 16,
      titlePT: 'CompTIA Security+: Practical Cryptography',
      titleEN: 'CompTIA Security+: Practical Cryptography',
      organization: 'Skillsoft',
      date: 'Jan 2026',
    },
    {
      id: 17,
      titlePT: 'CompTIA Security+: Security Goals & Controls',
      titleEN: 'CompTIA Security+: Security Goals & Controls',
      organization: 'Skillsoft',
      date: 'Jan 2026',
    },
    // Cybrary
    {
      id: 18,
      titlePT: 'Cryptography Basics',
      titleEN: 'Cryptography Basics',
      organization: 'Cybrary',
      date: 'Fev 2026',
    },
    {
      id: 19,
      titlePT: 'Network Basics',
      titleEN: 'Network Basics',
      organization: 'Cybrary',
      date: 'Dez 2025',
    },
    // Udacity
    {
      id: 20,
      titlePT: 'Discovering Cybersecurity',
      titleEN: 'Discovering Cybersecurity',
      organization: 'Udacity',
      date: 'Jan 2026',
    },
    // EF SET
    {
      id: 21,
      titlePT: 'EF SET English Certificate 75/100 (C2 Proficient)',
      titleEN: 'EF SET English Certificate 75/100 (C2 Proficient)',
      organization: 'EF SET',
      date: 'Set 2025',
      featured: true,
      featuredLabel: { pt: 'Proficiência em Inglês', en: 'Language Proficiency' },
    },
    // Huawei
    {
      id: 22,
      titlePT: 'Certificado HUAWEI ICT ROADSHOW',
      titleEN: 'HUAWEI ICT ROADSHOW Certificate',
      organization: 'Universidade Estadual do Ceará / Huawei',
      date: 'Abr 2024',
    },
  ];

  return (
    <section id="certifications" className="py-10 px-4 md:px-8 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-4 text-center">
        {language === 'en' ? 'Certifications' : 'Certificações'}
      </h2>
      <div className="w-24 h-1 bg-accent-green mx-auto mb-12"></div>

      {/* Featured certificates */}
      {(() => {
        const featured = certifications.filter((c) => c.featured);
        if (!featured.length) return null;
        return (
          <div className="mb-12">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="h-px w-12 bg-accent-green/40"></span>
              <span className="inline-flex items-center gap-1.5 text-accent-green text-[11px] font-extrabold uppercase tracking-widest">
                <FaStar size={10} />
                {language === 'en' ? 'Highlights' : 'Destaques'}
                <FaStar size={10} />
              </span>
              <span className="h-px w-12 bg-accent-green/40"></span>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
            {featured.map((cert) => (
              <div key={cert.id} className="relative bg-gradient-to-br from-primary-blue to-primary-dark border-2 border-accent-green rounded-xl px-5 py-4 shadow-[0_0_20px_rgba(0,229,255,0.2)] w-full max-w-[220px]">
                {/* Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className="inline-flex items-center gap-1 bg-accent-green text-primary-dark text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shadow tracking-widest uppercase">
                    <FaStar size={8} />
                    {language === 'en' ? cert.featuredLabel.en : cert.featuredLabel.pt}
                  </span>
                </div>
                <div className="flex flex-col items-center text-center mt-2 gap-1">
                  <FaCertificate className="text-accent-green" size={22} />
                  <h3 className="text-xs font-extrabold text-white leading-snug">
                    {language === 'en' ? cert.titleEN : cert.titlePT}
                  </h3>
                  <p className="text-accent-green font-bold text-[10px] tracking-wide uppercase">{cert.organization}</p>
                  <p className="text-gray-400 text-[10px]">{cert.date}</p>
                </div>
              </div>
            ))}
            </div>
          </div>
        );
      })()}

      {/* Group by organization (excluding featured) */}
      {(() => {
        const grouped = certifications
          .filter((c) => !c.featured)
          .reduce((acc, cert) => {
            if (!acc[cert.organization]) acc[cert.organization] = [];
            acc[cert.organization].push(cert);
            return acc;
          }, {});

        return Object.entries(grouped).map(([org, certs]) => (
          <div key={org} className="mb-10">
            {/* Organization subtitle */}
            <div className="flex items-center gap-3 mb-4">
              <FaCertificate className="text-accent-green flex-shrink-0" size={18} />
              <h3 className="text-lg font-bold text-accent-green tracking-wide uppercase">{org}</h3>
              <div className="flex-1 h-px bg-accent-green/20"></div>
            </div>

            {/* Certs grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {certs.map((cert) => (
                <div
                  key={cert.id}
                  className="group bg-primary-blue rounded-lg px-4 py-3 border border-gray-700 hover:border-accent-green transition-all duration-300 cursor-pointer"
                >
                  <h4 className="text-sm font-semibold text-white leading-snug group-hover:text-accent-green transition-colors">
                    {language === 'en' ? cert.titleEN : cert.titlePT}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        ));
      })()}

      {/* Additional Info */}
      <div className="mt-8 text-center">
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
