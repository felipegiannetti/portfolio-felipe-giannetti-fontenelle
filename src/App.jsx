import React, { useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  const [language, setLanguage] = useState('pt');

  return (
    <div className="bg-primary-dark text-white">
      <Navbar language={language} setLanguage={setLanguage} />
      <main>
        <About language={language} />
        <Projects language={language} />
        <Experience language={language} />
        <Contact language={language} />
      </main>
      <footer className="bg-primary-blue py-6 text-center">
        <p className="text-gray-300">
          © 2026 - {language === 'en' ? 'All rights reserved' : 'Todos os direitos reservados'}
        </p>
      </footer>
    </div>
  );
}

export default App;
