
import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Eingangsanimation Sequenz
    const enterTimer = setTimeout(() => setIsVisible(true), 300);
    const contentTimer = setTimeout(() => setShowContent(true), 800);
    
    return () => {
      clearTimeout(enterTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animierter Hintergrund mit geometrischen Formen */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-orange-900 to-red-900">
        <div className={`absolute inset-0 transition-all duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-32 right-32 w-48 h-48 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full blur-2xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-amber-300/30 to-orange-300/30 rounded-full blur-lg animate-pulse delay-300"></div>
        </div>
      </div>
      
      {/* Inhalt */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className={`transform transition-all duration-1000 ease-out ${
          showContent 
            ? 'translate-y-0 opacity-100 scale-100' 
            : 'translate-y-8 opacity-0 scale-95'
        }`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Kim Sacher
          </h1>
        </div>
        
        <div className={`transform transition-all duration-1000 ease-out delay-300 ${
          showContent 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-8 opacity-0'
        }`}>
          <p className="text-xl md:text-2xl text-amber-100 mb-8 font-light">
            Kreativer Entwickler & Designer
          </p>
        </div>
        
        <div className={`transform transition-all duration-1000 ease-out delay-500 ${
          showContent 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-8 opacity-0'
        }`}>
          <p className="text-lg text-amber-200 max-w-2xl mx-auto leading-relaxed">
            Entwicklung schöner digitaler Erlebnisse mit modernen Web-Technologien. 
            Leidenschaftlich für sauberen Code, beeindruckendes Design und benutzerorientierte Lösungen.
          </p>
        </div>
      </div>
      
      {/* Scroll-Indikator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
        showContent 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-8 opacity-0'
      }`}>
        <ChevronDown className="w-6 h-6 text-amber-300 animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
