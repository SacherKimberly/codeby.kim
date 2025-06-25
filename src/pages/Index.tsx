
import React, { useState } from 'react';
import NameAnimation from '../components/NameAnimation';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Index = () => {
  const [showNameAnimation, setShowNameAnimation] = useState(true);

  const handleAnimationComplete = () => {
    setShowNameAnimation(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {showNameAnimation && (
        <NameAnimation onComplete={handleAnimationComplete} />
      )}
      
      {!showNameAnimation && (
        <>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </>
      )}
    </div>
  );
};

export default Index;
