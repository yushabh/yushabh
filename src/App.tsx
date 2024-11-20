import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/main.scss';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
