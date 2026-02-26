import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes, FaFileAlt, FaMapMarkerAlt, FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Navbar = ({ language, setLanguage, setShowCurriculo }) => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [typedName, setTypedName] = useState('');
  const typingRef = useRef(null);
  const isHovered = useRef(false);
  const currentLengthRef = useRef(0);
  const fullName = 'Felipe Giannetti Fontenelle';

  const startTyping = () => {
    clearInterval(typingRef.current);
    currentLengthRef.current = 0;
    setTypedName('');
    typingRef.current = setInterval(() => {
      currentLengthRef.current++;
      setTypedName(fullName.slice(0, currentLengthRef.current));
      if (currentLengthRef.current >= fullName.length) {
        clearInterval(typingRef.current);
      }
    }, 45);
  };

  const startErasing = () => {
    clearInterval(typingRef.current);
    typingRef.current = setInterval(() => {
      currentLengthRef.current--;
      setTypedName(fullName.slice(0, currentLengthRef.current));
      if (currentLengthRef.current <= 0) {
        clearInterval(typingRef.current);
        setShowProfile(false);
      }
    }, 30);
  };

  const handleMouseEnter = () => {
    isHovered.current = true;
    setShowProfile(true);
    startTyping();
  };

  const handleMouseLeave = () => {
    isHovered.current = false;
    startErasing();
  };

  const profileSummary = {
    pt: {
      role: 'Estagiário Global de Cibersegurança',
      company: 'Anglo American',
      education: 'Eng. de Software – PUC Minas',
      location: 'Belo Horizonte, MG',
      bio: 'Estudante apaixonado por cibersegurança, desenvolvimento de software e inovação tecnológica. Fluente em inglês (C2).',
    },
    en: {
      role: 'Global Cybersecurity Intern',
      company: 'Anglo American',
      education: 'Software Engineering – PUC Minas',
      location: 'Belo Horizonte, MG',
      bio: 'Student passionate about cybersecurity, software development and technological innovation. Fluent in English (C2).',
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
      setScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => setNav(!nav);

  const links = language === 'en' 
    ? [
        { id: 1, link: 'about', name: 'About Me' },
        { id: 2, link: 'projects', name: 'Projects' },
        { id: 3, link: 'experience', name: 'Experience' },
        { id: 4, link: 'certifications', name: 'Certifications' },
        { id: 5, link: 'contact', name: 'Contact' },
      ]
    : [
        { id: 1, link: 'about', name: 'Sobre Mim' },
        { id: 2, link: 'projects', name: 'Projetos' },
        { id: 3, link: 'experience', name: 'Experiências' },
        { id: 4, link: 'certifications', name: 'Certificações' },
        { id: 5, link: 'contact', name: 'Contato' },
      ];

  return (
    <nav
      className="fixed top-0 left-0 z-50 transition-all duration-300"
      style={{
        width: 'calc(100% - (100vw - 100%))',
        backgroundColor: '#05111f',
        borderBottom: scrolled ? '1px solid rgba(0, 229, 255, 0.25)' : '1px solid rgba(0, 229, 255, 0.06)',
        boxShadow: scrolled ? '0 2px 24px rgba(0, 0, 0, 0.8)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div
            className="relative flex items-center gap-3 cursor-pointer select-none"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* FGF SVG Logo */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="40" height="40" className="logo-fgf flex-shrink-0">
              <rect width="64" height="64" rx="12" fill="#0b1f3a"/>
              <rect x="2" y="2" width="60" height="60" rx="10" fill="none" stroke="#00e5ff" strokeWidth="2"/>
              <text
                x="32" y="44"
                textAnchor="middle"
                fontFamily="monospace"
                fontSize="22"
                fontWeight="bold"
                letterSpacing="1"
                fill="#00e5ff"
              >FGF</text>
            </svg>

            {/* Typed name */}
            {typedName && (
              <span className="text-xl font-bold whitespace-nowrap overflow-hidden">
                <span className="text-white">{typedName.slice(0, 6)}</span>
                <span className="text-accent-green">{typedName.slice(6)}</span>
                <span className="inline-block w-0.5 h-5 bg-accent-green ml-0.5 align-middle animate-pulse" />
              </span>
            )}

            {showProfile && (
              <div className="absolute top-full left-0 mt-3 w-72 bg-[#05111f] border border-accent-green/40 rounded-xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.7)] z-50 pointer-events-none">
                {/* Arrow */}
                <span className="absolute -top-2 left-6 border-4 border-transparent border-b-accent-green/40"></span>
                {/* Photo + name */}
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="/foto-perfil.jpg"
                    alt="Felipe"
                    className="w-12 h-12 rounded-full object-cover border-2 border-accent-green"
                  />
                  <div>
                    <p className="text-white font-bold text-sm leading-tight">Felipe Giannetti Fontenelle</p>
                    <p className="text-accent-green text-[11px] font-semibold">{profileSummary[language].role}</p>
                    <p className="text-gray-400 text-[11px]">{profileSummary[language].company}</p>
                  </div>
                </div>
                {/* Info */}
                <div className="flex flex-col gap-1.5 mb-3 border-t border-gray-700 pt-2">
                  <span className="flex items-center gap-2 text-gray-300 text-xs">
                    <FaGraduationCap className="text-accent-green flex-shrink-0" size={11} />
                    {profileSummary[language].education}
                  </span>
                  <span className="flex items-center gap-2 text-gray-300 text-xs">
                    <FaMapMarkerAlt className="text-accent-green flex-shrink-0" size={11} />
                    {profileSummary[language].location}
                  </span>
                </div>
                <p className="text-gray-400 text-[11px] leading-relaxed border-t border-gray-700 pt-2">
                  {profileSummary[language].bio}
                </p>
              </div>
            )}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {links.map(({ id, link, name }) => (
                <li key={id}>
                  <a
                    href={`#${link}`}
                    className="text-white hover:text-accent-green transition-colors duration-300 text-base font-medium"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>

            {/* CV Button */}
            <button
              onClick={() => setShowCurriculo(true)}
              className="flex items-center gap-2 bg-accent-green text-primary-dark px-4 py-2 rounded-lg font-semibold hover:bg-white transition-colors"
            >
              <FaFileAlt size={16} />
              {language === 'en' ? 'CV' : 'CV'}
            </button>

            {/* Language Toggle */}
            <div className="inline-flex rounded-lg overflow-hidden border-2 border-accent-green">
              <button
                onClick={() => setLanguage('en')}
                className={`px-4 py-2 font-semibold transition-colors ${
                  language === 'en'
                    ? 'bg-accent-green text-primary-dark'
                    : 'bg-transparent text-accent-green hover:bg-primary-dark'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('pt')}
                className={`px-4 py-2 font-semibold transition-colors ${
                  language === 'pt'
                    ? 'bg-accent-green text-primary-dark'
                    : 'bg-transparent text-accent-green hover:bg-primary-dark'
                }`}
              >
                PT
              </button>
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <div onClick={handleClick} className="md:hidden cursor-pointer z-10 text-white">
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>

          {/* Mobile Menu */}
          {nav && (
            <ul className="absolute top-0 left-0 w-full h-screen bg-primary-blue flex flex-col justify-center items-center">
              {links.map(({ id, link, name }) => (
                <li key={id} className="py-6 text-3xl">
                  <a
                    href={`#${link}`}
                    onClick={handleClick}
                    className="text-white hover:text-accent-green transition-colors duration-300"
                  >
                    {name}
                  </a>
                </li>
              ))}
              {/* CV Button Mobile */}
              <li className="py-6">
                <button
                  onClick={() => {
                    setShowCurriculo(true);
                    handleClick();
                  }}
                  className="flex items-center gap-2 bg-accent-green text-primary-dark px-4 py-2 rounded-lg font-semibold text-lg hover:bg-white transition-colors"
                >
                  <FaFileAlt size={18} />
                  {language === 'en' ? 'CV' : 'CV'}
                </button>
              </li>
              {/* Language Toggle Mobile */}
              <li className="py-6">
                <div className="inline-flex rounded-lg overflow-hidden border-2 border-accent-green">
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-4 py-2 font-semibold transition-colors ${
                      language === 'en'
                        ? 'bg-accent-green text-primary-dark'
                        : 'bg-transparent text-accent-green hover:bg-primary-dark'
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setLanguage('pt')}
                    className={`px-4 py-2 font-semibold transition-colors ${
                      language === 'pt'
                        ? 'bg-accent-green text-primary-dark'
                        : 'bg-transparent text-accent-green hover:bg-primary-dark'
                    }`}
                  >
                    PT
                  </button>
                </div>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
