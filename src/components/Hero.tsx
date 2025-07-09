
import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showInitialAnimation, setShowInitialAnimation] = useState(true);

  useEffect(() => {
    // Initial loading animation
    const initialTimer = setTimeout(() => setShowInitialAnimation(false), 2000);
    const enterTimer = setTimeout(() => setIsVisible(true), 2200);
    const contentTimer = setTimeout(() => setShowContent(true), 2800);
    
    return () => {
      clearTimeout(initialTimer);
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
    <>
      {/* Initial Loading Animation */}
      <div className={`fixed inset-0 z-50 bg-gray-900 flex items-center justify-center transition-all duration-1000 ${
        showInitialAnimation ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="text-center">
          <div className="text-6xl md:text-8xl font-light mb-4 font-tt-norms tracking-wide text-white">
            <span className="inline-block animate-slideInFromLeft">CODIFY</span>
            <span className="text-blue-400">.</span>
            <span className="inline-block animate-slideInFromRight animation-delay-300">KIM</span>
          </div>
          <div className="w-64 h-1 bg-gray-700 mx-auto">
            <div className="h-full bg-blue-400 animate-loadingBar"></div>
          </div>
        </div>
      </div>

      <section className="min-h-screen flex items-center justify-between relative overflow-hidden px-8 md:px-16 lg:px-24 max-w-7xl mx-auto bg-gray-900">
        {/* Dark animated background elements */}
        <div className="absolute inset-0 bg-gray-900">
          <div className={`absolute inset-0 transition-all duration-2000 ease-out ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          }`}>
            {/* Glowing geometric shapes */}
            <div className="absolute top-20 left-20 w-40 h-40 blur-3xl animate-pulse" 
                 style={{
                   backgroundColor: '#3B82F6', 
                   opacity: 0.3,
                   animation: 'float 6s ease-in-out infinite, pulse 4s ease-in-out infinite'
                 }}></div>
            <div className="absolute bottom-32 right-32 w-56 h-56 blur-3xl animate-pulse delay-700" 
                 style={{
                   backgroundColor: '#1E40AF', 
                   opacity: 0.2,
                   animation: 'float 8s ease-in-out infinite reverse, pulse 6s ease-in-out infinite'
                 }}></div>
            <div className="absolute top-1/2 left-1/3 w-32 h-32 blur-2xl animate-pulse delay-300" 
                 style={{
                   backgroundColor: '#60A5FA', 
                   opacity: 0.4,
                   animation: 'float 7s ease-in-out infinite, pulse 5s ease-in-out infinite'
                 }}></div>
            
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-10" 
                 style={{
                   backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
                   backgroundSize: '50px 50px'
                 }}></div>
          </div>
        </div>
        
        {/* Main content */}
        <div className="relative z-10 flex-1 max-w-4xl">
          <div className={`transform transition-all duration-1200 ease-out ${
            showContent 
              ? 'translate-y-0 opacity-100 scale-100' 
              : 'translate-y-12 opacity-0 scale-95'
          }`}>
            {/* Domain branding */}
            <div className="mb-6">
              <span className="text-lg md:text-xl font-light font-tt-norms tracking-widest text-blue-400 animate-fadeInUp">
                CODIFY.KIM
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-light mb-8 font-tt-norms tracking-wide hover:scale-105 transition-transform duration-300 text-white">
              <span className="inline-block animate-slideInFromLeft">KIM</span><br/>
              <span className="inline-block animate-slideInFromRight animation-delay-300">SACHER</span>
            </h1>
          </div>
          
          <div className={`transform transition-all duration-1200 ease-out delay-400 ${
            showContent 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-12 opacity-0'
          }`}>
            <p className="text-xl md:text-2xl mb-12 font-light tracking-widest font-tt-norms animate-fadeInUp animation-delay-600 text-gray-300">
              KREATIVER ENTWICKLER & DESIGNER
            </p>
          </div>
          
          <div className={`transform transition-all duration-1200 ease-out delay-600 ${
            showContent 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-12 opacity-0'
          }`}>
            <p className="text-lg max-w-xl leading-relaxed font-light font-tt-norms mb-12 animate-fadeInUp animation-delay-800 text-gray-400">
              Entwicklung schöner digitaler Erlebnisse mit modernen Web-Technologien. 
              Leidenschaftlich für sauberen Code, beeindruckendes Design und benutzerorientierte Lösungen.
            </p>
            
            <button 
              onClick={scrollToContact}
              className="px-8 py-4 bg-blue-600 text-white font-light font-tt-norms tracking-wider hover:bg-blue-700 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 animate-fadeInUp animation-delay-1000"
            >
              KONTAKT
            </button>
          </div>
        </div>
        
        {/* Animated scroll indicator */}
        <div className={`absolute bottom-8 left-8 md:left-16 lg:left-24 transition-all duration-1200 delay-1200 ${
          showContent 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-8 opacity-0'
        }`}>
          <ChevronDown className="w-6 h-6 animate-bounce text-blue-400" />
        </div>
        
        {/* Custom CSS for animations */}
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
          
          @keyframes loadingBar {
            0% { width: 0%; }
            100% { width: 100%; }
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
          
          .animate-loadingBar {
            animation: loadingBar 1.5s ease-in-out;
          }
          
          .animation-delay-300 { animation-delay: 0.3s; }
          .animation-delay-600 { animation-delay: 0.6s; }
          .animation-delay-800 { animation-delay: 0.8s; }
          .animation-delay-1000 { animation-delay: 1s; }
        `}</style>
      </section>
    </>
  );
};

export default Hero;
