
import React from 'react';
import Hero from '../components/Hero';
import TechImage from '../components/TechImage';
import About from '../components/About';
import WebDev from '../components/WebDev';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import WorkApproach from '../components/WorkApproach';
import Career from '../components/Career';
import ScrollIndicator from '../components/ScrollIndicator';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-tt-norms">
      <Hero />
      <TechImage />
      <div className="relative z-10">
        {/* Section with subtle border and background variation */}
        <div className="bg-card border-t border-border">
          <About />
        </div>
        <div className="bg-background border-t border-border">
          <WebDev />
        </div>
        <div className="bg-card border-t border-border">
          <Career />
        </div>
        <div className="bg-background border-t border-border">
          <WorkApproach />
        </div>
        <div className="bg-card border-t border-border">
          <Skills />
        </div>
        <div className="bg-background border-t border-border">
          <Projects />
        </div>
        <div className="bg-card border-t border-border">
          <Contact />
        </div>
      </div>
      <ScrollIndicator />
    </div>
  );
};

export default Index;
