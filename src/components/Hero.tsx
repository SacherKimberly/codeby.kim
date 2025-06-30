
import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const enterTimer = setTimeout(() => setIsVisible(true), 300);
    const contentTimer = setTimeout(() => setShowContent(true), 800);
    
    return () => {
      clearTimeout(enterTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-between relative overflow-hidden px-8 md:px-16 lg:px-24 max-w-7xl mx-auto" style={{backgroundColor: '#F7F6F3'}}>
      {/* Animierter Hintergrund mit geometrischen Formen */}
      <div className="absolute inset-0" style={{backgroundColor: '#F7F6F3'}}>
        <div className={`absolute inset-0 transition-all duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          {/* Große dezente Kreise */}
          <div className="absolute top-20 left-20 w-40 h-40 rounded-full blur-3xl animate-pulse" style={{backgroundColor: '#E4E2DD', opacity: 0.6}}></div>
          <div className="absolute bottom-32 right-32 w-56 h-56 rounded-full blur-3xl animate-pulse delay-700" style={{backgroundColor: '#D8D5CE', opacity: 0.4}}></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full blur-2xl animate-pulse delay-300" style={{backgroundColor: '#E4E2DD', opacity: 0.5}}></div>
          
          {/* Zusätzliche dynamische Elemente */}
          <div className="absolute top-1/4 right-1/4 w-24 h-24 rounded-full blur-xl animate-pulse delay-500" style={{backgroundColor: '#CCC7BC', opacity: 0.3}}></div>
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full blur-3xl animate-pulse delay-1000" style={{backgroundColor: '#E4E2DD', opacity: 0.3}}></div>
          
          {/* Subtile geometrische Formen */}
          <div className="absolute top-12 right-12 w-16 h-16 rotate-45 blur-sm animate-pulse delay-200" style={{backgroundColor: '#D8D5CE', opacity: 0.4}}></div>
          <div className="absolute bottom-12 left-12 w-20 h-20 rotate-12 blur-sm animate-pulse delay-800" style={{backgroundColor: '#CCC7BC', opacity: 0.3}}></div>
        </div>
      </div>
      
      {/* Hauptinhalt */}
      <div className="relative z-10 flex-1 max-w-4xl">
        <div className={`transform transition-all duration-1000 ease-out ${
          showContent 
            ? 'translate-y-0 opacity-100 scale-100' 
            : 'translate-y-8 opacity-0 scale-95'
        }`}>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light mb-8 font-tt-norms tracking-wide" style={{color: '#262525'}}>
            KIM<br/>SACHER
          </h1>
        </div>
        
        <div className={`transform transition-all duration-1000 ease-out delay-300 ${
          showContent 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-8 opacity-0'
        }`}>
          <p className="text-xl md:text-2xl mb-12 font-light tracking-widest font-tt-norms" style={{color: '#262525'}}>
            KREATIVER ENTWICKLER & DESIGNER
          </p>
        </div>
        
        <div className={`transform transition-all duration-1000 ease-out delay-500 ${
          showContent 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-8 opacity-0'
        }`}>
          <p className="text-lg max-w-xl leading-relaxed font-light font-tt-norms mb-12" style={{color: '#262525'}}>
            Entwicklung schöner digitaler Erlebnisse mit modernen Web-Technologien. 
            Leidenschaftlich für sauberen Code, beeindruckendes Design und benutzerorientierte Lösungen.
          </p>
          
          <button 
            onClick={scrollToContact}
            className="px-8 py-4 text-white font-light font-tt-norms tracking-wider hover:bg-gray-700 transition-all duration-300" 
            style={{backgroundColor: '#262525'}}
          >
            KONTAKT
          </button>
        </div>
      </div>
      
      {/* Scroll-Indikator */}
      <div className={`absolute bottom-8 left-8 md:left-16 lg:left-24 transition-all duration-1000 delay-1000 ${
        showContent 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-8 opacity-0'
      }`}>
        <ChevronDown className="w-6 h-6 animate-bounce" style={{color: '#262525'}} />
      </div>
    </section>
  );
};

export default Hero;
