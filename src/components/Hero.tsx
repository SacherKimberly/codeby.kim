
import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient with warm colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/20 to-red-900/20 animate-pulse"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className={`transform transition-all duration-1000 ease-out ${
          isVisible 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-12 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Kim Sacher
          </h1>
        </div>
        
        <div className={`transform transition-all duration-1000 ease-out delay-300 ${
          isVisible 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-12 opacity-0'
        }`}>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 font-light">
            Creative Developer & Designer
          </p>
        </div>
        
        <div className={`transform transition-all duration-1000 ease-out delay-500 ${
          isVisible 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-12 opacity-0'
        }`}>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Crafting beautiful digital experiences with modern web technologies. 
            Passionate about clean code, stunning design, and user-centered solutions.
          </p>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-12 opacity-0'
      }`}>
        <ChevronDown className="w-6 h-6 text-slate-400 animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
