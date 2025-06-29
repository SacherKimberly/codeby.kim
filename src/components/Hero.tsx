
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

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-white">
      {/* Animierter Hintergrund mit geometrischen Formen */}
      <div className="absolute inset-0 bg-white">
        <div className={`absolute inset-0 transition-all duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute top-20 left-20 w-32 h-32 bg-gray-100 rounded-full blur-xl animate-pulse" style={{backgroundColor: '#E4E2DD'}}></div>
          <div className="absolute bottom-32 right-32 w-48 h-48 bg-gray-200 rounded-full blur-2xl animate-pulse delay-700" style={{backgroundColor: '#E4E2DD'}}></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gray-100 rounded-full blur-lg animate-pulse delay-300" style={{backgroundColor: '#E4E2DD'}}></div>
        </div>
      </div>
      
      {/* Inhalt - Links ausgerichtet */}
      <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-6xl">
        <div className={`transform transition-all duration-1000 ease-out ${
          showContent 
            ? 'translate-y-0 opacity-100 scale-100' 
            : 'translate-y-8 opacity-0 scale-95'
        }`}>
          <h1 className="text-5xl md:text-7xl font-light mb-6 font-tt-norms tracking-wide" style={{color: '#262525'}}>
            KIM SACHER
          </h1>
        </div>
        
        <div className={`transform transition-all duration-1000 ease-out delay-300 ${
          showContent 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-8 opacity-0'
        }`}>
          <p className="text-xl md:text-2xl mb-8 font-light uppercase tracking-widest font-tt-norms" style={{color: '#262525'}}>
            KREATIVER ENTWICKLER & DESIGNER
          </p>
        </div>
        
        <div className={`transform transition-all duration-1000 ease-out delay-500 ${
          showContent 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-8 opacity-0'
        }`}>
          <p className="text-lg max-w-2xl leading-relaxed font-light font-tt-norms" style={{color: '#262525'}}>
            ENTWICKLUNG SCHÖNER DIGITALER ERLEBNISSE MIT MODERNEN WEB-TECHNOLOGIEN. 
            LEIDENSCHAFTLICH FÜR SAUBEREN CODE, BEEINDRUCKENDES DESIGN UND BENUTZERORIENTIERTE LÖSUNGEN.
          </p>
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
