
import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const enterTimer = setTimeout(() => setIsVisible(true), 100);
    const contentTimer = setTimeout(() => setShowContent(true), 600);
    
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
      {/* Erweiterte animierte Hintergrund-Elemente */}
      <div className="absolute inset-0" style={{backgroundColor: '#F7F6F3'}}>
        <div className={`absolute inset-0 transition-all duration-2000 ease-out ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
        }`}>
          {/* Dynamische geometrische Formen mit komplexeren Animationen */}
          <div className="absolute top-20 left-20 w-40 h-40 blur-3xl animate-pulse" 
               style={{
                 backgroundColor: '#E4E2DD', 
                 opacity: 0.6,
                 animation: 'float 6s ease-in-out infinite, pulse 4s ease-in-out infinite'
               }}></div>
          <div className="absolute bottom-32 right-32 w-56 h-56 blur-3xl animate-pulse delay-700" 
               style={{
                 backgroundColor: '#D8D5CE', 
                 opacity: 0.4,
                 animation: 'float 8s ease-in-out infinite reverse, pulse 6s ease-in-out infinite'
               }}></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 blur-2xl animate-pulse delay-300" 
               style={{
                 backgroundColor: '#E4E2DD', 
                 opacity: 0.5,
                 animation: 'float 7s ease-in-out infinite, pulse 5s ease-in-out infinite'
               }}></div>
          
          {/* Zusätzliche schwebende Elemente */}
          <div className="absolute top-1/4 right-1/4 w-24 h-24 blur-xl animate-pulse delay-500" 
               style={{
                 backgroundColor: '#CCC7BC', 
                 opacity: 0.3,
                 animation: 'float 5s ease-in-out infinite, pulse 3s ease-in-out infinite'
               }}></div>
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 blur-3xl animate-pulse delay-1000" 
               style={{
                 backgroundColor: '#E4E2DD', 
                 opacity: 0.3,
                 animation: 'float 9s ease-in-out infinite reverse, pulse 7s ease-in-out infinite'
               }}></div>
        </div>
      </div>
      
      {/* Hauptinhalt mit erweiterten Animationen */}
      <div className="relative z-10 flex-1 max-w-4xl">
        <div className={`transform transition-all duration-1200 ease-out ${
          showContent 
            ? 'translate-y-0 opacity-100 scale-100' 
            : 'translate-y-12 opacity-0 scale-95'
        }`}>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light mb-8 font-tt-norms tracking-wide hover:scale-105 transition-transform duration-300" style={{color: '#262525'}}>
            <span className="inline-block animate-slideInFromLeft">KIM</span><br/>
            <span className="inline-block animate-slideInFromRight animation-delay-300">SACHER</span>
          </h1>
        </div>
        
        <div className={`transform transition-all duration-1200 ease-out delay-400 ${
          showContent 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-12 opacity-0'
        }`}>
          <p className="text-xl md:text-2xl mb-12 font-light tracking-widest font-tt-norms animate-fadeInUp animation-delay-600" style={{color: '#262525'}}>
            KREATIVER ENTWICKLER & DESIGNER
          </p>
        </div>
        
        <div className={`transform transition-all duration-1200 ease-out delay-600 ${
          showContent 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-12 opacity-0'
        }`}>
          <p className="text-lg max-w-xl leading-relaxed font-light font-tt-norms mb-12 animate-fadeInUp animation-delay-800" style={{color: '#262525'}}>
            Entwicklung schöner digitaler Erlebnisse mit modernen Web-Technologien. 
            Leidenschaftlich für sauberen Code, beeindruckendes Design und benutzerorientierte Lösungen.
          </p>
          
          <button 
            onClick={scrollToContact}
            className="px-8 py-4 text-white font-light font-tt-norms tracking-wider hover:bg-gray-700 hover:scale-105 hover:shadow-lg transition-all duration-300 animate-fadeInUp animation-delay-1000" 
            style={{backgroundColor: '#262525'}}
          >
            KONTAKT
          </button>
        </div>
      </div>
      
      {/* Animierter Scroll-Indikator */}
      <div className={`absolute bottom-8 left-8 md:left-16 lg:left-24 transition-all duration-1200 delay-1200 ${
        showContent 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-8 opacity-0'
      }`}>
        <ChevronDown className="w-6 h-6 animate-bounce" style={{color: '#262525'}} />
      </div>
      
      {/* Custom CSS für zusätzliche Animationen */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes slideInFromLeft {
          0% { transform: translateX(-100px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideInFromRight {
          0% { transform: translateX(100px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes fadeInUp {
          0% { transform: translateY(30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        .animate-slideInFromLeft {
          animation: slideInFromLeft 1s ease-out;
        }
        
        .animate-slideInFromRight {
          animation: slideInFromRight 1s ease-out;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }
        
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-800 { animation-delay: 0.8s; }
        .animation-delay-1000 { animation-delay: 1s; }
      `}</style>
    </section>
  );
};

export default Hero;
