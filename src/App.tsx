import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative">
      {/* Global Parallax Background - Only for Hero */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Subtle global background tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/20 via-white/40 to-slate-50/30" />
      </div>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;