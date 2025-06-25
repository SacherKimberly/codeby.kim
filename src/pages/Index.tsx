
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
