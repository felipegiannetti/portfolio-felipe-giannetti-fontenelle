import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ language, setLanguage }) => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => setNav(!nav);

  const links = language === 'en' 
    ? [
        { id: 1, link: 'about', name: 'About Me' },
        { id: 2, link: 'projects', name: 'Projects' },
        { id: 3, link: 'experience', name: 'Experience' },
        { id: 4, link: 'contact', name: 'Contact' },
      ]
    : [
        { id: 1, link: 'about', name: 'Sobre Mim' },
        { id: 2, link: 'projects', name: 'Projetos' },
        { id: 3, link: 'experience', name: 'Experiências' },
        { id: 4, link: 'contact', name: 'Contato' },
      ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary-blue shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="text-white">Meu</span>
            <span className="text-accent-green">Portfólio</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {links.map(({ id, link, name }) => (
                <li key={id}>
                  <a
                    href={`#${link}`}
                    className="text-white hover:text-accent-green transition-colors duration-300 text-lg font-medium"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Language Toggle */}
            <div className="inline-flex rounded-lg overflow-hidden border-2 border-accent-green">
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
              {/* Language Toggle Mobile */}
              <li className="py-6">
                <div className="inline-flex rounded-lg overflow-hidden border-2 border-accent-green">
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
