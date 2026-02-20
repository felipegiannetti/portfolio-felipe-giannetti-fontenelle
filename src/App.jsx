import React, { useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  const [language, setLanguage] = useState('pt');
  const [showCurriculo, setShowCurriculo] = useState(false);

  return (
    <div className="bg-primary-dark text-white">
      <Navbar language={language} setLanguage={setLanguage} setShowCurriculo={setShowCurriculo} />
      <main>
        <About language={language} showCurriculo={showCurriculo} setShowCurriculo={setShowCurriculo} />
        <Projects language={language} />
        <Experience language={language} />
        <Certifications language={language} />
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
