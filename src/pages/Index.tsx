import React from 'react';
import Hero from '../components/Hero';
import TechImage from '../components/TechImage';
import About from '../components/About';
import WebDev from '../components/WebDev';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import WorkApproach from '../components/WorkApproach';

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-tt-norms">
      <Hero />
      <TechImage />
      <div className="relative z-10 bg-white">
        <About />
        <WebDev />
        <WorkApproach />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
